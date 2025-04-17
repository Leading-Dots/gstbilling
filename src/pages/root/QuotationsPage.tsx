import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Plus, Search } from "lucide-react";
import QuotationTable from "@/components/tables/QuotationTable";
import { useEffect, useState } from "react";
import { Quotation, QuotationStatus } from "@/API";
import { getAllQuotations } from "@/db/Quotations";
import Loader1 from "@/components/loaders/Loader1";

const quotations = [
  {
    id: "QT-001",
    customer: "Acme Corp",
    amount: "₹2,250.00",
    status: "Sent",
    date: "2023-04-01",
    validUntil: "2023-05-01",
  },
  {
    id: "QT-002",
    customer: "TechSolutions",
    amount: "₹1,890.00",
    status: "Draft",
    date: "2023-04-05",
    validUntil: "2023-05-05",
  },
  {
    id: "QT-003",
    customer: "Retail Kings",
    amount: "₹3,400.00",
    status: "Accepted",
    date: "2023-04-10",
    validUntil: "2023-05-10",
  },
  {
    id: "QT-004",
    customer: "Marketing Junction",
    amount: "₹2,650.00",
    status: "Expired",
    date: "2023-03-25",
    validUntil: "2023-04-25",
  },
  {
    id: "QT-005",
    customer: "Johnson & Daughters",
    amount: "₹4,200.00",
    status: "Converted",
    date: "2023-04-15",
    validUntil: "2023-05-15",
  },
  {
    id: "QT-006",
    customer: "Global Traders",
    amount: "₹1,950.00",
    status: "Sent",
    date: "2023-04-18",
    validUntil: "2023-05-18",
  },
  {
    id: "QT-007",
    customer: "City Services",
    amount: "₹2,800.00",
    status: "Draft",
    date: "2023-04-20",
    validUntil: "2023-05-20",
  },
  {
    id: "QT-008",
    customer: "Quantum Enterprises",
    amount: "₹3,750.00",
    status: "Rejected",
    date: "2023-03-30",
    validUntil: "2023-04-30",
  },
];

export default function QuotationsPage() {
  const [quotations, setInvoices] = useState<Quotation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listQuotations = async () => {
      try {
        const quotationData = await getAllQuotations();
        if (quotationData) {
          setInvoices(quotationData || []);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };
    listQuotations();
  }, []);
  if (loading) {
    return <Loader1 />;
  }
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8 container max-w-[100vw] md:max-w-6xl flex flex-col">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Quotations</h2>
          <p className="text-muted-foreground">
            Create and manage price quotations for your customers
          </p>
        </div>
        <Link to="/quotations/new">
          <Button className="ml-auto">
            <Plus className="h-4 w-4" />
            New Quotation
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search quotations..."
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Quotations</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <QuotationTable quotations={quotations} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <QuotationTable
                quotations={quotations.filter(
                  (quotation) =>
                    quotation.quotation_status === QuotationStatus.DRAFT
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <QuotationTable
                quotations={quotations.filter(
                  (quotation) =>
                    quotation.quotation_status === QuotationStatus.SENT
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accepted" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <QuotationTable
                quotations={quotations.filter(
                  (quotation) =>
                    quotation.quotation_status === QuotationStatus.ACCEPTED
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expired" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <QuotationTable
                quotations={quotations.filter(
                  (quotation) =>
                    quotation.quotation_status === QuotationStatus.EXPIRED ||
                    quotation.quotation_status === QuotationStatus.REJECTED
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
