"use client";

import type { UseFormReturn } from "react-hook-form";
import { CheckIcon, Users } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { getSubscriptionPlans } from "@/db/SubscriptionPlans";
import { SubscriptionPlan } from "@/API";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SubscriptionPlanFormProps {
  form: UseFormReturn<any>;
}

export function SubscriptionPlanForm({ form }: SubscriptionPlanFormProps) {
  const [loading, setLoading] = useState(true);
  const [subscriptionPlans, setSubscriptionPlans] = useState<
    SubscriptionPlan[]
  >([]);

  useEffect(() => {
    const fetchSubscriptionPlans = async () => {
      try {
        setLoading(true);
        const plans = await getSubscriptionPlans();
        //sort the plans by cost
        console.log(plans);
        plans.sort((a, b) => {
          return Number(a.cost) - Number(b.cost);
        });
      
        setSubscriptionPlans(plans);
      } catch (error) {
        console.error("Error fetching subscription plans", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptionPlans();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <FormField
      control={form.control}
      name="subscriptionPlan"
      render={({ field }) => (
        <FormItem className="space-y-6">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="space-y-4"
            >
              {subscriptionPlans.map((plan) => (
                <div key={plan.id} className="relative">
                  <RadioGroupItem
                    value={plan.id}
                    id={plan.id}
                    className="peer sr-only"
                  />
                  <label htmlFor={plan.id} className="block">
                    <Card
                      className={cn(
                        "cursor-pointer transition-all",
                        "hover:border-primary hover:bg-muted/50",
                        "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring",
                        "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5",
                        Number(plan.cost) === 0 ? "border-dashed" : ""
                      )}
                    >
                      <CardHeader className="pb-2">
                        {field.value === plan.id && (
                          <div className="absolute top-4 right-4 text-primary">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        )}

                        {Number(plan.cost) === 0 && (
                          <div className="absolute -top-3 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            Free Plan
                          </div>
                        )}
                        <CardTitle>{plan.title}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="pt-2 border-t">
                          <span className="text-xl font-bold">
                            {plan.isPaid ? `₹${plan.cost}` : null}
                          </span>
                          {Number(plan.cost) > 0 && (
                            <span className="text-muted-foreground ml-1 text-sm">
                              /month
                            </span>
                          )}
                        </div>

                        <div className="flex items-center text-muted-foreground bg-muted/50 p-2 rounded-md">
                          <Users className="mr-2 h-4 w-4 text-primary" />
                          <span>
                            {plan.users === 1
                              ? "Single user"
                              : `Up to ${plan.users} users`}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
