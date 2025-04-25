import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  // filepath: /Users/leadingdots/ldots/client/gstbilling/src/components/loaders/SidebarLoader.tsx
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

export function SidebarLoader() {
  // Mock sections for the skeleton loader
  const sections = [
    { title: "Overview", itemCount: 1 },
    { title: "Contacts", itemCount: 3 },
    { title: "Sales", itemCount: 3 },
    { title: "Products", itemCount: 1 },
    { title: "Analytics", itemCount: 1 },
  ];

  return (
    <Sidebar collapsible="offcanvas" className="border-r">
      <SidebarHeader className="flex flex-col items-center justify-center py-4 border-b">
        <div className="flex items-center gap-2 px-3 py-2">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-6 w-32" />
        </div>
        <div className="w-full px-3 py-2 mt-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="flex flex-col space-y-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="gap-1 py-2">
        {sections.map((section, sectionIndex) => (
          <SidebarGroup key={sectionIndex}>
            <SidebarGroupLabel className="px-3 py-2 text-xs uppercase font-bold tracking-wider bg-muted/30">
              <Skeleton className="h-4 w-20" />
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Array(section.itemCount)
                  .fill(0)
                  .map((_, itemIndex) => (
                    <SidebarMenuItem key={`${sectionIndex}-${itemIndex}`}>
                      <SidebarMenuButton className="transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-5 w-5 rounded-md" />
                          <Skeleton className="h-5 w-24" />
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-2 border-t">
        <div className="flex items-center gap-2 px-2 py-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <div className="flex flex-col space-y-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
      <SidebarTrigger className="absolute right-4 top-4 md:hidden" />
    </Sidebar>
  );
}
