import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import LoginForm from "@/components/forms/signin-form";

const LoginPage = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <LoginForm userRole="admin" />
    </div>
  );
};

export default LoginPage;
