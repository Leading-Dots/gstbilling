import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import React, { useEffect } from "react";
import { AppSidebar } from "./AppSidebar";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user } = useAuth();

  const userRole = user?.role;

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <SidebarTrigger className="lg:hidden" />
        <main
          className="flex-1 
        "
        >
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
