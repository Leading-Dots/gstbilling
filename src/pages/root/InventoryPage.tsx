import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Package,
  PackagePlus,
  ArrowDownToLine,
  ArrowUpToLine,
  FileBarChart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InventoryTable from "@/components/tables/InventoryTable";
import { getInventoryItemsByCompanyID } from "@/db/InventoryItems";
import { useAuth } from "@/hooks/useAuth";
import Loader1 from "@/components/loaders/Loader1";

export default function InventoryPage() {
  const navigate = useNavigate();
  const {user} = useAuth()
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    lowStock: 0,
    outOfStock: 0,
    inStock: 0,
  });

  useEffect(() => {
    fetchInventoryItems();
  }, []);

  const fetchInventoryItems = async () => {
    setLoading(true);
    try {
      const inventoryData = await getInventoryItemsByCompanyID(user.company_id);

      setInventoryItems(inventoryData);

      // Calculate stats
      const lowStock = inventoryData.filter(
        (item) => item.stock_status === "LOW_STOCK"
      ).length;
      const outOfStock = inventoryData.filter(
        (item) => item.stock_status === "OUT_OF_STOCK"
      ).length;
      const inStock = inventoryData.filter(
        (item) => item.stock_status === "IN_STOCK"
      ).length;

      setStats({
        total: inventoryData.length,
        lowStock,
        outOfStock,
        inStock,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching inventory items:", error);
      setLoading(false);
    }
  };


  if(loading) {
    return <Loader1 />
  }
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8 container max-w-[100vw] md:max-w-6xl flex flex-col">
      <div className="flex items-center justify-between space-y-2 mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
          <p className="text-muted-foreground">Manage your product inventory</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <ArrowDownToLine className="h-4 w-4" />
            Import
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <ArrowUpToLine className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <FileBarChart className="h-4 w-4" />
            Report
          </Button>
          <Button onClick={() => navigate("/inventory/create")}>
            <PackagePlus className="h-4 w-4" />
            Add Item
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-20" />
            ) : (
              <div className="text-2xl font-bold">{stats.total}</div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Stock</CardTitle>
            <div className="h-4 w-4 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-20" />
            ) : (
              <div className="text-2xl font-bold">{stats.inStock}</div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
            <div className="h-4 w-4 rounded-full bg-yellow-500" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-20" />
            ) : (
              <div className="text-2xl font-bold text-yellow-600">
                {stats.lowStock}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
            <div className="h-4 w-4 rounded-full bg-red-500" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-20" />
            ) : (
              <div className="text-2xl font-bold text-red-600">
                {stats.outOfStock}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="in-stock">In Stock</TabsTrigger>
          <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
          <TabsTrigger value="out-of-stock">Out of Stock</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              {loading ? (
                <div className="space-y-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                </div>
              ) : (
                <InventoryTable
                  inventoryItems={inventoryItems}
                  onRefresh={fetchInventoryItems}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="in-stock" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              {loading ? (
                <div className="space-y-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                </div>
              ) : (
                <InventoryTable
                  inventoryItems={inventoryItems.filter(
                    (item) => item.stock_status === "IN_STOCK"
                  )}
                  onRefresh={fetchInventoryItems}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="low-stock" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              {loading ? (
                <div className="space-y-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                </div>
              ) : (
                <InventoryTable
                  inventoryItems={inventoryItems.filter(
                    (item) => item.stock_status === "LOW_STOCK"
                  )}
                  onRefresh={fetchInventoryItems}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="out-of-stock" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              {loading ? (
                <div className="space-y-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                </div>
              ) : (
                <InventoryTable
                  inventoryItems={inventoryItems.filter(
                    (item) => item.stock_status === "OUT_OF_STOCK"
                  )}
                  onRefresh={fetchInventoryItems}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
