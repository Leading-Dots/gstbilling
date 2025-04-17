"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  FileCheck,
  CreditCard,
  Calendar,
  Edit,
  Trash2,
  MoreHorizontal,
  Download,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProfileStatus } from "@/API";
// Sample customer data
const customer = {
  id: "CUST-001",
  name: "Acme Corp",
  contactPerson: "John Smith",
  email: "john@acmecorp.com",
  phone: "+91 98765 43210",
  address: "123 Business Park, Mumbai, MH",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400001",
  country: "India",
  status: "active",
  gstin: "27AABCU9603R1ZX",
  panNumber: "ABCDE1234F",
  outstandingAmount: "₹12,500.00",
  creditLimit: "₹50,000.00",
  paymentTerms: "Net 30",
  billingAddress: "123 Business Park, Mumbai, Maharashtra, 400001, India",
  shippingAddress: "123 Business Park, Mumbai, Maharashtra, 400001, India",
  notes:
    "Acme Corp is one of our oldest clients. They usually pay on time and order regularly.",
  createdAt: "2023-01-15",
  updatedAt: "2023-04-20",
};

// Sample invoices for this customer
const invoices = [
  {
    id: "INV-001",
    date: "2023-04-01",
    dueDate: "2023-05-01",
    amount: "₹1,250.00",
    status: "Paid",
  },
  {
    id: "INV-002",
    date: "2023-04-15",
    dueDate: "2023-05-15",
    amount: "₹3,200.00",
    status: "Pending",
  },
  {
    id: "INV-003",
    date: "2023-05-01",
    dueDate: "2023-06-01",
    amount: "₹8,050.00",
    status: "Pending",
  },
];

// Sample quotations for this customer
const quotations = [
  {
    id: "QT-001",
    date: "2023-03-15",
    validUntil: "2023-04-15",
    amount: "₹2,250.00",
    status: "Converted",
  },
  {
    id: "QT-002",
    date: "2023-04-10",
    validUntil: "2023-05-10",
    amount: "₹5,800.00",
    status: "Sent",
  },
  {
    id: "QT-003",
    date: "2023-05-05",
    validUntil: "2023-06-05",
    amount: "₹12,400.00",
    status: "Draft",
  },
];

// Sample activity history
const activities = [
  {
    id: 1,
    type: "invoice_created",
    description: "Invoice INV-003 created",
    date: "2023-05-01",
    time: "10:30 AM",
  },
  {
    id: 2,
    type: "quotation_sent",
    description: "Quotation QT-002 sent to customer",
    date: "2023-04-10",
    time: "02:15 PM",
  },
  {
    id: 3,
    type: "payment_received",
    description: "Payment received for invoice INV-001",
    date: "2023-04-05",
    time: "11:45 AM",
  },
  {
    id: 4,
    type: "customer_updated",
    description: "Customer details updated",
    date: "2023-04-20",
    time: "09:20 AM",
  },
  {
    id: 5,
    type: "invoice_created",
    description: "Invoice INV-002 created",
    date: "2023-04-15",
    time: "03:40 PM",
  },
];

