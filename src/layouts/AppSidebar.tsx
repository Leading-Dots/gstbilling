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
  const [selectedCompany, setSelectedCompany] = React.useState<Company | null>(
    null
  );
  const [activePlan, setActivePlan] = React.useState<SubscriptionPlan | null>(
    null
  );

  const [loading, setLoading] = React.useState(true);
  const router = useNavigate();

  const { signOut, user } = useAuth();

  const fetchActiveCompany = async () => {
    const company = await getCompanyById(user.company_id);
    setSelectedCompany(company);
    console.log("Selected company:", company);
  };

  const fetchActivePlan = async () => {
    const plan = await getSubscriptionPlanById(user.subscriptionPlanID);
    console.log("Active plan:", plan);
    setActivePlan(plan);
  };

  const fetchData = async () => {
    await Promise.all([fetchActiveCompany(), fetchActivePlan()]);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, [user]);

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

  if (!selectedCompany || !activePlan || loading) {
    return (
     <SidebarLoader />
    );
  }

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full flex justify-between items-center px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback className="">
                    <span className="">
                      {selectedCompany!.company_name
                        .substring(0, 2)
                        .toLocaleUpperCase()}{" "}
                    </span>
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-sm">
                  <span className="font-medium">
                    {selectedCompany!.company_name}
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
              {selectedCompany!.company_name}
            </DropdownMenuItem>
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
          </DropdownMenuContent>
        </DropdownMenu>
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
                            <subItem.icon className="h-5 w-5 transition-transform data-[active=true]:scale-110" />
                            <span>{subItem.title}</span>
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
                            <item.icon className="h-5 w-5 transition-transform data-[active=true]:scale-110" />
                            <span>{item.title}</span>
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
