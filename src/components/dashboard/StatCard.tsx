
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ title, value, change, icon, className }: StatCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  
  return (
    <div className={cn("stat-card", className)}>
      <div className="flex justify-between items-start">
        <p className="stat-label">{title}</p>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <div className="stat-value">{value}</div>
      {change !== undefined && (
        <div 
          className={cn(
            "stat-change",
            isPositive && "positive",
            isNegative && "negative"
          )}
        >
          {isPositive && <ArrowUpRight className="h-3 w-3 mr-1" />}
          {isNegative && <ArrowDownRight className="h-3 w-3 mr-1" />}
          {Math.abs(change)}% from last period
        </div>
      )}
    </div>
  );
}
