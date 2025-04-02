

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileCheck, Plus, Search } from "lucide-react"

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
]

export default function QuotationsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Quotations</h2>
          <p className="text-muted-foreground">Create and manage price quotations for your customers</p>
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
          <Input type="search" placeholder="Search quotations..." className="pl-8" />
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Quotation</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quotations.map((quotation) => (
                    <TableRow key={quotation.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <FileCheck className="h-4 w-4 text-muted-foreground" />
                          {quotation.id}
                        </div>
                      </TableCell>
                      <TableCell>{quotation.customer}</TableCell>
                      <TableCell>{quotation.date}</TableCell>
                      <TableCell>{quotation.validUntil}</TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            quotation.status === "Accepted"
                              ? "bg-emerald-100 text-emerald-800"
                              : quotation.status === "Sent"
                                ? "bg-blue-100 text-blue-800"
                                : quotation.status === "Draft"
                                  ? "bg-gray-100 text-gray-800"
                                  : quotation.status === "Converted"
                                    ? "bg-purple-100 text-purple-800"
                                    : quotation.status === "Expired" || quotation.status === "Rejected"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {quotation.status}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{quotation.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Quotation</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quotations
                    .filter((quotation) => quotation.status === "Draft")
                    .map((quotation) => (
                      <TableRow key={quotation.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <FileCheck className="h-4 w-4 text-muted-foreground" />
                            {quotation.id}
                          </div>
                        </TableCell>
                        <TableCell>{quotation.customer}</TableCell>
                        <TableCell>{quotation.date}</TableCell>
                        <TableCell>{quotation.validUntil}</TableCell>
                        <TableCell>
                          <div className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800">
                            {quotation.status}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{quotation.amount}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Quotation</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quotations
                    .filter((quotation) => quotation.status === "Sent")
                    .map((quotation) => (
                      <TableRow key={quotation.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <FileCheck className="h-4 w-4 text-muted-foreground" />
                            {quotation.id}
                          </div>
                        </TableCell>
                        <TableCell>{quotation.customer}</TableCell>
                        <TableCell>{quotation.date}</TableCell>
                        <TableCell>{quotation.validUntil}</TableCell>
                        <TableCell>
                          <div className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
                            {quotation.status}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{quotation.amount}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accepted" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Quotation</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quotations
                    .filter((quotation) => quotation.status === "Accepted" || quotation.status === "Converted")
                    .map((quotation) => (
                      <TableRow key={quotation.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <FileCheck className="h-4 w-4 text-muted-foreground" />
                            {quotation.id}
                          </div>
                        </TableCell>
                        <TableCell>{quotation.customer}</TableCell>
                        <TableCell>{quotation.date}</TableCell>
                        <TableCell>{quotation.validUntil}</TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              quotation.status === "Accepted"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {quotation.status}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{quotation.amount}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expired" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Quotation</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quotations
                    .filter((quotation) => quotation.status === "Expired" || quotation.status === "Rejected")
                    .map((quotation) => (
                      <TableRow key={quotation.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <FileCheck className="h-4 w-4 text-muted-foreground" />
                            {quotation.id}
                          </div>
                        </TableCell>
                        <TableCell>{quotation.customer}</TableCell>
                        <TableCell>{quotation.date}</TableCell>
                        <TableCell>{quotation.validUntil}</TableCell>
                        <TableCell>
                          <div className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
                            {quotation.status}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{quotation.amount}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

