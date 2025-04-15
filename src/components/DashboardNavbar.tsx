
import { Bell, Filter, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DashboardNavbar() {
  return (
    <header className="h-14 border-b bg-background/95 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between pl-4 pr-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-9 rounded-md border"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="gap-1"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
