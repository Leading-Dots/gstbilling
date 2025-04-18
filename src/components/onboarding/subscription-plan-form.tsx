"use client"

import type { UseFormReturn } from "react-hook-form"
import { CheckIcon, Users } from "lucide-react"

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

interface SubscriptionPlanFormProps {
  form: UseFormReturn<any>
}

const plans = [
  {
    id: "starter",
    title: "Starter",
    description: "Perfect for small businesses just getting started.",
    cost: "$29/month",
    users: 5,
    features: ["Basic reporting", "Customer management", "Up to 5 team members"],
  },
  {
    id: "professional",
    title: "Professional",
    description: "Ideal for growing businesses with more advanced needs.",
    cost: "$79/month",
    users: 10,
    features: ["Advanced reporting", "Customer management", "Up to 10 team members", "Invoice customization"],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "For large organizations requiring comprehensive solutions.",
    cost: "$149/month",
    users: 25,
    features: [
      "Custom reporting",
      "Customer management",
      "Up to 25 team members",
      "Invoice customization",
      "API access",
      "Dedicated support",
    ],
  },
]

export function SubscriptionPlanForm({ form }: SubscriptionPlanFormProps) {
  return (
    <FormField
      control={form.control}
      name="subscriptionPlan"
      render={({ field }) => (
        <FormItem className="space-y-6">
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-4">
              {plans.map((plan) => (
                <div key={plan.id} className="relative">
                  <RadioGroupItem value={plan.id} id={plan.id} className="peer sr-only" />
                  <label
                    htmlFor={plan.id}
                    className={cn(
                      "flex flex-col md:flex-row items-start p-4 md:p-6 rounded-lg border-2 cursor-pointer transition-all",
                      "hover:border-primary hover:bg-muted",
                      "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring",
                      "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5",
                    )}
                  >
                    {field.value === plan.id && (
                      <div className="absolute top-4 right-4 h-5 w-5 text-primary">
                        <CheckIcon className="h-5 w-5" />
                      </div>
                    )}

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{plan.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{plan.description}</p>

                      <div className="mt-4 space-y-4">
                        <div className="flex items-baseline">
                          <span className="text-2xl font-bold">{plan.cost}</span>
                        </div>

                        <div className="flex items-center text-muted-foreground">
                          <Users className="mr-2 h-4 w-4" />
                          <span>Up to {plan.users} users</span>
                        </div>

                        <ul className="space-y-2 text-sm">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
