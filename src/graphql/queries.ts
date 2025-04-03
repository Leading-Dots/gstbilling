/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getVendor = /* GraphQL */ `query GetVendor($id: ID!) {
  getVendor(id: $id) {
    id
    vendor_id
    company_name
    owner_name
    email
    phone
    payable_amount
    billing_address
    vendor_status
    garin
    shipping_address
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetVendorQueryVariables, APITypes.GetVendorQuery>;
export const listVendors = /* GraphQL */ `query ListVendors(
  $filter: ModelVendorFilterInput
  $limit: Int
  $nextToken: String
) {
  listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      vendor_id
      company_name
      owner_name
      email
      phone
      payable_amount
      billing_address
      vendor_status
      garin
      shipping_address
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVendorsQueryVariables,
  APITypes.ListVendorsQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    id
    customer_id
    company_name
    owner_name
    email
    phone
    outstanding_amount
    billing_address
    customer_status
    Invoices {
      nextToken
      __typename
    }
    Quotations {
      nextToken
      __typename
    }
    gstin
    shipping_address
    city
    state
    pincode
    country
    pan_number
    credit_limit
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customer_id
      company_name
      owner_name
      email
      phone
      outstanding_amount
      billing_address
      customer_status
      gstin
      shipping_address
      city
      state
      pincode
      country
      pan_number
      credit_limit
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const getQuotation = /* GraphQL */ `query GetQuotation($id: ID!) {
  getQuotation(id: $id) {
    id
    quotation_id
    quotation_status
    quotation_number
    quotation_date
    valid_until
    from_company
    from_address
    from_gstin
    from_email
    from_phone
    to_customer
    to_address
    to_gstin
    to_email
    to_phone
    items
    subtotal
    cgst
    sgst
    igst
    total
    notes
    terms_conditions
    customerID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetQuotationQueryVariables,
  APITypes.GetQuotationQuery
>;
export const listQuotations = /* GraphQL */ `query ListQuotations(
  $filter: ModelQuotationFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuotations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      quotation_id
      quotation_status
      quotation_number
      quotation_date
      valid_until
      from_company
      from_address
      from_gstin
      from_email
      from_phone
      to_customer
      to_address
      to_gstin
      to_email
      to_phone
      items
      subtotal
      cgst
      sgst
      igst
      total
      notes
      terms_conditions
      customerID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuotationsQueryVariables,
  APITypes.ListQuotationsQuery
>;
export const quotationsByCustomerID = /* GraphQL */ `query QuotationsByCustomerID(
  $customerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelQuotationFilterInput
  $limit: Int
  $nextToken: String
) {
  quotationsByCustomerID(
    customerID: $customerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      quotation_id
      quotation_status
      quotation_number
      quotation_date
      valid_until
      from_company
      from_address
      from_gstin
      from_email
      from_phone
      to_customer
      to_address
      to_gstin
      to_email
      to_phone
      items
      subtotal
      cgst
      sgst
      igst
      total
      notes
      terms_conditions
      customerID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuotationsByCustomerIDQueryVariables,
  APITypes.QuotationsByCustomerIDQuery
>;
export const getInvoice = /* GraphQL */ `query GetInvoice($id: ID!) {
  getInvoice(id: $id) {
    id
    invoice_id
    invoice_status
    invoice_number
    invoice_date
    due_date
    from_company
    from_address
    from_gstin
    from_email
    from_phone
    to_customer
    to_address
    to_gstin
    to_email
    to_phone
    items
    subtotal
    cgst
    sgst
    igst
    total
    notes
    terms_conditions
    customerID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetInvoiceQueryVariables,
  APITypes.GetInvoiceQuery
>;
export const listInvoices = /* GraphQL */ `query ListInvoices(
  $filter: ModelInvoiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      invoice_id
      invoice_status
      invoice_number
      invoice_date
      due_date
      from_company
      from_address
      from_gstin
      from_email
      from_phone
      to_customer
      to_address
      to_gstin
      to_email
      to_phone
      items
      subtotal
      cgst
      sgst
      igst
      total
      notes
      terms_conditions
      customerID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInvoicesQueryVariables,
  APITypes.ListInvoicesQuery
>;
export const invoicesByCustomerID = /* GraphQL */ `query InvoicesByCustomerID(
  $customerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelInvoiceFilterInput
  $limit: Int
  $nextToken: String
) {
  invoicesByCustomerID(
    customerID: $customerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      invoice_id
      invoice_status
      invoice_number
      invoice_date
      due_date
      from_company
      from_address
      from_gstin
      from_email
      from_phone
      to_customer
      to_address
      to_gstin
      to_email
      to_phone
      items
      subtotal
      cgst
      sgst
      igst
      total
      notes
      terms_conditions
      customerID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.InvoicesByCustomerIDQueryVariables,
  APITypes.InvoicesByCustomerIDQuery
>;
