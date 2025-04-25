import { useEffect, useId, useState } from "react";
import { CheckIcon, RefreshCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getSubscriptionPlans } from "@/db/SubscriptionPlans";
import { SubscriptionPlan } from "@/API";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { changeAdminPlan } from "@/db/Users";
import { showToast } from "@/lib/toast";

export default function ChangePlanDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const id = useId();
  const { user, refreshUser } = useAuth();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [activePlan, setActivePlan] = useState<string | null>(
    user.subscriptionPlanID
  );

  const onDone = async () => {
    try {
      const updateAdmin = await changeAdminPlan(activePlan, user.id);
      if (updateAdmin) {
        setDialogOpen(false);

        await refreshUser();
        showToast("Subscription Plan updated", "success");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChangePlan = (plan: SubscriptionPlan) => {
    // Handle the plan change logic here
    setActivePlan(plan.id);
    console.log("Selected plan:", plan);
  };

  const fetchPlans = async () => {
    const plans = await getSubscriptionPlans();

    setPlans(plans);
    console.log("Fetched plans:", plans);
  };

  useEffect(() => {
    fetchPlans();
  }, []);
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col gap-3">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <RefreshCcwIcon className="opacity-80" size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left text-2xl">Change your plan</DialogTitle>
            <DialogDescription className="text-left text-lg" >
              Pick one of the following plans.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="flex flex-col gap-2">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative w-full ${
                  activePlan === plan.id ? "border-primary" : ""
                } cursor-pointer hover:bg-accent/50`}
                onClick={() => handleChangePlan(plan)}
              >
                <CardContent className="flex items-center gap-2 p-4">
                  <div className="grid grow gap-1">
                    <div className="font-medium">{plan.title}</div>
                    <p className="text-muted-foreground text-sm">
                      {plan.isPaid ? `₹${plan.cost} / month` : "Free"} •{" "}
                      {plan.users} team members
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {plan.description}
                    </p>
                  </div>
                  <div className="w-4 flex-shrink-0">
                    {activePlan === plan.id && (
                      <CheckIcon className="size-4 text-primary" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-2 mt-4">
            <Button type="button" className="w-full font-semibold text-md" size="lg"   onClick={onDone}>
              Change plan
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="ghost" className="w-full font-semibold text-md" size="lg">
                Cancel
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
