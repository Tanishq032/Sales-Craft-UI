
import { ReactNode, useState, useEffect } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardNavbar } from "@/components/DashboardNavbar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state for a smooth entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex bg-background/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <div className="fixed top-0 right-0 w-1/3 h-1/3 -z-10 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60 blur-3xl"></div>
      
      <DashboardSidebar />
      <div className={cn(
        "flex-1 ml-60 transition-all duration-500 ease-out",
        isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      )}>
        <DashboardNavbar />
        <main className="p-6 overflow-auto">
          <div className={cn(
            "animate-fade-in transition-all duration-500",
            isLoading ? "opacity-0" : "opacity-100"
          )}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
