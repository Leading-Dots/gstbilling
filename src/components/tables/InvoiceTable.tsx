import { Download, FileText, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Invoice, InvoiceStatus } from "@/API";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
}
from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const InvoiceTable = ({ invoices }: { invoices: Invoice[] }) => {
  return (
    <div className="">
      <Table className="w-full  table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-12"> 
              S.No
            </TableHead>
            <TableHead className="w-48">Invoice</TableHead>
            <TableHead className="w-48">Customer</TableHead>
            <TableHead className="w-32">Invoice Date</TableHead>
            <TableHead className="w-32">Due Date</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead className="w-32"></TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                {invoices.indexOf(invoice) + 1}
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  {invoice.invoice_number}
                </div>
              </TableCell>
              <TableCell>{invoice.to_customer}</TableCell>
              <TableCell>{invoice.invoice_date}</TableCell>
              <TableCell>{invoice.due_date}</TableCell>
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
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem asChild><Link to={`/invoices/${invoice.id}/edit`} >Edit Invoice</Link></DropdownMenuItem>
                    <DropdownMenuItem>View Customer Details</DropdownMenuItem>
                    <DropdownMenuItem>Share Invoice</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
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
