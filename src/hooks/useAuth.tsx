import { createContext, useContext, useState, ReactNode, useMemo } from "react";

import {
  handleSignIn,
  handleSignOut,
  handleConfirmSignUp,
  handleSignUp,
  handleForgotPassword,
  getCurrentAuthUser,
  handleUpdatePassowrd,
} from "@/lib/auth";

import { useLocalStorage } from "./useLocalStorage";

import {
  fetchUserAttributes,
  getCurrentUser,
  updateUserAttribute,
  updateUserAttributes,
} from "aws-amplify/auth";
import { UserRole } from "@/types";
import {
  checkEmployeeByEmail,
  createUser,
  findUserByEmail,
  getUser,
} from "@/db/Users";
import Loader1 from "@/components/loaders/Loader1";
import { DashboardLoader } from "@/components/loaders/DashboardLoader";

type AuthContextType = {
  user: any | null;
  loading: boolean;
  signIn: (email: string, password: string, role: UserRole) => Promise<any>;
  signUp: (email: string, password: string, role: UserRole) => Promise<any>;
  confirmSignUp: (email: string, code: string, userId: string) => Promise<any>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  refreshUser: () => Promise<void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<any | null>("user", null);
  const [loading, setLoading] = useState(false);

  console.log("user", user);

  const signIn = async (email: string, password: string, role: UserRole) => {
    try {
      setLoading(true);
      const { isSignedIn } = await handleSignIn({ username: email, password });
      if (!isSignedIn) return false;

      const currentUser = await getCurrentUser();
      if (!currentUser?.userId) {
        throw new Error("Failed to get current user");
      }

      const userId = currentUser.userId;

      //   const fcm_token = localStorage.getItem("fcm_token") || null;

      const { profile } = await fetchUserAttributes();
      console.log("profile", profile);

      const existingUser = await getUser(
        currentUser.userId,
        profile as UserRole
      );

      if (!existingUser) {
        const newUser = await createUser(role, email, userId);
        if (!newUser) {
          await signOut();
          throw new Error("Failed to create new user");
        }
        setUser({ ...newUser, role: profile });
        return true;
      }

      setUser({ ...existingUser, role: profile });
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Sign in failed";
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, role: UserRole) => {
    try {
      setLoading(true);

      const { isSignUpComplete, userId, nextStep, existingUnconfirmedUser } =
        await handleSignUp({
          username: email,
          password,
          email,
        });

      if (existingUnconfirmedUser) {
        return { isSignUpComplete, userId, nextStep, existingUnconfirmedUser };
      }

      console.log("isSignUpComplete", isSignUpComplete, userId, nextStep);
      return { isSignUpComplete, userId, nextStep };
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const confirmSignUp = async (email: string, code: string, userId: string) => {
    try {
      setLoading(true);
      const { isSignUpComplete } = await handleConfirmSignUp(email, code);
      console.log("Attempting to confirm sign up", isSignUpComplete);

      if (isSignUpComplete) {
        //check for employee table if this is a employee added by admin if yes then we  link this user
        const existingUser = await checkEmployeeByEmail(email);
        if (existingUser) {
          //this is a employee added by admin

          console.log("Employee found", existingUser);
          await updateUserAttributes({
            userAttributes: {
              profile: "employee",
            },
          });
          setUser({ ...existingUser, role: "employee" });

          return isSignUpComplete;
        }

        console.log("Employee not found, creating new admin");
        const newUser = await createUser("admin", email, userId);
        if (!newUser) {
          await signOut();
          throw new Error("User not created");
        }

        await updateUserAttributes({
          userAttributes: {
            profile: "admin",
          },
        });
        console.log("newUser", newUser);
        setUser({ ...newUser, role: "admin" });
      }

      return isSignUpComplete;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await handleSignOut();
      window.location.href = "/";

      setUser(null);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await handleForgotPassword(email);
    } catch (error) {
      throw error;
    }
  };

  const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
      await handleUpdatePassowrd(user.email, oldPassword, newPassword);
    } catch (error) {
      throw error;
    }
  };

  const refreshUser = async () => {
    try {
      setLoading(true);
      const currentUser = await getCurrentAuthUser();
      if (currentUser) {
        const existingUser = await getUser(currentUser.userId, user.role);
        if (!existingUser) {
          await signOut();
          throw new Error("User not found");
        }
        console.log("existingUser", existingUser);
        setUser({ ...existingUser, role: user.role });
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      signIn,
      signUp,
      confirmSignUp,
      signOut,
      forgotPassword,
      refreshUser,
      changePassword,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {loading ? <DashboardLoader /> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
