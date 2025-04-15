
import { cn } from "@/lib/utils";

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
  const percentage = Math.min(Math.round((value / target) * 100), 100);
  
  return (
    <div className={cn("dashboard-card", className)}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            name.substring(0, 2).toUpperCase()
          )}
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>{metric}</span>
          <span className="font-medium">
            {value.toLocaleString()} / {target.toLocaleString()}
          </span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-xs text-right text-muted-foreground">
          {percentage}% of target
        </p>
      </div>
    </div>
  );
}
