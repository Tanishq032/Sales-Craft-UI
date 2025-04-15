
import { 
  LineChart, 
  TrendingUp, 
  ArrowUpRight, 
  Users
} from "lucide-react";
import { useState, useEffect } from "react";
import { LineChart as LineChartComponent } from "@/components/charts/LineChart";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/StatCard";

// Mock data for performance page
const performanceData = [
  { name: "Jan", value: 65 },
  { name: "Feb", value: 59 },
  { name: "Mar", value: 80 },
  { name: "Apr", value: 81 },
  { name: "May", value: 56 },
  { name: "Jun", value: 55 },
  { name: "Jul", value: 40 },
  { name: "Aug", value: 70 },
  { name: "Sep", value: 90 },
  { name: "Oct", value: 75 },
  { name: "Nov", value: 85 },
  { name: "Dec", value: 96 },
];

const kpiData = [
  { name: "Conversion Rate", value: "7.2%", change: 1.5, icon: <ArrowUpRight className="h-4 w-4" /> },
  { name: "Average Order Value", value: "$142", change: 3.2, icon: <ArrowUpRight className="h-4 w-4" /> },
  { name: "Customer Acquisition Cost", value: "$32", change: -2.1, icon: <ArrowUpRight className="h-4 w-4" /> },
  { name: "Customer Lifetime Value", value: "$870", change: 5.6, icon: <ArrowUpRight className="h-4 w-4" /> }
];

export default function Performance() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading state for a smooth entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Performance Metrics
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your sales team and product performance over time.
          </p>
        </div>
        <FilterBar />
      </div>
      
      {/* Stats cards with staggered animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          title="Efficiency Score" 
          value="92%" 
          change={4.6} 
          icon={<TrendingUp className="h-4 w-4" />} 
          highlight={true}
          delay={0}
        />
        <StatCard 
          title="Avg. Response Time" 
          value="1.4h" 
          change={-8.3} 
          icon={<LineChart className="h-4 w-4" />} 
          delay={100}
        />
        <StatCard 
          title="Deal Closure Rate" 
          value="24%" 
          change={2.7} 
          icon={<Users className="h-4 w-4" />} 
          delay={200}
        />
        <StatCard 
          title="Goal Completion" 
          value="78%" 
          change={5.9} 
          icon={<TrendingUp className="h-4 w-4" />} 
          delay={300}
        />
      </div>

      {/* Main performance chart */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <LineChartComponent data={performanceData} />
          </div>
        </CardContent>
      </Card>

      {/* KPI metrics grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Key Performance Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {kpiData.map((kpi, index) => (
            <Card key={kpi.name} className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">{kpi.name}</p>
                    <p className="text-2xl font-bold mt-1">{kpi.value}</p>
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${kpi.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {kpi.icon}
                    <span>{Math.abs(kpi.change)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
