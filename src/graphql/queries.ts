/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getInventoryItem = /* GraphQL */ `query GetInventoryItem($id: ID!) {
  getInventoryItem(id: $id) {
    id
    item_code
    hsn_number
    name
    description
    unit
    rate
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
` as GeneratedQuery<
  APITypes.GetInventoryItemQueryVariables,
  APITypes.GetInventoryItemQuery
>;
export const listInventoryItems = /* GraphQL */ `query ListInventoryItems(
  $filter: ModelInventoryItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listInventoryItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      item_code
      hsn_number
      name
      description
      unit
      rate
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInventoryItemsQueryVariables,
  APITypes.ListInventoryItemsQuery
>;
export const inventoryItemsByCompanyID = /* GraphQL */ `query InventoryItemsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelInventoryItemFilterInput
  $limit: Int
  $nextToken: String
) {
  inventoryItemsByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      item_code
      hsn_number
      name
      description
      unit
      rate
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.InventoryItemsByCompanyIDQueryVariables,
  APITypes.InventoryItemsByCompanyIDQuery
>;
export const getCompanyEmployee = /* GraphQL */ `query GetCompanyEmployee($id: ID!) {
  getCompanyEmployee(id: $id) {
    id
    name
    adminID
    company_id
    email
    userID
    profile_status
    department
    employeeID
    permissionRole
    permissionMatrix
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCompanyEmployeeQueryVariables,
  APITypes.GetCompanyEmployeeQuery
>;
export const listCompanyEmployees = /* GraphQL */ `query ListCompanyEmployees(
  $filter: ModelCompanyEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanyEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      adminID
      company_id
      email
      userID
      profile_status
      department
      employeeID
      permissionRole
      permissionMatrix
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompanyEmployeesQueryVariables,
  APITypes.ListCompanyEmployeesQuery
>;
export const companyEmployeesByAdminID = /* GraphQL */ `query CompanyEmployeesByAdminID(
  $adminID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCompanyEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  companyEmployeesByAdminID(
    adminID: $adminID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      adminID
      company_id
      email
      userID
      profile_status
      department
      employeeID
      permissionRole
      permissionMatrix
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CompanyEmployeesByAdminIDQueryVariables,
  APITypes.CompanyEmployeesByAdminIDQuery
>;
export const companyEmployeesByCompany_id = /* GraphQL */ `query CompanyEmployeesByCompany_id(
  $company_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCompanyEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  companyEmployeesByCompany_id(
    company_id: $company_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      adminID
      company_id
      email
      userID
      profile_status
      department
      employeeID
      permissionRole
      permissionMatrix
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CompanyEmployeesByCompany_idQueryVariables,
  APITypes.CompanyEmployeesByCompany_idQuery
>;
export const getSubscriptionPlan = /* GraphQL */ `query GetSubscriptionPlan($id: ID!) {
  getSubscriptionPlan(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSubscriptionPlanQueryVariables,
  APITypes.GetSubscriptionPlanQuery
>;
export const listSubscriptionPlans = /* GraphQL */ `query ListSubscriptionPlans(
  $filter: ModelSubscriptionPlanFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubscriptionPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubscriptionPlansQueryVariables,
  APITypes.ListSubscriptionPlansQuery
>;
export const getAdmin = /* GraphQL */ `query GetAdmin($id: ID!) {
  getAdmin(id: $id) {
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
` as GeneratedQuery<APITypes.GetAdminQueryVariables, APITypes.GetAdminQuery>;
export const listAdmins = /* GraphQL */ `query ListAdmins(
  $filter: ModelAdminFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      phone
      subscriptionPlanID
      company_id
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdminsQueryVariables,
  APITypes.ListAdminsQuery
>;
export const getCompany = /* GraphQL */ `query GetCompany($id: ID!) {
  getCompany(id: $id) {
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
    Customers {
      nextToken
      __typename
    }
    Vendors {
      nextToken
      __typename
    }
    Invoices {
      nextToken
      __typename
    }
    Quotations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCompanyQueryVariables,
  APITypes.GetCompanyQuery
>;
export const listCompanies = /* GraphQL */ `query ListCompanies(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      company_name
      owner_name
      gstin
      billing_address
      email
      phone
      gst_category
      adminID
      shipping_address
      pincode
      city
      state
      country
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesQueryVariables,
  APITypes.ListCompaniesQuery
>;
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
    gstin
    shipping_address
    companyID
    adminID
    city
    state
    pincode
    country
    pan_number
    note
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
      gstin
      shipping_address
      companyID
      adminID
      city
      state
      pincode
      country
      pan_number
      note
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
export const vendorsByCompanyID = /* GraphQL */ `query VendorsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVendorFilterInput
  $limit: Int
  $nextToken: String
) {
  vendorsByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      gstin
      shipping_address
      companyID
      adminID
      city
      state
      pincode
      country
      pan_number
      note
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VendorsByCompanyIDQueryVariables,
  APITypes.VendorsByCompanyIDQuery
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
    note
    companyID
    adminID
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
      note
      companyID
      adminID
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
export const customersByCompanyID = /* GraphQL */ `query CustomersByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  customersByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      note
      companyID
      adminID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CustomersByCompanyIDQueryVariables,
  APITypes.CustomersByCompanyIDQuery
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
    companyID
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
      companyID
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
      companyID
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
export const quotationsByCompanyID = /* GraphQL */ `query QuotationsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelQuotationFilterInput
  $limit: Int
  $nextToken: String
) {
  quotationsByCompanyID(
    companyID: $companyID
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
      companyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuotationsByCompanyIDQueryVariables,
  APITypes.QuotationsByCompanyIDQuery
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
    companyID
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
      companyID
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
      companyID
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
export const invoicesByCompanyID = /* GraphQL */ `query InvoicesByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelInvoiceFilterInput
  $limit: Int
  $nextToken: String
) {
  invoicesByCompanyID(
    companyID: $companyID
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
      companyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.InvoicesByCompanyIDQueryVariables,
  APITypes.InvoicesByCompanyIDQuery
>;
