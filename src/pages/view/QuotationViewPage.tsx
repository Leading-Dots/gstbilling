// import { useEffect, useState } from "react";
// \import { format } from "date-fns";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { toast } from "sonner";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import { Customer, Quotation, QuotationStatus } from "@/API";
// import { getQuotationById } from "@/db/Quotations";
// import { getCustomerById } from "@/db/Customers";
// import FormLoader from "@/components/loaders/FormLoader";

// import {
//     ArrowLeft,
//     Download,
//     Edit,
//     FileText,
//     Mail,
//     MapPin,
//     MoreHorizontal,
//     Phone,
//     Printer,
//     Share2,
//     Trash2,
//     User,
//     Clock,
//     CreditCard,
//     FileCheck,
// } from "lucide-react";


// import {

//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// // Sample activity history
// const activities = [
//     {
//         id: 1,
//         type: "quotation_created",
//         description: "Quotation created",
//         date: "2023-04-01",
//         time: "10:30 AM",
//     },
//     {
//         id: 2,
//         type: "quotation_sent",
//         description: "Quotation sent to customer",
//         date: "2023-04-01",
//         time: "10:45 AM",
//     },
//     {
//         id: 3,
//         type: "quotation_viewed",
//         description: "Quotation viewed by customer",
//         date: "2023-04-05",
//         time: "11:20 AM",
//     },
// ];

// export default function QuotationPage() {
//     const router = useNavigate();
//     const params = useParams();
//     const [loading, setLoading] = useState(true);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [quotation, setQuotation] = useState<Quotation | null>(null);
//     const [customer, setCustomer] = useState<Customer | null>(null);

//     const fetchQuotation = async (quotationId: string) => {
//         try {
//             const quotationData = await getQuotationById(params.id!!);
//             if (quotationData) {
//                 setQuotation(quotationData);
//             } else {
//                 toast.error("Quotation not found");
//                 router("/quotations");
//             }
//         } catch (error) {
//             console.error("Error fetching quotation:", error);
//             toast.error("Error fetching quotation");
//         }
//     };

//     const getCustomerData = async (customerId: string) => {
//         try {
//             const customerData = await getCustomerById(customerId);
//             if (customerData) {
//                 setCustomer(customerData);
//             } else {
//                 toast.error("Customer not found");
//             }
//         } catch (error) {
//             console.error("Error fetching customer:", error);
//             toast.error("Error fetching customer");
//         }
//     };

//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             await fetchQuotation(params.id!!);
//             if (quotation) {
//                 await getCustomerData(quotation.customerID);
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//             toast.error("Error fetching data");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = () => {
//         setIsDeleting(true);
//         // Simulate API call
//         setTimeout(() => {
//             setIsDeleting(false);
//             router("/quotations");
//         }, 1000);
//     };

//     const handlePrint = () => {
//         window.print();
//     };

//     const handleDownload = () => {
//         toast.success("Quotation downloaded successfully");
//     };

//     const handleShare = () => {
//         toast.success("Quotation shared successfully");
//     };

//     const handleConvertToquotation = () => {
//         router(`/quotations/${quotation.id}/convert-to-quotation`);
//     };

//     useEffect(() => {
//         if (params.id) {
//             fetchData();
//         }
//     }, [params.id]);

//     if (loading) {
//         return <FormLoader />;
//     }

//     return (
//       <div className="container mx-auto ">
//             <div className="flex flex-col space-y-4 p-4 pt-6 md:p-8 gap-5 print:p-0">
//               <div className="flex flex-col space-y-2 gap-6 space-x-6 md:flex-row md:items-center">
//                 <div className="flex items-center gap-4">
//                   <Button variant="outline" size="icon" asChild>
//                     <Link to="/quotations">
//                       <ArrowLeft className="h-4 w-4" />
//                       <span className="sr-only">Back to quotations</span>
//                     </Link>
//                   </Button>
//                   <div className="flex flex-col">
//                     <h2 className="text-3xl font-bold tracking-tight">
//                       quotation {quotation.quotation_number}
//                     </h2>
//                     <p className="text-muted-foreground">
//                       View and manage quotation details
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Badge
//                     variant={
//                       quotation.quotation_status === QuotationStatus.ACCEPTED
//                         ? "secondary"
//                         : quotation.quotation_status === QuotationStatus.SENT
//                         ? "outline"
//                         : "destructive"
//                     }
//                     className="capitalize"
//                   >
//                     {quotation.quotation_status}
//                   </Badge>
//                   <Button variant="outline" size="sm" onClick={handlePrint}>
//                     <Printer className="h-4 w-4" />
//                     Print
//                   </Button>
//                   <Button variant="outline" size="sm" onClick={handleDownload}>
//                     <Download className="h-4 w-4" />
//                     Download
//                   </Button>
//                   <Button variant="outline" size="sm" onClick={handleShare}>
//                     <Share2 className="h-4 w-4" />
//                     Share
//                   </Button>
//                   <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="outline" size="sm">
//                 <MoreHorizontal className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem asChild>
//                 <Link to={`/quotations/${quotation.id}/edit`}>
//                   <Edit className="mr-2 h-4 w-4" />
//                   Edit Quotation
//                 </Link>
//               </DropdownMenuItem>
//               {quotation.quotation_status === QuotationStatus.SENT && (
//                 <>
//                   <DropdownMenuItem onClick={() => {}}>
//                     <FileCheck className="mr-2 h-4 w-4" />
//                     Mark as Accepted
//                   </DropdownMenuItem>
//                   <DropdownMenuItem onClick={() => {}}>
//                     <Trash2 className="mr-2 h-4 w-4" />
//                     Mark as Rejected
//                   </DropdownMenuItem>
//                 </>
//               )}
//               {(quotation.status === "Sent" || quotation.status === "Accepted") && (
//                 <DropdownMenuItem onClick={handleConvertToInvoice} disabled={isConverting}>
//                   <FileText className="mr-2 h-4 w-4" />
//                   {isConverting ? "Converting..." : "Convert to Invoice"}
//                 </DropdownMenuItem>
//               )}
//               <DropdownMenuSeparator />
//               <DropdownMenuItem onClick={handleDelete} disabled={isDeleting} className="text-destructive">
//                 <Trash2 className="mr-2 h-4 w-4" />
//                 {isDeleting ? "Deleting..." : "Delete Quotation"}
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//                 </div>
//               </div>
      
