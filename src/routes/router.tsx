import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "@/pages/root/DashboardPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import CustomersPage from "@/pages/root/CustomersPage";
import InvoicesPage from "@/pages/root/InvoicesPage";
import QuotationsPage from "@/pages/root/QuotationsPage";
import VendorsPage from "@/pages/root/VendorsPage";
import ReportsPage from "@/pages/root/ReportsPage";
import NewInvoicePage from "@/pages/root/new/CreateInvoicePage";
import NewQuotationPage from "@/pages/root/new/CreateQuotationsPage";
import NewCustomerPage from "@/pages/root/new/CreateCustomerPage";
import NewVendorPage from "@/pages/root/new/CreateVendorPage";
import EditInvoicePage from "@/pages/root/edit/EditInvoicePage";
import UpdateQuotationPage from "@/pages/root/edit/EditQuotationPage";
import EditCustomerPage from "@/pages/root/edit/EditCustomerPage";
import CustomerDetailsPage from "@/pages/root/view/CustomerViewPage";
import InvoiceDetailsPage from "@/pages/root/view/InvoiceViewPage";
import QuotationPage from "@/pages/root/view/QuotationViewPage";
import InventoryPage from "@/pages/root/InventoryPage";
import HomeRouter from "@/pages/public/HomeRouter";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ConfirmSignUpPage from "@/pages/auth/ConfirmRegisterPage";
import OnboardingPage from "@/pages/root/onboarding/OnboardingPage";
import EmployeesPage from "@/pages/root/EmployeesPage";
import CreateEmployeePage from "@/pages/root/new/CreateEmployeePage";
import CreateInventoryItem from "@/pages/root/new/CreateInventoryItemPage";
import EditEmployeePage from "@/pages/root/edit/EditEmployeePage";
import UnauthorizedPage from "@/pages/root/UnauthorizedPage";
import { RESOURCES, ACTIONS } from "@/lib/permissionManager";
import { adminOnlyLoader, createPermissionLoader } from "./permissionLoader";
import SettingsPage from "@/pages/root/SettingsPage";
import PurchaseOrderPage from "@/pages/root/PurchaseOrderPage";
import CreatePurchaseOrderPage from "@/pages/root/new/CreatePurchaseOrderPage";

const routes = [
  {
    path: "/",
    element: (
      <DashboardLayout>
        <HomeRouter />
      </DashboardLayout>
    ),
  },

  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthLayout>
        <RegisterPage />
      </AuthLayout>
    ),
  },
  {
    path: "/confirm-signup",
    element: (
      <AuthLayout>
        <ConfirmSignUpPage />
      </AuthLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <DashboardPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/onboarding",
    element: (
      <DashboardLayout sidebarDisabled>
        <OnboardingPage />
      </DashboardLayout>
    ),
  },

  {
    path : "/settings",
    loader : adminOnlyLoader,
    element : (
      <DashboardLayout>
        <SettingsPage />
      </DashboardLayout>
    )
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
  // Employee routes with permission checks
  {
    path: "/employees",
    element: (
      <DashboardLayout>
        <EmployeesPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.EMPLOYEE, ACTIONS.LIST),
  },
  {
    path: "/employees/new",
    element: (
      <DashboardLayout>
        <CreateEmployeePage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.EMPLOYEE, ACTIONS.CREATE),
  },
  {
    path: "/employees/:id/edit",
    element: (
      <DashboardLayout>
        <EditEmployeePage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.EMPLOYEE, ACTIONS.UPDATE),
  },
  // Customer routes with permission checks
  {
    path: "/customers",
    element: (
      <DashboardLayout>
        <CustomersPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.CUSTOMER, ACTIONS.LIST),
  },
  {
    path: "/customers/new",
    element: (
      <DashboardLayout>
        <NewCustomerPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.CUSTOMER, ACTIONS.CREATE),
  },
  {
    path: "/customers/:id/edit",
    element: (
      <DashboardLayout>
        <EditCustomerPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.CUSTOMER, ACTIONS.UPDATE),
  },
  {
    path: "/customers/:id/view",
    element: (
      <DashboardLayout>
        <CustomerDetailsPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.CUSTOMER, ACTIONS.READ),
  },
  // Invoice routes with permission checks
  {
    path: "/invoices",
    element: (
      <DashboardLayout>
        <InvoicesPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.PURCHASE_ORDER, ACTIONS.LIST),
  },
  {
    path: "/purchase-orders",
    element: (
      <DashboardLayout>
        <PurchaseOrderPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.PURCHASE_ORDER, ACTIONS.LIST),
  },
  {
    path: "/purchase-orders/new",
    element: (
      <DashboardLayout>
        <CreatePurchaseOrderPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.PURCHASE_ORDER, ACTIONS.CREATE),
  },
  {
    path: "/invoices/new",
    element: (
      <DashboardLayout>
        <NewInvoicePage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.INVOICE, ACTIONS.CREATE),
  },
  {
    path: "/invoices/:id/edit",
    element: (
      <DashboardLayout>
        <EditInvoicePage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.INVOICE, ACTIONS.UPDATE),
  },
  {
    path: "/invoices/:id/view",
    element: (
      <DashboardLayout>
        <InvoiceDetailsPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.INVOICE, ACTIONS.READ),
  },
  // Inventory routes with permission checks
  {
    path: "/inventory",
    element: (
      <DashboardLayout>
        <InventoryPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.INVENTORY_ITEM, ACTIONS.LIST),
  },
  {
    path: "/inventory/create",
    element: (
      <DashboardLayout>
        <CreateInventoryItem/>
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.INVENTORY_ITEM, ACTIONS.CREATE),
  },
  // Quotation routes with permission checks
  {
    path: "/quotations",
    element: (
      <DashboardLayout>
        <QuotationsPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.QUOTATION, ACTIONS.LIST),
  },
  {
    path: "/quotations/new",
    element: (
      <DashboardLayout>
        <NewQuotationPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.QUOTATION, ACTIONS.CREATE),
  },
  {
    path: "/quotations/:id/edit",
    element: (
      <DashboardLayout>
        <UpdateQuotationPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.QUOTATION, ACTIONS.UPDATE),
  },
  {
    path: "/quotations/:id/view",
    element: (
      <DashboardLayout>
        <QuotationPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.QUOTATION, ACTIONS.READ),
  },
  // Vendor routes with permission checks
  {
    path: "/vendors",
    element: (
      <DashboardLayout>
        <VendorsPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.VENDOR, ACTIONS.LIST),
  },
  {
    path: "/vendors/new",
    element: (
      <DashboardLayout>
        <NewVendorPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.VENDOR, ACTIONS.CREATE),
  },
  // Reports page with company read permission
  {
    path: "/reports",
    element: (
      <DashboardLayout>
        <ReportsPage />
      </DashboardLayout>
    ),
    loader: createPermissionLoader(RESOURCES.COMPANY, ACTIONS.READ),
  },
];

const router = createBrowserRouter(routes);
export default router;