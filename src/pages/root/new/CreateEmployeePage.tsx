"use client";

import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CopyIcon, RefreshCcw } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CreateCompanyEmployeeInput, EmployeeStatus } from "@/API";
import { useAuth } from "@/hooks/useAuth";
import {
  addCompanyEmployee,
  addEmployeeFromAdmin,
  createUser,
} from "@/db/Users";
import { showToast } from "@/lib/toast";

// Define the form schema
const employeeFormSchema = z.object({
  name: z.string().min(1, "Employee name is required"),
  email: z.string().email("Invalid email address"),
  department: z.string().min(1, "Department is required"),
});

type EmployeeFormValues = z.infer<typeof employeeFormSchema>;

// Sample departments - replace with your actual departments
const departments = [
  "Engineering",
  "Sales",
  "Marketing",
  "Finance",
  "Human Resources",
  "Operations",
  "Customer Support",
  "Administration",
];

export default function CreateEmployeePage() {
  const router = useNavigate();
  const [password, setPassword] = useState("");
  const { user } = useAuth();

  // Initialize the form with default values
  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      name: "",
      email: "",
      department: "",
    },
  });

  // Copy password to clipboard

  // Form submission
  const onSubmit = async (data: EmployeeFormValues) => {
    try {
      const employeeData: CreateCompanyEmployeeInput = {
        name: data.name,
        email: data.email,
        department: data.department,
        profile_status: EmployeeStatus.INVITED,
        adminID: user.id,
        companyID: user.company_id,
      };

      const newEmployee = await addEmployeeFromAdmin(employeeData);
      if (!newEmployee) {
        toast.error("Error creating employee");
        return;
      }

      showToast("Employee created successfully", "success");

      router("/employees"); // Adjust this to your correct route
    } catch (error) {
      console.error("Error creating employee:", error);
      toast.error("Error creating employee");
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full py-6 px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Add New Employee
          </h1>
          <p className="text-muted-foreground mt-1">
            Create a new employee account with the details below
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => router("/employees")}
          className="hidden md:flex"
        >
          Back to Employees
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Employee Information</CardTitle>
              <CardDescription>
                Enter the personal details for the new employee
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
                      </FormControl>
                      <FormDescription>
                        Enter employee's legal name
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          placeholder="john.doe@example.com"
                        />
                      </FormControl>
                      <FormDescription>
                        Will be used for login and communications
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Employee's primary department
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <Button type="submit" className="sm:order-2 order-1 w-full">
              Create Employee
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
