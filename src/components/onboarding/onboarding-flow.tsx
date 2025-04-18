"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { CheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

import { cn } from "@/lib/utils";
import { OwnerInfoForm } from "./owner-info-form";
import { CompanyInfoForm } from "./company-info-form";
import { SubscriptionPlanForm } from "./subscription-plan-form";

// Define the schema for all steps
const formSchema = z.object({
  // Owner Info
  ownerName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  ownerEmail: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  ownerPhone: z
    .string()
    .min(10, { message: "Please enter a valid phone number" }),

  // Company Info
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters" }),
  companyOwnerName: z
    .string()
    .min(2, { message: "Owner name must be at least 2 characters" }),
  companyAddress: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  gstCategory: z.string().min(1, { message: "Please select a GST category" }),
  gstin: z.string().optional(),
  companyEmail: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  companyPhone: z
    .string()
    .min(10, { message: "Please enter a valid phone number" }),

  // Subscription Plan
  subscriptionPlan: z
    .string()
    .min(1, { message: "Please select a subscription plan" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const steps = [
    {
      step: 1,
      title: "Owner Info",
      description: "Personal details",
    },
    {
      step: 2,
      title: "Company Info",
      description: "Business details",
    },
    {
      step: 3,
      title: "Subscription",
      description: "Choose your plan",
    },
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownerName: "",
      ownerEmail: "",
      ownerPhone: "",
      companyName: "",
      companyOwnerName: "",
      companyAddress: "",
      gstCategory: "",
      gstin: "",
      companyEmail: "",
      companyPhone: "",
      subscriptionPlan: "",
    },
    mode: "onChange",
  });

  const { trigger, getValues } = form;

  const validateStep = async () => {
    let fieldsToValidate: string[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["ownerName", "ownerEmail", "ownerPhone"];
        break;
      case 2:
        fieldsToValidate = [
          "companyName",
          "companyOwnerName",
          "companyAddress",
          "gstCategory",
          "companyEmail",
          "companyPhone",
        ];
        // GSTIN is conditionally required based on GST category
        if (getValues("gstCategory") !== "Unregistered") {
          fieldsToValidate.push("gstin");
        }
        break;
      case 3:
        fieldsToValidate = ["subscriptionPlan"];
        break;
    }

    const result = await trigger(fieldsToValidate as any);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateStep();
    if (isValid && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    alert("Onboarding completed successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 ">
        <h1 className="text-3xl font-bold text-center mb-6">
          Complete Your Onboarding
        </h1>

        {/* New Stepper Component */}
        <div className="w-full mb-8 flex justify-center">
          <Stepper value={step} className="w-full max-w-2xl ml-12">
            {steps.map(({ step: stepNum, title, description }) => (
              <StepperItem key={stepNum} step={stepNum} className="flex-1">
          <StepperTrigger className="flex-col gap-3 rounded">
            <StepperIndicator />
            <div className="space-y-0.5 text-center">
              <StepperTitle>{title}</StepperTitle>
              <StepperDescription className="max-sm:hidden">
                {description}
              </StepperDescription>
            </div>
          </StepperTrigger>
              </StepperItem>
            ))}
          </Stepper>
        </div>
      </div>

      <Card className="w-full max-w-4xl ">
        <CardHeader>
          <CardTitle>
            {step === 1
              ? "Owner Information"
              : step === 2
              ? "Company Information"
              : "Choose a Subscription Plan"}
          </CardTitle>
          <CardDescription>
            {step === 1
              ? "Please provide your personal details"
              : step === 2
              ? "Enter your company details"
              : "Select a subscription plan that fits your needs"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {step === 1 && <OwnerInfoForm form={form} />}
              {step === 2 && <CompanyInfoForm form={form} />}
              {step === 3 && <SubscriptionPlanForm form={form} />}
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter className="flex justify-between mt-2">
         {
          step > 1 && (
            <Button variant="outline" onClick={handleBack} className="w-full mr-2">
              Back
            </Button>
          )
         }
          <div className="w-full">
            {step < totalSteps ? (
              <Button className="w-full" onClick={handleNext}>Continue</Button>
            ) : (
              <Button onClick={form.handleSubmit(onSubmit)} className="w-full" type="submit">
                Complete Onboarding
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
