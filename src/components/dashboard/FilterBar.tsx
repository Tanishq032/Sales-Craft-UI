
import { useState } from "react";
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
import { ChevronDown } from "lucide-react";

export function FilterBar() {
  const [dateRange, setDateRange] = useState("last30days");
  const [region, setRegion] = useState("all");
  const [product, setProduct] = useState("all");
  
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
  
  return (
    <div className="filter-container">
      <DateRangePicker onSelect={setDateRange} selected={dateRange} />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-1">
            <span>{regionLabel}</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter by Region</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {regions.map((r) => (
            <DropdownMenuItem
              key={r.value}
              onClick={() => setRegion(r.value)}
              className="cursor-pointer"
            >
              {r.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-1">
            <span>{productLabel}</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter by Product</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {products.map((p) => (
            <DropdownMenuItem
              key={p.value}
              onClick={() => setProduct(p.value)}
              className="cursor-pointer"
            >
              {p.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button variant="secondary" size="sm" className="ml-auto">
        Reset Filters
      </Button>
    </div>
  );
}
