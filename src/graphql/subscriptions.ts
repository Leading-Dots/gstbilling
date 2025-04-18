/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateInventoryItem = /* GraphQL */ `subscription OnCreateInventoryItem(
  $filter: ModelSubscriptionInventoryItemFilterInput
) {
  onCreateInventoryItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInventoryItemSubscriptionVariables,
  APITypes.OnCreateInventoryItemSubscription
>;
export const onUpdateInventoryItem = /* GraphQL */ `subscription OnUpdateInventoryItem(
  $filter: ModelSubscriptionInventoryItemFilterInput
) {
  onUpdateInventoryItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInventoryItemSubscriptionVariables,
  APITypes.OnUpdateInventoryItemSubscription
>;
export const onDeleteInventoryItem = /* GraphQL */ `subscription OnDeleteInventoryItem(
  $filter: ModelSubscriptionInventoryItemFilterInput
) {
  onDeleteInventoryItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInventoryItemSubscriptionVariables,
  APITypes.OnDeleteInventoryItemSubscription
>;
export const onCreateCompanyEmployee = /* GraphQL */ `subscription OnCreateCompanyEmployee(
  $filter: ModelSubscriptionCompanyEmployeeFilterInput
) {
  onCreateCompanyEmployee(filter: $filter) {
    id
    name
    adminID
    companyID
    email
    userID
    profile_status
    department
    employeeID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCompanyEmployeeSubscriptionVariables,
  APITypes.OnCreateCompanyEmployeeSubscription
>;
export const onUpdateCompanyEmployee = /* GraphQL */ `subscription OnUpdateCompanyEmployee(
  $filter: ModelSubscriptionCompanyEmployeeFilterInput
) {
  onUpdateCompanyEmployee(filter: $filter) {
    id
    name
    adminID
    companyID
    email
    userID
    profile_status
    department
    employeeID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCompanyEmployeeSubscriptionVariables,
  APITypes.OnUpdateCompanyEmployeeSubscription
>;
export const onDeleteCompanyEmployee = /* GraphQL */ `subscription OnDeleteCompanyEmployee(
  $filter: ModelSubscriptionCompanyEmployeeFilterInput
) {
  onDeleteCompanyEmployee(filter: $filter) {
    id
    name
    adminID
    companyID
    email
    userID
    profile_status
    department
    employeeID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCompanyEmployeeSubscriptionVariables,
  APITypes.OnDeleteCompanyEmployeeSubscription
>;
export const onCreateSubscriptionPlan = /* GraphQL */ `subscription OnCreateSubscriptionPlan(
  $filter: ModelSubscriptionSubscriptionPlanFilterInput
) {
  onCreateSubscriptionPlan(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubscriptionPlanSubscriptionVariables,
  APITypes.OnCreateSubscriptionPlanSubscription
>;
export const onUpdateSubscriptionPlan = /* GraphQL */ `subscription OnUpdateSubscriptionPlan(
  $filter: ModelSubscriptionSubscriptionPlanFilterInput
) {
  onUpdateSubscriptionPlan(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubscriptionPlanSubscriptionVariables,
  APITypes.OnUpdateSubscriptionPlanSubscription
>;
export const onDeleteSubscriptionPlan = /* GraphQL */ `subscription OnDeleteSubscriptionPlan(
  $filter: ModelSubscriptionSubscriptionPlanFilterInput
) {
  onDeleteSubscriptionPlan(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubscriptionPlanSubscriptionVariables,
  APITypes.OnDeleteSubscriptionPlanSubscription
>;
export const onCreateAdmin = /* GraphQL */ `subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
  onCreateAdmin(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAdminSubscriptionVariables,
  APITypes.OnCreateAdminSubscription
>;
export const onUpdateAdmin = /* GraphQL */ `subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
  onUpdateAdmin(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAdminSubscriptionVariables,
  APITypes.OnUpdateAdminSubscription
>;
export const onDeleteAdmin = /* GraphQL */ `subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
  onDeleteAdmin(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAdminSubscriptionVariables,
  APITypes.OnDeleteAdminSubscription
>;
export const onCreateCompany = /* GraphQL */ `subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onCreateCompany(filter: $filter) {
    id
    company_name
    owner_name
    gstin
    billing_address
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
    shipping_address
    pincode
    city
    state
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCompanySubscriptionVariables,
  APITypes.OnCreateCompanySubscription
>;
export const onUpdateCompany = /* GraphQL */ `subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onUpdateCompany(filter: $filter) {
    id
    company_name
    owner_name
    gstin
    billing_address
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
    shipping_address
    pincode
    city
    state
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCompanySubscriptionVariables,
  APITypes.OnUpdateCompanySubscription
>;
export const onDeleteCompany = /* GraphQL */ `subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onDeleteCompany(filter: $filter) {
    id
    company_name
    owner_name
    gstin
    billing_address
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
    shipping_address
    pincode
    city
    state
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCompanySubscriptionVariables,
  APITypes.OnDeleteCompanySubscription
>;
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
    gstin
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
    gstin
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
    gstin
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
    note
    printColor
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
    note
    printColor
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
    note
    printColor
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
