import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import { Toaster } from "@/components/ui/sonner";

import awsconfig from "./amplifyconfiguration.json";
Amplify.configure(awsconfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
          <Toaster richColors position="top-center" />

    <App />
  </StrictMode>
);
