
import { useState, useEffect } from "react";
import { DateRangePicker } from "@/components/dashboard/DateRangePicker";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter, LayoutGrid, LayoutList } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function FilterBar() {
  const [dateRange, setDateRange] = useState("last30days");
  const [region, setRegion] = useState("all");
  const [product, setProduct] = useState("all");
  const [view, setView] = useState("grid");
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  const applyFilters = () => {
    toast({
      title: "Filters Applied",
      description: `Date: ${dateRange}, Region: ${region}, Product: ${product}`,
      duration: 3000,
    });
  };
  
  const regions = [
    { label: "All Regions", value: "all" },
    { label: "North America", value: "na" },
    { label: "Europe", value: "eu" },
    { label: "Asia Pacific", value: "apac" },
    { label: "Latin America", value: "latam" },
  ];
  
  const products = [
    { label: "All Products", value: "all" },
    { label: "Software", value: "software" },
    { label: "Hardware", value: "hardware" },
    { label: "Services", value: "services" },
    { label: "Training", value: "training" },
  ];
  
  const regionLabel = regions.find(r => r.value === region)?.label || "Region";
  const productLabel = products.find(p => p.value === product)?.label || "Product";
  
  const handleResetFilters = () => {
    setDateRange("last30days");
    setRegion("all");
    setProduct("all");
    
    toast({
      title: "Filters Reset",
      description: "All filters have been reset to default values",
      duration: 3000,
    });
  };
  
  return (
    <div 
      className="filter-container flex items-center flex-wrap bg-background/70 backdrop-blur-sm rounded-lg border p-1.5 shadow-sm opacity-0 translate-y-2 transition-all duration-500 ease-out"
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)'
      }}
    >
      <DateRangePicker onSelect={setDateRange} selected={dateRange} />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1 h-9">
            <span>{regionLabel}</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Filter by Region</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {regions.map((r) => (
            <DropdownMenuItem
              key={r.value}
              onClick={() => setRegion(r.value)}
              className={`cursor-pointer ${region === r.value ? 'bg-accent' : ''}`}
            >
              {r.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1 h-9 ml-1">
            <span>{productLabel}</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Filter by Product</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {products.map((p) => (
            <DropdownMenuItem
              key={p.value}
              onClick={() => setProduct(p.value)}
              className={`cursor-pointer ${product === p.value ? 'bg-accent' : ''}`}
            >
              {p.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* View toggle */}
      <div className="bg-muted rounded-md p-0.5 flex ml-1">
        <Button 
          variant={view === "grid" ? "default" : "ghost"} 
          size="icon" 
          className="h-8 w-8 rounded-sm"
          onClick={() => setView("grid")}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button 
          variant={view === "list" ? "default" : "ghost"} 
          size="icon" 
          className="h-8 w-8 rounded-sm"
          onClick={() => setView("list")}
        >
          <LayoutList className="h-4 w-4" />
        </Button>
      </div>
      
      <Button 
        variant="default" 
        size="sm" 
        className="gap-1 ml-1 h-9"
        onClick={applyFilters}
      >
        Apply
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="gap-1 ml-1 h-9 bg-background hover:bg-background/80"
        onClick={handleResetFilters}
      >
        <Filter className="h-3.5 w-3.5" />
        Reset
      </Button>
    </div>
  );
}
