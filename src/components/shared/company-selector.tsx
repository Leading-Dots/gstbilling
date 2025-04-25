import React, { useEffect, useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getCompanyById } from "@/db/Company";
import { getSubscriptionPlanById } from "@/db/SubscriptionPlans";
import type { Company, SubscriptionPlan } from "@/API";
import { useAuth } from "@/hooks/useAuth";

export function CompanySwitcher() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [activePlan, setActivePlan] = useState<SubscriptionPlan | null>(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  // Get plan color based on plan name
  const getPlanColor = (planName: string) => {
    const planColors = {
      Free: "bg-slate-500",
      Basic: "bg-blue-500",
      Pro: "bg-amber-500",
      Enterprise: "bg-purple-500",
    };

    return planColors[planName as keyof typeof planColors] || "bg-green-500";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch company data
        const company = await getCompanyById(user.company_id);
        setSelectedCompany(company);

        // Only fetch subscription plan if user is admin
        if (user.role === "admin") {
          const plan = await getSubscriptionPlanById(user.subscriptionPlanID);
          setActivePlan(plan);
        }
      } catch (error) {
        console.error("Error fetching data for CompanySwitcher:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading || !selectedCompany) {
    return null; // Or return a loading state
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-full flex justify-between items-center p-3"
        >
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border rounded-full p-2">
              <AvatarFallback className="">
                <span className="p-2">
                  {selectedCompany.company_name
                    .substring(0, 2)
                    .toLocaleUpperCase()}{" "}
                </span>
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-sm">
              <span className="font-medium">
                {selectedCompany.company_name}
              </span>
            </div>
          </div>
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Current Company</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          {selectedCompany.company_name}
        </DropdownMenuItem>

        {/* Only show subscription plan for admin users */}
        {user.role === "admin" && activePlan && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Badge
                variant="outline"
                className={cn(
                  "w-full flex items-center justify-center gap-1 py-1.5 font-medium",
                  getPlanColor(activePlan.title),
                  "text-white border-0"
                )}
              >
                {activePlan.title} Plan
              </Badge>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
