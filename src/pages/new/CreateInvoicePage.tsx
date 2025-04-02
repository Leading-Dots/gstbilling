"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, Trash2, Plus, Save } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
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
    }),
  ),
  subtotal: z.coerce.number(),
  cgst: z.coerce.number(),
  sgst: z.coerce.number(),
  igst: z.coerce.number(),
  total: z.coerce.number(),
  notes: z.string().optional(),
  termsAndConditions: z.string().optional(),
})

type InvoiceFormValues = z.infer<typeof invoiceFormSchema>

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
]

// Default company information
const companyInfo = {
  name: "Your Company Name",
  address: "123 Company Street, City, State, PIN",
  gstin: "33AABCX1234Y1ZX",
  email: "contact@yourcompany.com",
  phone: "+91 98765 12345",
}

export default function NewInvoicePage() {
  const router = useNavigate()
  const [selectedCustomer, setSelectedCustomer] = useState<string>("")

  // Initialize the form with default values
  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      invoiceNumber: `INV-${String(new Date().getFullYear()).slice(2)}${String(new Date().getMonth() + 1).padStart(
        2,
        "0",
      )}${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
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
  })

  // Calculate totals whenever items change
  const calculateTotals = (items: InvoiceFormValues["items"]) => {
    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.rate, 0)

    // Determine if IGST or CGST+SGST based on customer location
    // For demo, we'll use CGST+SGST
    const useIGST = false

    const totalGST = items.reduce((sum, item) => sum + (item.quantity * item.rate * item.gstRate) / 100, 0)

    const cgst = useIGST ? 0 : totalGST / 2
    const sgst = useIGST ? 0 : totalGST / 2
    const igst = useIGST ? totalGST : 0

    const total = subtotal + totalGST

    form.setValue("subtotal", subtotal)
    form.setValue("cgst", cgst)
    form.setValue("sgst", sgst)
    form.setValue("igst", igst)
    form.setValue("total", total)
  }

  // Handle customer selection
  const handleCustomerSelect = (customerId: string) => {
    setSelectedCustomer(customerId)
    const customer = customers.find((c) => c.id === customerId)
    if (customer) {
      form.setValue("toCustomer", customer.name)
      form.setValue("toAddress", customer.address)
      form.setValue("toGstin", customer.gstin)
      form.setValue("toEmail", customer.email)
      form.setValue("toPhone", customer.phone)
    }
  }

  // Handle item changes
  const updateItemAmount = (index: number) => {
    const items = form.getValues("items")
    const item = items[index]
    const amount = item.quantity * item.rate
    items[index].amount = amount
    form.setValue(`items.${index}.amount`, amount)
    calculateTotals(items)
  }

  // Add a new item
  const addItem = () => {
    const items = form.getValues("items")
    form.setValue("items", [
      ...items,
      {
        description: "",
        quantity: 1,
        rate: 0,
        gstRate: 18,
        amount: 0,
      },
    ])
  }

  // Remove an item
  const removeItem = (index: number) => {
    const items = form.getValues("items")
    if (items.length > 1) {
      const newItems = [...items]
      newItems.splice(index, 1)
      form.setValue("items", newItems)
      calculateTotals(newItems)
    }
  }

  // Form submission
  const onSubmit = (data: InvoiceFormValues) => {
    toast({
      title: "Invoice Created",
      description: `Invoice ${data.invoiceNumber} has been created successfully.`,
    })

    // In a real app, you would save the invoice to the database here
    console.log("Invoice data:", data)

    // Navigate back to invoices list
    router.push("/invoices")
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Create New Invoice</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Invoice Details */}
            <Card>
              <CardHeader>
                <CardTitle>Invoice Details</CardTitle>
                <CardDescription>Enter the basic details for this invoice</CardDescription>
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
                              <Button variant="outline" className="w-full pl-3 text-left font-normal">
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
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
                              <Button variant="outline" className="w-full pl-3 text-left font-normal">
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
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
                <CardDescription>Choose an existing customer or enter details manually</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedCustomer} onValueChange={handleCustomerSelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a customer" />
                  </SelectTrigger>
                  <SelectContent>
                    {customers.map((customer) => (
                      <SelectItem key={customer.id} value={customer.id}>
                        {customer.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="mt-2 text-sm text-muted-foreground">Or enter customer details manually below</p>
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
              <CardDescription>Add the items you want to include in this invoice</CardDescription>
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
                  <div key={index} className="grid grid-cols-12 gap-2 items-start">
                    <div className="col-span-5">
                      <Input
                        {...form.register(`items.${index}.description`)}
                        onChange={(e) => {
                          form.setValue(`items.${index}.description`, e.target.value)
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
                          form.setValue(`items.${index}.quantity`, Number.parseInt(e.target.value) || 0)
                          updateItemAmount(index)
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
                          form.setValue(`items.${index}.rate`, Number.parseFloat(e.target.value) || 0)
                          updateItemAmount(index)
                        }}
                      />
                    </div>
                    <div className="col-span-1">
                      <Select
                        value={item.gstRate.toString()}
                        onValueChange={(value) => {
                          form.setValue(`items.${index}.gstRate`, Number.parseInt(value))
                          updateItemAmount(index)
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
                      <Input type="number" step="0.01" value={item.amount.toFixed(2)} readOnly />
                    </div>
                    <div className="col-span-1">
                      <Button type="button" variant="ghost" size="icon" onClick={() => removeItem(index)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                <Button type="button" variant="outline" size="sm" className="mt-2" onClick={addItem}>
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
                <CardDescription>Add any additional notes for this invoice</CardDescription>
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
                <CardDescription>Specify the terms and conditions for this invoice</CardDescription>
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
            <Button type="button" variant="outline" onClick={() => router("/invoices")}>
              Cancel
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" />
              Create Invoice
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

