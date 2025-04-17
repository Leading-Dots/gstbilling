/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createInventoryItem = /* GraphQL */ `mutation CreateInventoryItem(
  $input: CreateInventoryItemInput!
  $condition: ModelInventoryItemConditionInput
) {
  createInventoryItem(input: $input, condition: $condition) {
    id
    item_code
    hsn_number
    name
    description
    unit
    tax_rate
    current_stock
    stock_status
    category
    brand
    cgst
    sgst
    igst
    companyID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInventoryItemMutationVariables,
  APITypes.CreateInventoryItemMutation
>;
export const updateInventoryItem = /* GraphQL */ `mutation UpdateInventoryItem(
  $input: UpdateInventoryItemInput!
  $condition: ModelInventoryItemConditionInput
) {
  updateInventoryItem(input: $input, condition: $condition) {
    id
    item_code
    hsn_number
    name
    description
    unit
    tax_rate
    current_stock
    stock_status
    category
    brand
    cgst
    sgst
    igst
    companyID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInventoryItemMutationVariables,
  APITypes.UpdateInventoryItemMutation
>;
export const deleteInventoryItem = /* GraphQL */ `mutation DeleteInventoryItem(
  $input: DeleteInventoryItemInput!
  $condition: ModelInventoryItemConditionInput
) {
  deleteInventoryItem(input: $input, condition: $condition) {
    id
    item_code
    hsn_number
    name
    description
    unit
    tax_rate
    current_stock
    stock_status
    category
    brand
    cgst
    sgst
    igst
    companyID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInventoryItemMutationVariables,
  APITypes.DeleteInventoryItemMutation
>;
export const createCompanyEmployee = /* GraphQL */ `mutation CreateCompanyEmployee(
  $input: CreateCompanyEmployeeInput!
  $condition: ModelCompanyEmployeeConditionInput
) {
  createCompanyEmployee(input: $input, condition: $condition) {
    id
    name
    adminID
    companyID
    email
    userID
    profile_status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCompanyEmployeeMutationVariables,
  APITypes.CreateCompanyEmployeeMutation
>;
export const updateCompanyEmployee = /* GraphQL */ `mutation UpdateCompanyEmployee(
  $input: UpdateCompanyEmployeeInput!
  $condition: ModelCompanyEmployeeConditionInput
) {
  updateCompanyEmployee(input: $input, condition: $condition) {
    id
    name
    adminID
    companyID
    email
    userID
    profile_status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCompanyEmployeeMutationVariables,
  APITypes.UpdateCompanyEmployeeMutation
>;
export const deleteCompanyEmployee = /* GraphQL */ `mutation DeleteCompanyEmployee(
  $input: DeleteCompanyEmployeeInput!
  $condition: ModelCompanyEmployeeConditionInput
) {
  deleteCompanyEmployee(input: $input, condition: $condition) {
    id
    name
    adminID
    companyID
    email
    userID
    profile_status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCompanyEmployeeMutationVariables,
  APITypes.DeleteCompanyEmployeeMutation
>;
export const createSubscriptionPlan = /* GraphQL */ `mutation CreateSubscriptionPlan(
  $input: CreateSubscriptionPlanInput!
  $condition: ModelSubscriptionPlanConditionInput
) {
  createSubscriptionPlan(input: $input, condition: $condition) {
    id
    title
    description
    cost
    users
    isPaid
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSubscriptionPlanMutationVariables,
  APITypes.CreateSubscriptionPlanMutation
>;
export const updateSubscriptionPlan = /* GraphQL */ `mutation UpdateSubscriptionPlan(
  $input: UpdateSubscriptionPlanInput!
  $condition: ModelSubscriptionPlanConditionInput
) {
  updateSubscriptionPlan(input: $input, condition: $condition) {
    id
    title
    description
    cost
    users
    isPaid
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSubscriptionPlanMutationVariables,
  APITypes.UpdateSubscriptionPlanMutation
>;
export const deleteSubscriptionPlan = /* GraphQL */ `mutation DeleteSubscriptionPlan(
  $input: DeleteSubscriptionPlanInput!
  $condition: ModelSubscriptionPlanConditionInput
) {
  deleteSubscriptionPlan(input: $input, condition: $condition) {
    id
    title
    description
    cost
    users
    isPaid
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSubscriptionPlanMutationVariables,
  APITypes.DeleteSubscriptionPlanMutation
>;
export const createAdmin = /* GraphQL */ `mutation CreateAdmin(
  $input: CreateAdminInput!
  $condition: ModelAdminConditionInput
) {
  createAdmin(input: $input, condition: $condition) {
    id
    name
    email
    phone
    subscriptionPlanID
    CompanyEmployees {
      nextToken
      __typename
    }
    company_id
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAdminMutationVariables,
  APITypes.CreateAdminMutation
>;
export const updateAdmin = /* GraphQL */ `mutation UpdateAdmin(
  $input: UpdateAdminInput!
  $condition: ModelAdminConditionInput
) {
  updateAdmin(input: $input, condition: $condition) {
    id
    name
    email
    phone
    subscriptionPlanID
    CompanyEmployees {
      nextToken
      __typename
    }
    company_id
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAdminMutationVariables,
  APITypes.UpdateAdminMutation
>;
export const deleteAdmin = /* GraphQL */ `mutation DeleteAdmin(
  $input: DeleteAdminInput!
  $condition: ModelAdminConditionInput
) {
  deleteAdmin(input: $input, condition: $condition) {
    id
    name
    email
    phone
    subscriptionPlanID
    CompanyEmployees {
      nextToken
      __typename
    }
    company_id
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAdminMutationVariables,
  APITypes.DeleteAdminMutation
>;
export const createCompany = /* GraphQL */ `mutation CreateCompany(
  $input: CreateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  createCompany(input: $input, condition: $condition) {
    id
    company_name
    owner_name
    gstin
    address
    email
    phone
    gst_category
    adminID
    CompanyEmployees {
      nextToken
      __typename
    }
    InventoryItems {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCompanyMutationVariables,
  APITypes.CreateCompanyMutation
>;
export const updateCompany = /* GraphQL */ `mutation UpdateCompany(
  $input: UpdateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  updateCompany(input: $input, condition: $condition) {
    id
    company_name
    owner_name
    gstin
    address
    email
    phone
    gst_category
    adminID
    CompanyEmployees {
      nextToken
      __typename
    }
    InventoryItems {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCompanyMutationVariables,
  APITypes.UpdateCompanyMutation
>;
export const deleteCompany = /* GraphQL */ `mutation DeleteCompany(
  $input: DeleteCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  deleteCompany(input: $input, condition: $condition) {
    id
    company_name
    owner_name
    gstin
    address
    email
    phone
    gst_category
    adminID
    CompanyEmployees {
      nextToken
      __typename
    }
    InventoryItems {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCompanyMutationVariables,
  APITypes.DeleteCompanyMutation
>;
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
    gstin
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
    gstin
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
    gstin
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
    note
    printColor
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
    note
    printColor
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
    note
    printColor
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
