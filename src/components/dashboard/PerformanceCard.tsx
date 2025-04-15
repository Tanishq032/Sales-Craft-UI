
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface PerformanceCardProps {
  name: string;
  avatar?: string;
  role: string;
  value: number;
  target: number;
  metric: string;
  className?: string;
}

export function PerformanceCard({
  name,
  avatar,
  role,
  value,
  target,
  metric,
  className,
}: PerformanceCardProps) {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const actualPercentage = Math.min(Math.round((value / target) * 100), 100);
  
  useEffect(() => {
    // Animate in
    setIsVisible(true);
    
    // Animate percentage
    const timer = setTimeout(() => {
      setPercentage(actualPercentage);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [actualPercentage]);
  
  // Determine color based on percentage
  const getProgressColor = () => {
    if (percentage >= 90) return "bg-success";
    if (percentage >= 70) return "bg-primary";
    if (percentage >= 40) return "bg-amber-500";
    return "bg-destructive";
  };
  
  // Determine status label
  const getStatusLabel = () => {
    if (percentage >= 90) return "Excellent";
    if (percentage >= 70) return "Good";
    if (percentage >= 40) return "Average";
    return "Needs improvement";
  };
  
  return (
    <div className={cn(
      "dashboard-card group",
      "transition-all duration-500 ease-out",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      className
    )}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium overflow-hidden group-hover:ring-2 group-hover:ring-primary/30 transition-all">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-sm">{name.substring(0, 2).toUpperCase()}</span>
          )}
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>{metric}</span>
          <span className="font-medium">
            ${value.toLocaleString()} / ${target.toLocaleString()}
          </span>
        </div>
        <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full rounded-full transition-all duration-1000 ease-out",
              getProgressColor()
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs">
          <p className="text-muted-foreground">
            {percentage}% of target
          </p>
          <span className={cn(
            "px-2 py-0.5 rounded-full text-xs",
            percentage >= 90 ? "bg-success/10 text-success" :
            percentage >= 70 ? "bg-primary/10 text-primary" :
            percentage >= 40 ? "bg-amber-500/10 text-amber-500" :
            "bg-destructive/10 text-destructive"
          )}>
            {getStatusLabel()}
          </span>
        </div>
      </div>
    </div>
  );
}
