import { CreateCustomerInput, Customer, UpdateCustomerInput } from "@/API";
import { createCustomer, updateCustomer } from "@/graphql/mutations";
import { getCustomer, listCustomers } from "@/graphql/queries";
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
    if (errors) {
      console.error("Error creating customer:", errors);
      return null;
    }
    return null;
  } catch (error) {
    console.error("Error creating customer:", error);
  }
};

export const editCustomer = async (customer: UpdateCustomerInput) => {
  try {
    console.log("Editing customer:", customer);
    const { data, errors } = await client.graphql({
      query: updateCustomer,
      variables: { input: customer },
    });
    if (data) {
      console.log("Customer edited successfully:", data);
      return data.updateCustomer;
    }
    if (errors) {
      console.error("Error editing customer:", errors);
      return null;
    }
    return null;
  } catch (error) {
    console.error("Error editing customer:", error);
  }
};


export const getCustomerById = async (customerId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: getCustomer,
      variables: { id: customerId },
    });

    if (data) {
      return data.getCustomer as Customer;
    }
    if (errors) {
      console.error("Error fetching customer:", errors);
      return null;
    }
  } catch (error) {
    console.error("Error fetching customer:", error);
  }
}