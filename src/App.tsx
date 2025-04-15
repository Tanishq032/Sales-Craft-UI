
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardLayout } from "@/components/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import Revenue from "@/pages/Revenue";
import Performance from "@/pages/Performance";
import Analytics from "@/pages/Analytics";
import Team from "@/pages/Team";
import Products from "@/pages/Products";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/revenue" 
            element={
              <DashboardLayout>
                <Revenue />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/performance" 
            element={
              <DashboardLayout>
                <Performance />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/team" 
            element={
              <DashboardLayout>
                <Team />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/products" 
            element={
              <DashboardLayout>
                <Products />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
