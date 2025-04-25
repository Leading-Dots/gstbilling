import client from "@/lib/apiClient";
import { CreateInvoiceInput, InvoiceStatus, UpdateInvoiceInput } from "@/API";
import { createInvoice, updateInvoice } from "@/graphql/mutations";
import { getInvoice, listInvoices } from "@/graphql/queries";

export const getAllInvoices = async (company_id : string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listInvoices,
      variables: { filter: {
        companyID: { eq: company_id },
        
      } },
    });

    if (data.listInvoices.items.length > 0) {
      return data.listInvoices.items;
    }
    if (errors) {
      console.error("Error fetching invoices:", errors);
      return null;
    }
    console.log("No invoices found");
    return [];
  } catch (error) {
    console.error("Error fetching invoices:", error);
  }
};

export const addInvoice = async (invoice: CreateInvoiceInput) => {
  try {
    console.log("Adding invoice:", invoice);
    const { data, errors } = await client.graphql({
      query: createInvoice,
      variables: { input: invoice },
    });
    if (data) {
      console.log("Invoice created successfully:", data);
      return data.createInvoice;
    }
    if (errors) {
      console.error("Error creating invoice:", errors);
      return null;
    }
    return null;
  } catch (error) {
    console.error("Error creating invoice:", error);
  }
};

export const getInvoiceById = async (id: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: getInvoice,
      variables: { id },
    });

    if (data) {
      return data.getInvoice;
    }
    if (errors) {
      console.error("Error fetching invoice:", errors);
      return null;
    }
    return null;
  } catch (error) {
    console.error("Error fetching invoice:", error);
  }
};
export const editInvoice = async (invoice: UpdateInvoiceInput) => {
  try {
    const { data, errors } = await client.graphql({
      query: updateInvoice,
      variables: {
        input: {
          id: invoice.id,
          ...invoice,
        },
      },
    });
    if (data) {
      console.log("Invoice updated successfully:", data);
      return data.updateInvoice;
    }
    if (errors) {
      console.error("Error updating invoice:", errors);
      return null;
    }
    return null;
  } catch (error) {
    console.error("Error updating invoice:", error);
  }
};

export const updateInvoiceStatus = async (id: string, status: InvoiceStatus) => {
  try {
    const { data, errors } = await client.graphql({
      query: updateInvoice,
      variables: {
        input: {
          id,
          invoice_status: status,
        },
      },
    });
    if (data) {
      console.log("Invoice status updated successfully:", data);
      return data.updateInvoice;
    }
    if (errors) {
      console.error("Error updating invoice status:", errors);
      return null;
    }
    return null;
  } catch (error) {
    console.error("Error updating invoice status:", error);
  }
};
