import { AvatarFallback } from "@/components/ui/avatar";
import { Avatar } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BarChart3,
  Building2,
  DollarSign,
  FileText,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  Legend,
} from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Building, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
// Sample data for charts
const revenueData = [
  { month: "Jan", revenue: 18600 },
  { month: "Feb", revenue: 23400 },
  { month: "Mar", revenue: 30500 },
  { month: "Apr", revenue: 25700 },
  { month: "May", revenue: 32100 },
  { month: "Jun", revenue: 37800 },
  { month: "Jul", revenue: 42300 },
  { month: "Aug", revenue: 39500 },
  { month: "Sep", revenue: 45200 },
  { month: "Oct", revenue: 43100 },
  { month: "Nov", revenue: 41800 },
  { month: "Dec", revenue: 48900 },
];

const invoiceStatusData = [
  { status: "Paid", count: 189 },
  { status: "Pending", count: 64 },
  { status: "Overdue", count: 12 },
];

const taxBreakdownData = [
  { name: "CGST", value: 4071.37 },
  { name: "SGST", value: 4071.37 },
  { name: "IGST", value: 0 },
];

const customerSegmentData = [
  { name: "Retail", value: 35 },
  { name: "Manufacturing", value: 25 },
  { name: "Services", value: 20 },
  { name: "Technology", value: 15 },
  { name: "Others", value: 5 },
];

// Chart configurations
const revenueChartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
} as ChartConfig;

const invoiceStatusChartConfig = {
  paid: {
    label: "Paid",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-2))",
  },
  overdue: {
    label: "Overdue",
    color: "hsl(var(--chart-3))",
  },
} as ChartConfig;

const taxBreakdownChartConfig = {
  cgst: {
    label: "CGST",
    color: "hsl(var(--chart-1))",
  },
  sgst: {
    label: "SGST",
    color: "hsl(var(--chart-2))",
  },
  igst: {
    label: "IGST",
    color: "hsl(var(--chart-3))",
  },
} as ChartConfig;

const customerSegmentChartConfig = {
  retail: {
    label: "Retail",
    color: "hsl(var(--chart-1))",
  },
  manufacturing: {
    label: "Manufacturing",
    color: "hsl(var(--chart-2))",
  },
  services: {
    label: "Services",
    color: "hsl(var(--chart-3))",
  },
  technology: {
    label: "Technology",
    color: "hsl(var(--chart-4))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-5))",
  },
} as ChartConfig;

