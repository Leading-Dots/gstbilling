import { Customer } from "@/API";
import { getAllCustomers } from "@/db/Customers";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { Search } from "lucide-react";

interface CustomerSelectorProps {
  onSelect?: (customer: Customer) => void;
  defaultSelectCustomer?: Customer | null;
}

const CustomerSelector: React.FC<CustomerSelectorProps> = ({
  onSelect,
  defaultSelectCustomer,
}) => {
  const [selectedCustomer, setSelectedCustomer] =
    React.useState<Customer | null>(defaultSelectCustomer || null);
  const [customers, setCustomers] = React.useState<Customer[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const fetchCustomers = async () => {
    try {
      const customerData = await getAllCustomers();
      setCustomers(customerData || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer!.owner_name!.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
    onSelect?.(customer);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size={"lg"}
          className="flex gap-2 items-center"
        >
          <Search className="h-4 w-4" />
          {selectedCustomer
            ? `${selectedCustomer.company_name} - ${selectedCustomer.owner_name}`
            : "Select Customer"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Select Customer</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {loading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : (
            filteredCustomers.map((customer) => (
              <div
                key={customer.id}
                onClick={() => handleSelect(customer)}
                className="p-2 hover:bg-gray-100 cursor-pointer rounded"
              >
                {customer.owner_name}
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerSelector;
