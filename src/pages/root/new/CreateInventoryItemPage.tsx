"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { showToast } from "@/lib/toast";
import { getGSTInfo } from "@/lib/taxCalc"; // Adjust import path as needed
import { CreateInventoryItemInput } from "@/API";
import { useAuth } from "@/hooks/useAuth";
import { addInventoryItem } from "@/db/InventoryItems";
import { useNavigate } from "react-router-dom";

// Define the StockStatus enum since it wasn't provided
enum StockStatus {
  IN_STOCK = "IN_STOCK",
  LOW_STOCK = "LOW_STOCK",
  OUT_OF_STOCK = "OUT_OF_STOCK",
}

// Create a schema for form validation
const formSchema = z.object({
  hsn_number: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  unit: z.string().min(1, "Unit is required"),
  tax_rate: z.string().optional(),
  current_stock: z.string().min(1, "Current stock is required"),
  stock_status: z.nativeEnum(StockStatus),
  category: z.string().optional(),
  brand: z.string().optional(),
  cgst: z.string().optional(),
  sgst: z.string().optional(),
  igst: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreateInventoryItem() {
  const { user } = useAuth(); // Assuming you have a useAuth hook to get user info
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useNavigate();

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hsn_number: "",
      name: "",
      description: "",
      unit: "",
      tax_rate: "0",
      current_stock: "",
      stock_status: StockStatus.IN_STOCK,
      category: "",
      brand: "",
      cgst: "",
      sgst: "",
      igst: "",
    },
  });

  // Import the utility function to get category from HSN number

  // Function to handle HSN number change
  const handleHSNChange = (hsnNumber: string) => {
    if (hsnNumber && hsnNumber.length > 3) {
      const gstData = getGSTInfo(hsnNumber);

      if (gstData) {
        form.setValue("category", gstData.category);
        form.setValue("cgst", gstData.cgst.toString());
        form.setValue("sgst", gstData.sgst.toString());
        form.setValue("igst", gstData.igst.toString());
      }
    }
  };

  // Watch for changes to the hsn_number field
  const hsnNumber = form.watch("hsn_number");

  // Effect to trigger category lookup when the HSN number changes
  useEffect(() => {
    if (hsnNumber) {
      handleHSNChange(hsnNumber);
    }
  }, [hsnNumber]);

  // Handle form submission
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      // Here you would typically call an API to save the data
      console.log("Form data:", data);


      const inventoryItem : CreateInventoryItemInput = {
        companyID: user.company_id,
        item_code: `ITEM-${String(new Date().getFullYear()).slice(2)}${String(
          new Date().getMonth() + 1
        ).padStart(2, "0")}${String(Math.floor(Math.random() * 1000)).padStart(
          3,
          "0"
        )}`,
        hsn_number: data.hsn_number,
        name: data.name,
        description: data.description,
        unit: data.unit,
        tax_rate: data.tax_rate,
        current_stock: data.current_stock,
        stock_status: data.stock_status,
        category: data.category,
        brand: data.brand,
        cgst: data.cgst,
        sgst: data.sgst,
        igst: data.igst,
      }


      const newInvertoryItem = await addInventoryItem(inventoryItem);

      if(newInvertoryItem) {
        showToast("Inventory item created successfully", "success");
        router("/inventory");
      } else {
        showToast("Failed to create inventory item", "error");
      }
   
    } catch (error) {
      console.error("Error creating inventory item:", error);
      showToast("Error creating inventory item", "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col justify-between">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Create Inventory Item</CardTitle>
            <CardDescription>
              Add a new item to your inventory with all the necessary details.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                  control={form.control}
                  name="hsn_number"
                  render={({ field }) => (
                    <FormItem>
                    <FormLabel>HSN Number</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                      <Input placeholder="HSN Number" {...field} />
                      </FormControl>
                      <Button 
                      type="button" 
                      variant="secondary" 
                      onClick={() => handleHSNChange(field.value)}
                      disabled={!field.value || field.value.length < 4}
                      >
                      Recalculate Tax
                      </Button>
                    </div>
                    <FormDescription>
                      Enter HSN code to automatically fetch tax rates
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                  )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Item Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Product name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter item description"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="unit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unit*</FormLabel>
                        <FormControl>
                          <Input placeholder="pcs, kg, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="current_stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Stock*</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="stock_status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stock Status*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={StockStatus.IN_STOCK}>
                              In Stock
                            </SelectItem>
                            <SelectItem value={StockStatus.LOW_STOCK}>
                              Low Stock
                            </SelectItem>
                            <SelectItem value={StockStatus.OUT_OF_STOCK}>
                              Out of Stock
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input placeholder="Category" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brand</FormLabel>
                        <FormControl>
                          <Input placeholder="Brand" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator className="my-4" />
                <h3 className="text-lg font-medium">Tax Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <FormField
                    control={form.control}
                    name="tax_rate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rate (₹)</FormLabel>
                        <FormControl>
                          <Input placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cgst"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CGST (%)</FormLabel>
                        <FormControl>
                          <Input placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sgst"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SGST (%)</FormLabel>
                        <FormControl>
                          <Input placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="igst"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>IGST (%)</FormLabel>
                        <FormControl>
                          <Input placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 border-t p-6">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => form.reset()}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-1">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Saving...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Save className="h-4 w-4" />
                      Save Item
                    </span>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}
