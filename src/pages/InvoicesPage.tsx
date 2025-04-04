import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Invoice, InvoiceStatus } from "@/API";
import { getAllInvoices } from "@/db/Invoices";
import InvoiceTable from "@/components/tables/InvoiceTable";

const invoices = [
  {
    id: "INV-001",
    customer: "Acme Corp",
    amount: "₹1,250.00",
    status: "Paid",
    date: "2023-04-01",
  },
  {
    id: "INV-002",
    customer: "TechSolutions",
    amount: "₹890.00",
    status: "Pending",
    date: "2023-04-05",
  },
  {
    id: "INV-003",
    customer: "Retail Kings",
    amount: "₹2,400.00",
    status: "Paid",
    date: "2023-04-10",
  },
  {
    id: "INV-004",
    customer: "Marketing Junction",
    amount: "₹1,650.00",
    status: "Overdue",
    date: "2023-03-25",
  },
  {
    id: "INV-005",
    customer: "Johnson & Daughters",
    amount: "₹3,200.00",
    status: "Paid",
    date: "2023-04-15",
  },
  {
    id: "INV-006",
    customer: "Global Traders",
    amount: "₹950.00",
    status: "Pending",
    date: "2023-04-18",
  },
  {
    id: "INV-007",
    customer: "City Services",
    amount: "₹1,800.00",
    status: "Paid",
    date: "2023-04-20",
  },
  {
    id: "INV-008",
    customer: "Quantum Enterprises",
    amount: "₹2,750.00",
    status: "Overdue",
    date: "2023-03-30",
  },
];

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>();
  const [loading, setLoading] = useState(true);

  console.log("InvoicesPage rendered");

  useEffect(() => {
    const listInvoices = async () => {
      try {
        const invoiceData = await getAllInvoices();
        if (invoiceData) {
          setInvoices(invoiceData || []);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };
    listInvoices();
  }, []);
  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8 container max-w-[100vw] md:max-w-6xl flex flex-col">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Invoices</h2>
          <p className="text-muted-foreground">
            Create, manage and track your invoices
          </p>
        </div>
        <Link to="/invoices/new">
          <Button className="ml-auto">
            <Plus className="h-4 w-4" />
            New Invoice
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search invoices..."
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Invoices</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <InvoiceTable invoices={invoices!!} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paid" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <InvoiceTable
                invoices={(invoices ?? []).filter(
                  (invoice) => invoice.invoice_status === InvoiceStatus.PAID
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <InvoiceTable
                invoices={(invoices ?? []).filter(
                  (invoice) => invoice.invoice_status === InvoiceStatus.PENDING
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          <Card>
            <CardContent className="p-0">
             
                  <InvoiceTable
                    invoices={(invoices ?? []).filter(
                      (invoice) =>
                        invoice.invoice_status === InvoiceStatus.OVERDUE
                    )}
                  />
             
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
