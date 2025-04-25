import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  Plus,
  Search,
  Building,
  Mail,
  Phone,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { getAllVendors } from "@/db/Vendors";
import VendorTable from "@/components/tables/VendorTable";
import { ProfileStatus, Vendor } from "@/API";

const vendors = [
  {
    id: "VEN-001",
    name: "Supply Masters",
    contactPerson: "Rahul Verma",
    email: "rahul@supplymasters.com",
    phone: "+91 98765 12345",
    address: "123 Industrial Area, Mumbai, MH",
    status: "Active",
    gstin: "27AABCS1234R1ZX",
    outstandingAmount: "₹0.00",
  },
  {
    id: "VEN-002",
    name: "Tech Components",
    contactPerson: "Neha Gupta",
    email: "neha@techcomponents.com",
    phone: "+91 87654 23456",
    address: "456 Electronics City, Bangalore, KA",
    status: "Active",
    gstin: "29AADCT5678R1ZX",
    outstandingAmount: "₹15,600.00",
  },
  {
    id: "VEN-003",
    name: "Paper Suppliers",
    contactPerson: "Amit Patel",
    email: "amit@papersuppliers.com",
    phone: "+91 76543 34567",
    address: "789 Trade Center, Delhi, DL",
    status: "Active",
    gstin: "07AAECR9012P1ZX",
    outstandingAmount: "₹8,200.00",
  },
  {
    id: "VEN-004",
    name: "Office Essentials",
    contactPerson: "Kavita Reddy",
    email: "kavita@officeessentials.com",
    phone: "+91 65432 45678",
    address: "101 Business Park, Chennai, TN",
    status: "Inactive",
    gstin: "33AABCO3456Q1ZX",
    outstandingAmount: "₹0.00",
  },
  {
    id: "VEN-005",
    name: "Logistics Pro",
    contactPerson: "Sanjay Mehta",
    email: "sanjay@logisticspro.com",
    phone: "+91 54321 56789",
    address: "202 Transport Hub, Hyderabad, TS",
    status: "Active",
    gstin: "36AABCL7890R1ZX",
    outstandingAmount: "₹22,450.00",
  },
  {
    id: "VEN-006",
    name: "Hardware Solutions",
    contactPerson: "Deepa Shah",
    email: "deepa@hardwaresolutions.com",
    phone: "+91 43210 67890",
    address: "303 Tools Complex, Ahmedabad, GJ",
    status: "Active",
    gstin: "24AABCH2345S1ZX",
    outstandingAmount: "₹0.00",
  },
];

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  const fetchVendors = async () => {
    setLoading(true);
    try {
      // Fetch vendors from the database
      const vendorData = await getAllVendors(user.company_id);
      setVendors(vendorData);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Vendors</h2>
          <p className="text-muted-foreground">
            Manage your supplier information and track payables
          </p>
        </div>
        <Link to="/vendors/new">
          <Button className="ml-auto">
            <Plus className="h-4 w-4" />
            Add Vendor
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search vendors..."
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vendors</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">+1 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Vendors
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              83% of total vendors
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Payables
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹46,250.00</div>
            <p className="text-xs text-muted-foreground">To 3 vendors</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Purchase Value
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,350.00</div>
            <p className="text-xs text-muted-foreground">
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Vendors</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="payables">With Payables</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <VendorTable vendors={vendors} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <VendorTable
                vendors={vendors.filter(
                  (vendor) => vendor.vendor_status === "ACTIVE"
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inactive" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <VendorTable
                vendors={vendors.filter(
                  (vendor) => vendor.vendor_status === "INACTIVE"
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

      
      </Tabs>
    </div>
  );
}
