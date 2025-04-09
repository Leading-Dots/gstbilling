import { Download, FileCheck, MoreHorizontal } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

const QuotationTable = ({ quotations }: { quotations: Quotation[] }) => {
  return (
    <div className="">
      <Table className="w-full table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">S.No</TableHead>
            <TableHead className="w-48">Quotation</TableHead>
            <TableHead className="w-48">Customer</TableHead>
            <TableHead className="w-32">Date</TableHead>
            <TableHead className="w-32">Valid Until</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead className="w-32"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quotations.map((quotation) => (
            <TableRow key={quotation.id}>
              <TableCell className="font-medium">
                {quotations.indexOf(quotation) + 1}
              </TableCell>
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
                      : quotation.quotation_status ===
                          QuotationStatus.EXPIRED ||
                        quotation.quotation_status === QuotationStatus.REJECTED
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {quotation.quotation_status}
                </div>
              </TableCell>
              <TableCell className="text-right">{quotation.total}</TableCell>
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
                    <DropdownMenuItem asChild>
                      <Link to={`/quotations/${quotation.id}/view`}>
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={`/quotations/${quotation.id}/edit`}>
                        Edit Quotation
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>View Customer Details</DropdownMenuItem>
                    <DropdownMenuItem>Share Quotation</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between p-4">
        <span className="text-sm text-muted-foreground">
          Showing {quotations.length} quotations
        </span>
      </div>
    </div>
  );
};

export default QuotationTable;
