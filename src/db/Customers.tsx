import { CreateCustomerInput } from "@/API";
import { createCustomer } from "@/graphql/mutations";
import { listCustomers } from "@/graphql/queries";
import client from "@/lib/apiClient";

export const getAllCustomers = async () => {
  try {
    const { data } = await client.graphql({
      query: listCustomers,
    });

    if (data.listCustomers.items.length > 0) {
      return data.listCustomers.items;
    }
    return [];
  } catch (error) {
    console.error("Error fetching customers:", error);
  }
};

export const addCustomer = async (customer: CreateCustomerInput) => {
  try {
    console.log("Adding customer:", customer);
    const { data, errors } = await client.graphql({
      query: createCustomer,
      variables: { input: customer },
    });
    if (data) {
      console.log("Customer created successfully:", data);
      return data.createCustomer;
    }
    if(errors) {
      console.error("Error creating customer:", errors);
      return null;
    }
    return null;
  } catch (error) {
    console.error("Error creating customer:", error);
  }
};
