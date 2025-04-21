import { CreateInventoryItemInput, InventoryItem } from "@/API";
import { createInventoryItem } from "@/graphql/mutations";
import { listInventoryItems } from "@/graphql/queries";
import client from "@/lib/apiClient";

export const getInventoryItemsByCompanyID = async (companyID: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listInventoryItems,
      variables: {
        filter: {
          companyID: { eq: companyID },
        },
      },
    });
    if (errors) {
      console.error("GraphQL errors:", errors);
      throw new Error("Failed to fetch inventory items");
    }

    return data.listInventoryItems.items as InventoryItem[];
  } catch (error) {
    console.error("Error fetching inventory items:", error);
    throw new Error("Failed to fetch inventory items");
  }
};

export const addInventoryItem = async (item: CreateInventoryItemInput) => {
  try {
    const { data, errors } = await client.graphql({
      query: createInventoryItem,
      variables: {
        input: item,
      },
    });
    if (errors) {
      console.error("GraphQL errors:", errors);
      throw new Error("Failed to create inventory item");
    }

    return data.createInventoryItem as InventoryItem;
  } catch (error) {
    console.error("Error creating inventory item:", error);
    throw new Error("Failed to create inventory item");
  }
};
