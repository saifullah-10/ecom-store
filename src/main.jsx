import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/route.jsx";
import ContextProvider from "./context/ContextProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ContextProvider>
  </StrictMode>
);
