import client from "@/lib/apiClient";
import { CreateInvoiceInput } from "@/API";
import { createInvoice } from "@/graphql/mutations";
import { listInvoices } from "@/graphql/queries";


export const getAllInvoices = async () => {
  try {
    const { data, errors } = await client.graphql({
      query: listInvoices,
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

