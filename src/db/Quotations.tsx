import client from "@/lib/apiClient";
import { CreateQuotationInput, UpdateQuotationInput } from "@/API";
import { createQuotation, updateQuotation } from "@/graphql/mutations";
import { getQuotation, listQuotations } from "@/graphql/queries";
import { Quotation } from "@/API";

export const getAllQuotations = async (company_id : string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listQuotations,
      variables: { filter: {
        companyID: { eq: company_id },
      } },
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


export const getQuotationById = async (id: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: getQuotation,
      variables: { id },
    });

    if (data) {
      return data.getQuotation;
    }
    if (errors) {
      console.error("Error fetching quotation:", errors);
      return null;
    }
  } catch (error) {
    console.error("Error fetching quotation:", error);
  }
}

export const editQuotation = async (quotation: UpdateQuotationInput) => {
  try {
    const { data, errors } = await client.graphql({
      query: updateQuotation,
      variables: { input: quotation },
    });

    if (data) {
      return data.updateQuotation;
    }
    if (errors) {
      console.error("Error updating quotation:", errors);
      return null;
    }
  } catch (error) {
    console.error("Error updating quotation:", error);
  }
};

export const changeQuotationStatus = async (quotation: Quotation) => {}