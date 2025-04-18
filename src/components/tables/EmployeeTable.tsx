import { CompanyEmployee, Customer, EmployeeStatus, ProfileStatus } from "@/API";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Mail, Phone, MoreHorizontal, Download } from "lucide-react";
import { Link } from "react-router-dom";

const EmployeeTable = ({ employees }: { employees: CompanyEmployee[] }) => {
  return (
    <div className="w-full">
      <Table className="w-full table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">ID</TableHead>
            <TableHead className="w-48">Name</TableHead>
            <TableHead className="w-64">Email</TableHead>
            <TableHead className="w-32">Status</TableHead>
            <TableHead className="w-16"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium truncate">
                {index + 1}
              </TableCell>
              <TableCell className="truncate">{employee.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 truncate">
                  <Mail className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
                  {employee.email}
                </div>
              </TableCell>

              <TableCell>
                <div
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    employee.profile_status === EmployeeStatus.ACTIVE
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {employee.profile_status}
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
                      <Link to={`/employees/${employee.id}/edit`}>
                        Edit Customer
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                    <DropdownMenuItem>Create Quotation</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between p-4">
        <span className="text-sm text-muted-foreground">
          Showing {employees.length} employees
        </span>
      </div>
    </div>
  );
};
export default EmployeeTable;
