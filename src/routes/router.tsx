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
    path: "/customers",
    element: (
      <DashboardLayout>
        <CustomersPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/customers/new",
    element: (
      <DashboardLayout>
        <NewCustomerPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/invoices",
    element: (
      <DashboardLayout>
        <InvoicesPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/inventory",
    element: (
      <DashboardLayout>
        <InventoryPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/invoices/new",
    element: (
      <DashboardLayout>
        <NewInvoicePage />
      </DashboardLayout>
    ),
  },
  {
    path: "/quotations/new",
    element: (
      <DashboardLayout>
        <NewQuotationPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/invoices/:id/edit",
    element: (
      <DashboardLayout>
        <EditInvoicePage />
      </DashboardLayout>
    ),
  },
  {
    path: "/invoices/:id/view",
    element: (
      <DashboardLayout>
        <InvoiceDetailsPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/customers/:id/edit",
    element: (
      <DashboardLayout>
        <EditCustomerPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/customers/:id/view",
    element: (
      <DashboardLayout>
        <CustomerDetailsPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/quotations/:id/edit",
    element: (
      <DashboardLayout>
        <UpdateQuotationPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/quotations/:id/view",
    element: (
      <DashboardLayout>
        <QuotationPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/quotations",
    element: (
      <DashboardLayout>
        <QuotationsPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/vendors",
    element: (
      <DashboardLayout>
        <VendorsPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/vendors/new",
    element: (
      <DashboardLayout>
        <NewVendorPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/reports",
    element: (
      <DashboardLayout>
        <ReportsPage />
      </DashboardLayout>
    ),
  },
];

const router = createBrowserRouter(routes);
export default router;
