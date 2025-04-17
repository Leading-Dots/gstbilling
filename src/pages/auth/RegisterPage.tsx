import React from "react";
import RegisterForm from "@/components/forms/register-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const RegisterPage = () => {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6 min-h-screen p-4 justify-center">
      <Tabs defaultValue="admin" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="admin">Admin</TabsTrigger>
          <TabsTrigger value="employee">Employee</TabsTrigger>
        </TabsList>
        <TabsContent value="employee">
          <RegisterForm userRole="employee" />
        </TabsContent>
        <TabsContent value="admin">
          <RegisterForm userRole="admin" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RegisterPage;
