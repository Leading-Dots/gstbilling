"use client";

import type { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface OwnerInfoFormProps {
  form: UseFormReturn<any>;
}

export function OwnerInfoForm({ form }: OwnerInfoFormProps) {

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="ownerName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormDescription>
              Enter your full name as it appears on official documents.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="ownerEmail"
        render={({ field }) => (
          <FormItem className="hidden">
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="john.doe@example.com"
                {...field}
                disabled
              />
            </FormControl>
            <FormDescription>
              This email is fixed and will be used for account-related
              communications.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="ownerPhone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input
                placeholder="9876543210"
                maxLength={10}
                pattern="[0-9]{10}"
                inputMode="numeric"
                {...field}
              />
            </FormControl>
            <FormDescription>Enter your 10-digit phone number.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
