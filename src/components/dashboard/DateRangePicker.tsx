
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, ChevronDown } from "lucide-react";

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
        <Button variant="outline" className="gap-2">
          <Calendar className="h-4 w-4" />
          <span>{selectedLabel}</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {ranges.map((range) => (
          <DropdownMenuItem 
            key={range.value}
            onClick={() => onSelect(range.value)}
            className="cursor-pointer"
          >
            {range.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
