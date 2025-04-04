import { useState } from "react";
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
import { addInvoice } from "@/db/Invoices";
import { Customer, InvoiceStatus } from "@/API";
import CustomerSelector from "@/components/shared/CustomerSelector";

// Define the form schema
const invoiceFormSchema = z.object({
  invoiceNumber: z.string().min(1, "Invoice number is required"),
  invoiceDate: z.date(),
  dueDate: z.date(),
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
  items: z.array(
    z.object({
      description: z.string().min(1, "Description is required"),
      quantity: z.coerce.number().min(1, "Quantity must be at least 1"),
      rate: z.coerce.number().min(0, "Rate must be a positive number"),
      gstRate: z.coerce.number().min(0, "GST rate must be a positive number"),
      amount: z.coerce.number(),
    })
  ),
  subtotal: z.coerce.number(),
  cgst: z.coerce.number(),
  sgst: z.coerce.number(),
  igst: z.coerce.number(),
  total: z.coerce.number(),
  notes: z.string().optional(),
  termsAndConditions: z.string().optional(),
});

type InvoiceFormValues = z.infer<typeof invoiceFormSchema>;

// Sample customers for the demo
const customers = [
  {
    id: "CUST-001",
    name: "Acme Corp",
    address: "123 Business Park, Mumbai, MH",
    gstin: "27AABCU9603R1ZX",
    email: "john@acmecorp.com",
    phone: "+91 98765 43210",
  },
  {
    id: "CUST-002",
    name: "TechSolutions",
    address: "456 Tech Hub, Bangalore, KA",
    gstin: "29AADCT1234R1ZX",
    email: "priya@techsolutions.com",
    phone: "+91 87654 32109",
  },
  {
    id: "CUST-003",
    name: "Retail Kings",
    address: "789 Market Street, Delhi, DL",
    gstin: "07AAECR5678P1ZX",
    email: "rajesh@retailkings.com",
    phone: "+91 76543 21098",
  },
];

// Default company information
const companyInfo = {
  name: "Your Company Name",
  address: "123 Company Street, City, State, PIN",
  gstin: "33AABCX1234Y1ZX",
  email: "contact@yourcompany.com",
  phone: "+91 98765 12345",
};

