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
  const [copySuccess, setCopySuccess] = useState(false);

  // Initialize the form with default values
  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      name: "",
      email: "",
      department: "",
    },
  });

  // Generate random password
  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
    setCopySuccess(false);
  };

  // Generate password when component mounts
  useEffect(() => {
    generatePassword();
  }, []);

  // Copy password to clipboard
  const copyPasswordToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopySuccess(true);
      toast.success("Password copied to clipboard");
      
      // Reset copy success message after 3 seconds
      setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    } catch (err) {
      toast.error("Failed to copy password");
    }
  };

  // Form submission
  const onSubmit = async (data: EmployeeFormValues) => {
    try {
      // Here you would add the employee to your database with the data and generated password
      // For example: await addEmployee({ ...data, password })
      
      console.log("Employee data to submit:", { ...data, password });
      
      // Mock successful creation
      toast.success("Employee created successfully");
      router("/employees"); // Adjust this to your correct route
    } catch (error) {
      console.error("Error creating employee:", error);
      toast.error("Error creating employee");
    }
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Add New Employee</h2>
        <h3 className="text-sm text-muted-foreground">
          Fill in the details below to create a new employee account.
        </h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Employee Information</CardTitle>
              <CardDescription>
                Enter the details for the new employee
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name*</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address*</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} placeholder="john.doe@example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department*</FormLabel>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Password Generation */}
          <Card>
            <CardHeader>
              <CardTitle>Temporary Password</CardTitle>
              <CardDescription>
                A temporary password will be generated for the employee
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <FormLabel>Generated Password</FormLabel>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={generatePassword}
                    type="button"
                  >
                    <RefreshCcw className="h-4 w-4 mr-2" />
                    Regenerate
                  </Button>
                </div>
                
                <div className="flex space-x-2">
                  <Input 
                    value={password} 
                    readOnly 
                    className="font-mono bg-muted"
                  />
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={copyPasswordToClipboard}
                    type="button"
                  >
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                </div>
                
                <FormDescription>
                  {copySuccess 
                    ? "Password copied to clipboard!" 
                    : "This password will need to be changed on first login."}
                </FormDescription>
              </div>
              
              <div className="bg-muted rounded-md p-3 text-sm">
                <p>Security note: Please share this password securely with the employee.</p>
              </div>
            </CardContent>
          </Card>

          {/* Form Actions */}
          <div className="flex justify-end gap-4">
            <Button 
              variant="outline" 
              type="button" 
              onClick={() => router("/employees")}
            >
              Cancel
            </Button>
            <Button type="submit">
              Create Employee
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}