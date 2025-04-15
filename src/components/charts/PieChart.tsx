
import {
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { useState, useEffect } from "react";

interface DataPoint {
  name: string;
  value: number;
}

interface PieChartProps {
  data: DataPoint[];
  colors?: string[];
  height?: number;
  animate?: boolean;
}

export function PieChart({
  data,
  colors = [
    "hsl(var(--primary))",
    "hsl(var(--info))",
    "hsl(var(--success))",
    "hsl(var(--warning))",
    "hsl(var(--destructive))",
  ],
  height = 300,
  animate = true,
}: PieChartProps) {
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  
  useEffect(() => {
    if (animate) {
      // Animate the data points one by one
      setChartData([]);
      
      const animateData = async () => {
        for (let i = 0; i <= data.length; i++) {
          setChartData(data.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 150));
        }
      };
      
      animateData();
    } else {
      setChartData(data);
    }
  }, [data, animate]);

  // Calculate the total value to show percentages
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsPieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={true}
          outerRadius={90}
          innerRadius={50}
          paddingAngle={2}
          dataKey="value"
          nameKey="name"
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          animationDuration={800}
          animationEasing="ease-out"
        >
          {chartData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={colors[index % colors.length]} 
              stroke="hsl(var(--background))"
              strokeWidth={2}
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
          formatter={(value: number) => [`${value} (${((value / totalValue) * 100).toFixed(1)}%)`, 'Value']}
          labelFormatter={(name) => `${name}`}
        />
        <Legend 
          verticalAlign="bottom" 
          height={36} 
          iconType="circle"
          formatter={(value, entry, index) => (
            <span style={{ color: 'var(--foreground)' }}>{value}</span>
          )}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}
