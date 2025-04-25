import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Key, Palette, UserCog } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import ChangePlanDialog from "@/components/settings/change-plan-dialog";

const SettingsPage = () => {
    const {user} = useAuth()
  return (
    <div className="container py-8">
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Plans Card */}
        <Card>
          <CardHeader className="flex flex-row items-center space-x-2">
            <CreditCard className="h-5 w-5" />
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
        <Card>
          <CardHeader className="flex flex-row items-center space-x-2">
            <Key className="h-5 w-5" />
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">
              Change your password and manage security settings.
            </CardDescription>
            <Button variant="outline">Reset Password</Button>
          </CardContent>
        </Card>

        {/* Theme Card */}
        <Card>
          <CardHeader className="flex flex-row items-center space-x-2">
            <Palette className="h-5 w-5" />
            <CardTitle>Theme</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">
              Customize the application appearance.
            </CardDescription>
            <div className="flex space-x-2">
              <Button variant="secondary">Light</Button>
              <Button variant="default">Dark</Button>
              <Button variant="outline">System</Button>
            </div>
          </CardContent>
        </Card>

        {/* Admin Profile Settings */}
        <Card>
          <CardHeader className="flex flex-row items-center space-x-2">
            <UserCog className="h-5 w-5" />
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
