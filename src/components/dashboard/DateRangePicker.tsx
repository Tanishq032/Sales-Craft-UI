
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DateRangePickerProps {
  onSelect: (range: string) => void;
  selected: string;
}

export function DateRangePicker({ onSelect, selected }: DateRangePickerProps) {
  const ranges = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "last7days" },
    { label: "Last 30 days", value: "last30days" },
    { label: "This month", value: "thismonth" },
    { label: "Last month", value: "lastmonth" },
    { label: "This quarter", value: "thisquarter" },
    { label: "Last quarter", value: "lastquarter" },
    { label: "This year", value: "thisyear" },
    { label: "Last year", value: "lastyear" },
  ];
  
  const selectedLabel = ranges.find(range => range.value === selected)?.label || "Select date range";
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={cn(
            "gap-1.5 border-primary/20 h-9 relative group",
            selected ? "text-foreground" : "text-muted-foreground"
          )}
        >
          <Calendar className="h-3.5 w-3.5 text-primary group-hover:scale-110 transition-transform" />
          <span>{selectedLabel}</span>
          <ChevronDown className="h-3.5 w-3.5 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
          
          {/* Pill indicator for active filter */}
          {selected && selected !== "last30days" && (
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full animate-pulse" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {ranges.map((range) => (
          <DropdownMenuItem 
            key={range.value}
            onClick={() => onSelect(range.value)}
            className={cn(
              "cursor-pointer transition-colors",
              selected === range.value && "bg-accent font-medium"
            )}
          >
            {range.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
