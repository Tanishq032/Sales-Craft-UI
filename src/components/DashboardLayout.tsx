
import { ReactNode } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardNavbar } from "@/components/DashboardNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />
      <div className="flex-1 ml-60">
        <DashboardNavbar />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
