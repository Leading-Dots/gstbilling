import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { PurchaseOrder, PurchaseOrderStatus } from "@/API";
import { getAllPurchaseOrders } from "@/db/PurchaseOrder";
import PurchaseOrderTable from "@/components/tables/PurchaseOrderTable";
import Loader1 from "@/components/loaders/Loader1";
import { useAuth } from "@/hooks/useAuth";

const PurchaseOrderPage = () => {
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  console.log("PurchaseOrderPage rendered");

  useEffect(() => {
    const listPurchaseOrders = async () => {
      try {
        const purchaseOrderData = await getAllPurchaseOrders(user.company_id);
        if (purchaseOrderData) {
          setPurchaseOrders(purchaseOrderData || []);
        }
      } catch (error) {
        console.error("Error fetching purchase orders:", error);
      } finally {
        setLoading(false);
      }
    };
    listPurchaseOrders();
  }, []);

  if (loading) {
    return <Loader1 />;
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8 container max-w-[100vw] md:max-w-6xl flex flex-col">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Purchase Orders</h2>
          <p className="text-muted-foreground">
            Create, manage and track your purchase orders
          </p>
        </div>
        <Link to="/purchase-orders/new">
          <Button className="ml-auto">
            <Plus className="h-4 w-4" />
            New Purchase Order
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search purchase orders..."
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <PurchaseOrderTable purchaseOrders={purchaseOrders!!} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="confirmed" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <PurchaseOrderTable
                purchaseOrders={(purchaseOrders ?? []).filter(
                  (order) => order.purchase_order_status === PurchaseOrderStatus.CONFIRMED
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <PurchaseOrderTable
                purchaseOrders={(purchaseOrders ?? []).filter(
                  (order) => order.purchase_order_status === PurchaseOrderStatus.DRAFT
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <PurchaseOrderTable
                purchaseOrders={(purchaseOrders ?? []).filter(
                  (order) => order.purchase_order_status === PurchaseOrderStatus.CANCELLED
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default PurchaseOrderPage;