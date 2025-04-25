import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Key, UserCog } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import ChangePlanDialog from "@/components/settings/change-plan-dialog";

const SettingsPage = () => {
  const { user } = useAuth();
  return (
    <div className="container py-8">
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Plans Card */}
        <Card className="overflow-hidden border-t-4 border-t-blue-500">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md">
              <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <CardTitle>Plans & Billing</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">
              Manage your subscription plan and billing information.
            </CardDescription>
            <ChangePlanDialog>
              <Button variant="outline">Change plan</Button>
            </ChangePlanDialog>
          </CardContent>
        </Card>

        {/* Reset Password Card */}
        <Card className="overflow-hidden border-t-4 border-t-amber-500">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-md">
              <Key className="h-6 w-6 text-amber-600 dark:text-amber-300" />
            </div>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">
              Change your password and manage security settings.
            </CardDescription>
            <Button variant="outline">Reset Password</Button>
          </CardContent>
        </Card>

        {/* Admin Profile Settings */}
        <Card className="overflow-hidden border-t-4 border-t-purple-500">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-md">
              <UserCog className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <CardTitle>Admin Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">
              Manage your profile information and admin settings.
            </CardDescription>
            <Button variant="outline">Edit Profile</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
