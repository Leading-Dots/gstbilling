import client from "@/lib/apiClient";
import { CreateQuotationInput } from "@/API";
import { createQuotation } from "@/graphql/mutations";
import { listQuotations } from "@/graphql/queries";
import { Quotation } from "@/API";

export const getAllQuotations = async () => {
  try {
    const { data, errors } = await client.graphql({
      query: listQuotations,
    });

    if (data.listQuotations.items.length > 0) {
      return data.listQuotations.items;
    }
    if (errors) {
      console.error("Error fetching quotations:", errors);
      return null;
    }
    return [];
  } catch (error) {
    console.error("Error fetching quotations:", error);
  }
};
export const addQuotation = async (quotation: CreateQuotationInput) => {
  try {
    console.log("Adding quotation:", quotation);
    const { data, errors } = await client.graphql({
      query: createQuotation,
      variables: { input: quotation },
    });
    if (data) {
      console.log("Quotation created successfully:", data);
      return data.createQuotation;
    }
    if (errors) {
      console.error("Error creating quotation:", errors);
      return null;
    }
    return null;
  } catch (error) {
    console.error("Error creating quotation:", error);
  }
};