//               <div className="space-y-4 print:space-y-6">
//                 <Card className="print:shadow-none print:border-none">
//                   <CardContent className="p-6 print:p-0">
//                     {/* quotation Header */}
//                     <div className="flex flex-col justify-between gap-6 md:flex-row">
//                       <div>
//                         <h2 className="text-2xl font-bold">{quotation.from_company}</h2>
//                         <p className="whitespace-pre-line text-sm text-muted-foreground">
//                           {quotation.from_address}
//                         </p>
//                         <p className="text-sm">GSTIN: {quotation.from_gstin}</p>
//                         <p className="text-sm">
//                           {quotation.from_email} | {quotation.from_phone}
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <h1 className="text-3xl font-bold text-primary">quotation</h1>
//                         <p className="text-sm">
//                           <span className="font-medium">quotation Number:</span>{" "}
//                           {quotation.quotation_number}
//                         </p>
//                         <p className="text-sm">
//                           <span className="font-medium">Date:</span>{" "}
//                           {format(new Date(quotation.quotation_date), "dd/MM/yyyy")}
//                         </p>
//                         <p className="text-sm">
//                           <span className="font-medium">Due Date:</span>{" "}
//                           {format(new Date(quotation.valid_until), "dd/MM/yyyy")}
//                         </p>
//                         {quotation.quotation_status === QuotationStatus. && (
//                           <p className="text-sm">
//                             <span className="font-medium">Paid Date:</span>{" "}
//                             {format(new Date(quotation.updatedAt), "dd/MM/yyyy")}
//                           </p>
//                         )}
//                         <Badge
//                           variant={
//                             quotation.quotation_status === quotationstatus.PAID
//                               ? "secondary"
//                               : quotation.quotation_status === quotationstatus.PENDING
//                               ? "outline"
//                               : "destructive"
//                           }
//                           className="mt-2 capitalize"
//                         >
//                           {quotation.quotation_status}
//                         </Badge>
//                       </div>
//                     </div>
      
//                     <Separator className="my-6" />
      
//                     {/* Customer Information */}
//                     <div className="border rounded-md p-4 border-primary/20 bg-primary/5">
//                       <h3 className="font-medium mb-2">Bill To:</h3>
//                       <h4 className="font-bold">{quotation.to_customer}</h4>
//                       <p className="whitespace-pre-line text-sm text-muted-foreground">
//                         {quotation.to_address}
//                       </p>
//                       <p className="text-sm">GSTIN: {quotation.to_gstin}</p>
//                       <p className="text-sm">
//                         {quotation.to_email} | {quotation.to_phone}
//                       </p>
//                     </div>
      
//                     <div className="my-6">
//                       {/* quotation Items */}
//                       <div className="overflow-x-auto">
//                         <table className="w-full border-collapse">
//                           <thead>
//                             <tr className="border-b border-primary/20">
//                               <th className="py-2 text-left">Description</th>
//                               <th className="py-2 text-right">Qty</th>
//                               <th className="py-2 text-right">Rate (₹)</th>
//                               <th className="py-2 text-right">GST %</th>
//                               <th className="py-2 text-right">Amount (₹)</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {JSON.parse(quotation.items).map((item) => (
//                               <tr key={item.id} className="border-b">
//                                 <td className="py-2 text-left">{item.description}</td>
//                                 <td className="py-2 text-right">{item.quantity}</td>
//                                 <td className="py-2 text-right">
//                                   {item.rate.toFixed(2)}
//                                 </td>
//                                 <td className="py-2 text-right">{item.gstRate}%</td>
//                                 <td className="py-2 text-right">
//                                   {item.amount.toFixed(2)}
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
      
