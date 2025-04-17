import { InventoryItem } from "@/API";
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
