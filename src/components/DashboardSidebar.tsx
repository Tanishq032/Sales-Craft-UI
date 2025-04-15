
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Home,
  LineChart,
  PieChart,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, isActive }: SidebarItemProps) => {
  return (
    <Link to={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 mb-1",
          isActive ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"
        )}
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </Button>
    </Link>
  );
};

export function DashboardSidebar() {
  const location = useLocation();
  
  const routes = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: BarChart3, label: "Revenue", href: "/revenue" },
    { icon: LineChart, label: "Performance", href: "/performance" },
    { icon: PieChart, label: "Analytics", href: "/analytics" },
    { icon: Users, label: "Team", href: "/team" },
    { icon: ShoppingCart, label: "Products", href: "/products" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];
  
  return (
    <div className="h-screen w-60 border-r bg-sidebar text-sidebar-foreground flex flex-col fixed left-0 top-0">
      <div className="p-4 border-b">
        <h1 className="font-semibold text-xl flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span>SalesCraft</span>
        </h1>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <nav className="space-y-1">
          {routes.map((route) => (
            <SidebarItem
              key={route.href}
              icon={route.icon}
              label={route.label}
              href={route.href}
              isActive={location.pathname === route.href}
            />
          ))}
        </nav>
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            JD
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Sales Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
