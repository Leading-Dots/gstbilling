/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateVendor = /* GraphQL */ `subscription OnCreateVendor($filter: ModelSubscriptionVendorFilterInput) {
  onCreateVendor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVendorSubscriptionVariables,
  APITypes.OnCreateVendorSubscription
>;
export const onUpdateVendor = /* GraphQL */ `subscription OnUpdateVendor($filter: ModelSubscriptionVendorFilterInput) {
  onUpdateVendor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVendorSubscriptionVariables,
  APITypes.OnUpdateVendorSubscription
>;
export const onDeleteVendor = /* GraphQL */ `subscription OnDeleteVendor($filter: ModelSubscriptionVendorFilterInput) {
  onDeleteVendor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVendorSubscriptionVariables,
  APITypes.OnDeleteVendorSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onCreateCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onUpdateCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onDeleteCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateQuotation = /* GraphQL */ `subscription OnCreateQuotation($filter: ModelSubscriptionQuotationFilterInput) {
  onCreateQuotation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuotationSubscriptionVariables,
  APITypes.OnCreateQuotationSubscription
>;
export const onUpdateQuotation = /* GraphQL */ `subscription OnUpdateQuotation($filter: ModelSubscriptionQuotationFilterInput) {
  onUpdateQuotation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuotationSubscriptionVariables,
  APITypes.OnUpdateQuotationSubscription
>;
export const onDeleteQuotation = /* GraphQL */ `subscription OnDeleteQuotation($filter: ModelSubscriptionQuotationFilterInput) {
  onDeleteQuotation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuotationSubscriptionVariables,
  APITypes.OnDeleteQuotationSubscription
>;
export const onCreateInvoice = /* GraphQL */ `subscription OnCreateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
  onCreateInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInvoiceSubscriptionVariables,
  APITypes.OnCreateInvoiceSubscription
>;
export const onUpdateInvoice = /* GraphQL */ `subscription OnUpdateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
  onUpdateInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInvoiceSubscriptionVariables,
  APITypes.OnUpdateInvoiceSubscription
>;
export const onDeleteInvoice = /* GraphQL */ `subscription OnDeleteInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
  onDeleteInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInvoiceSubscriptionVariables,
  APITypes.OnDeleteInvoiceSubscription
>;