//                       {/* quotation Summary */}
//                       <div className="flex justify-end mt-4">
//                         <div className="w-full md:w-1/2 space-y-2">
//                           <div className="flex justify-between">
//                             <span className="font-medium">Subtotal:</span>
//                             <span>₹S{Number(quotation.subtotal).toFixed(2)}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="font-medium">CGST:</span>
//                             <span>₹{Number(quotation.cgst).toFixed(2)}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="font-medium">SGST:</span>
//                             <span>₹{Number(quotation.sgst).toFixed(2)}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="font-medium">IGST:</span>
//                             <span>₹{Number(quotation.igst).toFixed(2)}</span>
//                           </div>
//                           <div className="flex justify-between pt-2 border-t border-primary font-bold">
//                             <span>Total:</span>
//                             <span>₹{Number(quotation.total).toFixed(2)}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
      
//                     <Separator className="my-6" />
      
//                     {/* Notes and Terms */}
//                     <div className="grid gap-4 md:grid-cols-2">
//                       <div>
//                         <h3 className="font-medium mb-1">Notes:</h3>
//                         <p className="text-sm whitespace-pre-line">{quotation.notes}</p>
//                       </div>
//                       <div>
//                         <h3 className="font-medium mb-1">Terms & Conditions:</h3>
//                         <p className="text-sm whitespace-pre-line">
//                           {quotation.terms_conditions}
//                         </p>
//                       </div>
//                     </div>
      
//                     {/* Payment Information */}
//                   </CardContent>
//                 </Card>
      
//                 <div className="print:hidden">
//                   <Tabs defaultValue="activity" className="space-y-4">
//                     <TabsList>
//                       <TabsTrigger value="activity">Activity</TabsTrigger>
//                       <TabsTrigger value="customer">Customer Info</TabsTrigger>
//                     </TabsList>
      
//                     <TabsContent value="activity" className="space-y-4">
//                       <Card>
//                         <CardHeader>
//                           <CardTitle>Activity History</CardTitle>
//                           <CardDescription>
//                             Recent activity for this quotation
//                           </CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                           <div className="">
//                             {activities.map((activity) => (
//                               <div key={activity.id} className="flex">
//                                 <div className="relative mr-4 flex h-full w-10 items-center justify-center">
//                                   <div className="absolute h-full w-px bg-border" />
//                                   <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-background">
//                                     {activity.type.includes("quotation") ? (
//                                       <FileText className="h-4 w-4 text-primary" />
//                                     ) : activity.type.includes("payment") ? (
//                                       <CreditCard className="h-4 w-4 text-primary" />
//                                     ) : (
//                                       <User className="h-4 w-4 text-primary" />
//                                     )}
//                                   </div>
//                                 </div>
//                                 <div className="flex flex-col pb-8">
//                                   <span className="text-sm font-medium">
//                                     {activity.description}
//                                   </span>
//                                   <div className="flex items-center gap-2 text-xs text-muted-foreground">
//                                     <Clock className="h-3 w-3" />
//                                     <span>
//                                       {activity.date} at {activity.time}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </TabsContent>
      
//                     <TabsContent value="customer" className="space-y-4">
//                       <Card>
//                         <CardHeader>
//                           <CardTitle>Customer Information</CardTitle>
//                           <CardDescription>
//                             Details about the customer
//                           </CardDescription>
//                         </CardHeader>
//                         {customer && (
//                           <CardContent>
//                             <div className="space-y-4">
//                               <div className="flex items-center gap-2">
//                                 <User className="h-5 w-5 text-muted-foreground" />
//                                 <div>
//                                   <p className="font-medium">
//                                     {customer.company_name}
//                                   </p>
//                                   <p className="text-sm text-muted-foreground">
//                                     Contact: {customer.owner_name}
//                                   </p>
//                                 </div>
//                               </div>
      
//                               <div className="space-y-2">
//                                 <div className="flex items-center gap-2 text-sm">
//                                   <Mail className="h-4 w-4 text-muted-foreground" />
//                                   <span>{customer.email}</span>
//                                 </div>
//                                 <div className="flex items-center gap-2 text-sm">
//                                   <Phone className="h-4 w-4 text-muted-foreground" />
//                                   <span>{customer.phone}</span>
//                                 </div>
//                                 <div className="flex items-start gap-2 text-sm">
//                                   <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
//                                   <span className="flex-1">
//                                     {customer.billing_address}
//                                   </span>
//                                 </div>
//                               </div>
      
//                               <div className="space-y-1">
//                                 <p className="text-sm font-medium">GST Information</p>
//                                 <p className="text-sm">GSTIN: {customer.gstin}</p>
//                               </div>
      
//                               <div className="flex justify-end">
//                                 <Button asChild>
//                                   <Link
//                                     to={`/customers/${params.id}/view/${customer.id}`}
//                                   >
//                                     View Customer Profile
//                                   </Link>
//                                 </Button>
//                               </div>
//                             </div>
//                           </CardContent>
//                         )}
//                       </Card>
//                     </TabsContent>
//                   </Tabs>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       }