// Colors for pie charts
const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8 max-w-5xl container">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Welcome back, John Doe
          </span>
        </div>
      </div>
      <Card className="max-w-5xl">
        <CardHeader>
          <CardTitle>
            What would you like to do today?
          </CardTitle>
          <CardDescription>
            Choose an action to get started with your invoicing.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
            <Link to="/invoices/new" className="block">
              <Card className="h-full cursor-pointer hover:bg-accent transition-colors">
                <CardContent className="flex flex-col items-center justify-center p-4 md:p-6 space-y-2">
                  <FileText className="size-8 md:size-10 text-primary" />
                  <span className="text-xs md:text-sm font-medium text-center">
                    Create Invoice
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link to="/quotations/new" className="block">
              <Card className="h-full cursor-pointer hover:bg-accent transition-colors">
                <CardContent className="flex flex-col items-center justify-center p-4 md:p-6 space-y-2">
                  <FileCheck className="size-8 md:size-10 text-primary" />
                  <span className="text-xs md:text-sm font-medium text-center">
                    Create Quotation
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link to="/customers/new" className="block">
              <Card className="h-full cursor-pointer hover:bg-accent transition-colors">
                <CardContent className="flex flex-col items-center justify-center p-4 md:p-6 space-y-2">
                  <Users className="size-8 md:size-10 text-primary" />
                  <span className="text-xs md:text-sm font-medium text-center">
                    Add Customer
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/vendors/new" className="block">
              <Card className="h-full cursor-pointer hover:bg-accent transition-colors">
                <CardContent className="flex flex-col items-center justify-center p-4 md:p-6 space-y-2">
                  <Building2 className="size-8 md:size-10 text-primary" />
                  <span className="text-xs md:text-sm font-medium text-center">
                    Add Vendor
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </CardContent>
      </Card>
      <div className="w-full">

      <Tabs defaultValue="overview" className="space-y-4 ">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 max-w-5xl">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUpIcon className="mr-1 h-4 w-4" />
                    +20.1%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Invoices</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUpIcon className="mr-1 h-4 w-4" />
                    +10.5%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUpIcon className="mr-1 h-4 w-4" />
                    +12.2%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Invoices
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 flex items-center">
                    <ArrowDownIcon className="mr-1 h-4 w-4" />
                    -4
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>
                <CardDescription>
                  You made 265 invoices this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div className="flex items-center" key={i}>
                      <Avatar className="h-9 w-9">
                        <AvatarFallback>
                          {["AC", "TS", "RK", "MJ", "JD"][i - 1]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {
                            [
                              "Acme Corp",
                              "TechSolutions",
                              "Retail Kings",
                              "Marketing Junction",
                              "Johnson & Daughters",
                            ][i - 1]
                          }
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {
                            [
                              "INV-001",
                              "INV-002",
                              "INV-003",
                              "INV-004",
                              "INV-005",
                            ][i - 1]
                          }
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        +₹{[1250, 890, 2400, 1650, 3200][i - 1]}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent invoice activity.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div className="flex items-center" key={i}>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {
                            [
                              "Invoice created",
                              "Payment received",
                              "Invoice sent",
                              "Invoice updated",
                              "Invoice paid",
                            ][i - 1]
                          }
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {
                            [
                              "2 hours ago",
                              "5 hours ago",
                              "Yesterday",
                              "2 days ago",
                              "3 days ago",
                            ][i - 1]
                          }
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 max-w-5xl mx-auto">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
                <CardDescription>
                  Your revenue for the past 12 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={revenueChartConfig}
                  className="min-h-[300px] w-full"
                >
                  <LineChart accessibilityLayer data={revenueData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis
                      tickFormatter={(value) => `₹${value.toLocaleString()}`}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Month
                                  </span>
                                  <span className="font-bold text-muted-foreground">
                                    {payload[0].payload.month}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Revenue
                                  </span>
                                  <span className="font-bold">
                                    ₹
                                    {payload?.[0]?.value?.toLocaleString() ??
                                      "0"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Invoice Status</CardTitle>
                <CardDescription>
                  Distribution of invoice statuses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={invoiceStatusChartConfig}
                  className="min-h-[300px] w-full"
                >
                  <BarChart accessibilityLayer data={invoiceStatusData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="status" />
                    <YAxis />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Status
                                  </span>
                                  <span className="font-bold text-muted-foreground">
                                    {payload[0].payload.status}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Count
                                  </span>
                                  <span className="font-bold">
                                    {payload[0].value}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar
                      dataKey="count"
                      radius={4}
                      fill="hsl(var(--chart-1))"
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Customer Segments</CardTitle>
                <CardDescription>
                  Distribution of customers by industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={customerSegmentChartConfig}
                  className="min-h-[300px] w-full"
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={customerSegmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {customerSegmentData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Segment
                                    </span>
                                    <span className="font-bold text-muted-foreground">
                                      {payload[0].name}
                                    </span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Percentage
                                    </span>
                                    <span className="font-bold">
                                      {payload[0].value}%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Tax Breakdown</CardTitle>
                <CardDescription>Distribution by tax type</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={taxBreakdownChartConfig}
                  className="min-h-[300px] w-full"
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={taxBreakdownData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) =>
                          `${name} ₹${value.toFixed(2)}`
                        }
                      >
                        {taxBreakdownData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Tax Type
                                    </span>
                                    <span className="font-bold text-muted-foreground">
                                      {payload[0].name}
                                    </span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Amount
                                    </span>
                                    <span className="font-bold">
                                      ₹{typeof payload[0].value === 'number' ? payload[0].value.toFixed(2) : payload[0].value}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  );
}
