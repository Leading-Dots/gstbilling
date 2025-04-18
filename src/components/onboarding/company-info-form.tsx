import type { UseFormReturn } from "react-hook-form";
import React, { useEffect, useState } from "react";

import {
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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { Combobox } from "../ui/combobox";
interface CompanyInfoFormProps {
  form: UseFormReturn<any>;
}

export function CompanyInfoForm({ form }: CompanyInfoFormProps) {
  const gstCategory = form.watch("gstCategory");
  const [sameAsBilling, setSameAsBilling] = useState(true);

  const billingAddress = form.watch("billingAddress");

  // Update shipping address when billing address changes and sameAsBilling is true
  React.useEffect(() => {
    if (sameAsBilling) {
      form.setValue("shippingAddress", billingAddress);
    }
  }, [billingAddress, sameAsBilling, form]);

  // Reset GSTIN when category changes to Unregistered
  useEffect(() => {
    if (gstCategory === "Unregistered") {
      form.setValue("gstin", "");
    }
  }, [gstCategory, form]);

  const handleSameAsBillingChange = (checked: boolean) => {
    setSameAsBilling(checked);
    if (checked) {
      form.setValue("shippingAddress", billingAddress);
    } else {
      form.setValue("shippingAddress", "");
    }
  };

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Input placeholder="Acme Inc." {...field} />
            </FormControl>
            <FormDescription>
              Enter the registered name of your company.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="companyOwnerName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Primary Contact Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormDescription>
              Enter the name of the company owner or primary contact.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="companyEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="info@acmeinc.com" {...field} />
              </FormControl>
              <FormDescription>
                Enter the official email address for your company.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="9876543210"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your company's contact number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Combobox {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>PIN Code</FormLabel>
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
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

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
              Complete shipping address if different from billing address
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="gstCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GST Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select GST category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Regular">Regular Taxpayer</SelectItem>
                  <SelectItem value="Composition">
                    Composition Scheme
                  </SelectItem>
                  <SelectItem value="Unregistered">Unregistered</SelectItem>
                  <SelectItem value="Casual">Casual Taxable Person</SelectItem>
                  <SelectItem value="NonResident">
                    Non-Resident Taxable Person
                  </SelectItem>
                  <SelectItem value="ISD">
                    Input Service Distributor (ISD)
                  </SelectItem>
                  <SelectItem value="ECommerce">E-Commerce Operator</SelectItem>
                  <SelectItem value="TDS_TCS">
                    TDS/TCS Deductor or Collector
                  </SelectItem>
                  <SelectItem value="SEZ">SEZ Unit/Developer</SelectItem>
                  <SelectItem value="UIN">
                    UIN Holder (Embassy/UN Body)
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select your GST registration category.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {gstCategory && gstCategory !== "Unregistered" && (
          <FormField
            control={form.control}
            name="gstin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GSTIN</FormLabel>
                <FormControl>
                  <Input placeholder="22AAAAA0000A1Z5" {...field} />
                </FormControl>
                <FormDescription>
                  Enter your 15-digit GST Identification Number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>
    </div>
  );
}
