import { Download, FileCheck } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

import { Quotation, QuotationStatus } from "@/API";
import { Button } from "../ui/button";

const QuotationTable = ({ quotations }: { quotations: Quotation[] }) => {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full table-fixed">
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
                  {quotation.quotation_number}
                </div>
              </TableCell>
              <TableCell>{quotation.to_customer}</TableCell>
              <TableCell>{quotation.quotation_date}</TableCell>
              <TableCell>{quotation.valid_until}</TableCell>
              <TableCell>
                <div
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    quotation.quotation_status === QuotationStatus.ACCEPTED
                      ? "bg-emerald-100 text-emerald-800"
                      : quotation.quotation_status === QuotationStatus.SENT
                      ? "bg-blue-100 text-blue-800"
                      : quotation.quotation_status === QuotationStatus.DRAFT
                      ? "bg-gray-100 text-gray-800"
                      : quotation.quotation_status === QuotationStatus.CONVERTED
                      ? "bg-purple-100 text-purple-800"
                      : quotation.quotation_status === QuotationStatus.EXPIRED ||
                        quotation.quotation_status === QuotationStatus.REJECTED
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {quotation.quotation_status}
                </div>
              </TableCell>
              <TableCell className="text-right">{quotation.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between p-4">
        <span className="text-sm text-muted-foreground">
          Showing {quotations.length} quotations
        </span>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuotationTable;
