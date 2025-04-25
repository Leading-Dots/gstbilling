"use client";

import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FileText,
  LogOut,
  Settings,
  FileCheck,
  UserCircle,
  Building,
  LayoutDashboard,
  ChevronsUpDown,
  Package,
  Users,
  ClipboardList,
  Receipt,
  FileSpreadsheet,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { useAuth } from "@/hooks/useAuth";
import { getCompanyById } from "@/db/Company";
import type { Company, SubscriptionPlan } from "@/API";
import { getSubscriptionPlanById } from "@/db/SubscriptionPlans";
import { SidebarLoader } from "@/components/loaders/SidebarLoader";
import { CompanySwitcher } from "@/components/shared/company-selector";

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    section: "Overview",
  },
  {
    title: "Contacts",
    section: "Contacts",
    items: [
      {
        title: "Customers",
        href: "/customers",
        icon: Users,
      },
      {
        title: "Vendors",
        href: "/vendors",
        icon: Building,
      },
      {
        title: "Employees",
        href: "/employees",
        icon: UserCircle,
      },
    ],
  },
  {
    title: "Sales",
    section: "Sales",
    items: [
      {
        title: "Purchase Orders",
        href: "/purchase-orders",
        icon: ClipboardList,
      },
      {
        title: "Invoices",
        href: "/invoices",
        icon: Receipt,
      },
      {
        title: "Quotations",
        href: "/quotations",
        icon: FileCheck,
      },
    ],
  },

  {
    title: "Inventory",
    href: "/inventory",
    icon: Package,
    section: "Products",
  },

  {
    title: "Reports",
    href: "/reports",
    icon: FileSpreadsheet,
    section: "Analytics",
  },
];

export function AppSidebar() {
  const location = useLocation();
  const pathname = location.pathname;
 

  const [loading, setLoading] = React.useState(true);
  const router = useNavigate();

  const { signOut, user } = useAuth();

  // Group navigation items by section
  const sections = React.useMemo(() => {
    const sectionMap: Record<string, typeof navigationItems> = {};

    navigationItems.forEach((item) => {
      if (!sectionMap[item.section]) {
        sectionMap[item.section] = [];
      }
      sectionMap[item.section].push(item);
    });

    return Object.entries(sectionMap);
  }, []);

  return (
    <Sidebar collapsible="offcanvas" className="border-r">
      <SidebarHeader className="flex flex-col items-center justify-center py-4  border-b">
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">InvoiceGST</span>
          </Link>
        </SidebarMenuButton>

        {/* Company Switcher */}
        <CompanySwitcher />
      </SidebarHeader>
      <SidebarContent className="gap-1 py-2">
        {sections.map(([sectionName, items]) => (
          <SidebarGroup key={sectionName} className="">
            <SidebarGroupLabel className="px-3 py-2 text-xs uppercase font-bold tracking-wider text-muted-foreground bg-muted/30">
              {sectionName}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  if (item.items) {
                    // This is a nested section
                    return item.items.map((subItem) => (
                      <SidebarMenuItem key={subItem.href}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === subItem.href}
                          tooltip={subItem.title}
                          className="transition-all duration-200 active:scale-95 hover:bg-accent/50 data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:font-medium"
                        >
                          <Link to={subItem.href}>
                            <subItem.icon className="h-6 w-6 transition-transform data-[active=true]:scale-110" />
                            <span className="text-md font-semibold  truncate tracking-wide"
                            >
                              {subItem.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ));
                  } else {
                    // This is a direct link
                    return (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.href}
                          tooltip={item.title}
                          className="transition-all duration-200 active:scale-95 hover:bg-accent/50 data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:font-medium"
                        >
                          <Link to={item.href}>
                            <item.icon className="h-8 w-8 transition-transform data-[active=true]:scale-110" />
                            <span className="text-md font-semibold truncate tracking-wide">
                              {item.title}
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  }
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-2 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 hover:bg-accent/50 transition-colors"
            >
              <Avatar className="h-6 w-6 border">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-sm">
                <span className="font-medium">{user?.name}</span>
                <span className="text-xs text-muted-foreground">
                  {user?.role === "admin"
                    ? "Admin"
                    : user?.permissionRole || "Employee"}
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onSelect={() => {
                router("/settings");
              }}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => signOut()}
              className="cursor-pointer"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
      <SidebarRail />
      <SidebarTrigger className="absolute right-4 top-4 md:hidden" />
    </Sidebar>
  );
}