export default function CustomerDetailsPage() {
  const router = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    // Simulate API call
    setTimeout(() => {
      setIsDeleting(false);
      toast.success("Customer deleted successfully");
      router("/customers");
    }, 1000);
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{customer.name}</h2>
          <p className="text-muted-foreground">Customer ID: {customer.id}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant={
              customer.status === ProfileStatus.ACTIVE
                ? "secondary"
                : "destructive"
            }
            className="capitalize"
          >
            {customer.status}
          </Badge>
          <Button variant="outline" size="sm" asChild>
            <Link to={`/customers/${customer.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/invoices/new">
                  <FileText className="mr-2 h-4 w-4" />
                  Create Invoice
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/quotations/new">
                  <FileCheck className="mr-2 h-4 w-4" />
                  Create Quotation
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Export Details
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {isDeleting ? "Deleting..." : "Delete Customer"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-5">
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-9 w-9 bg-primary/10">
                    <AvatarFallback className="text-primary">
                      {customer.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Contact: {customer.contactPerson}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span className="flex-1">{customer.address}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">GST Information</p>
                  <p className="text-sm">GSTIN: {customer.gstin}</p>
                  <p className="text-sm">PAN: {customer.panNumber}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Financial Information</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Outstanding
                      </p>
                      <p className="font-medium">
                        {customer.outstandingAmount}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Credit Limit
                      </p>
                      <p className="font-medium">{customer.creditLimit}</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Payment Terms: {customer.paymentTerms}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Billing Address</p>
                  <p className="text-sm">{customer.billingAddress}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Shipping Address</p>
                  <p className="text-sm">{customer.shippingAddress}</p>
                </div>
              </div>
            </div>

            {customer.notes && (
              <>
                <Separator className="my-4" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Notes</p>
                  <p className="text-sm">{customer.notes}</p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Customer Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Total Invoices</p>
                <p className="font-medium">3</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Total Quotations
                </p>
                <p className="font-medium">3</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Outstanding Amount
                </p>
                <p className="font-medium">{customer.outstandingAmount}</p>
              </div>
              <Separator className="my-2" />
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Customer Since</p>
                <p className="font-medium">{customer.createdAt}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Last Updated</p>
                <p className="font-medium">{customer.updatedAt}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full gap-2">
              <Button className="flex-1" asChild>
                <Link to="/invoices/new">
                  <FileText className="mr-2 h-4 w-4" />
                  New Invoice
                </Link>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <Link to="/quotations/new">
                  <FileCheck className="mr-2 h-4 w-4" />
                  New Quotation
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-4">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="quotations">Quotations</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Invoices</CardTitle>
              <Button size="sm" asChild>
                <Link to="/invoices/new">
                  <FileText className="mr-2 h-4 w-4" />
                  Create Invoice
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              {invoices.length === 0 ? (
                <div className="flex h-[150px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                  <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <FileText className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No invoices</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">
                      You haven&apos;t created any invoices for this customer
                      yet.
                    </p>
                    <Button size="sm" asChild>
                      <Link to="/invoices/new">Create Invoice</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <Link
                            to={`/invoices/${invoice.id}`}
                            className="font-medium hover:underline"
                          >
                            {invoice.id}
                          </Link>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Created: {invoice.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Due: {invoice.dueDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">{invoice.amount}</p>
                          <Badge
                            variant={
                              invoice.status === "Paid"
                                ? "secondary"
                                : invoice.status === "Pending"
                                ? "outline"
                                : "destructive"
                            }
                            className="mt-1"
                          >
                            {invoice.status}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="icon" asChild>
                          <Link to={`/invoices/${invoice.id}`}>
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">View invoice</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quotations" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Quotations</CardTitle>
              <Button size="sm" asChild>
                <Link to="/quotations/new">
                  <FileCheck className="mr-2 h-4 w-4" />
                  Create Quotation
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              {quotations.length === 0 ? (
                <div className="flex h-[150px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                  <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <FileCheck className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">
                      No quotations
                    </h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">
                      You haven&apos;t created any quotations for this customer
                      yet.
                    </p>
                    <Button size="sm" asChild>
                      <Link to="/quotations/new">Create Quotation</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {quotations.map((quotation) => (
                    <div
                      key={quotation.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <FileCheck className="h-4 w-4 text-muted-foreground" />
                          <Link
                            to={`/quotations/${quotation.id}`}
                            className="font-medium hover:underline"
                          >
                            {quotation.id}
                          </Link>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Created: {quotation.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Valid Until: {quotation.validUntil}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">{quotation.amount}</p>
                          <Badge
                            variant={
                              quotation.status === "Converted"
                                ? "secondary"
                                : quotation.status === "Sent"
                                ? "outline"
                                : "default"
                            }
                            className="mt-1"
                          >
                            {quotation.status}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="icon" asChild>
                          <Link to={`/quotations/${quotation.id}`}>
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">View quotation</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity History</CardTitle>
              <CardDescription>
                Recent activity for this customer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex">
                    <div className="relative mr-4 flex h-full w-10 items-center justify-center">
                      <div className="absolute h-full w-px bg-border" />
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                        {activity.type.includes("invoice") ? (
                          <FileText className="h-4 w-4 text-primary" />
                        ) : activity.type.includes("quotation") ? (
                          <FileCheck className="h-4 w-4 text-primary" />
                        ) : activity.type.includes("payment") ? (
                          <CreditCard className="h-4 w-4 text-primary" />
                        ) : (
                          <User className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col pb-8">
                      <span className="text-sm font-medium">
                        {activity.description}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>
                          {activity.date} at {activity.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
