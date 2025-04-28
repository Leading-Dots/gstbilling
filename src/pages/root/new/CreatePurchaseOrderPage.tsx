import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CalendarIcon,
  Trash2,
  Plus,
  Save,
  ChevronRight,
  ChevronLeft,
  Download,
  Share2,
  Palette,
} from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import generatePDF from "react-to-pdf";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { HexColorPicker } from "react-colorful";
import { useNavigate } from "react-router-dom";
import { addPurchaseOrder } from "@/db/PurchaseOrder";
import { Vendor, PurchaseOrderStatus, Customer } from "@/API";
import CustomerSelector from "@/components/shared/CustomerSelector";
import { useAuth } from "@/hooks/useAuth";

// Define the form schema
const purchaseOrderFormSchema = z.object({
  purchaseOrderNumber: z.string().min(1, "Purchase order number is required"),
  purchaseOrderDate: z.date(),
  deliveryDate: z.date(),
  fromCompany: z.string().min(1, "Company name is required"),
  fromAddress: z.string().min(1, "Address is required"),
  fromGstin: z.string().min(15, "GSTIN must be 15 characters").max(15),
  fromEmail: z.string().email("Invalid email address"),
  fromPhone: z.string().min(1, "Phone number is required"),
  toCustomer: z.string().min(1, "Customer name is required"),
  toAddress: z.string().min(1, "Address is required"),
  toGstin: z.string().min(15, "GSTIN must be 15 characters").max(15),
  toEmail: z.string().email("Invalid email address"),
  toPhone: z.string().min(1, "Phone number is required"),
  items: z
    .array(
      z.object({
        description: z.string().min(1, "Description is required"),
        quantity: z.coerce.number().min(1, "Quantity must be at least 1"),
        rate: z.coerce.number().min(0, "Rate must be a positive number"),
        gstRate: z.coerce.number().min(0, "GST rate must be a positive number"),
        amount: z.coerce.number(),
      })
    )
    .min(1, "At least one item is required"),
  subtotal: z.coerce.number(),
  cgst: z.coerce.number(),
  sgst: z.coerce.number(),
  igst: z.coerce.number(),
  total: z.coerce.number(),
  notes: z.string().optional(),
  termsAndConditions: z.string().optional(),
});

type PurchaseOrderFormValues = z.infer<typeof purchaseOrderFormSchema>;

// Default company information
const companyInfo = {
  name: "Your Company Name",
  address: "123 Company Street, City, State, PIN",
  gstin: "33AABCX1234Y1ZX",
  email: "contact@yourcompany.com",
  phone: "+91 98765 12345",
};

// Purchase order themes
const purchaseOrderThemes = [
  {
    name: "Classic",
    primaryColor: "#4f46e5",
    secondaryColor: "#f9fafb",
    accentColor: "#e5e7eb",
  },
  {
    name: "Modern",
    primaryColor: "#0ea5e9",
    secondaryColor: "#f0f9ff",
    accentColor: "#e0f2fe",
  },
  {
    name: "Professional",
    primaryColor: "#0f766e",
    secondaryColor: "#f0fdfa",
    accentColor: "#ccfbf1",
  },
  {
    name: "Bold",
    primaryColor: "#b91c1c",
    secondaryColor: "#fef2f2",
    accentColor: "#fee2e2",
  },
  {
    name: "Elegant",
    primaryColor: "#4b5563",
    secondaryColor: "#f9fafb",
    accentColor: "#f3f4f6",
  },
];

