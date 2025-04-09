/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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
  garin?: string | null,
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
  garin?: ModelStringInput | null,
  shipping_address?: ModelStringInput | null,
  and?: Array< ModelVendorConditionInput | null > | null,
  or?: Array< ModelVendorConditionInput | null > | null,
  not?: ModelVendorConditionInput | null,
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
  garin?: string | null,
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
  garin?: string | null,
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
  garin?: ModelStringInput | null,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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
  garin?: ModelSubscriptionStringInput | null,
  shipping_address?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVendorFilterInput | null > | null,
  or?: Array< ModelSubscriptionVendorFilterInput | null > | null,
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
    garin?: string | null,
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
    garin?: string | null,
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
    garin?: string | null,
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
    garin?: string | null,
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
      garin?: string | null,
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
    garin?: string | null,
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
    garin?: string | null,
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
    garin?: string | null,
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
