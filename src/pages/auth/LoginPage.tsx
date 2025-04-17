import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import LoginForm from "@/components/forms/signin-form";

const LoginPage = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="employee" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="admin">Admin</TabsTrigger>

          <TabsTrigger value="employee">Employee</TabsTrigger>
        </TabsList>
        <TabsContent value="employee">
          <LoginForm userRole="employee" />
        </TabsContent>
        <TabsContent value="admin">
          <LoginForm userRole="admin" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginPage;
