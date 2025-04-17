import client from "@/lib/apiClient";

import { createCompany, updateCompany } from "@/graphql/mutations";

import {
  Company,
  CompanyEmployee,
  CreateCompanyInput,
  UpdateCompanyInput,
} from "@/API";
import { getAdmin, getCompany, listCompanyEmployees } from "@/graphql/queries";
import { showToast } from "@/lib/toast";

export const addCompany = async (companyData: CreateCompanyInput) => {
  try {
    const { data, errors } = await client.graphql({
      query: createCompany,
      variables: {
        input: {
          ...companyData,
        },
      },
    });
    if (errors) {
      console.error(errors);
      showToast("Error creating company", "error");
      return null;
    }
    return data.createCompany as Company;
  } catch (error) {
    console.error("Error creating company", error);
    showToast("Error creating company", "error");
    return null;
  }
};

export const editCompany = async (companyData: UpdateCompanyInput) => {
  try {
    const { data, errors } = await client.graphql({
      query: updateCompany,
      variables: {
        input: {
          ...companyData,
        },
      },
    });
    if (errors) {
      console.error(errors);
      showToast("Error updating company", "error");
      return null;
    }
    return data.updateCompany as Company;
  } catch (error) {
    console.error("Error updating company", error);
    showToast("Error updating company", "error");
    return null;
  }
};

export const getCompanyById = async (companyId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: getCompany,
      variables: {
        id: companyId,
      },
    });
    if (errors) {
      console.error(errors);
      showToast("Error fetching company", "error");
      return null;
    }
    return data.getCompany as Company;
  } catch (error) {
    console.error("Error fetching company", error);
    showToast("Error fetching company", "error");
    return null;
  }
};

export const getEmployeesByCompany = async (companyId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listCompanyEmployees,
      variables: {
        filter: {
            companyID: {
                eq: companyId,
            },
        }
      },
    });
    if (errors) {
      console.error(errors);
      showToast("Error fetching company employees", "error");
      return [];
    }
    return data.listCompanyEmployees.items as CompanyEmployee[];
  } catch (error) {
    console.error("Error fetching company employees", error);
    showToast("Error fetching company employees", "error");
    return [];
  }
};
