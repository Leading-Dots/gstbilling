import { Download, FileText, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { PurchaseOrder, PurchaseOrderStatus } from "@/API";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const PurchaseOrderTable = ({
  purchaseOrders,
}: {
  purchaseOrders: PurchaseOrder[];
}) => {
  return (
    <div className="">
      <Table className="w-full table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">S.No</TableHead>
            <TableHead className="w-48">PO Number</TableHead>
            <TableHead className="w-48">Vendor</TableHead>
            <TableHead className="w-32">Order Date</TableHead>
            <TableHead className="w-32">Delivery Date</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead className="w-32"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchaseOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">
                {purchaseOrders.indexOf(order) + 1}
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  {order.purchase_order_number}
                </div>
              </TableCell>
              <TableCell>{order.to_customer}</TableCell>
              <TableCell>{order.purchase_order_date}</TableCell>
              <TableCell>{order.purchase_order_date}</TableCell>
              <TableCell>
                <div
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    order.purchase_order_status ===
                    PurchaseOrderStatus.CONFIRMED
                      ? "bg-emerald-100 text-emerald-800"
                      : order.purchase_order_status ===
                        PurchaseOrderStatus.RECIEVED
                      ? "bg-yellow-100 text-yellow-800"
                      : order.purchase_order_status ===
                        PurchaseOrderStatus.CANCELLED
                      ? "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.purchase_order_status}
                </div>
              </TableCell>
              <TableCell className="text-right">{order.total}</TableCell>
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
                      <Link to={`/purchase-orders/${order.id}/view`}>
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={`/purchase-orders/${order.id}/edit`}>
                        Edit Order
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>View Vendor Details</DropdownMenuItem>
                    <DropdownMenuItem>Download PDF</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between p-4">
        <span className="text-sm text-muted-foreground">
          Showing {purchaseOrders.length} purchase orders
        </span>
      </div>
    </div>
  );
};

export default PurchaseOrderTable;