// Invoice themes
const invoiceThemes = [
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

export default function NewInvoicePage() {
  const router = useNavigate();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState(invoiceThemes[0]);
  const [customColor, setCustomColor] = useState(invoiceThemes[0].primaryColor);
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Initialize the form with default values
  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      invoiceNumber: `INV-${String(new Date().getFullYear()).slice(2)}${String(
        new Date().getMonth() + 1
      ).padStart(2, "0")}${String(Math.floor(Math.random() * 1000)).padStart(
        3,
        "0"
      )}`,
      invoiceDate: new Date(),
      dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
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
      notes: "Thank you for your business!",
      termsAndConditions:
        "1. Payment due within 30 days\n2. GST will be charged as applicable\n3. Late payment will incur a 2% monthly interest",
    },
  });

  // Calculate totals whenever items change
  const calculateTotals = (items: InvoiceFormValues["items"]) => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.rate,
      0
    );

    // Determine if IGST or CGST+SGST based on customer location
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

  // Handle customer selection
  const handleCustomerSelect = (customer: Customer) => {
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
    const theme = invoiceThemes.find((t) => t.name === themeName);
    if (theme) {
      setSelectedTheme(theme);
      setCustomColor(theme.primaryColor);
    }
  };

  // Navigate to next step
  const goToNextStep = () => {
    if (currentStep === 1) {
      
      const isValid = form.trigger();
      isValid.then((valid) => {
        if (valid) {
          setCurrentStep(2);
        }
      });
    }
  };

  // Navigate to previous step
  const goToPreviousStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  // Download invoice as PDF
  const downloadInvoice = () => {
    // In a real app, you would generate a PDF here
  };

  // Share invoice
  const shareInvoice = () => {
    // In a real app, you would implement sharing functionality
    toast.success("Invoice shared successfully!");
  };

  // Form submission
  const onSubmit = async (data: InvoiceFormValues) => {
    try {
      const newInvoice = await addInvoice({
        customerID: selectedCustomer?.id!!,
        invoice_status: InvoiceStatus.PENDING,
        invoice_number: data.invoiceNumber,
        invoice_date: data.invoiceDate.toISOString().split("T")[0], // Format: 2020-03-12
        due_date: data.dueDate.toISOString().split("T")[0], // Format: 2020-03-12
        from_company: data.fromCompany,
        from_address: data.fromAddress,
        from_gstin: data.fromGstin,
        from_email: data.fromEmail,
        from_phone: data.fromPhone,
        to_customer: data.toCustomer,
        to_address: data.toAddress,
        to_gstin: data.toGstin,
        to_email: data.toEmail,
        to_phone: data.toPhone,
        items: JSON.stringify(data.items),
        subtotal: String(data.subtotal),
        cgst: String(data.cgst),
        sgst: String(data.sgst),
        igst: String(data.igst),
        //round off to 2 decimal places
        total: String(data.total.toFixed(2)),
        notes: data.notes || "",
        terms_conditions: data.termsAndConditions || "",
      });
      if (newInvoice) {
        toast.success("Invoice created successfully!");
        router("/invoices");
      } else {
        toast.error("Failed to create invoice.");
      }
    } catch (error) {
      console.error("Error creating invoice:", error);
      toast.error("Failed to create invoice.");
    }
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Create New Invoice
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Step {currentStep} of 2:{" "}
            {currentStep === 1 ? "Enter Details" : "Preview & Customize"}
          </span>
        </div>
      </div>

      {currentStep === 1 ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Invoice Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Invoice Details</CardTitle>
                  <CardDescription>
                    Enter the basic details for this invoice
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="invoiceNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Invoice Number</FormLabel>
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
                      name="invoiceDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Invoice Date</FormLabel>
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
                      name="dueDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Due Date</FormLabel>
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

              {/* Customer Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Customer</CardTitle>
                  <CardDescription>
                    Choose an existing customer or enter details manually
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CustomerSelector onSelect={handleCustomerSelect} />
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

              {/* To (Customer) */}
              <Card>
                <CardHeader>
                  <CardTitle>To (Customer)</CardTitle>
                  <CardDescription>Customer details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="toCustomer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Customer Name</FormLabel>
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

            {/* Invoice Items */}
            <Card>
              <CardHeader>
                <CardTitle>Invoice Items</CardTitle>
                <CardDescription>
                  Add the items you want to include in this invoice
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
                <CardTitle>Invoice Summary</CardTitle>
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
                    Add any additional notes for this invoice
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
                    Specify the terms and conditions for this invoice
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
                onClick={() => router("/invoices")}
              >
                Cancel
              </Button>
              <Button type="button" onClick={goToNextStep}>
                Preview
                <ChevronRight className="ml-2 h-4 w-4" />
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
                  <CardTitle>Invoice Preview</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={downloadInvoice}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={shareInvoice}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="p-6 space-y-6">
                    {/* Invoice Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold">
                          {form.getValues("fromCompany")}
                        </h2>
                        <p className="whitespace-pre-line text-sm text-muted-foreground">
                          {form.getValues("fromAddress")}
                        </p>
                        <p className="text-sm">
                          GSTIN: {form.getValues("fromGstin")}
                        </p>
                        <p className="text-sm">
                          {form.getValues("fromEmail")} |{" "}
                          {form.getValues("fromPhone")}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 md:text-right">
                        <h1
                          className="text-3xl font-bold"
                          style={{ color: customColor }}
                        >
                          INVOICE
                        </h1>
                        <p className="text-sm">
                          <span className="font-medium">Invoice Number:</span>{" "}
                          {form.getValues("invoiceNumber")}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Date:</span>{" "}
                          {format(form.getValues("invoiceDate"), "dd/MM/yyyy")}
                        </p>

                        <p className="text-sm">
                          <span className="font-medium">Due Date:</span>{" "}
                          {format(form.getValues("dueDate"), "dd/MM/yyyy")}
                        </p>
                      </div>
                    </div>

                    {/* Customer Information */}
                    <div
                      className="border rounded-md p-4"
                      style={{ borderColor: customColor }}
                    >
                      <h3 className="font-medium mb-2">Bill To:</h3>
                      <h4 className="font-bold">
                        {form.getValues("toCustomer")}
                      </h4>
                      <p className="whitespace-pre-line text-sm text-muted-foreground">
                        {form.getValues("toAddress")}
                      </p>
                      <p className="text-sm">
                        GSTIN: {form.getValues("toGstin")}
                      </p>
                      <p className="text-sm">
                        {form.getValues("toEmail")} |{" "}
                        {form.getValues("toPhone")}
                      </p>
                    </div>

                    {/* Invoice Items */}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr
                            className="border-b"
                            style={{ borderColor: customColor }}
                          >
                            <th className="py-2 text-left">Description</th>
                            <th className="py-2 text-right">Qty</th>
                            <th className="py-2 text-right">Rate (₹)</th>
                            <th className="py-2 text-right">GST %</th>
                            <th className="py-2 text-right">Amount (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {form.getValues("items").map((item, index) => (
                            <tr key={index} className="border-b">
                              <td className="py-2 text-left">
                                {item.description}
                              </td>
                              <td className="py-2 text-right">
                                {item.quantity}
                              </td>
                              <td className="py-2 text-right">
                                {item.rate.toFixed(2)}
                              </td>
                              <td className="py-2 text-right">
                                {item.gstRate}%
                              </td>
                              <td className="py-2 text-right">
                                {item.amount.toFixed(2)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Invoice Summary */}
                    <div className="flex justify-end">
                      <div className="w-full md:w-1/2 space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Subtotal:</span>
                          <span>₹{form.getValues("subtotal").toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">CGST:</span>
                          <span>₹{form.getValues("cgst").toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">SGST:</span>
                          <span>₹{form.getValues("sgst").toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">IGST:</span>
                          <span>₹{form.getValues("igst").toFixed(2)}</span>
                        </div>
                        <div
                          className="flex justify-between pt-2 border-t font-bold"
                          style={{ borderColor: customColor }}
                        >
                          <span>Total:</span>
                          <span>₹{form.getValues("total").toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Notes and Terms */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h3 className="font-medium mb-1">Notes:</h3>
                        <p className="text-sm whitespace-pre-line">
                          {form.getValues("notes")}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">
                          Terms & Conditions:
                        </h3>
                        <p className="text-sm whitespace-pre-line">
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
                  <CardTitle>Customize Invoice</CardTitle>
                  <CardDescription>
                    Change the appearance of your invoice
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
                        {invoiceThemes.map((theme) => (
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
            <Button type="button" variant="outline" onClick={goToPreviousStep}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Edit
            </Button>
            <div className="space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => router("/invoices")}
              >
                Cancel
              </Button>
              <Button type="button" onClick={form.handleSubmit(onSubmit)}>
                <Save className="mr-2 h-4 w-4" />
                Create Invoice
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
