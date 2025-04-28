import {
  CreatePurchaseOrderInput,
  PurchaseOrder,
  UpdatePurchaseOrderInput,
} from "@/API";
import { getPurchaseOrder, listPurchaseOrders } from "@/graphql/queries";
import { createPurchaseOrder, updatePurchaseOrder } from "@/graphql/mutations";
import client from "@/lib/apiClient";

export const getAllPurchaseOrders = async (companyID: string) => {
  try {
    const response = await client.graphql({
      query: listPurchaseOrders,
      variables: {
        filter: {
          companyID: { eq: companyID },
        },
      },
    });

    const purchaseOrders = response.data.listPurchaseOrders
      .items as PurchaseOrder[];

    return purchaseOrders;
  } catch (error) {
    console.error("Error fetching purchase orders:", error);
    throw error;
  }
};

export const getPurchaseOrderById = async (id: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: getPurchaseOrder,
      variables: {
        id,
      },
    });
    if (errors) {
      console.error("Error fetching purchase order:", errors);
    }

    const purchaseOrder = data.getPurchaseOrder as PurchaseOrder;
    return purchaseOrder;
  } catch (error) {
    console.error("Error fetching purchase order:", error);
    throw error;
  }
};

export const addPurchaseOrder = async (
  purchaseOrder: CreatePurchaseOrderInput
) => {
  try {
    const { data, errors } = await client.graphql({
      query: createPurchaseOrder,
      variables: {
        input: purchaseOrder,
      },
    });
    if (errors) {
      console.error("Error creating purchase order:", errors);
    }

    const newPurchaseOrder = data.createPurchaseOrder as PurchaseOrder;
    return newPurchaseOrder;
  } catch (error) {
    console.error("Error creating purchase order:", error);
    throw error;
  }
};

export const editPurchaseOrder = async (
  purchaseOrder: UpdatePurchaseOrderInput
) => {
  try {
    const { data, errors } = await client.graphql({
      query: updatePurchaseOrder,
      variables: {
        input: purchaseOrder,
      },
    });
    if (errors) {
      console.error("Error creating purchase order:", errors);
    }

    const updatedPurchaseOrder = data.updatePurchaseOrder as PurchaseOrder;
    return updatedPurchaseOrder;
  } catch (error) {
    console.error("Error updating purchase order:", error);
    throw error;
  }
};
