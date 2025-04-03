/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createVendor = /* GraphQL */ `mutation CreateVendor(
  $input: CreateVendorInput!
  $condition: ModelVendorConditionInput
) {
  createVendor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateVendorMutationVariables,
  APITypes.CreateVendorMutation
>;
export const updateVendor = /* GraphQL */ `mutation UpdateVendor(
  $input: UpdateVendorInput!
  $condition: ModelVendorConditionInput
) {
  updateVendor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateVendorMutationVariables,
  APITypes.UpdateVendorMutation
>;
export const deleteVendor = /* GraphQL */ `mutation DeleteVendor(
  $input: DeleteVendorInput!
  $condition: ModelVendorConditionInput
) {
  deleteVendor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteVendorMutationVariables,
  APITypes.DeleteVendorMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $input: CreateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  createCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $input: UpdateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  updateCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $input: DeleteCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  deleteCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const createQuotation = /* GraphQL */ `mutation CreateQuotation(
  $input: CreateQuotationInput!
  $condition: ModelQuotationConditionInput
) {
  createQuotation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateQuotationMutationVariables,
  APITypes.CreateQuotationMutation
>;
export const updateQuotation = /* GraphQL */ `mutation UpdateQuotation(
  $input: UpdateQuotationInput!
  $condition: ModelQuotationConditionInput
) {
  updateQuotation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateQuotationMutationVariables,
  APITypes.UpdateQuotationMutation
>;
export const deleteQuotation = /* GraphQL */ `mutation DeleteQuotation(
  $input: DeleteQuotationInput!
  $condition: ModelQuotationConditionInput
) {
  deleteQuotation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteQuotationMutationVariables,
  APITypes.DeleteQuotationMutation
>;
export const createInvoice = /* GraphQL */ `mutation CreateInvoice(
  $input: CreateInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  createInvoice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateInvoiceMutationVariables,
  APITypes.CreateInvoiceMutation
>;
export const updateInvoice = /* GraphQL */ `mutation UpdateInvoice(
  $input: UpdateInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  updateInvoice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateInvoiceMutationVariables,
  APITypes.UpdateInvoiceMutation
>;
export const deleteInvoice = /* GraphQL */ `mutation DeleteInvoice(
  $input: DeleteInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  deleteInvoice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteInvoiceMutationVariables,
  APITypes.DeleteInvoiceMutation
>;
