import OnboardingFlow from "@/components/onboarding/onboarding-flow";
import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";

const OnboardingPage = () => {
  const { user } = useAuth();
  const userrole = user?.role;
  const isAdmin = userrole === "admin";
  const isEmployee = userrole === "employee";

  if (isEmployee) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <main className="container mx-auto py-10 px-4 md:px-6">
      <OnboardingFlow />
    </main>
  );
};

export default OnboardingPage;
