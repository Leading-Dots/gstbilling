import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  Plus,
  Search,
  UserCircle,
  
} from "lucide-react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCustomers } from "@/db/Customers";
import { Customer, ProfileStatus } from "@/API";
import CustomerTable from "@/components/tables/CustomerTable";
import { useAuth } from "@/hooks/useAuth";

const customers = [
  {
    id: "CUST-001",
    name: "Acme Corp",
    contactPerson: "John Smith",
    email: "john@acmecorp.com",
    phone: "+91 98765 43210",
    address: "123 Business Park, Mumbai, MH",
    status: "Active",
    gstin: "27AABCU9603R1ZX",
    outstandingAmount: "₹12,500.00",
  },
  {
    id: "CUST-002",
    name: "TechSolutions",
    contactPerson: "Priya Sharma",
    email: "priya@techsolutions.com",
    phone: "+91 87654 32109",
    address: "456 Tech Hub, Bangalore, KA",
    status: "Active",
    gstin: "29AADCT1234R1ZX",
    outstandingAmount: "₹8,900.00",
  },
  {
    id: "CUST-003",
    name: "Retail Kings",
    contactPerson: "Rajesh Kumar",
    email: "rajesh@retailkings.com",
    phone: "+91 76543 21098",
    address: "789 Market Street, Delhi, DL",
    status: "Active",
    gstin: "07AAECR5678P1ZX",
    outstandingAmount: "₹0.00",
  },
  {
    id: "CUST-004",
    name: "Marketing Junction",
    contactPerson: "Anita Desai",
    email: "anita@marketingjunction.com",
    phone: "+91 65432 10987",
    address: "101 Ad Avenue, Chennai, TN",
    status: "Inactive",
    gstin: "33AABCM9012Q1ZX",
    outstandingAmount: "₹24,650.00",
  },
  {
    id: "CUST-005",
    name: "Johnson & Daughters",
    contactPerson: "Vikram Johnson",
    email: "vikram@johnsondaughters.com",
    phone: "+91 54321 09876",
    address: "202 Family Road, Hyderabad, TS",
    status: "Active",
    gstin: "36AABCJ3456R1ZX",
    outstandingAmount: "₹5,200.00",
  },
  {
    id: "CUST-006",
    name: "Global Traders",
    contactPerson: "Meena Patel",
    email: "meena@globaltraders.com",
    phone: "+91 43210 98765",
    address: "303 Import Plaza, Ahmedabad, GJ",
    status: "Active",
    gstin: "24AABCG7890S1ZX",
    outstandingAmount: "₹18,950.00",
  },
  {
    id: "CUST-007",
    name: "City Services",
    contactPerson: "Arjun Singh",
    email: "arjun@cityservices.com",
    phone: "+91 32109 87654",
    address: "404 Urban Center, Kolkata, WB",
    status: "Inactive",
    gstin: "19AABCC2345T1ZX",
    outstandingAmount: "₹7,800.00",
  },
  {
    id: "CUST-008",
    name: "Quantum Enterprises",
    contactPerson: "Sunita Reddy",
    email: "sunita@quantumenterprise.com",
    phone: "+91 21098 76543",
    address: "505 Science Park, Pune, MH",
    status: "Active",
    gstin: "27AABCQ6789U1ZX",
    outstandingAmount: "₹0.00",
  },
];

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const {user} = useAuth();

  useEffect(() => {
    const listCustomers = async () => {
      try {
        const customerData = await getAllCustomers(user.companyID);
        if (customerData) {
          setCustomers(customerData);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };
    listCustomers();
  }, []);

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8 container max-w-[100vw] md:max-w-6xl flex flex-col">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <p className="text-muted-foreground">
            Manage your customer information and track outstanding balances
          </p>
        </div>
        <Link to="/customers/new">
          <Button className="ml-auto">
            <Plus className="h-4 w-4" />
            Add Customer
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search customers..."
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
            <CardTitle className="text-sm font-medium">
              Total Customers
            </CardTitle>
            <UserCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Customers
            </CardTitle>
            <UserCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">
              75% of total customers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Outstanding
            </CardTitle>
            <UserCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹78,000.00</div>
            <p className="text-xs text-muted-foreground">From 6 customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Customer Value
            </CardTitle>
            <UserCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹9,750.00</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Customers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="outstanding">With Outstanding</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <CustomerTable customers={customers} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <CustomerTable
                customers={customers.filter(
                  (customer) =>
                    customer.customer_status === ProfileStatus.ACTIVE
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inactive" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <CustomerTable
                customers={customers.filter(
                  (customer) =>
                    customer.customer_status === ProfileStatus.INACTIVE
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="outstanding" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <CustomerTable
                customers={customers.filter(
                  (customer) => customer.outstanding_amount!! > 0
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
