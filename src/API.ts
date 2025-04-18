/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInventoryItemInput = {
  id?: string | null,
  item_code?: string | null,
  hsn_number?: string | null,
  name?: string | null,
  description?: string | null,
  unit?: string | null,
  tax_rate?: string | null,
  current_stock?: string | null,
  stock_status?: StockStatus | null,
  category?: string | null,
  brand?: string | null,
  cgst?: string | null,
  sgst?: string | null,
  igst?: string | null,
  companyID: string,
};

export enum StockStatus {
  IN_STOCK = "IN_STOCK",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  LOW_STOCK = "LOW_STOCK",
}


export type ModelInventoryItemConditionInput = {
  item_code?: ModelStringInput | null,
  hsn_number?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  unit?: ModelStringInput | null,
  tax_rate?: ModelStringInput | null,
  current_stock?: ModelStringInput | null,
  stock_status?: ModelStockStatusInput | null,
  category?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  cgst?: ModelStringInput | null,
  sgst?: ModelStringInput | null,
  igst?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  and?: Array< ModelInventoryItemConditionInput | null > | null,
  or?: Array< ModelInventoryItemConditionInput | null > | null,
  not?: ModelInventoryItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStockStatusInput = {
  eq?: StockStatus | null,
  ne?: StockStatus | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type InventoryItem = {
  __typename: "InventoryItem",
  id: string,
  item_code?: string | null,
  hsn_number?: string | null,
  name?: string | null,
  description?: string | null,
  unit?: string | null,
  tax_rate?: string | null,
  current_stock?: string | null,
  stock_status?: StockStatus | null,
  category?: string | null,
  brand?: string | null,
  cgst?: string | null,
  sgst?: string | null,
  igst?: string | null,
  companyID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInventoryItemInput = {
  id: string,
  item_code?: string | null,
  hsn_number?: string | null,
  name?: string | null,
  description?: string | null,
  unit?: string | null,
  tax_rate?: string | null,
  current_stock?: string | null,
  stock_status?: StockStatus | null,
  category?: string | null,
  brand?: string | null,
  cgst?: string | null,
  sgst?: string | null,
  igst?: string | null,
  companyID?: string | null,
};

export type DeleteInventoryItemInput = {
  id: string,
};

export type CreateCompanyEmployeeInput = {
  id?: string | null,
  name?: string | null,
  adminID: string,
  companyID: string,
  email?: string | null,
  userID?: string | null,
  profile_status?: EmployeeStatus | null,
  department?: string | null,
  employeeID?: string | null,
};

export enum EmployeeStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  INVITED = "INVITED",
}


export type ModelCompanyEmployeeConditionInput = {
  name?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  profile_status?: ModelEmployeeStatusInput | null,
  department?: ModelStringInput | null,
  employeeID?: ModelStringInput | null,
  and?: Array< ModelCompanyEmployeeConditionInput | null > | null,
  or?: Array< ModelCompanyEmployeeConditionInput | null > | null,
  not?: ModelCompanyEmployeeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelEmployeeStatusInput = {
  eq?: EmployeeStatus | null,
  ne?: EmployeeStatus | null,
};

export type CompanyEmployee = {
  __typename: "CompanyEmployee",
  id: string,
  name?: string | null,
  adminID: string,
  companyID: string,
  email?: string | null,
  userID?: string | null,
  profile_status?: EmployeeStatus | null,
  department?: string | null,
  employeeID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCompanyEmployeeInput = {
  id: string,
  name?: string | null,
  adminID?: string | null,
  companyID?: string | null,
  email?: string | null,
  userID?: string | null,
  profile_status?: EmployeeStatus | null,
  department?: string | null,
  employeeID?: string | null,
};

export type DeleteCompanyEmployeeInput = {
  id: string,
};

export type CreateSubscriptionPlanInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  cost?: string | null,
  users?: number | null,
  isPaid?: boolean | null,
};

export type ModelSubscriptionPlanConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  users?: ModelIntInput | null,
  isPaid?: ModelBooleanInput | null,
  and?: Array< ModelSubscriptionPlanConditionInput | null > | null,
  or?: Array< ModelSubscriptionPlanConditionInput | null > | null,
  not?: ModelSubscriptionPlanConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type SubscriptionPlan = {
  __typename: "SubscriptionPlan",
  id: string,
  title?: string | null,
  description?: string | null,
  cost?: string | null,
  users?: number | null,
  isPaid?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSubscriptionPlanInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  cost?: string | null,
  users?: number | null,
  isPaid?: boolean | null,
};

export type DeleteSubscriptionPlanInput = {
  id: string,
};

export type CreateAdminInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  subscriptionPlanID?: string | null,
  company_id?: string | null,
  userID?: string | null,
};

export type ModelAdminConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  subscriptionPlanID?: ModelStringInput | null,
  company_id?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelAdminConditionInput | null > | null,
  or?: Array< ModelAdminConditionInput | null > | null,
  not?: ModelAdminConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Admin = {
  __typename: "Admin",
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  subscriptionPlanID?: string | null,
  CompanyEmployees?: ModelCompanyEmployeeConnection | null,
  company_id?: string | null,
  userID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCompanyEmployeeConnection = {
  __typename: "ModelCompanyEmployeeConnection",
  items:  Array<CompanyEmployee | null >,
  nextToken?: string | null,
};

export type UpdateAdminInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  subscriptionPlanID?: string | null,
  company_id?: string | null,
  userID?: string | null,
};

export type DeleteAdminInput = {
  id: string,
};

export type CreateCompanyInput = {
  id?: string | null,
  company_name?: string | null,
  owner_name?: string | null,
  gstin?: string | null,
  billing_address?: string | null,
  email?: string | null,
  phone?: string | null,
  gst_category?: string | null,
  adminID?: string | null,
  shipping_address?: string | null,
  pincode?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
};

export type ModelCompanyConditionInput = {
  company_name?: ModelStringInput | null,
  owner_name?: ModelStringInput | null,
  gstin?: ModelStringInput | null,
  billing_address?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  gst_category?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  shipping_address?: ModelStringInput | null,
  pincode?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Company = {
  __typename: "Company",
  id: string,
  company_name?: string | null,
  owner_name?: string | null,
  gstin?: string | null,
  billing_address?: string | null,
  email?: string | null,
  phone?: string | null,
  gst_category?: string | null,
  adminID?: string | null,
  CompanyEmployees?: ModelCompanyEmployeeConnection | null,
  InventoryItems?: ModelInventoryItemConnection | null,
  shipping_address?: string | null,
  pincode?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelInventoryItemConnection = {
  __typename: "ModelInventoryItemConnection",
  items:  Array<InventoryItem | null >,
  nextToken?: string | null,
};

export type UpdateCompanyInput = {
  id: string,
  company_name?: string | null,
  owner_name?: string | null,
  gstin?: string | null,
  billing_address?: string | null,
  email?: string | null,
  phone?: string | null,
  gst_category?: string | null,
  adminID?: string | null,
  shipping_address?: string | null,
  pincode?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
};

export type DeleteCompanyInput = {
  id: string,
};

export type CreateVendorInput = {
  id?: string | null,
  vendor_id?: string | null,
  company_name?: string | null,
  owner_name?: string | null,
  email?: string | null,
  phone?: string | null,
  payable_amount?: number | null,
  billing_address?: string | null,
  vendor_status?: ProfileStatus | null,
  gstin?: string | null,
  shipping_address?: string | null,
};

export enum ProfileStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type ModelVendorConditionInput = {
  vendor_id?: ModelStringInput | null,
  company_name?: ModelStringInput | null,
  owner_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  payable_amount?: ModelFloatInput | null,
  billing_address?: ModelStringInput | null,
  vendor_status?: ModelProfileStatusInput | null,
  gstin?: ModelStringInput | null,
  shipping_address?: ModelStringInput | null,
  and?: Array< ModelVendorConditionInput | null > | null,
  or?: Array< ModelVendorConditionInput | null > | null,
  not?: ModelVendorConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelProfileStatusInput = {
  eq?: ProfileStatus | null,
  ne?: ProfileStatus | null,
};

export type Vendor = {
  __typename: "Vendor",
  id: string,
  vendor_id?: string | null,
  company_name?: string | null,
  owner_name?: string | null,
  email?: string | null,
  phone?: string | null,
  payable_amount?: number | null,
  billing_address?: string | null,
  vendor_status?: ProfileStatus | null,
  gstin?: string | null,
  shipping_address?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVendorInput = {
  id: string,
  vendor_id?: string | null,
  company_name?: string | null,
  owner_name?: string | null,
  email?: string | null,
  phone?: string | null,
  payable_amount?: number | null,
  billing_address?: string | null,
  vendor_status?: ProfileStatus | null,
  gstin?: string | null,
  shipping_address?: string | null,
};

export type DeleteVendorInput = {
  id: string,
};

export type CreateCustomerInput = {
  id?: string | null,
  customer_id?: string | null,
  company_name?: string | null,
  owner_name?: string | null,
  email?: string | null,
  phone?: string | null,
  outstanding_amount?: number | null,
  billing_address?: string | null,
  customer_status?: ProfileStatus | null,
  gstin?: string | null,
  shipping_address?: string | null,
  city?: string | null,
  state?: string | null,
  pincode?: string | null,
  country?: string | null,
  pan_number?: string | null,
  credit_limit?: string | null,
  note?: string | null,
  printColor?: string | null,
};

export type ModelCustomerConditionInput = {
  customer_id?: ModelStringInput | null,
  company_name?: ModelStringInput | null,
  owner_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  outstanding_amount?: ModelFloatInput | null,
  billing_address?: ModelStringInput | null,
  customer_status?: ModelProfileStatusInput | null,
  gstin?: ModelStringInput | null,
  shipping_address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  pincode?: ModelStringInput | null,
  country?: ModelStringInput | null,
  pan_number?: ModelStringInput | null,
  credit_limit?: ModelStringInput | null,
  note?: ModelStringInput | null,
  printColor?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  customer_id?: string | null,
  company_name?: string | null,
  owner_name?: string | null,
  email?: string | null,
  phone?: string | null,
  outstanding_amount?: number | null,
  billing_address?: string | null,
  customer_status?: ProfileStatus | null,
  Invoices?: ModelInvoiceConnection | null,
  Quotations?: ModelQuotationConnection | null,
  gstin?: string | null,
  shipping_address?: string | null,
  city?: string | null,
  state?: string | null,
  pincode?: string | null,
  country?: string | null,
  pan_number?: string | null,
  credit_limit?: string | null,
  note?: string | null,
  printColor?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelInvoiceConnection = {
  __typename: "ModelInvoiceConnection",
  items:  Array<Invoice | null >,
  nextToken?: string | null,
};

export type Invoice = {
  __typename: "Invoice",
  id: string,
  invoice_id?: string | null,
  invoice_status?: InvoiceStatus | null,
  invoice_number?: string | null,
  invoice_date?: string | null,
  due_date?: string | null,
  from_company?: string | null,
  from_address?: string | null,
  from_gstin?: string | null,
  from_email?: string | null,
  from_phone?: string | null,
  to_customer?: string | null,
  to_address?: string | null,
  to_gstin?: string | null,
  to_email?: string | null,
  to_phone?: string | null,
  items?: string | null,
  subtotal?: string | null,
  cgst?: string | null,
  sgst?: string | null,
  igst?: string | null,
  total?: string | null,
  notes?: string | null,
  terms_conditions?: string | null,
  customerID: string,
  createdAt: string,
  updatedAt: string,
};

export enum InvoiceStatus {
  PAID = "PAID",
  PENDING = "PENDING",
  OVERDUE = "OVERDUE",
}


export type ModelQuotationConnection = {
  __typename: "ModelQuotationConnection",
  items:  Array<Quotation | null >,
  nextToken?: string | null,
};

export type Quotation = {
  __typename: "Quotation",
  id: string,
  quotation_id?: string | null,
  quotation_status?: QuotationStatus | null,
  quotation_number?: string | null,
  quotation_date?: string | null,
  valid_until?: string | null,
  from_company?: string | null,
  from_address?: string | null,
  from_gstin?: string | null,
  from_email?: string | null,
  from_phone?: string | null,
  to_customer?: string | null,
  to_address?: string | null,
  to_gstin?: string | null,
  to_email?: string | null,
  to_phone?: string | null,
  items?: string | null,
  subtotal?: string | null,
  cgst?: string | null,
  sgst?: string | null,
  igst?: string | null,
  total?: string | null,
  notes?: string | null,
  terms_conditions?: string | null,
  customerID: string,
  createdAt: string,
  updatedAt: string,
};

export enum QuotationStatus {
  SENT = "SENT",
  DRAFT = "DRAFT",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  EXPIRED = "EXPIRED",
  CONVERTED = "CONVERTED",
}


export type UpdateCustomerInput = {
  id: string,
  customer_id?: string | null,
  company_name?: string | null,
  owner_name?: string | null,
  email?: string | null,
  phone?: string | null,
  outstanding_amount?: number | null,
  billing_address?: string | null,
  customer_status?: ProfileStatus | null,
  gstin?: string | null,
  shipping_address?: string | null,
  city?: string | null,
  state?: string | null,
  pincode?: string | null,
  country?: string | null,
  pan_number?: string | null,
  credit_limit?: string | null,
  note?: string | null,
  printColor?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateQuotationInput = {
  id?: string | null,
  quotation_id?: string | null,
  quotation_status?: QuotationStatus | null,
  quotation_number?: string | null,
  quotation_date?: string | null,
  valid_until?: string | null,
  from_company?: string | null,
  from_address?: string | null,
  from_gstin?: string | null,
  from_email?: string | null,
  from_phone?: string | null,
  to_customer?: string | null,
  to_address?: string | null,
  to_gstin?: string | null,
  to_email?: string | null,
  to_phone?: string | null,
  items?: string | null,
  subtotal?: string | null,
  cgst?: string | null,
  sgst?: string | null,
  igst?: string | null,
  total?: string | null,
  notes?: string | null,
  terms_conditions?: string | null,
  customerID: string,
};

export type ModelQuotationConditionInput = {
  quotation_id?: ModelStringInput | null,
  quotation_status?: ModelQuotationStatusInput | null,
  quotation_number?: ModelStringInput | null,
  quotation_date?: ModelStringInput | null,
  valid_until?: ModelStringInput | null,
  from_company?: ModelStringInput | null,
  from_address?: ModelStringInput | null,
  from_gstin?: ModelStringInput | null,
  from_email?: ModelStringInput | null,
  from_phone?: ModelStringInput | null,
  to_customer?: ModelStringInput | null,
  to_address?: ModelStringInput | null,
  to_gstin?: ModelStringInput | null,
  to_email?: ModelStringInput | null,
  to_phone?: ModelStringInput | null,
  items?: ModelStringInput | null,
  subtotal?: ModelStringInput | null,
  cgst?: ModelStringInput | null,
  sgst?: ModelStringInput | null,
  igst?: ModelStringInput | null,
  total?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  terms_conditions?: ModelStringInput | null,
  customerID?: ModelIDInput | null,
  and?: Array< ModelQuotationConditionInput | null > | null,
  or?: Array< ModelQuotationConditionInput | null > | null,
  not?: ModelQuotationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelQuotationStatusInput = {
  eq?: QuotationStatus | null,
  ne?: QuotationStatus | null,
};

export type UpdateQuotationInput = {
  id: string,
  quotation_id?: string | null,
  quotation_status?: QuotationStatus | null,
  quotation_number?: string | null,
  quotation_date?: string | null,
  valid_until?: string | null,
  from_company?: string | null,
  from_address?: string | null,
  from_gstin?: string | null,
  from_email?: string | null,
  from_phone?: string | null,
  to_customer?: string | null,
  to_address?: string | null,
  to_gstin?: string | null,
  to_email?: string | null,
  to_phone?: string | null,
  items?: string | null,
  subtotal?: string | null,
  cgst?: string | null,
  sgst?: string | null,
  igst?: string | null,
  total?: string | null,
  notes?: string | null,
  terms_conditions?: string | null,
  customerID?: string | null,
};

export type DeleteQuotationInput = {
  id: string,
};

export type CreateInvoiceInput = {
  id?: string | null,
  invoice_id?: string | null,
  invoice_status?: InvoiceStatus | null,
  invoice_number?: string | null,
  invoice_date?: string | null,
  due_date?: string | null,
  from_company?: string | null,
  from_address?: string | null,
  from_gstin?: string | null,
  from_email?: string | null,
  from_phone?: string | null,
  to_customer?: string | null,
  to_address?: string | null,
  to_gstin?: string | null,
  to_email?: string | null,
  to_phone?: string | null,
  items?: string | null,
  subtotal?: string | null,
  cgst?: string | null,
  sgst?: string | null,
  igst?: string | null,
  total?: string | null,
  notes?: string | null,
  terms_conditions?: string | null,
  customerID: string,
};

export type ModelInvoiceConditionInput = {
  invoice_id?: ModelStringInput | null,
  invoice_status?: ModelInvoiceStatusInput | null,
  invoice_number?: ModelStringInput | null,
  invoice_date?: ModelStringInput | null,
  due_date?: ModelStringInput | null,
  from_company?: ModelStringInput | null,
  from_address?: ModelStringInput | null,
  from_gstin?: ModelStringInput | null,
  from_email?: ModelStringInput | null,
  from_phone?: ModelStringInput | null,
  to_customer?: ModelStringInput | null,
  to_address?: ModelStringInput | null,
  to_gstin?: ModelStringInput | null,
  to_email?: ModelStringInput | null,
  to_phone?: ModelStringInput | null,
  items?: ModelStringInput | null,
  subtotal?: ModelStringInput | null,
  cgst?: ModelStringInput | null,
  sgst?: ModelStringInput | null,
  igst?: ModelStringInput | null,
  total?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  terms_conditions?: ModelStringInput | null,
  customerID?: ModelIDInput | null,
  and?: Array< ModelInvoiceConditionInput | null > | null,
  or?: Array< ModelInvoiceConditionInput | null > | null,
  not?: ModelInvoiceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelInvoiceStatusInput = {
  eq?: InvoiceStatus | null,
  ne?: InvoiceStatus | null,
};

export type UpdateInvoiceInput = {
  id: string,
  invoice_id?: string | null,
  invoice_status?: InvoiceStatus | null,
  invoice_number?: string | null,
  invoice_date?: string | null,
  due_date?: string | null,
  from_company?: string | null,
  from_address?: string | null,
  from_gstin?: string | null,
  from_email?: string | null,
  from_phone?: string | null,
  to_customer?: string | null,
  to_address?: string | null,
  to_gstin?: string | null,
  to_email?: string | null,
  to_phone?: string | null,
  items?: string | null,
  subtotal?: string | null,
  cgst?: string | null,
  sgst?: string | null,
  igst?: string | null,
  total?: string | null,
  notes?: string | null,
  terms_conditions?: string | null,
  customerID?: string | null,
};

export type DeleteInvoiceInput = {
  id: string,
};

export type ModelInventoryItemFilterInput = {
  id?: ModelIDInput | null,
  item_code?: ModelStringInput | null,
  hsn_number?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  unit?: ModelStringInput | null,
  tax_rate?: ModelStringInput | null,
  current_stock?: ModelStringInput | null,
  stock_status?: ModelStockStatusInput | null,
  category?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  cgst?: ModelStringInput | null,
  sgst?: ModelStringInput | null,
  igst?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInventoryItemFilterInput | null > | null,
  or?: Array< ModelInventoryItemFilterInput | null > | null,
  not?: ModelInventoryItemFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCompanyEmployeeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  profile_status?: ModelEmployeeStatusInput | null,
  department?: ModelStringInput | null,
  employeeID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCompanyEmployeeFilterInput | null > | null,
  or?: Array< ModelCompanyEmployeeFilterInput | null > | null,
  not?: ModelCompanyEmployeeFilterInput | null,
};

export type ModelSubscriptionPlanFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  users?: ModelIntInput | null,
  isPaid?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  not?: ModelSubscriptionPlanFilterInput | null,
};

export type ModelSubscriptionPlanConnection = {
  __typename: "ModelSubscriptionPlanConnection",
  items:  Array<SubscriptionPlan | null >,
  nextToken?: string | null,
};

export type ModelAdminFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  subscriptionPlanID?: ModelStringInput | null,
  company_id?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAdminFilterInput | null > | null,
  or?: Array< ModelAdminFilterInput | null > | null,
  not?: ModelAdminFilterInput | null,
};

export type ModelAdminConnection = {
  __typename: "ModelAdminConnection",
  items:  Array<Admin | null >,
  nextToken?: string | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  company_name?: ModelStringInput | null,
  owner_name?: ModelStringInput | null,
  gstin?: ModelStringInput | null,
  billing_address?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  gst_category?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  shipping_address?: ModelStringInput | null,
  pincode?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<Company | null >,
  nextToken?: string | null,
};

export type ModelVendorFilterInput = {
  id?: ModelIDInput | null,
  vendor_id?: ModelStringInput | null,
  company_name?: ModelStringInput | null,
  owner_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  payable_amount?: ModelFloatInput | null,
  billing_address?: ModelStringInput | null,
  vendor_status?: ModelProfileStatusInput | null,
  gstin?: ModelStringInput | null,
  shipping_address?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelVendorFilterInput | null > | null,
  or?: Array< ModelVendorFilterInput | null > | null,
  not?: ModelVendorFilterInput | null,
};

export type ModelVendorConnection = {
  __typename: "ModelVendorConnection",
  items:  Array<Vendor | null >,
  nextToken?: string | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  customer_id?: ModelStringInput | null,
  company_name?: ModelStringInput | null,
  owner_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  outstanding_amount?: ModelFloatInput | null,
  billing_address?: ModelStringInput | null,
  customer_status?: ModelProfileStatusInput | null,
  gstin?: ModelStringInput | null,
  shipping_address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  pincode?: ModelStringInput | null,
  country?: ModelStringInput | null,
  pan_number?: ModelStringInput | null,
  credit_limit?: ModelStringInput | null,
  note?: ModelStringInput | null,
  printColor?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelQuotationFilterInput = {
  id?: ModelIDInput | null,
  quotation_id?: ModelStringInput | null,
  quotation_status?: ModelQuotationStatusInput | null,
  quotation_number?: ModelStringInput | null,
  quotation_date?: ModelStringInput | null,
  valid_until?: ModelStringInput | null,
  from_company?: ModelStringInput | null,
  from_address?: ModelStringInput | null,
  from_gstin?: ModelStringInput | null,
  from_email?: ModelStringInput | null,
  from_phone?: ModelStringInput | null,
  to_customer?: ModelStringInput | null,
  to_address?: ModelStringInput | null,
  to_gstin?: ModelStringInput | null,
  to_email?: ModelStringInput | null,
  to_phone?: ModelStringInput | null,
  items?: ModelStringInput | null,
  subtotal?: ModelStringInput | null,
  cgst?: ModelStringInput | null,
  sgst?: ModelStringInput | null,
  igst?: ModelStringInput | null,
  total?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  terms_conditions?: ModelStringInput | null,
  customerID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuotationFilterInput | null > | null,
  or?: Array< ModelQuotationFilterInput | null > | null,
  not?: ModelQuotationFilterInput | null,
};

export type ModelInvoiceFilterInput = {
  id?: ModelIDInput | null,
  invoice_id?: ModelStringInput | null,
  invoice_status?: ModelInvoiceStatusInput | null,
  invoice_number?: ModelStringInput | null,
  invoice_date?: ModelStringInput | null,
  due_date?: ModelStringInput | null,
  from_company?: ModelStringInput | null,
  from_address?: ModelStringInput | null,
  from_gstin?: ModelStringInput | null,
  from_email?: ModelStringInput | null,
  from_phone?: ModelStringInput | null,
  to_customer?: ModelStringInput | null,
  to_address?: ModelStringInput | null,
  to_gstin?: ModelStringInput | null,
  to_email?: ModelStringInput | null,
  to_phone?: ModelStringInput | null,
  items?: ModelStringInput | null,
  subtotal?: ModelStringInput | null,
  cgst?: ModelStringInput | null,
  sgst?: ModelStringInput | null,
  igst?: ModelStringInput | null,
  total?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  terms_conditions?: ModelStringInput | null,
  customerID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInvoiceFilterInput | null > | null,
  or?: Array< ModelInvoiceFilterInput | null > | null,
  not?: ModelInvoiceFilterInput | null,
};

export type ModelSubscriptionInventoryItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  item_code?: ModelSubscriptionStringInput | null,
  hsn_number?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  unit?: ModelSubscriptionStringInput | null,
  tax_rate?: ModelSubscriptionStringInput | null,
  current_stock?: ModelSubscriptionStringInput | null,
  stock_status?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  brand?: ModelSubscriptionStringInput | null,
  cgst?: ModelSubscriptionStringInput | null,
  sgst?: ModelSubscriptionStringInput | null,
  igst?: ModelSubscriptionStringInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInventoryItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionInventoryItemFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCompanyEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionStringInput | null,
  profile_status?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionStringInput | null,
  employeeID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyEmployeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyEmployeeFilterInput | null > | null,
};

export type ModelSubscriptionSubscriptionPlanFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  cost?: ModelSubscriptionStringInput | null,
  users?: ModelSubscriptionIntInput | null,
  isPaid?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubscriptionPlanFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubscriptionPlanFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionAdminFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  subscriptionPlanID?: ModelSubscriptionStringInput | null,
  company_id?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdminFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdminFilterInput | null > | null,
};

export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company_name?: ModelSubscriptionStringInput | null,
  owner_name?: ModelSubscriptionStringInput | null,
  gstin?: ModelSubscriptionStringInput | null,
  billing_address?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  gst_category?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionStringInput | null,
  shipping_address?: ModelSubscriptionStringInput | null,
  pincode?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
};

export type ModelSubscriptionVendorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  vendor_id?: ModelSubscriptionStringInput | null,
  company_name?: ModelSubscriptionStringInput | null,
  owner_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  payable_amount?: ModelSubscriptionFloatInput | null,
  billing_address?: ModelSubscriptionStringInput | null,
  vendor_status?: ModelSubscriptionStringInput | null,
  gstin?: ModelSubscriptionStringInput | null,
  shipping_address?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVendorFilterInput | null > | null,
  or?: Array< ModelSubscriptionVendorFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  customer_id?: ModelSubscriptionStringInput | null,
  company_name?: ModelSubscriptionStringInput | null,
  owner_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  outstanding_amount?: ModelSubscriptionFloatInput | null,
  billing_address?: ModelSubscriptionStringInput | null,
  customer_status?: ModelSubscriptionStringInput | null,
  gstin?: ModelSubscriptionStringInput | null,
  shipping_address?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  pincode?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  pan_number?: ModelSubscriptionStringInput | null,
  credit_limit?: ModelSubscriptionStringInput | null,
  note?: ModelSubscriptionStringInput | null,
  printColor?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
};

export type ModelSubscriptionQuotationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  quotation_id?: ModelSubscriptionStringInput | null,
  quotation_status?: ModelSubscriptionStringInput | null,
  quotation_number?: ModelSubscriptionStringInput | null,
  quotation_date?: ModelSubscriptionStringInput | null,
  valid_until?: ModelSubscriptionStringInput | null,
  from_company?: ModelSubscriptionStringInput | null,
  from_address?: ModelSubscriptionStringInput | null,
  from_gstin?: ModelSubscriptionStringInput | null,
  from_email?: ModelSubscriptionStringInput | null,
  from_phone?: ModelSubscriptionStringInput | null,
  to_customer?: ModelSubscriptionStringInput | null,
  to_address?: ModelSubscriptionStringInput | null,
  to_gstin?: ModelSubscriptionStringInput | null,
  to_email?: ModelSubscriptionStringInput | null,
  to_phone?: ModelSubscriptionStringInput | null,
  items?: ModelSubscriptionStringInput | null,
  subtotal?: ModelSubscriptionStringInput | null,
  cgst?: ModelSubscriptionStringInput | null,
  sgst?: ModelSubscriptionStringInput | null,
  igst?: ModelSubscriptionStringInput | null,
  total?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  terms_conditions?: ModelSubscriptionStringInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuotationFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuotationFilterInput | null > | null,
};

export type ModelSubscriptionInvoiceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  invoice_id?: ModelSubscriptionStringInput | null,
  invoice_status?: ModelSubscriptionStringInput | null,
  invoice_number?: ModelSubscriptionStringInput | null,
  invoice_date?: ModelSubscriptionStringInput | null,
  due_date?: ModelSubscriptionStringInput | null,
  from_company?: ModelSubscriptionStringInput | null,
  from_address?: ModelSubscriptionStringInput | null,
  from_gstin?: ModelSubscriptionStringInput | null,
  from_email?: ModelSubscriptionStringInput | null,
  from_phone?: ModelSubscriptionStringInput | null,
  to_customer?: ModelSubscriptionStringInput | null,
  to_address?: ModelSubscriptionStringInput | null,
  to_gstin?: ModelSubscriptionStringInput | null,
  to_email?: ModelSubscriptionStringInput | null,
  to_phone?: ModelSubscriptionStringInput | null,
  items?: ModelSubscriptionStringInput | null,
  subtotal?: ModelSubscriptionStringInput | null,
  cgst?: ModelSubscriptionStringInput | null,
  sgst?: ModelSubscriptionStringInput | null,
  igst?: ModelSubscriptionStringInput | null,
  total?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  terms_conditions?: ModelSubscriptionStringInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInvoiceFilterInput | null > | null,
  or?: Array< ModelSubscriptionInvoiceFilterInput | null > | null,
};

export type CreateInventoryItemMutationVariables = {
  input: CreateInventoryItemInput,
  condition?: ModelInventoryItemConditionInput | null,
};

export type CreateInventoryItemMutation = {
  createInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    item_code?: string | null,
    hsn_number?: string | null,
    name?: string | null,
    description?: string | null,
    unit?: string | null,
    tax_rate?: string | null,
    current_stock?: string | null,
    stock_status?: StockStatus | null,
    category?: string | null,
    brand?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    companyID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInventoryItemMutationVariables = {
  input: UpdateInventoryItemInput,
  condition?: ModelInventoryItemConditionInput | null,
};

export type UpdateInventoryItemMutation = {
  updateInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    item_code?: string | null,
    hsn_number?: string | null,
    name?: string | null,
    description?: string | null,
    unit?: string | null,
    tax_rate?: string | null,
    current_stock?: string | null,
    stock_status?: StockStatus | null,
    category?: string | null,
    brand?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    companyID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInventoryItemMutationVariables = {
  input: DeleteInventoryItemInput,
  condition?: ModelInventoryItemConditionInput | null,
};

export type DeleteInventoryItemMutation = {
  deleteInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    item_code?: string | null,
    hsn_number?: string | null,
    name?: string | null,
    description?: string | null,
    unit?: string | null,
    tax_rate?: string | null,
    current_stock?: string | null,
    stock_status?: StockStatus | null,
    category?: string | null,
    brand?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    companyID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompanyEmployeeMutationVariables = {
  input: CreateCompanyEmployeeInput,
  condition?: ModelCompanyEmployeeConditionInput | null,
};

export type CreateCompanyEmployeeMutation = {
  createCompanyEmployee?:  {
    __typename: "CompanyEmployee",
    id: string,
    name?: string | null,
    adminID: string,
    companyID: string,
    email?: string | null,
    userID?: string | null,
    profile_status?: EmployeeStatus | null,
    department?: string | null,
    employeeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyEmployeeMutationVariables = {
  input: UpdateCompanyEmployeeInput,
  condition?: ModelCompanyEmployeeConditionInput | null,
};

export type UpdateCompanyEmployeeMutation = {
  updateCompanyEmployee?:  {
    __typename: "CompanyEmployee",
    id: string,
    name?: string | null,
    adminID: string,
    companyID: string,
    email?: string | null,
    userID?: string | null,
    profile_status?: EmployeeStatus | null,
    department?: string | null,
    employeeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyEmployeeMutationVariables = {
  input: DeleteCompanyEmployeeInput,
  condition?: ModelCompanyEmployeeConditionInput | null,
};

export type DeleteCompanyEmployeeMutation = {
  deleteCompanyEmployee?:  {
    __typename: "CompanyEmployee",
    id: string,
    name?: string | null,
    adminID: string,
    companyID: string,
    email?: string | null,
    userID?: string | null,
    profile_status?: EmployeeStatus | null,
    department?: string | null,
    employeeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubscriptionPlanMutationVariables = {
  input: CreateSubscriptionPlanInput,
  condition?: ModelSubscriptionPlanConditionInput | null,
};

export type CreateSubscriptionPlanMutation = {
  createSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    users?: number | null,
    isPaid?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubscriptionPlanMutationVariables = {
  input: UpdateSubscriptionPlanInput,
  condition?: ModelSubscriptionPlanConditionInput | null,
};

export type UpdateSubscriptionPlanMutation = {
  updateSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    users?: number | null,
    isPaid?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubscriptionPlanMutationVariables = {
  input: DeleteSubscriptionPlanInput,
  condition?: ModelSubscriptionPlanConditionInput | null,
};

export type DeleteSubscriptionPlanMutation = {
  deleteSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    users?: number | null,
    isPaid?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdminMutationVariables = {
  input: CreateAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type CreateAdminMutation = {
  createAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    subscriptionPlanID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    company_id?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdminMutationVariables = {
  input: UpdateAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type UpdateAdminMutation = {
  updateAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    subscriptionPlanID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    company_id?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdminMutationVariables = {
  input: DeleteAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type DeleteAdminMutation = {
  deleteAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    subscriptionPlanID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    company_id?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    id: string,
    company_name?: string | null,
    owner_name?: string | null,
    gstin?: string | null,
    billing_address?: string | null,
    email?: string | null,
    phone?: string | null,
    gst_category?: string | null,
    adminID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    InventoryItems?:  {
      __typename: "ModelInventoryItemConnection",
      nextToken?: string | null,
    } | null,
    shipping_address?: string | null,
    pincode?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    id: string,
    company_name?: string | null,
    owner_name?: string | null,
    gstin?: string | null,
    billing_address?: string | null,
    email?: string | null,
    phone?: string | null,
    gst_category?: string | null,
    adminID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    InventoryItems?:  {
      __typename: "ModelInventoryItemConnection",
      nextToken?: string | null,
    } | null,
    shipping_address?: string | null,
    pincode?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    id: string,
    company_name?: string | null,
    owner_name?: string | null,
    gstin?: string | null,
    billing_address?: string | null,
    email?: string | null,
    phone?: string | null,
    gst_category?: string | null,
    adminID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    InventoryItems?:  {
      __typename: "ModelInventoryItemConnection",
      nextToken?: string | null,
    } | null,
    shipping_address?: string | null,
    pincode?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVendorMutationVariables = {
  input: CreateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type CreateVendorMutation = {
  createVendor?:  {
    __typename: "Vendor",
    id: string,
    vendor_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    payable_amount?: number | null,
    billing_address?: string | null,
    vendor_status?: ProfileStatus | null,
    gstin?: string | null,
    shipping_address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVendorMutationVariables = {
  input: UpdateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type UpdateVendorMutation = {
  updateVendor?:  {
    __typename: "Vendor",
    id: string,
    vendor_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    payable_amount?: number | null,
    billing_address?: string | null,
    vendor_status?: ProfileStatus | null,
    gstin?: string | null,
    shipping_address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVendorMutationVariables = {
  input: DeleteVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type DeleteVendorMutation = {
  deleteVendor?:  {
    __typename: "Vendor",
    id: string,
    vendor_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    payable_amount?: number | null,
    billing_address?: string | null,
    vendor_status?: ProfileStatus | null,
    gstin?: string | null,
    shipping_address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    customer_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    outstanding_amount?: number | null,
    billing_address?: string | null,
    customer_status?: ProfileStatus | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    Quotations?:  {
      __typename: "ModelQuotationConnection",
      nextToken?: string | null,
    } | null,
    gstin?: string | null,
    shipping_address?: string | null,
    city?: string | null,
    state?: string | null,
    pincode?: string | null,
    country?: string | null,
    pan_number?: string | null,
    credit_limit?: string | null,
    note?: string | null,
    printColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    customer_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    outstanding_amount?: number | null,
    billing_address?: string | null,
    customer_status?: ProfileStatus | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    Quotations?:  {
      __typename: "ModelQuotationConnection",
      nextToken?: string | null,
    } | null,
    gstin?: string | null,
    shipping_address?: string | null,
    city?: string | null,
    state?: string | null,
    pincode?: string | null,
    country?: string | null,
    pan_number?: string | null,
    credit_limit?: string | null,
    note?: string | null,
    printColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    customer_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    outstanding_amount?: number | null,
    billing_address?: string | null,
    customer_status?: ProfileStatus | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    Quotations?:  {
      __typename: "ModelQuotationConnection",
      nextToken?: string | null,
    } | null,
    gstin?: string | null,
    shipping_address?: string | null,
    city?: string | null,
    state?: string | null,
    pincode?: string | null,
    country?: string | null,
    pan_number?: string | null,
    credit_limit?: string | null,
    note?: string | null,
    printColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuotationMutationVariables = {
  input: CreateQuotationInput,
  condition?: ModelQuotationConditionInput | null,
};

export type CreateQuotationMutation = {
  createQuotation?:  {
    __typename: "Quotation",
    id: string,
    quotation_id?: string | null,
    quotation_status?: QuotationStatus | null,
    quotation_number?: string | null,
    quotation_date?: string | null,
    valid_until?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuotationMutationVariables = {
  input: UpdateQuotationInput,
  condition?: ModelQuotationConditionInput | null,
};

export type UpdateQuotationMutation = {
  updateQuotation?:  {
    __typename: "Quotation",
    id: string,
    quotation_id?: string | null,
    quotation_status?: QuotationStatus | null,
    quotation_number?: string | null,
    quotation_date?: string | null,
    valid_until?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuotationMutationVariables = {
  input: DeleteQuotationInput,
  condition?: ModelQuotationConditionInput | null,
};

export type DeleteQuotationMutation = {
  deleteQuotation?:  {
    __typename: "Quotation",
    id: string,
    quotation_id?: string | null,
    quotation_status?: QuotationStatus | null,
    quotation_number?: string | null,
    quotation_date?: string | null,
    valid_until?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInvoiceMutationVariables = {
  input: CreateInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type CreateInvoiceMutation = {
  createInvoice?:  {
    __typename: "Invoice",
    id: string,
    invoice_id?: string | null,
    invoice_status?: InvoiceStatus | null,
    invoice_number?: string | null,
    invoice_date?: string | null,
    due_date?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInvoiceMutationVariables = {
  input: UpdateInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type UpdateInvoiceMutation = {
  updateInvoice?:  {
    __typename: "Invoice",
    id: string,
    invoice_id?: string | null,
    invoice_status?: InvoiceStatus | null,
    invoice_number?: string | null,
    invoice_date?: string | null,
    due_date?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInvoiceMutationVariables = {
  input: DeleteInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type DeleteInvoiceMutation = {
  deleteInvoice?:  {
    __typename: "Invoice",
    id: string,
    invoice_id?: string | null,
    invoice_status?: InvoiceStatus | null,
    invoice_number?: string | null,
    invoice_date?: string | null,
    due_date?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetInventoryItemQueryVariables = {
  id: string,
};

export type GetInventoryItemQuery = {
  getInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    item_code?: string | null,
    hsn_number?: string | null,
    name?: string | null,
    description?: string | null,
    unit?: string | null,
    tax_rate?: string | null,
    current_stock?: string | null,
    stock_status?: StockStatus | null,
    category?: string | null,
    brand?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    companyID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInventoryItemsQueryVariables = {
  filter?: ModelInventoryItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInventoryItemsQuery = {
  listInventoryItems?:  {
    __typename: "ModelInventoryItemConnection",
    items:  Array< {
      __typename: "InventoryItem",
      id: string,
      item_code?: string | null,
      hsn_number?: string | null,
      name?: string | null,
      description?: string | null,
      unit?: string | null,
      tax_rate?: string | null,
      current_stock?: string | null,
      stock_status?: StockStatus | null,
      category?: string | null,
      brand?: string | null,
      cgst?: string | null,
      sgst?: string | null,
      igst?: string | null,
      companyID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type InventoryItemsByCompanyIDQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInventoryItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InventoryItemsByCompanyIDQuery = {
  inventoryItemsByCompanyID?:  {
    __typename: "ModelInventoryItemConnection",
    items:  Array< {
      __typename: "InventoryItem",
      id: string,
      item_code?: string | null,
      hsn_number?: string | null,
      name?: string | null,
      description?: string | null,
      unit?: string | null,
      tax_rate?: string | null,
      current_stock?: string | null,
      stock_status?: StockStatus | null,
      category?: string | null,
      brand?: string | null,
      cgst?: string | null,
      sgst?: string | null,
      igst?: string | null,
      companyID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyEmployeeQueryVariables = {
  id: string,
};

export type GetCompanyEmployeeQuery = {
  getCompanyEmployee?:  {
    __typename: "CompanyEmployee",
    id: string,
    name?: string | null,
    adminID: string,
    companyID: string,
    email?: string | null,
    userID?: string | null,
    profile_status?: EmployeeStatus | null,
    department?: string | null,
    employeeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompanyEmployeesQueryVariables = {
  filter?: ModelCompanyEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanyEmployeesQuery = {
  listCompanyEmployees?:  {
    __typename: "ModelCompanyEmployeeConnection",
    items:  Array< {
      __typename: "CompanyEmployee",
      id: string,
      name?: string | null,
      adminID: string,
      companyID: string,
      email?: string | null,
      userID?: string | null,
      profile_status?: EmployeeStatus | null,
      department?: string | null,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CompanyEmployeesByAdminIDQueryVariables = {
  adminID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CompanyEmployeesByAdminIDQuery = {
  companyEmployeesByAdminID?:  {
    __typename: "ModelCompanyEmployeeConnection",
    items:  Array< {
      __typename: "CompanyEmployee",
      id: string,
      name?: string | null,
      adminID: string,
      companyID: string,
      email?: string | null,
      userID?: string | null,
      profile_status?: EmployeeStatus | null,
      department?: string | null,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CompanyEmployeesByCompanyIDQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CompanyEmployeesByCompanyIDQuery = {
  companyEmployeesByCompanyID?:  {
    __typename: "ModelCompanyEmployeeConnection",
    items:  Array< {
      __typename: "CompanyEmployee",
      id: string,
      name?: string | null,
      adminID: string,
      companyID: string,
      email?: string | null,
      userID?: string | null,
      profile_status?: EmployeeStatus | null,
      department?: string | null,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubscriptionPlanQueryVariables = {
  id: string,
};

export type GetSubscriptionPlanQuery = {
  getSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    users?: number | null,
    isPaid?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubscriptionPlansQueryVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubscriptionPlansQuery = {
  listSubscriptionPlans?:  {
    __typename: "ModelSubscriptionPlanConnection",
    items:  Array< {
      __typename: "SubscriptionPlan",
      id: string,
      title?: string | null,
      description?: string | null,
      cost?: string | null,
      users?: number | null,
      isPaid?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAdminQueryVariables = {
  id: string,
};

export type GetAdminQuery = {
  getAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    subscriptionPlanID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    company_id?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdminsQueryVariables = {
  filter?: ModelAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminsQuery = {
  listAdmins?:  {
    __typename: "ModelAdminConnection",
    items:  Array< {
      __typename: "Admin",
      id: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      subscriptionPlanID?: string | null,
      company_id?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    id: string,
    company_name?: string | null,
    owner_name?: string | null,
    gstin?: string | null,
    billing_address?: string | null,
    email?: string | null,
    phone?: string | null,
    gst_category?: string | null,
    adminID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    InventoryItems?:  {
      __typename: "ModelInventoryItemConnection",
      nextToken?: string | null,
    } | null,
    shipping_address?: string | null,
    pincode?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      company_name?: string | null,
      owner_name?: string | null,
      gstin?: string | null,
      billing_address?: string | null,
      email?: string | null,
      phone?: string | null,
      gst_category?: string | null,
      adminID?: string | null,
      shipping_address?: string | null,
      pincode?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVendorQueryVariables = {
  id: string,
};

export type GetVendorQuery = {
  getVendor?:  {
    __typename: "Vendor",
    id: string,
    vendor_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    payable_amount?: number | null,
    billing_address?: string | null,
    vendor_status?: ProfileStatus | null,
    gstin?: string | null,
    shipping_address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVendorsQueryVariables = {
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVendorsQuery = {
  listVendors?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      vendor_id?: string | null,
      company_name?: string | null,
      owner_name?: string | null,
      email?: string | null,
      phone?: string | null,
      payable_amount?: number | null,
      billing_address?: string | null,
      vendor_status?: ProfileStatus | null,
      gstin?: string | null,
      shipping_address?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    customer_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    outstanding_amount?: number | null,
    billing_address?: string | null,
    customer_status?: ProfileStatus | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    Quotations?:  {
      __typename: "ModelQuotationConnection",
      nextToken?: string | null,
    } | null,
    gstin?: string | null,
    shipping_address?: string | null,
    city?: string | null,
    state?: string | null,
    pincode?: string | null,
    country?: string | null,
    pan_number?: string | null,
    credit_limit?: string | null,
    note?: string | null,
    printColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      customer_id?: string | null,
      company_name?: string | null,
      owner_name?: string | null,
      email?: string | null,
      phone?: string | null,
      outstanding_amount?: number | null,
      billing_address?: string | null,
      customer_status?: ProfileStatus | null,
      gstin?: string | null,
      shipping_address?: string | null,
      city?: string | null,
      state?: string | null,
      pincode?: string | null,
      country?: string | null,
      pan_number?: string | null,
      credit_limit?: string | null,
      note?: string | null,
      printColor?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuotationQueryVariables = {
  id: string,
};

export type GetQuotationQuery = {
  getQuotation?:  {
    __typename: "Quotation",
    id: string,
    quotation_id?: string | null,
    quotation_status?: QuotationStatus | null,
    quotation_number?: string | null,
    quotation_date?: string | null,
    valid_until?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuotationsQueryVariables = {
  filter?: ModelQuotationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuotationsQuery = {
  listQuotations?:  {
    __typename: "ModelQuotationConnection",
    items:  Array< {
      __typename: "Quotation",
      id: string,
      quotation_id?: string | null,
      quotation_status?: QuotationStatus | null,
      quotation_number?: string | null,
      quotation_date?: string | null,
      valid_until?: string | null,
      from_company?: string | null,
      from_address?: string | null,
      from_gstin?: string | null,
      from_email?: string | null,
      from_phone?: string | null,
      to_customer?: string | null,
      to_address?: string | null,
      to_gstin?: string | null,
      to_email?: string | null,
      to_phone?: string | null,
      items?: string | null,
      subtotal?: string | null,
      cgst?: string | null,
      sgst?: string | null,
      igst?: string | null,
      total?: string | null,
      notes?: string | null,
      terms_conditions?: string | null,
      customerID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuotationsByCustomerIDQueryVariables = {
  customerID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuotationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuotationsByCustomerIDQuery = {
  quotationsByCustomerID?:  {
    __typename: "ModelQuotationConnection",
    items:  Array< {
      __typename: "Quotation",
      id: string,
      quotation_id?: string | null,
      quotation_status?: QuotationStatus | null,
      quotation_number?: string | null,
      quotation_date?: string | null,
      valid_until?: string | null,
      from_company?: string | null,
      from_address?: string | null,
      from_gstin?: string | null,
      from_email?: string | null,
      from_phone?: string | null,
      to_customer?: string | null,
      to_address?: string | null,
      to_gstin?: string | null,
      to_email?: string | null,
      to_phone?: string | null,
      items?: string | null,
      subtotal?: string | null,
      cgst?: string | null,
      sgst?: string | null,
      igst?: string | null,
      total?: string | null,
      notes?: string | null,
      terms_conditions?: string | null,
      customerID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInvoiceQueryVariables = {
  id: string,
};

export type GetInvoiceQuery = {
  getInvoice?:  {
    __typename: "Invoice",
    id: string,
    invoice_id?: string | null,
    invoice_status?: InvoiceStatus | null,
    invoice_number?: string | null,
    invoice_date?: string | null,
    due_date?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInvoicesQueryVariables = {
  filter?: ModelInvoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInvoicesQuery = {
  listInvoices?:  {
    __typename: "ModelInvoiceConnection",
    items:  Array< {
      __typename: "Invoice",
      id: string,
      invoice_id?: string | null,
      invoice_status?: InvoiceStatus | null,
      invoice_number?: string | null,
      invoice_date?: string | null,
      due_date?: string | null,
      from_company?: string | null,
      from_address?: string | null,
      from_gstin?: string | null,
      from_email?: string | null,
      from_phone?: string | null,
      to_customer?: string | null,
      to_address?: string | null,
      to_gstin?: string | null,
      to_email?: string | null,
      to_phone?: string | null,
      items?: string | null,
      subtotal?: string | null,
      cgst?: string | null,
      sgst?: string | null,
      igst?: string | null,
      total?: string | null,
      notes?: string | null,
      terms_conditions?: string | null,
      customerID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type InvoicesByCustomerIDQueryVariables = {
  customerID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInvoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InvoicesByCustomerIDQuery = {
  invoicesByCustomerID?:  {
    __typename: "ModelInvoiceConnection",
    items:  Array< {
      __typename: "Invoice",
      id: string,
      invoice_id?: string | null,
      invoice_status?: InvoiceStatus | null,
      invoice_number?: string | null,
      invoice_date?: string | null,
      due_date?: string | null,
      from_company?: string | null,
      from_address?: string | null,
      from_gstin?: string | null,
      from_email?: string | null,
      from_phone?: string | null,
      to_customer?: string | null,
      to_address?: string | null,
      to_gstin?: string | null,
      to_email?: string | null,
      to_phone?: string | null,
      items?: string | null,
      subtotal?: string | null,
      cgst?: string | null,
      sgst?: string | null,
      igst?: string | null,
      total?: string | null,
      notes?: string | null,
      terms_conditions?: string | null,
      customerID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInventoryItemSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryItemFilterInput | null,
};

export type OnCreateInventoryItemSubscription = {
  onCreateInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    item_code?: string | null,
    hsn_number?: string | null,
    name?: string | null,
    description?: string | null,
    unit?: string | null,
    tax_rate?: string | null,
    current_stock?: string | null,
    stock_status?: StockStatus | null,
    category?: string | null,
    brand?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    companyID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInventoryItemSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryItemFilterInput | null,
};

export type OnUpdateInventoryItemSubscription = {
  onUpdateInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    item_code?: string | null,
    hsn_number?: string | null,
    name?: string | null,
    description?: string | null,
    unit?: string | null,
    tax_rate?: string | null,
    current_stock?: string | null,
    stock_status?: StockStatus | null,
    category?: string | null,
    brand?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    companyID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInventoryItemSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryItemFilterInput | null,
};

export type OnDeleteInventoryItemSubscription = {
  onDeleteInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    item_code?: string | null,
    hsn_number?: string | null,
    name?: string | null,
    description?: string | null,
    unit?: string | null,
    tax_rate?: string | null,
    current_stock?: string | null,
    stock_status?: StockStatus | null,
    category?: string | null,
    brand?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    companyID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompanyEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyEmployeeFilterInput | null,
};

export type OnCreateCompanyEmployeeSubscription = {
  onCreateCompanyEmployee?:  {
    __typename: "CompanyEmployee",
    id: string,
    name?: string | null,
    adminID: string,
    companyID: string,
    email?: string | null,
    userID?: string | null,
    profile_status?: EmployeeStatus | null,
    department?: string | null,
    employeeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanyEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyEmployeeFilterInput | null,
};

export type OnUpdateCompanyEmployeeSubscription = {
  onUpdateCompanyEmployee?:  {
    __typename: "CompanyEmployee",
    id: string,
    name?: string | null,
    adminID: string,
    companyID: string,
    email?: string | null,
    userID?: string | null,
    profile_status?: EmployeeStatus | null,
    department?: string | null,
    employeeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanyEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyEmployeeFilterInput | null,
};

export type OnDeleteCompanyEmployeeSubscription = {
  onDeleteCompanyEmployee?:  {
    __typename: "CompanyEmployee",
    id: string,
    name?: string | null,
    adminID: string,
    companyID: string,
    email?: string | null,
    userID?: string | null,
    profile_status?: EmployeeStatus | null,
    department?: string | null,
    employeeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubscriptionPlanSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriptionPlanFilterInput | null,
};

export type OnCreateSubscriptionPlanSubscription = {
  onCreateSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    users?: number | null,
    isPaid?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubscriptionPlanSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriptionPlanFilterInput | null,
};

export type OnUpdateSubscriptionPlanSubscription = {
  onUpdateSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    users?: number | null,
    isPaid?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubscriptionPlanSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriptionPlanFilterInput | null,
};

export type OnDeleteSubscriptionPlanSubscription = {
  onDeleteSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    users?: number | null,
    isPaid?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnCreateAdminSubscription = {
  onCreateAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    subscriptionPlanID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    company_id?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnUpdateAdminSubscription = {
  onUpdateAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    subscriptionPlanID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    company_id?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnDeleteAdminSubscription = {
  onDeleteAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    subscriptionPlanID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    company_id?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "Company",
    id: string,
    company_name?: string | null,
    owner_name?: string | null,
    gstin?: string | null,
    billing_address?: string | null,
    email?: string | null,
    phone?: string | null,
    gst_category?: string | null,
    adminID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    InventoryItems?:  {
      __typename: "ModelInventoryItemConnection",
      nextToken?: string | null,
    } | null,
    shipping_address?: string | null,
    pincode?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "Company",
    id: string,
    company_name?: string | null,
    owner_name?: string | null,
    gstin?: string | null,
    billing_address?: string | null,
    email?: string | null,
    phone?: string | null,
    gst_category?: string | null,
    adminID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    InventoryItems?:  {
      __typename: "ModelInventoryItemConnection",
      nextToken?: string | null,
    } | null,
    shipping_address?: string | null,
    pincode?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "Company",
    id: string,
    company_name?: string | null,
    owner_name?: string | null,
    gstin?: string | null,
    billing_address?: string | null,
    email?: string | null,
    phone?: string | null,
    gst_category?: string | null,
    adminID?: string | null,
    CompanyEmployees?:  {
      __typename: "ModelCompanyEmployeeConnection",
      nextToken?: string | null,
    } | null,
    InventoryItems?:  {
      __typename: "ModelInventoryItemConnection",
      nextToken?: string | null,
    } | null,
    shipping_address?: string | null,
    pincode?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
};

export type OnCreateVendorSubscription = {
  onCreateVendor?:  {
    __typename: "Vendor",
    id: string,
    vendor_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    payable_amount?: number | null,
    billing_address?: string | null,
    vendor_status?: ProfileStatus | null,
    gstin?: string | null,
    shipping_address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
};

export type OnUpdateVendorSubscription = {
  onUpdateVendor?:  {
    __typename: "Vendor",
    id: string,
    vendor_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    payable_amount?: number | null,
    billing_address?: string | null,
    vendor_status?: ProfileStatus | null,
    gstin?: string | null,
    shipping_address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
};

export type OnDeleteVendorSubscription = {
  onDeleteVendor?:  {
    __typename: "Vendor",
    id: string,
    vendor_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    payable_amount?: number | null,
    billing_address?: string | null,
    vendor_status?: ProfileStatus | null,
    gstin?: string | null,
    shipping_address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    customer_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    outstanding_amount?: number | null,
    billing_address?: string | null,
    customer_status?: ProfileStatus | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    Quotations?:  {
      __typename: "ModelQuotationConnection",
      nextToken?: string | null,
    } | null,
    gstin?: string | null,
    shipping_address?: string | null,
    city?: string | null,
    state?: string | null,
    pincode?: string | null,
    country?: string | null,
    pan_number?: string | null,
    credit_limit?: string | null,
    note?: string | null,
    printColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    customer_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    outstanding_amount?: number | null,
    billing_address?: string | null,
    customer_status?: ProfileStatus | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    Quotations?:  {
      __typename: "ModelQuotationConnection",
      nextToken?: string | null,
    } | null,
    gstin?: string | null,
    shipping_address?: string | null,
    city?: string | null,
    state?: string | null,
    pincode?: string | null,
    country?: string | null,
    pan_number?: string | null,
    credit_limit?: string | null,
    note?: string | null,
    printColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    customer_id?: string | null,
    company_name?: string | null,
    owner_name?: string | null,
    email?: string | null,
    phone?: string | null,
    outstanding_amount?: number | null,
    billing_address?: string | null,
    customer_status?: ProfileStatus | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    Quotations?:  {
      __typename: "ModelQuotationConnection",
      nextToken?: string | null,
    } | null,
    gstin?: string | null,
    shipping_address?: string | null,
    city?: string | null,
    state?: string | null,
    pincode?: string | null,
    country?: string | null,
    pan_number?: string | null,
    credit_limit?: string | null,
    note?: string | null,
    printColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuotationSubscriptionVariables = {
  filter?: ModelSubscriptionQuotationFilterInput | null,
};

export type OnCreateQuotationSubscription = {
  onCreateQuotation?:  {
    __typename: "Quotation",
    id: string,
    quotation_id?: string | null,
    quotation_status?: QuotationStatus | null,
    quotation_number?: string | null,
    quotation_date?: string | null,
    valid_until?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuotationSubscriptionVariables = {
  filter?: ModelSubscriptionQuotationFilterInput | null,
};

export type OnUpdateQuotationSubscription = {
  onUpdateQuotation?:  {
    __typename: "Quotation",
    id: string,
    quotation_id?: string | null,
    quotation_status?: QuotationStatus | null,
    quotation_number?: string | null,
    quotation_date?: string | null,
    valid_until?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuotationSubscriptionVariables = {
  filter?: ModelSubscriptionQuotationFilterInput | null,
};

export type OnDeleteQuotationSubscription = {
  onDeleteQuotation?:  {
    __typename: "Quotation",
    id: string,
    quotation_id?: string | null,
    quotation_status?: QuotationStatus | null,
    quotation_number?: string | null,
    quotation_date?: string | null,
    valid_until?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
};

export type OnCreateInvoiceSubscription = {
  onCreateInvoice?:  {
    __typename: "Invoice",
    id: string,
    invoice_id?: string | null,
    invoice_status?: InvoiceStatus | null,
    invoice_number?: string | null,
    invoice_date?: string | null,
    due_date?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
};

export type OnUpdateInvoiceSubscription = {
  onUpdateInvoice?:  {
    __typename: "Invoice",
    id: string,
    invoice_id?: string | null,
    invoice_status?: InvoiceStatus | null,
    invoice_number?: string | null,
    invoice_date?: string | null,
    due_date?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
};

export type OnDeleteInvoiceSubscription = {
  onDeleteInvoice?:  {
    __typename: "Invoice",
    id: string,
    invoice_id?: string | null,
    invoice_status?: InvoiceStatus | null,
    invoice_number?: string | null,
    invoice_date?: string | null,
    due_date?: string | null,
    from_company?: string | null,
    from_address?: string | null,
    from_gstin?: string | null,
    from_email?: string | null,
    from_phone?: string | null,
    to_customer?: string | null,
    to_address?: string | null,
    to_gstin?: string | null,
    to_email?: string | null,
    to_phone?: string | null,
    items?: string | null,
    subtotal?: string | null,
    cgst?: string | null,
    sgst?: string | null,
    igst?: string | null,
    total?: string | null,
    notes?: string | null,
    terms_conditions?: string | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
