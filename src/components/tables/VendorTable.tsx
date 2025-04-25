import { Vendor, ProfileStatus } from "@/API";
import { Button } from "../ui/button";
import { Mail, Phone, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

const VendorTable = ({ vendors }: { vendors: Vendor[] }) => {
  return (
    <div className="mx-auto w-full ">
      <Table className="w-full table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">ID</TableHead>
            <TableHead className="w-32">Name</TableHead>
            <TableHead className="w-32">Contact Person</TableHead>
            <TableHead className="w-32">Email</TableHead>
            <TableHead className="w-48">Phone</TableHead>
            <TableHead className="w-32">Status</TableHead>
            <TableHead className="w-16"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendors.map((vendor) => (
            <TableRow key={vendor.id}>
              <TableCell className="font-medium truncate">
                {vendor.vendor_id}
              </TableCell>
              <TableCell className="truncate">{vendor.company_name}</TableCell>
              <TableCell className="truncate">{vendor.owner_name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 truncate">
                  <Mail className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
                  {vendor.email}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1 truncate">
                  <Phone className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
                  {vendor.phone}
                </div>
              </TableCell>
              <TableCell>
                <div
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    vendor.vendor_status === ProfileStatus.ACTIVE
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {vendor.vendor_status}
                </div>
              </TableCell>
             
              <TableCell>
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
                    <DropdownMenuItem asChild>
                      <Link to={`/vendors/${vendor.id}/edit`}>Edit Vendor</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Create Purchase</DropdownMenuItem>
                    <DropdownMenuItem>Create Purchase Order</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between p-4">
        <span className="text-sm text-muted-foreground">
          Showing {vendors.length} vendors
        </span>
      </div>
    </div>
  );
};

export default VendorTable;
