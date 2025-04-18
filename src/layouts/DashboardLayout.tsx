import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import React, { useEffect } from "react";
import { AppSidebar } from "./AppSidebar";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarDisabled?: boolean;
}
const DashboardLayout = ({
  children,
  sidebarDisabled = false,
}: DashboardLayoutProps) => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const userRole = user?.role;

  if (!user) {
    return <Navigate to="/login" />;
  }
  useEffect(() => {
    //we need to check for   onboarding step
    if (user && user.company_id === null && userRole === "admin") {
      //redirect to onboarding page
      navigate("/onboarding");
    }
  }, [user]);
  return (
    <SidebarProvider>
      <div
        className={cn(`flex min-h-screen`, {
          "mx-auto": sidebarDisabled,
          "w-full": sidebarDisabled,
        })}
      >
        {!sidebarDisabled ? (
          <>
            <AppSidebar />
            <SidebarTrigger />
          </>
        ) : null}

        <main
          className="flex-1  w-full
        "
        >
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
