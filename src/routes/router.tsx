import { createBrowserRouter,  } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import CustomersPage from "@/pages/CustomersPage";
import InvoicesPage from "@/pages/InvoicesPage";
import QuotationsPage from "@/pages/QuotationsPage";
import VendorsPage from "@/pages/VendorsPage";
import ReportsPage from "@/pages/ReportsPage";
import NewInvoicePage from "@/pages/new/CreateInvoicePage";
import NewQuotationPage from "@/pages/new/CreateQuotationsPage";
import NewCustomerPage from "@/pages/new/CreateCustomerPage";
import NewVendorPage from "@/pages/new/CreateVendorPage";

const routes = [
    {
      path: "/",
      element: <DashboardLayout>
        <DashboardPage />
      </DashboardLayout>
    },
    {
      path: "/customers",
      element: <DashboardLayout>
        <CustomersPage />
      </DashboardLayout>
    },
    {
      path: "/customers/new",
      element: <DashboardLayout>
        <NewCustomerPage />
      </DashboardLayout>
    },
    {
      path: "/invoices",
      element: <DashboardLayout>
        <InvoicesPage />
      </DashboardLayout>
    },
    {
      path: "/invoices/new",
      element: <DashboardLayout>
        <NewInvoicePage />
      </DashboardLayout>
    },
    {
      path: "/quotations/new",
      element: <DashboardLayout>
        <NewQuotationPage />
      </DashboardLayout>
    },
    {
      path: "/quotations",
      element: <DashboardLayout>
        <QuotationsPage />
      </DashboardLayout>
    },
    {
      path: "/vendors",
      element: <DashboardLayout>
        <VendorsPage />
      </DashboardLayout>
    },
    {
      path: "/vendors/new",
      element: <DashboardLayout>
        <NewVendorPage />
      </DashboardLayout>
    },
    {
      path: "/reports",
      element: <DashboardLayout>
        <ReportsPage />
      </DashboardLayout>
    },
]


const router = createBrowserRouter(routes);
export default router;