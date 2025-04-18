import React from "react";
import RegisterForm from "@/components/forms/register-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const RegisterPage = () => {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6 min-h-screen p-4 justify-center">
          <RegisterForm userRole="admin" />
       
    </div>
  );
};

export default RegisterPage;
