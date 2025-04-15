
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
  highlight?: boolean;
  delay?: number;
}

export function StatCard({ 
  title, 
  value, 
  change, 
  icon, 
  className,
  highlight = false,
  delay = 0 
}: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={cn(
        "stat-card group relative overflow-hidden",
        highlight ? "ring-2 ring-primary/20 shadow-lg" : "",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        "transition-all duration-500 ease-out",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10 -z-10"></div>
      
      <div className="flex justify-between items-start">
        <p className="stat-label">{title}</p>
        {icon && (
          <div className="text-muted-foreground p-1.5 bg-muted/30 rounded-full transform transition-transform group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>
        )}
      </div>
      
      <div className="stat-value mt-2 flex items-baseline gap-1.5">
        <span className="transition-all duration-700">{value}</span>
        {highlight && (
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse ml-1"></div>
        )}
      </div>
      
      {change !== undefined && (
        <div 
          className={cn(
            "stat-change mt-1.5 rounded-full px-2 py-0.5 w-fit transition-all duration-300",
            isPositive && "positive bg-success/10",
            isNegative && "negative bg-destructive/10"
          )}
        >
          {isPositive && <ArrowUpRight className="h-3 w-3 mr-1" />}
          {isNegative && <ArrowDownRight className="h-3 w-3 mr-1" />}
          {Math.abs(change)}% from last period
        </div>
      )}
      
      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  );
}
