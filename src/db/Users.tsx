import {
  CreateAdminInput,
  CreateCompanyEmployeeInput,
  ProfileStatus,
  UpdateAdminInput,
} from "@/API";
import { createAdmin, createCompanyEmployee, updateAdmin } from "@/graphql/mutations";
import { listAdmins, listCompanyEmployees } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { showToast } from "@/lib/toast";
import { UserRole } from "@/types";

export const getUser = async (userId: string, role: UserRole) => {
  if (role === "admin") {
    return await getAdminUser(userId);
  }
  if (role === "employee") {
    return await getCompanyEmployee(userId);
  }
  return null;
};

export const createUser = async (
  role: UserRole,
  email: string,
  userId: string,
  fcmToken?: string
) => {
  if (role === "admin") {
    return await addAdminUser(email, userId, fcmToken);
  }
  if (role === "employee") {
    const admin = await getAdminUser(userId);
    if (!admin) {
      showToast("Admin not found", "error");
      return null;
    }
    return await addCompanyEmployee(
      email,
      userId,
      admin.id,
      admin.company_id,
      fcmToken
    );
  }
  return null;
};

export const addAdminUser = async (
  email: string,
  userId: string,
  fcmToken?: string
) => {
  try {
    const adminInput: CreateAdminInput = {
      email: email,
      userID: userId,
    };

    const { data, errors } = await client.graphql({
      query: createAdmin,
      variables: {
        input: {
          ...adminInput,
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.createAdmin;
  } catch (error) {
    console.error(error);
  }
};


export const editAdminUser = async (adminData : UpdateAdminInput) => {
  try {
    const { data, errors } = await client.graphql({
      query: updateAdmin,
      variables: {
        input: {
          ...adminData,
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.updateAdmin;
  } catch (error) {
    console.error(error);
  }
}

export const getAdminUser = async (userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listAdmins,
      variables: {
        filter: {
          userID: {
            eq: userId,
          },
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.listAdmins.items[0];
  } catch (error) {
    console.error(error);
  }
};

export const findCompanyByEmail = async (email: string) => {};

export const getCompanyEmployee = async (userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listCompanyEmployees,
      variables: {
        filter: {
          userID: {
            eq: userId,
          },
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.listCompanyEmployees.items[0];
  } catch (error) {
    console.error(error);
  }
};

export const addCompanyEmployee = async (
  email: string,
  userId: string,
  adminID: string,
  companyID: string,
  fcmToken?: string
) => {
  try {
    const companyEmployeeInput: CreateCompanyEmployeeInput = {
      email: email,
      userID: userId,
      adminID: adminID,
      companyID: companyID,
      profile_status: ProfileStatus.ACTIVE,
    };
    const { data, errors } = await client.graphql({
      query: createCompanyEmployee,
      variables: {
        input: {
          ...companyEmployeeInput,
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.createCompanyEmployee;
  } catch (error) {
    console.error(error);
  }
};
