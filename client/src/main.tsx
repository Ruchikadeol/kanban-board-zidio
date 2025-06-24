import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { UserProvider } from "./contexts/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
    <Toaster />
  </React.StrictMode>
);
