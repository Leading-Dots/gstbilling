import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import { InventoryItem } from "@/API";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface SelectInventoryItemTableProps {
  open: boolean;
  data: InventoryItem[];
  onSelect: (selectedItems: InventoryItem[]) => void;
  onClose: () => void;
}

export default function SelectInventoryItemTable({
  open,
  data,
  onSelect,
  onClose,
}: SelectInventoryItemTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});
  
  // Reset selection when dialog opens
  useEffect(() => {
    if (open) {
      setSelectedItems({});
      setSearchQuery("");
    }
  }, [open]);

  // Filter data based on search query
  const filteredData = React.useMemo(() => {
    if (!searchQuery) return data;
    
    const searchLower = searchQuery.toLowerCase();
    return data.filter((item) => {
      return (
        item.name?.toLowerCase().includes(searchLower) ||
        item.item_code?.toLowerCase().includes(searchLower) ||
        item.hsn_number?.toLowerCase().includes(searchLower) ||
        item.description?.toLowerCase().includes(searchLower)
      );
    });
  }, [data, searchQuery]);

  // Handle row selection
  const toggleSelectItem = (id: string) => {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Handle select all
  const toggleSelectAll = () => {
    const allSelected = filteredData.every(item => selectedItems[item.id]);
    
    if (allSelected) {
      // Deselect all
      const newSelectedItems = { ...selectedItems };
      filteredData.forEach(item => {
        newSelectedItems[item.id] = false;
      });
      setSelectedItems(newSelectedItems);
    } else {
      // Select all
      const newSelectedItems = { ...selectedItems };
      filteredData.forEach(item => {
        newSelectedItems[item.id] = true;
      });
      setSelectedItems(newSelectedItems);
    }
  };

  // Get selected items data
  const getSelectedItemsData = () => {
    return data.filter(item => selectedItems[item.id]);
  };

  // Handle confirm selection
  const handleConfirmSelection = () => {
    onSelect(getSelectedItemsData());
    onClose();
  };

  // Count selected items
  const selectedCount = Object.values(selectedItems).filter(Boolean).length;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Select Inventory Items</DialogTitle>
        </DialogHeader>
        
        <div className="flex items-center gap-2 border rounded-md px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items by name, SKU, or HSN code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          {searchQuery && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSearchQuery("")}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        <ScrollArea className="flex-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40px]">
                  <Checkbox
                    checked={
                      filteredData.length > 0 &&
                      filteredData.every(item => selectedItems[item.id])
                    }
                    onCheckedChange={toggleSelectAll}
                    aria-label="Select all"
                  />
                </TableHead>
                <TableHead>Item Name</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>HSN Code</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-center">Stock</TableHead>
                <TableHead className="text-center">Tax Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <TableRow 
                    key={item.id}
                    className={cn(selectedItems[item.id] && "bg-muted")}
                    onClick={() => toggleSelectItem(item.id)}
                  >
                    <TableCell>
                      <Checkbox
                        checked={selectedItems[item.id] || false}
                        onCheckedChange={(checked) => {
                          setSelectedItems(prev => ({
                            ...prev,
                            [item.id]: !!checked
                          }));
                        }}
                        aria-label="Select row"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.item_code}</TableCell>
                    <TableCell>{item.hsn_number}</TableCell>
                    <TableCell className="text-right">₹{parseFloat(item.unit || "0").toFixed(2)}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={parseInt(item.current_stock || "0") > 10 ? "default" : "destructive"} className="mx-auto">
                        {item.current_stock}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">{item.tax_rate}%</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    {searchQuery ? "No matching items found." : "No items available."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
        
        <DialogFooter className="flex justify-between items-center pt-2 border-t">
          <div className="text-sm text-muted-foreground">
            {selectedCount} item{selectedCount !== 1 ? 's' : ''} selected
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleConfirmSelection} disabled={selectedCount === 0}>
              Add Selected Items
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}