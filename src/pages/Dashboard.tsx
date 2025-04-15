
import { BarChart3, DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { PieChart } from "@/components/charts/PieChart";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { PerformanceCard } from "@/components/dashboard/PerformanceCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for dashboard
const revenueData = [
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

const productData = [
  { name: "Software", value: 40 },
  { name: "Hardware", value: 25 },
  { name: "Services", value: 20 },
  { name: "Training", value: 15 },
];

const regionData = [
  { name: "North America", value: 38 },
  { name: "Europe", value: 32 },
  { name: "Asia Pacific", value: 20 },
  { name: "Latin America", value: 10 },
];

const salesByMonth = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 150 },
  { name: "Mar", value: 180 },
  { name: "Apr", value: 200 },
  { name: "May", value: 220 },
  { name: "Jun", value: 250 },
  { name: "Jul", value: 280 },
  { name: "Aug", value: 270 },
  { name: "Sep", value: 290 },
  { name: "Oct", value: 310 },
  { name: "Nov", value: 330 },
  { name: "Dec", value: 350 },
];

const teamMembers = [
  { 
    name: "Sarah Johnson", 
    role: "Senior Sales Rep", 
    value: 145000, 
    target: 160000, 
    metric: "Revenue" 
  },
  { 
    name: "Mike Chen", 
    role: "Account Executive", 
    value: 130000, 
    target: 120000, 
    metric: "Revenue" 
  },
  { 
    name: "Emily Taylor", 
    role: "Sales Rep", 
    value: 85000, 
    target: 100000, 
    metric: "Revenue" 
  },
  { 
    name: "David Wilson", 
    role: "Account Manager", 
    value: 110000, 
    target: 120000, 
    metric: "Revenue" 
  },
];

export default function Dashboard() {
  const [chartView, setChartView] = useState("monthly");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
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
          title="Sales" 
          value="2,845" 
          change={5.1} 
          icon={<ShoppingCart className="h-4 w-4" />} 
        />
        <StatCard 
          title="Customers" 
          value="1,250" 
          change={12.7} 
          icon={<Users className="h-4 w-4" />} 
        />
        <StatCard 
          title="Conversion Rate" 
          value="12.5%" 
          change={-2.3} 
          icon={<TrendingUp className="h-4 w-4" />} 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="revenue" className="chart-container h-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Performance Overview</h2>
              <TabsList>
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
                <TabsTrigger value="sales">Sales</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="revenue" className="mt-0 h-[300px]">
              <AreaChart data={revenueData} />
            </TabsContent>
            <TabsContent value="sales" className="mt-0 h-[300px]">
              <BarChart data={salesByMonth} />
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Tabs defaultValue="product" className="chart-container h-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Distribution</h2>
              <TabsList>
                <TabsTrigger value="product">Product</TabsTrigger>
                <TabsTrigger value="region">Region</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="product" className="mt-0 h-[300px]">
              <PieChart data={productData} />
            </TabsContent>
            <TabsContent value="region" className="mt-0 h-[300px]">
              <PieChart data={regionData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-4">Team Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <PerformanceCard
              key={member.name}
              name={member.name}
              role={member.role}
              value={member.value}
              target={member.target}
              metric={member.metric}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
