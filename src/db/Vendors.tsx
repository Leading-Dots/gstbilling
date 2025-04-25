import client from "@/lib/apiClient";
import { createVendor, updateVendor } from "@/graphql/mutations";
import { getVendor, listVendors } from "@/graphql/queries";

import { Vendor, CreateVendorInput, UpdateVendorInput } from "@/API";

export const getAllVendors = async (company_id: string) => {
  try {
    const { data } = await client.graphql({
      query: listVendors,
      variables: { filter: { companyID: { eq: company_id } } },
    });
    if (data.listVendors.items.length > 0) {
      return data.listVendors.items;
    }
    return [];
  } catch (error) {
    console.error("Error fetching vendors:", error);
  }
};

export const addVendor = async (vendor: CreateVendorInput) => {
  try {
    console.log("Adding vendor:", vendor);
    const { data, errors } = await client.graphql({
      query: createVendor,
      variables: { input: vendor },
    });
    if (data) {
      console.log("Vendor created successfully:", data);
      return data.createVendor;
    }
    if (errors) {
      console.error("Error creating vendor:", errors);
      return null;
    }
    return null;
  } catch (error) {
    console.error("Error creating vendor:", error);
  }
};

export const editVendor = async (vendor: UpdateVendorInput) => {
  try {
    console.log("Editing vendor:", vendor);
    const { data, errors } = await client.graphql({
      query: updateVendor,
      variables: { input: vendor },
    });
    if (data) {
      console.log("Vendor edited successfully:", data);
      return data.updateVendor;
    }
    if (errors) {
      console.error("Error editing vendor:", errors);
      return null;
    }
    return null;
  } catch (error) {
    console.error("Error editing vendor:", error);
  }
};

export const getVendorById = async (vendorId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: getVendor,
      variables: {
        id: vendorId,
      },
    });
    if (errors) {
      console.error(errors);
      return null;
    }
    return data.getVendor as Vendor;
  } catch (error) {
    console.error("Error fetching vendor", error);
    return null;
  }
};
