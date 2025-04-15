import { ArrowUpRight, DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { StatCard } from "@/components/dashboard/StatCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data
const monthlyRevenue = [
  { name: "Jan", value: 54000 },
  { name: "Feb", value: 58000 },
  { name: "Mar", value: 62000 },
  { name: "Apr", value: 68000 },
  { name: "May", value: 72000 },
  { name: "Jun", value: 76000 },
  { name: "Jul", value: 85000 },
  { name: "Aug", value: 89000 },
  { name: "Sep", value: 93000 },
  { name: "Oct", value: 97000 },
  { name: "Nov", value: 101000 },
  { name: "Dec", value: 110000 },
];

const quarterlyRevenue = [
  { name: "Q1", value: 174000 },
  { name: "Q2", value: 216000 },
  { name: "Q3", value: 267000 },
  { name: "Q4", value: 308000 },
];

const revenueByProduct = [
  { name: "Software", value: 425000 },
  { name: "Hardware", value: 320000 },
  { name: "Services", value: 280000 },
  { name: "Training", value: 140000 },
];

const revenueByChannel = [
  { name: "Direct", value: 520000 },
  { name: "Partners", value: 370000 },
  { name: "Online", value: 275000 },
];

const profitMargin = [
  { name: "Jan", value: 32 },
  { name: "Feb", value: 34 },
  { name: "Mar", value: 35 },
  { name: "Apr", value: 33 },
  { name: "May", value: 36 },
  { name: "Jun", value: 38 },
  { name: "Jul", value: 40 },
  { name: "Aug", value: 39 },
  { name: "Sep", value: 41 },
  { name: "Oct", value: 42 },
  { name: "Nov", value: 43 },
  { name: "Dec", value: 44 },
];

export default function Revenue() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Revenue Analytics</h1>
        <FilterBar />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Revenue" 
          value="$965,420" 
          change={8.2} 
          icon={<DollarSign className="h-4 w-4" />} 
        />
        <StatCard 
          title="Average Order Value" 
          value="$3,450" 
          change={5.8} 
          icon={<DollarSign className="h-4 w-4" />} 
        />
        <StatCard 
          title="Profit Margin" 
          value="42.5%" 
          change={3.1} 
          icon={<TrendingUp className="h-4 w-4" />} 
        />
        <StatCard 
          title="Refund Rate" 
          value="2.1%" 
          change={-0.7} 
          icon={<TrendingDown className="h-4 w-4" />} 
        />
      </div>
      
      <div className="chart-container p-4">
        <Tabs defaultValue="monthly">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Revenue Trend</h2>
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="monthly" className="mt-0 h-[400px]">
            <AreaChart data={monthlyRevenue} height={400} />
          </TabsContent>
          <TabsContent value="quarterly" className="mt-0 h-[400px]">
            <AreaChart data={quarterlyRevenue} height={400} />
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="chart-container p-4">
          <h2 className="text-lg font-semibold mb-4">Revenue by Product</h2>
          <div className="h-[350px]">
            <BarChart data={revenueByProduct} />
          </div>
        </div>
        <div className="chart-container p-4">
          <h2 className="text-lg font-semibold mb-4">Revenue by Channel</h2>
          <div className="h-[350px]">
            <BarChart data={revenueByChannel} color="hsl(var(--info))" />
          </div>
        </div>
      </div>
      
      <div className="chart-container p-4">
        <h2 className="text-lg font-semibold mb-4">Profit Margin Trend</h2>
        <div className="flex items-center gap-2 mb-4 text-sm">
          <span className="inline-flex items-center text-success">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            2.3% increase from last year
          </span>
        </div>
        <LineChart data={profitMargin} color="hsl(var(--success))" />
      </div>
    </div>
  );
}
