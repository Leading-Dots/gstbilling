import { redirect } from "react-router-dom";
import { hasPermission, ResourceType, ActionType } from "@/lib/permissionManager";
import { useAuth } from "@/hooks/useAuth";

/**
 * Creates a loader function that checks if the current user has the required permissions
 * before rendering a route. Redirects to the specified path if permission is denied.
 * 
 * @param resource The resource to check permission for
 * @param action The action to check permission for
 * @param redirectTo The path to redirect to if permission is denied
 * @returns A loader function compatible with React Router data loaders
 */
export const createPermissionLoader = (
  resource: ResourceType,
  action: ActionType,
  redirectTo: string = "/unauthorized"
) => {
  return async () => {
    try {

        // Get current user using the auth hook
        // We can't use the useAuth hook directly in a loader function
        // since hooks can only be used within React components
        // Instead, we'll access the user data from localStorage
        const userDataString = localStorage.getItem('user');
        if (!userDataString) {
            console.error("No user data found in localStorage");
            return redirect("/login");
        }

        let user;
        try {
            user = JSON.parse(userDataString);
        } catch (error) {
            console.error("Failed to parse user data from localStorage:", error);
            return redirect("/login");
        }

        console.log("User data:", user);
      if (!user) {
        console.error("No user found");
        return redirect("/login");
      }

      // If user is admin, grant access by default
      if (user.role === 'admin') {
        return { hasPermission: true };
      }

      // For regular employees, check the permission matrix
      if (user.permissionMatrix) {
        const hasAccess = hasPermission(
          JSON.parse(user.permissionMatrix),
          resource,
          action
        );
        
        if (!hasAccess) {
          console.log(`Access denied: ${resource} ${action}`);
          return redirect(redirectTo);
        }
      } else {
        // If no permission matrix exists but user is authenticated,
        // default to granting access (can be adjusted based on your security needs)
        console.warn("No permission matrix found for user, defaulting to grant access");
      }
      
      // Permission granted
      return { hasPermission: true };
    } catch (error) {
      console.error("Permission check error:", error);
      return redirect(redirectTo);
    }
  };
};

