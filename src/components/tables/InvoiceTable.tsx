import { Download, FileText } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Invoice, InvoiceStatus } from "@/API";
import { Button } from "../ui/button";

const InvoiceTable = ({ invoices }: { invoices: Invoice[] }) => {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  {invoice.invoice_number}
                </div>
              </TableCell>
              <TableCell>{invoice.to_customer}</TableCell>
              <TableCell>{invoice.invoice_date}</TableCell>
              <TableCell>
                <div
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    invoice.invoice_status === InvoiceStatus.PAID
                      ? "bg-emerald-100 text-emerald-800"
                      : invoice.invoice_status === InvoiceStatus.PENDING
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {invoice.invoice_status}
                </div>
              </TableCell>
              <TableCell className="text-right">{invoice.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between p-4">
        <span className="text-sm text-muted-foreground">
          Showing {invoices.length} invoices
        </span>
       
      </div>
    </div>
  );
};

export default InvoiceTable;
