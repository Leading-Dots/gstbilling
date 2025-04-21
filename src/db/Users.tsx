import {
  CreateAdminInput,
  CreateCompanyEmployeeInput,
  EmployeeStatus,
  ProfileStatus,
  UpdateAdminInput,
  UpdateCompanyEmployeeInput,
} from "@/API";
import {
  createAdmin,
  createCompanyEmployee,
  updateAdmin,
  updateCompanyEmployee,
} from "@/graphql/mutations";
import { listAdmins, listCompanyEmployees } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { showToast } from "@/lib/toast";
import { UserRole } from "@/types";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import { getCompanyEmployee } from "@/graphql/queries";

export const getUser = async (userId: string, role: UserRole) => {
  if (role === "admin") {
    return await getAdminUser(userId);
  }
  if (role === "employee") {
    return await getCompanyEmployeeByUserId(userId);
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

export const addEmployeeFromAdmin = async (
  employeeData: CreateCompanyEmployeeInput
) => {
  try {
    const { data, errors } = await client.graphql({
      query: createCompanyEmployee,
      variables: {
        input: {
          ...employeeData,
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
export const editAdminUser = async (adminData: UpdateAdminInput) => {
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
};

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

//really important diffentiate between admin and employee as they both have same login screen
export const findUserByEmail = async (email: string, userID: string) => {
  try {
    //get the user first

    const { profile } = await fetchUserAttributes();

    if (!profile) {
      //check both

      const { data, errors } = await client.graphql({
        query: listAdmins,
        variables: {
          filter: {
            email: {
              eq: email,
            },
          },
        },
      });
      if (errors) {
        console.error(errors);
      }
      if (data.listAdmins.items.length > 0) {
        return data.listAdmins.items[0];
      }
      const { data: employeeData, errors: employeeErrors } =
        await client.graphql({
          query: listCompanyEmployees,
          variables: {
            filter: {
              userID: {
                eq: userID,
              },
            },
          },
        });
      if (employeeErrors) {
        console.error(employeeErrors);
      }

      if (employeeData.listCompanyEmployees.items.length > 0) {
        return employeeData.listCompanyEmployees.items[0];
      }

      return null;
    }

    //find Profile Atttribute which has the role

    if (profile === "admin") {
      const { data, errors } = await client.graphql({
        query: listAdmins,
        variables: {
          filter: {
            email: {
              eq: email,
            },
          },
        },
      });
      if (errors) {
        console.error(errors);
      }

      return data.listAdmins.items[0];
    } else {
      const { data, errors } = await client.graphql({
        query: listCompanyEmployees,
        variables: {
          filter: {
            email: {
              eq: email,
            },
          },
        },
      });
      if (errors) {
        console.error(errors);
      }
      return data.listCompanyEmployees.items[0];
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCompanyEmployeeByUserId = async (userId: string) => {
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

export const checkEmployeeByEmail = async (email: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listCompanyEmployees,
      variables: {
        filter: {
          email: {
            eq: email,
          },
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    if (data.listCompanyEmployees.items.length > 0) {
      //mark this employee as active

      const employeeID = data.listCompanyEmployees.items[0].id;
      const { userId } = await getCurrentUser();

      const { data: updateData, errors: updateErrors } = await client.graphql({
        query: updateCompanyEmployee,
        variables: {
          input: {
            id: employeeID,
            userID: userId,
            profile_status: EmployeeStatus.ACTIVE,
          },
        },
      });
      if (updateErrors) {
        console.error(updateErrors);
      }
      if (updateData) {
        console.log("Employee updated successfully", updateData);
      }
      return data.listCompanyEmployees.items[0];
    }
    return null;
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
      company_id: companyID,
      profile_status: EmployeeStatus.ACTIVE,
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

export const getEmployeeByID = async (employeeID: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: getCompanyEmployee,
      variables: {
        id: employeeID,
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.getCompanyEmployee;
  } catch (error) {
    console.error(error);
  }
};

export const editCompanyEmployee = async (
  updateEmployeeData: UpdateCompanyEmployeeInput
) => {
  try {
    const updateData = await client.graphql({
      query: updateCompanyEmployee,
      variables: {
        input: {
          ...updateEmployeeData,
        },
      },
    });
    if (updateData.errors) {
      console.error(updateData.errors);
    }
    return updateData.data.updateCompanyEmployee;
  } catch (error) {
    console.error(error);
  }
};
