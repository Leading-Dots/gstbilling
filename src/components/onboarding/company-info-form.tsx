
import type { UseFormReturn } from "react-hook-form";
import { useEffect } from "react";

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

interface CompanyInfoFormProps {
  form: UseFormReturn<any>;
}

export function CompanyInfoForm({ form }: CompanyInfoFormProps) {
  const gstCategory = form.watch("gstCategory");

  // Reset GSTIN when category changes to Unregistered
  useEffect(() => {
    if (gstCategory === "Unregistered") {
      form.setValue("gstin", "");
    }
  }, [gstCategory, form]);

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
            <FormLabel>Owner Name</FormLabel>
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

      <FormField
        control={form.control}
        name="companyAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Address</FormLabel>
            <FormControl>
              <Textarea
                placeholder="123 Business Street, Suite 456, City, State, ZIP"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Enter the complete registered address of your company.
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
                <Input placeholder="+1 (555) 987-6543" {...field} />
              </FormControl>
              <FormDescription>
                Enter your company's contact number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
