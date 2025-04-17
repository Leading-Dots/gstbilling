import React, { useEffect } from "react";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { Combobox } from "@/components/ui/combobox";
import { addCustomer, editCustomer, getCustomerById } from "@/db/Customers";
import { ProfileStatus } from "@/API";
import { updateCustomer } from "@/graphql/mutations";
import FormLoader from "@/components/loaders/FormLoader";

// Define the form schema
const customerFormSchema = z.object({
  customerName: z.string().min(1, "Customer name is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  gstin: z.string().min(15, "GSTIN must be 15 characters").max(15),
  panNumber: z.string().min(10, "PAN must be 10 characters").max(10).optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().min(6, "PIN code must be 6 digits").max(6),
  country: z.string().min(1, "Country is required"),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  creditLimit: z.coerce
    .number()
    .min(0, "Credit limit must be a positive number")
    .optional(),
  paymentTerms: z.string().optional(),
  notes: z.string().optional(),
  billingAddress: z.string().min(1, "Billing address is required"),
  shippingAddress: z.string().optional(),
  taxExempt: z.boolean(),
});

type CustomerFormValues = z.infer<typeof customerFormSchema>;

// List of Indian states

export default function EditCustomerPage() {
  const router = useNavigate();
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  // Initialize the form with default values
  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      customerName: "",
      contactPerson: "",
      email: "",
      phone: "",
      gstin: "",
      panNumber: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
      status: "ACTIVE",
      creditLimit: 0,
      paymentTerms: "Net 30",
      notes: "",
      billingAddress: "",
      shippingAddress: "",
      taxExempt: false,
    },
  });

  // Watch billing address to sync with shipping address if needed
  const billingAddress = form.watch("billingAddress");

  // Update shipping address when billing address changes and sameAsBilling is true
  React.useEffect(() => {
    if (sameAsBilling) {
      form.setValue("shippingAddress", billingAddress);
    }
  }, [billingAddress, sameAsBilling, form]);

  // Handle same as billing toggle
  const handleSameAsBillingChange = (checked: boolean) => {
    setSameAsBilling(checked);
    if (checked) {
      form.setValue("shippingAddress", form.getValues("billingAddress"));
    }
  };

  // Form submission
  const onSubmit = async (data: CustomerFormValues) => {
    try {
      const newCustomer = await editCustomer({
        id: params.id!!,
        customer_id: "Customer" + Math.floor(Math.random() * 10000),
        company_name: data.customerName,
        owner_name: data.contactPerson,
        email: data.email,
        phone: data.phone,
        gstin: data.gstin,
        pan_number: data.panNumber,
        billing_address: data.billingAddress,
        shipping_address: data.shippingAddress,
        city: data.city,
        country: data.country,
        state: data.state,
        pincode: data.pincode,
        customer_status: data.status as ProfileStatus,
        credit_limit: "0",
        outstanding_amount: 0,
      });
      if (newCustomer) {
        toast.success("Customer updated successfully");
        router("/customers");
      } else {
        toast.error("Failed to update customer");
      }
    } catch (error) {
      console.error("Error creating customer:", error);
      toast.error("Error creating customer");
    }
  };

  const fetchCustomer = async () => {
    try {
      setLoading(true);
      const customerData = await getCustomerById(params.id!!);
      if (customerData) {
        form.setValue("customerName", customerData.company_name);
        form.setValue("contactPerson", customerData.owner_name);
        form.setValue("email", customerData.email);
        form.setValue("phone", customerData.phone);
        form.setValue("gstin", customerData.gstin);
        form.setValue("panNumber", customerData.pan_number);
        form.setValue("billingAddress", customerData.billing_address);
        form.setValue("shippingAddress", customerData.shipping_address);
        form.setValue("city", customerData.city);
        form.setValue("country", customerData.country);
        form.setValue("state", customerData.state);
        form.setValue("pincode", customerData.pincode);
        form.setValue("status", customerData.customer_status as ProfileStatus);
      }
    } catch (error) {
      console.error("Error fetching customer:", error);
      toast.error("Error fetching customer");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  if (loading) {
    return <FormLoader />;
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Update Customer</h2>
        <h3 className="text-sm text-muted-foreground">
          Fill in the details below to update customer profile.
        </h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Enter the basic details for this customer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer/Company Name*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactPerson"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="gstin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GSTIN*</FormLabel>
                      <FormControl>
                        <Input {...field} maxLength={15} />
                      </FormControl>
                      <FormDescription>
                        15-character Goods and Services Tax Identification
                        Number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="panNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PAN Number</FormLabel>
                      <FormControl>
                        <Input maxLength={10} {...field} />
                      </FormControl>
                      <FormDescription>
                        10-character Permanent Account Number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ACTIVE">Active</SelectItem>
                          <SelectItem value="INACTIVE">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="taxExempt"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>Tax Exempt</FormLabel>
                        <FormDescription>
                          Is this customer exempt from taxes?
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Address Information */}
          <Card>
            <CardHeader>
              <CardTitle>Address Information</CardTitle>
              <CardDescription>
                Enter the address details for this customer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mt-2">
                      <FormLabel>State*</FormLabel>
                      <FormControl>
                        <Combobox {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PIN Code*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator className="my-4" />

              <FormField
                control={form.control}
                name="billingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Billing Address</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={3} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2">
                <Switch
                  id="same-as-billing"
                  checked={sameAsBilling}
                  onCheckedChange={handleSameAsBillingChange}
                />
                <label
                  htmlFor="same-as-billing"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Shipping address same as billing
                </label>
              </div>

              <FormField
                control={form.control}
                name="shippingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shipping Address</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={3} disabled={sameAsBilling} />
                    </FormControl>
                    <FormDescription>
                      Complete shipping address if different from billing
                      address
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Financial Information */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Information</CardTitle>
              <CardDescription>
                Enter financial details for this customer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="creditLimit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Credit Limit (₹)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Maximum credit amount for this customer (0 for no limit)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="paymentTerms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Terms</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment terms" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Due on Receipt">
                            Due on Receipt
                          </SelectItem>
                          <SelectItem value="Net 15">Net 15</SelectItem>
                          <SelectItem value="Net 30">Net 30</SelectItem>
                          <SelectItem value="Net 45">Net 45</SelectItem>
                          <SelectItem value="Net 60">Net 60</SelectItem>
                          <SelectItem value="Custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Standard payment terms for this customer
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>
                Any other details about this customer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={4} />
                    </FormControl>
                    <FormDescription>
                      Internal notes about this customer (not visible to the
                      customer)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Form Actions */}
          <div className="flex justify-end gap-4">
            <Button type="submit" className="w-full md:w-auto">
              Update Customer
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
