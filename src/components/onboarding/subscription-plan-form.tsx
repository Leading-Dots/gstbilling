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
              className="flex flex-col md:flex-row gap-6"
            >
              {subscriptionPlans.map((plan) => (
                <div key={plan.id} className="relative flex-1">
                  <RadioGroupItem
                    value={plan.id}
                    id={plan.id}
                    className="peer sr-only"
                  />
                  <label htmlFor={plan.id} className="block h-full">
                    <Card
                      className={cn(
                        "cursor-pointer transition-all h-full border-2",
                        "hover:border-primary hover:shadow-lg hover:translate-y-[-4px]",
                        "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring",
                        "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5",
                        Number(plan.cost) === 0 ? "border-dashed" : ""
                      )}
                    >
                      {field.value === plan.id && (
                        <div className="absolute top-0 right-0 bg-primary text-white p-1 rounded-bl-md">
                          <CheckIcon className="h-5 w-5" />
                        </div>
                      )}
                      
                      {Number(plan.cost) === 0 && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold shadow-sm">
                          FREE
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-xl">{plan.title}</CardTitle>
                        <CardDescription className="text-sm">{plan.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div className="text-center py-4">
                          <span className={cn("text-3xl font-bold", Number(plan.cost) === 0 ? "text-primary" : "")}>
                            {plan.isPaid ? `₹${plan.cost}` : "Free"}
                          </span>
                          {Number(plan.cost) > 0 && (
                            <span className="text-muted-foreground ml-1">
                              /month
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center bg-muted/30 p-3 rounded-lg">
                            <Users className="mr-3 h-5 w-5 text-primary" />
                            <span className="font-medium">
                              {plan.users === 1
                                ? "Single user"
                                : `${plan.users} team members`}
                            </span>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <div className={cn(
                            "w-full py-2 px-4 rounded-md text-center font-medium transition-colors",
                            field.value === plan.id 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted hover:bg-muted/80"
                          )}>
                            {field.value === plan.id ? "Selected" : "Select Plan"}
                          </div>
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
