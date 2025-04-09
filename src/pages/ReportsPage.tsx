import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
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
} from "recharts"
import { type ChartConfig, ChartContainer } from "@/components/ui/chart"

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
]

const invoiceTimelineData = [
  { week: "Week 1", invoices: 45 },
  { week: "Week 2", invoices: 62 },
  { week: "Week 3", invoices: 58 },
  { week: "Week 4", invoices: 71 },
]

const customerGrowthData = [
  { month: "Jan", customers: 420 },
  { month: "Feb", customers: 435 },
  { month: "Mar", customers: 450 },
  { month: "Apr", customers: 480 },
  { month: "May", customers: 495 },
  { month: "Jun", customers: 510 },
  { month: "Jul", customers: 525 },
  { month: "Aug", customers: 540 },
  { month: "Sep", customers: 555 },
  { month: "Oct", customers: 573 },
]

const customerSegmentData = [
  { name: "Retail", value: 35 },
  { name: "Manufacturing", value: 25 },
  { name: "Services", value: 20 },
  { name: "Technology", value: 15 },
  { name: "Others", value: 5 },
]

const gstCollectionData = [
  { month: "Jan", cgst: 1650, sgst: 1650, igst: 0 },
  { month: "Feb", cgst: 1850, sgst: 1850, igst: 0 },
  { month: "Mar", cgst: 2100, sgst: 2100, igst: 0 },
  { month: "Apr", cgst: 1950, sgst: 1950, igst: 0 },
  { month: "May", cgst: 2250, sgst: 2250, igst: 0 },
  { month: "Jun", cgst: 2400, sgst: 2400, igst: 0 },
  { month: "Jul", cgst: 2650, sgst: 2650, igst: 0 },
  { month: "Aug", cgst: 2500, sgst: 2500, igst: 0 },
  { month: "Sep", cgst: 2800, sgst: 2800, igst: 0 },
  { month: "Oct", cgst: 2700, sgst: 2700, igst: 0 },
  { month: "Nov", cgst: 2600, sgst: 2600, igst: 0 },
  { month: "Dec", cgst: 3000, sgst: 3000, igst: 0 },
]

const taxBreakdownData = [
  { name: "CGST", value: 4071.37 },
  { name: "SGST", value: 4071.37 },
  { name: "IGST", value: 0 },
]

// Chart configurations
const revenueChartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
} as ChartConfig

const invoiceTimelineConfig = {
  invoices: {
    label: "Invoices",
    color: "hsl(var(--chart-2))",
  },
} as ChartConfig

const customerGrowthConfig = {
  customers: {
    label: "Customers",
    color: "hsl(var(--chart-3))",
  },
} as ChartConfig

const gstCollectionConfig = {
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
} as ChartConfig

// Colors for pie charts
const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
]

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
          <p className="text-muted-foreground">View and analyze your business performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="taxes">Taxes</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Invoice Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹1,893.00</div>
                <p className="text-xs text-muted-foreground">+5.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹12,450.00</div>
                <p className="text-xs text-muted-foreground">-8.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+20.1%</div>
                <p className="text-xs text-muted-foreground">+2.5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={revenueChartConfig} className="min-h-[300px] w-full">
                  <LineChart accessibilityLayer data={revenueData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `₹${value.toLocaleString()}`} />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Month</span>
                                  <span className="font-bold text-muted-foreground">{payload[0].payload.month}</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Revenue</span>
                                  <span className="font-bold">₹{payload[0].value.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
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
                <CardTitle>Revenue by Customer</CardTitle>
                <CardDescription>Top customers by revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={customerGrowthConfig} className="min-h-[300px] w-full">
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
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {customerSegmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Segment</span>
                                    <span className="font-bold text-muted-foreground">{payload[0].name}</span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Percentage</span>
                                    <span className="font-bold">{payload[0].value}%</span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
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

        <TabsContent value="invoices" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">265</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Paid Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">189</div>
                <p className="text-xs text-muted-foreground">+15.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">64</div>
                <p className="text-xs text-muted-foreground">-8.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overdue Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">-4 from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Invoice Status</CardTitle>
                <CardDescription>Distribution of invoice statuses</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={invoiceTimelineConfig} className="min-h-[300px] w-full">
                  <BarChart accessibilityLayer data={invoiceTimelineData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Period</span>
                                  <span className="font-bold text-muted-foreground">{payload[0].payload.week}</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Invoices</span>
                                  <span className="font-bold">{payload[0].value}</span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Bar dataKey="invoices" radius={4} fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Invoice Timeline</CardTitle>
                <CardDescription>Invoice creation over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={invoiceTimelineConfig} className="min-h-[300px] w-full">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Paid", value: 189 },
                          { name: "Pending", value: 64 },
                          { name: "Overdue", value: 12 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        <Cell fill="hsl(var(--chart-1))" />
                        <Cell fill="hsl(var(--chart-2))" />
                        <Cell fill="hsl(var(--chart-3))" />
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Status</span>
                                    <span className="font-bold text-muted-foreground">{payload[0].name}</span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Count</span>
                                    <span className="font-bold">{payload[0].value}</span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
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

        <TabsContent value="customers" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">+12.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48</div>
                <p className="text-xs text-muted-foreground">+8.7% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">412</div>
                <p className="text-xs text-muted-foreground">+5.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customer Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92.4%</div>
                <p className="text-xs text-muted-foreground">+1.2% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Customer Growth</CardTitle>
                <CardDescription>New customers over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={customerGrowthConfig} className="min-h-[300px] w-full">
                  <LineChart accessibilityLayer data={customerGrowthData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Month</span>
                                  <span className="font-bold text-muted-foreground">{payload[0].payload.month}</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Customers</span>
                                  <span className="font-bold">{payload[0].value}</span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="customers"
                      stroke="hsl(var(--chart-3))"
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
                <CardTitle>Customer Segments</CardTitle>
                <CardDescription>Distribution by industry</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={customerGrowthConfig} className="min-h-[300px] w-full">
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
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {customerSegmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Segment</span>
                                    <span className="font-bold text-muted-foreground">{payload[0].name}</span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Percentage</span>
                                    <span className="font-bold">{payload[0].value}%</span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
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

        <TabsContent value="taxes" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total GST Collected</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹8,142.74</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CGST</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹4,071.37</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">SGST</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹4,071.37</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">IGST</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹0.00</div>
                <p className="text-xs text-muted-foreground">No change from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>GST Collection Trend</CardTitle>
                <CardDescription>Monthly GST collection for the current year</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={gstCollectionConfig} className="min-h-[300px] w-full">
                  <BarChart accessibilityLayer data={gstCollectionData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `₹${value}`} />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Month</span>
                                  <span className="font-bold text-muted-foreground">{payload[0].payload.month}</span>
                                </div>
                                {payload.map((entry, index) => (
                                  <div key={index} className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">{entry.name}</span>
                                    <span className="font-bold">₹{entry.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Bar dataKey="cgst" stackId="a" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="sgst" stackId="a" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="igst" stackId="a" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                    <Legend />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Tax Breakdown</CardTitle>
                <CardDescription>Distribution by tax type</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={gstCollectionConfig} className="min-h-[300px] w-full">
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
                        label={({ name, value }) => `${name} ₹${value.toFixed(2)}`}
                      >
                        {taxBreakdownData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Tax Type</span>
                                    <span className="font-bold text-muted-foreground">{payload[0].name}</span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Amount</span>
                                    <span className="font-bold">₹{typeof payload[0].value === 'number' ? payload[0].value.toFixed(2) : payload[0].value}</span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
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
  )
}