const CreatePurchaseOrderPage = () => {
  const router = useNavigate();
  const { user } = useAuth();

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState(purchaseOrderThemes[0]);
  const [customColor, setCustomColor] = useState(
    purchaseOrderThemes[0].primaryColor
  );
  const [showColorPicker, setShowColorPicker] = useState(false);
  const targetRef = React.useRef<HTMLDivElement>(null);

  // Initialize the form with default values
  const form = useForm<PurchaseOrderFormValues>({
    resolver: zodResolver(purchaseOrderFormSchema),
    defaultValues: {
      purchaseOrderNumber: `PO-${String(new Date().getFullYear()).slice(
        2
      )}${String(new Date().getMonth() + 1).padStart(2, "0")}${String(
        Math.floor(Math.random() * 1000)
      ).padStart(3, "0")}`,
      purchaseOrderDate: new Date(),
      deliveryDate: new Date(new Date().setDate(new Date().getDate() + 14)),
      fromCompany: companyInfo.name,
      fromAddress: companyInfo.address,
      fromGstin: companyInfo.gstin,
      fromEmail: companyInfo.email,
      fromPhone: companyInfo.phone,
      toCustomer: "",
      toAddress: "",
      toGstin: "",
      toEmail: "",
      toPhone: "",
      items: [
        {
          description: "",
          quantity: 1,
          rate: 0,
          gstRate: 18,
          amount: 0,
        },
      ],
      subtotal: 0,
      cgst: 0,
      sgst: 0,
      igst: 0,
      total: 0,
      notes: "Please deliver as per agreed terms.",
      termsAndConditions:
        "1. Payment terms: Within 30 days of invoice receipt\n2. Delivery must include all items listed\n3. Quality standards as per specification agreed upon",
    },
  });

  // Calculate totals whenever items change
  const calculateTotals = (items: PurchaseOrderFormValues["items"]) => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.rate,
      0
    );

    // Determine if IGST or CGST+SGST based on vendor location
    // For demo, we'll use CGST+SGST
    const useIGST = false;

    const totalGST = items.reduce(
      (sum, item) => sum + (item.quantity * item.rate * item.gstRate) / 100,
      0
    );

    const cgst = useIGST ? 0 : totalGST / 2;
    const sgst = useIGST ? 0 : totalGST / 2;
    const igst = useIGST ? totalGST : 0;

    const total = subtotal + totalGST;

    form.setValue("subtotal", subtotal);
    form.setValue("cgst", cgst);
    form.setValue("sgst", sgst);
    form.setValue("igst", igst);
    form.setValue("total", total);
  };

  // Handle vendor selection
  const handleVendorSelect = (customer: Customer) => {
    setSelectedCustomer(customer);

    if (customer) {
      form.setValue("toCustomer", customer.company_name!!);
      form.setValue("toAddress", customer.billing_address!!);
      form.setValue("toGstin", customer.gstin!!);
      form.setValue("toEmail", customer.email!!);
      form.setValue("toPhone", customer.phone!!);
    }
  };

  // Handle item changes
  const updateItemAmount = (index: number) => {
    const items = form.getValues("items");
    const item = items[index];
    const amount = item.quantity * item.rate;
    items[index].amount = amount;
    form.setValue(`items.${index}.amount`, amount);
    calculateTotals(items);
  };

  // Add a new item
  const addItem = () => {
    const items = form.getValues("items");
    form.setValue("items", [
      ...items,
      {
        description: "",
        quantity: 1,
        rate: 0,
        gstRate: 18,
        amount: 0,
      },
    ]);
  };

  // Remove an item
  const removeItem = (index: number) => {
    const items = form.getValues("items");
    if (items.length > 1) {
      const newItems = [...items];
      newItems.splice(index, 1);
      form.setValue("items", newItems);
      calculateTotals(newItems);
    }
  };

  // Handle theme selection
  const handleThemeSelect = (themeName: string) => {
    const theme = purchaseOrderThemes.find((t) => t.name === themeName);
    if (theme) {
      setSelectedTheme(theme);
      setCustomColor(theme.primaryColor);
    }
  };

  // Navigate to next step
  const goToNextStep = async () => {
    if (currentStep === 1) {
      const result = await form.trigger();
      if (!result) {
        toast.error("Please fill in all required fields correctly");
        return;
      }

      if (form.getValues("items").length === 0) {
        toast.error("Please add at least one item to the purchase order");
        return;
      }

      setCurrentStep(2);
    }
  };

  // Navigate to previous step
  const goToPreviousStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  // Download purchase order as PDF
  const downloadPurchaseOrder = () => {
    const pdfContent = targetRef;
    if (pdfContent) {
      const pdf = generatePDF(pdfContent, {
        filename: `purchase-order-${form.getValues("purchaseOrderNumber")}.pdf`,
      });
      toast.success("Purchase order downloaded successfully!");
    } else {
      toast.error("Failed to download purchase order.");
    }
  };

  // Share purchase order
  const sharePurchaseOrder = () => {
    toast.success("Purchase order shared successfully!");
  };

  // Form submission
  const onSubmit = async (data: PurchaseOrderFormValues) => {
    try {
      const newPurchaseOrder = await addPurchaseOrder({
        companyID: user?.company_id!!,
        customerID: selectedCustomer?.id!!,
        purchase_order_status: PurchaseOrderStatus.SENT,
        purchase_order_number: data.purchaseOrderNumber,
        purchase_order_date: data.purchaseOrderDate.toISOString().split("T")[0],
        expected_delivery_date: data.deliveryDate.toISOString().split("T")[0],
        from_company: data.fromCompany,
        from_address: data.fromAddress,
        from_gstin: data.fromGstin,
        from_email: data.fromEmail,
        from_phone: data.fromPhone,
        to_customer: data.toCustomer, // Using "to_customer" field for vendor
        to_address: data.toAddress,
        to_gstin: data.toGstin,
        to_email: data.toEmail,
        to_phone: data.toPhone,
        items: JSON.stringify(data.items),
        subtotal: String(data.subtotal),
        cgst: String(data.cgst),
        sgst: String(data.sgst),
        igst: String(data.igst),
        total: String(data.total.toFixed(2)),
        notes: data.notes || "",
        terms_conditions: data.termsAndConditions || "",
      });
      if (newPurchaseOrder) {
        toast.success("Purchase order created successfully!");
        router("/purchase-orders");
      } else {
        toast.error("Failed to create purchase order.");
      }
    } catch (error) {
      console.error("Error creating purchase order:", error);
      toast.error("Failed to create purchase order.");
    }
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          {currentStep === 2 && (
            <Button
              type="button"
              variant="outline"
              onClick={goToPreviousStep}
              className="w-full sm:w-auto"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Edit
            </Button>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Create New Purchase Order
          </h2>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            {currentStep === 1 ? (
              <Button type="button" onClick={goToNextStep}>
                Preview
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button type="button" onClick={form.handleSubmit(onSubmit)}>
                <Save className="h-4 w-4" />
                Create Purchase Order
              </Button>
            )}
          </span>
        </div>
      </div>

      {currentStep === 1 ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Purchase Order Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Purchase Order Details</CardTitle>
                  <CardDescription>
                    Enter the basic details for this purchase order
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="purchaseOrderNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purchase Order Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="purchaseOrderDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Order Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className="w-full pl-3 text-left font-normal"
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="deliveryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Delivery Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className="w-full pl-3 text-left font-normal"
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Vendor Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Customer</CardTitle>
                  <CardDescription>
                    Choose an existing customer or enter details manually
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CustomerSelector onSelect={handleVendorSelect} />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Or enter customer details manually below
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* From and To Information */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* From (Your Company) */}
              <Card>
                <CardHeader>
                  <CardTitle>From (Your Company)</CardTitle>
                  <CardDescription>Your company details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fromCompany"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fromGstin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GSTIN</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fromAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={3} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="fromEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fromPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* To (Vendor) */}
              <Card>
                <CardHeader>
                  <CardTitle>To (Vendor)</CardTitle>
                  <CardDescription>Vendor details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="toCustomer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vendor Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="toGstin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GSTIN</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="toAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={3} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="toEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="toPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Purchase Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Purchase Order Items</CardTitle>
                <CardDescription>
                  Add the items you want to include in this purchase order
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-12 gap-2 font-medium">
                    <div className="col-span-5">Description</div>
                    <div className="col-span-1">Qty</div>
                    <div className="col-span-2">Rate (₹)</div>
                    <div className="col-span-1">GST %</div>
                    <div className="col-span-2">Amount (₹)</div>
                    <div className="col-span-1"></div>
                  </div>

                  {form.watch("items").map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-12 gap-2 items-start"
                    >
                      <div className="col-span-5">
                        <Input
                          {...form.register(`items.${index}.description`)}
                          onChange={(e) => {
                            form.setValue(
                              `items.${index}.description`,
                              e.target.value
                            );
                          }}
                        />
                      </div>
                      <div className="col-span-1">
                        <Input
                          type="number"
                          {...form.register(`items.${index}.quantity`, {
                            valueAsNumber: true,
                          })}
                          onChange={(e) => {
                            form.setValue(
                              `items.${index}.quantity`,
                              Number.parseInt(e.target.value) || 0
                            );
                            updateItemAmount(index);
                          }}
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          type="number"
                          step="0.01"
                          {...form.register(`items.${index}.rate`, {
                            valueAsNumber: true,
                          })}
                          onChange={(e) => {
                            form.setValue(
                              `items.${index}.rate`,
                              Number.parseFloat(e.target.value) || 0
                            );
                            updateItemAmount(index);
                          }}
                        />
                      </div>
                      <div className="col-span-1">
                        <Select
                          value={item.gstRate.toString()}
                          onValueChange={(value) => {
                            form.setValue(
                              `items.${index}.gstRate`,
                              Number.parseInt(value)
                            );
                            updateItemAmount(index);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0%</SelectItem>
                            <SelectItem value="5">5%</SelectItem>
                            <SelectItem value="12">12%</SelectItem>
                            <SelectItem value="18">18%</SelectItem>
                            <SelectItem value="28">28%</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-2">
                        <Input
                          type="number"
                          step="0.01"
                          value={item.amount.toFixed(2)}
                          readOnly
                        />
                      </div>
                      <div className="col-span-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {form.formState.errors.items && (
                        <div className="col-span-12">
                          <p className="text-sm text-destructive">
                            {form.formState.errors.items.message}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={addItem}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Item
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Totals */}
            <Card>
              <CardHeader>
                <CardTitle>Purchase Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Subtotal:</span>
                    <span>₹{form.watch("subtotal").toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-medium">CGST:</span>
                    <span>₹{form.watch("cgst").toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">SGST:</span>
                    <span>₹{form.watch("sgst").toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">IGST:</span>
                    <span>₹{form.watch("igst").toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>₹{form.watch("total").toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notes and Terms */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Notes</CardTitle>
                  <CardDescription>
                    Add any additional notes for this purchase order
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Terms & Conditions</CardTitle>
                  <CardDescription>
                    Specify the terms and conditions for this purchase order
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="termsAndConditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router("/purchase-orders")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        // Preview Step
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="overflow-hidden">
                <CardHeader
                  className="flex flex-row items-center justify-between"
                  style={{ backgroundColor: customColor, color: "white" }}
                >
                  <CardTitle>Purchase Order Preview</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={downloadPurchaseOrder}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={sharePurchaseOrder}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0" ref={targetRef}>
                  <div className="p-8 space-y-8">
                    {/* Purchase Order Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                      {/* Company Logo & Details */}
                      <div className="space-y-4 flex-1">
                        <h2 className="text-3xl font-bold tracking-tight">
                          {form.getValues("fromCompany")}
                        </h2>
                        <div className="space-y-2">
                          <p className="whitespace-pre-line text-sm text-muted-foreground leading-relaxed">
                            {form.getValues("fromAddress")}
                          </p>
                          <p className="text-sm font-medium">
                            GSTIN: {form.getValues("fromGstin")}
                          </p>
                          <div className="text-sm text-muted-foreground">
                            <p>{form.getValues("fromEmail")}</p>
                            <p>{form.getValues("fromPhone")}</p>
                          </div>
                        </div>
                      </div>

                      {/* Purchase Order Details */}
                      <div className="md:text-right space-y-4">
                        <h1
                          className="text-4xl font-bold tracking-tight"
                          style={{ color: customColor }}
                        >
                          PURCHASE ORDER
                        </h1>
                        <div className="space-y-1">
                          <div className="flex justify-between md:justify-end gap-4">
                            <span className="text-muted-foreground">
                              PO Number:
                            </span>
                            <span className="font-medium">
                              {form.getValues("purchaseOrderNumber")}
                            </span>
                          </div>
                          <div className="flex justify-between md:justify-end gap-4">
                            <span className="text-muted-foreground">Date:</span>
                            <span className="font-medium">
                              {format(
                                form.getValues("purchaseOrderDate"),
                                "dd MMM yyyy"
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between md:justify-end gap-4">
                            <span className="text-muted-foreground">
                              Delivery Date:
                            </span>
                            <span className="font-medium">
                              {format(
                                form.getValues("deliveryDate"),
                                "dd MMM yyyy"
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vendor Section */}
                    <div
                      className="border rounded-lg p-6 space-y-3"
                      style={{ borderColor: customColor }}
                    >
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: customColor }}
                      >
                        Vendor:
                      </h3>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold">
                          {form.getValues("toCustomer")}
                        </h4>
                        <p className="whitespace-pre-line text-sm text-muted-foreground leading-relaxed">
                          {form.getValues("toAddress")}
                        </p>
                        <p className="text-sm font-medium">
                          GSTIN: {form.getValues("toGstin")}
                        </p>
                        <div className="text-sm text-muted-foreground">
                          <p>{form.getValues("toEmail")}</p>
                          <p>{form.getValues("toPhone")}</p>
                        </div>
                      </div>
                    </div>

                    {/* Purchase Order Items */}
                    <div className="overflow-x-auto rounded-lg border">
                      <table className="w-full">
                        <thead>
                          <tr
                            style={{
                              backgroundColor: customColor,
                              color: "white",
                            }}
                          >
                            <th className="px-6 py-3 text-left">Description</th>
                            <th className="px-6 py-3 text-right">Qty</th>
                            <th className="px-6 py-3 text-right">Rate (₹)</th>
                            <th className="px-6 py-3 text-right">GST %</th>
                            <th className="px-6 py-3 text-right">Amount (₹)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {form.getValues("items").map((item, index) => (
                            <tr key={index} className="hover:bg-muted/50">
                              <td className="px-6 py-4 text-left">
                                {item.description}
                              </td>
                              <td className="px-6 py-4 text-right">
                                {item.quantity}
                              </td>
                              <td className="px-6 py-4 text-right">
                                {item.rate.toFixed(2)}
                              </td>
                              <td className="px-6 py-4 text-right">
                                {item.gstRate}%
                              </td>
                              <td className="px-6 py-4 text-right font-medium">
                                {item.amount.toFixed(2)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Purchase Order Summary */}
                    <div className="flex justify-end">
                      <div className="w-full md:w-72 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Subtotal:
                          </span>
                          <span className="font-medium">
                            ₹{form.getValues("subtotal").toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">CGST:</span>
                          <span className="font-medium">
                            ₹{form.getValues("cgst").toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">SGST:</span>
                          <span className="font-medium">
                            ₹{form.getValues("sgst").toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">IGST:</span>
                          <span className="font-medium">
                            ₹{form.getValues("igst").toFixed(2)}
                          </span>
                        </div>
                        <div
                          className="flex justify-between pt-2 border-t text-lg font-bold"
                          style={{ borderColor: customColor }}
                        >
                          <span>Total:</span>
                          <span>₹{form.getValues("total").toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Notes and Terms */}
                    <div className="grid gap-8 md:grid-cols-2 pt-4 border-t">
                      <div className="space-y-2">
                        <h3
                          className="font-semibold"
                          style={{ color: customColor }}
                        >
                          Notes:
                        </h3>
                        <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                          {form.getValues("notes")}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3
                          className="font-semibold"
                          style={{ color: customColor }}
                        >
                          Terms & Conditions:
                        </h3>
                        <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                          {form.getValues("termsAndConditions")}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Customize Purchase Order</CardTitle>
                  <CardDescription>
                    Change the appearance of your purchase order
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Select Theme</label>
                    <Select
                      value={selectedTheme.name}
                      onValueChange={handleThemeSelect}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a theme" />
                      </SelectTrigger>
                      <SelectContent>
                        {purchaseOrderThemes.map((theme) => (
                          <SelectItem key={theme.name} value={theme.name}>
                            {theme.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Primary Color</label>
                    <div className="flex items-center mt-2 space-x-2">
                      <div
                        className="w-10 h-10 rounded-md cursor-pointer border"
                        style={{ backgroundColor: customColor }}
                        onClick={() => setShowColorPicker(!showColorPicker)}
                      ></div>
                      <Input
                        value={customColor}
                        onChange={(e) => setCustomColor(e.target.value)}
                        className="w-32"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setShowColorPicker(!showColorPicker)}
                      >
                        <Palette className="h-4 w-4" />
                      </Button>
                    </div>
                    {showColorPicker && (
                      <div className="mt-2">
                        <HexColorPicker
                          color={customColor}
                          onChange={setCustomColor}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-between">
            <div className="space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => router("/purchase-orders")}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePurchaseOrderPage;
