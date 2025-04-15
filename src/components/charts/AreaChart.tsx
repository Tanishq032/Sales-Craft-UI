
import { 
  Area, 
  AreaChart as RechartsAreaChart, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";
import { useEffect, useState } from "react";

interface DataPoint {
  name: string;
  value: number;
}

interface AreaChartProps {
  data: DataPoint[];
  color?: string;
  height?: number;
  animate?: boolean;
}

export function AreaChart({ 
  data, 
  color = "hsl(var(--primary))", 
  height = 300,
  animate = true
}: AreaChartProps) {
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  
  useEffect(() => {
    if (animate) {
      // Reset the data for animation
      setChartData([]);
      
      // Animate data points one by one
      const animateData = async () => {
        for (let i = 0; i <= data.length; i++) {
          setChartData(data.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      };
      
      animateData();
    } else {
      setChartData(data);
    }
  }, [data, animate]);
  
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="name" 
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
          dy={10}
        />
        <YAxis 
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
          dx={-10}
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
        />
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "hsl(var(--card))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
          labelFormatter={(label) => `${label}`}
          cursor={{ stroke: "hsl(var(--muted))", strokeWidth: 1 }}
          animationDuration={300}
        />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke={color} 
          fillOpacity={1} 
          fill="url(#colorGradient)"
          activeDot={{ 
            r: 6, 
            strokeWidth: 0,
            fill: color,
            stroke: "white",
            strokeWidth: 2, // This is the duplicate property
            className: "animate-pulse"
          }}
          strokeWidth={3}
          isAnimationActive={true}
          animationDuration={1000}
          animationEasing="ease-out"
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}
