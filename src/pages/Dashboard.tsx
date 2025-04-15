
import { 
  BarChart3, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  Download,
  Calendar,
  BriefcaseBusiness
} from "lucide-react";
import { useState, useEffect } from "react";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { PieChart } from "@/components/charts/PieChart";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { PerformanceCard } from "@/components/dashboard/PerformanceCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
  const [activeChart, setActiveChart] = useState("revenue");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate loading state for visual effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleExportData = () => {
    toast({
      title: "Export Started",
      description: "Your dashboard data is being exported to CSV",
      duration: 3000,
    });
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Sales Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's your sales performance overview.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-1.5"
            onClick={handleExportData}
          >
            <Download className="h-4 w-4" />
            Export
          </Button>
          <FilterBar />
        </div>
      </div>
      
      {/* Stats cards with staggered animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          title="Total Revenue" 
          value="$965,420" 
          change={8.2} 
          icon={<DollarSign className="h-4 w-4" />} 
          highlight={true}
          delay={0}
        />
        <StatCard 
          title="Sales" 
          value="2,845" 
          change={5.1} 
          icon={<ShoppingCart className="h-4 w-4" />} 
          delay={100}
        />
        <StatCard 
          title="Customers" 
          value="1,250" 
          change={12.7} 
          icon={<Users className="h-4 w-4" />} 
          delay={200}
        />
        <StatCard 
          title="Conversion Rate" 
          value="12.5%" 
          change={-2.3} 
          icon={<TrendingUp className="h-4 w-4" />} 
          delay={300}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main chart section */}
        <div className="lg:col-span-2">
          <Card className="shadow-md border-border/40 overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-0">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold">Performance Overview</CardTitle>
                <Tabs 
                  defaultValue="revenue" 
                  value={activeChart}
                  onValueChange={setActiveChart}
                  className="h-9"
                >
                  <TabsList className="h-9">
                    <TabsTrigger value="revenue" className="h-8 px-3">Revenue</TabsTrigger>
                    <TabsTrigger value="sales" className="h-8 px-3">Sales</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[350px] transition-all duration-500 ease-in-out">
                {activeChart === "revenue" ? (
                  <AreaChart data={revenueData} />
                ) : (
                  <BarChart data={salesByMonth} />
                )}
              </div>
              <div className="flex justify-center gap-3 mt-2">
                <span 
                  onClick={() => setChartView("weekly")}
                  className={`text-xs px-3 py-1 rounded-full cursor-pointer transition-all ${
                    chartView === "weekly" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Weekly
                </span>
                <span
                  onClick={() => setChartView("monthly")}
                  className={`text-xs px-3 py-1 rounded-full cursor-pointer transition-all ${
                    chartView === "monthly" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Monthly
                </span>
                <span
                  onClick={() => setChartView("yearly")}
                  className={`text-xs px-3 py-1 rounded-full cursor-pointer transition-all ${
                    chartView === "yearly" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Yearly
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Distribution chart */}
        <div>
          <Card className="shadow-md border-border/40 overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
            <CardHeader className="pb-0">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold">Distribution</CardTitle>
                <Tabs defaultValue="product" className="h-9">
                  <TabsList className="h-9">
                    <TabsTrigger value="product" className="h-8 px-3">Product</TabsTrigger>
                    <TabsTrigger value="region" className="h-8 px-3">Region</TabsTrigger>
                  </TabsList>
                  <TabsContent value="product" className="mt-0 h-[350px]">
                    <PieChart data={productData} />
                  </TabsContent>
                  <TabsContent value="region" className="mt-0 h-[350px]">
                    <PieChart data={regionData} />
                  </TabsContent>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Content is now rendered via TabsContent inside the Tabs component */}
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Team performance section */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold">Team Performance</h2>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>This Quarter</span>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <PerformanceCard
              key={member.name}
              name={member.name}
              role={member.role}
              value={member.value}
              target={member.target}
              metric={member.metric}
              className="transition-all hover:scale-[1.02] ease-out"
            />
          ))}
        </div>
      </div>
      
      {/* Additional insights section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-md border-border/40 overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <BriefcaseBusiness className="h-5 w-5 text-primary" />
              Regional Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionData.map((region) => (
                <div key={region.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full" 
                      style={{ 
                        backgroundColor: region.name === "North America" 
                          ? "hsl(var(--primary))" 
                          : region.name === "Europe" 
                            ? "hsl(var(--info))" 
                            : region.name === "Asia Pacific" 
                              ? "hsl(var(--success))" 
                              : "hsl(var(--warning))" 
                      }} 
                    />
                    <span>{region.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ 
                          width: `${region.value}%`,
                          backgroundColor: region.name === "North America" 
                            ? "hsl(var(--primary))" 
                            : region.name === "Europe" 
                              ? "hsl(var(--info))" 
                              : region.name === "Asia Pacific" 
                                ? "hsl(var(--success))" 
                                : "hsl(var(--warning))" 
                        }} 
                      />
                    </div>
                    <span className="text-sm font-medium">{region.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md border-border/40 overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-primary" />
              Product Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {productData.map((product) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full" 
                      style={{ 
                        backgroundColor: product.name === "Software" 
                          ? "hsl(var(--primary))" 
                          : product.name === "Hardware" 
                            ? "hsl(var(--info))" 
                            : product.name === "Services" 
                              ? "hsl(var(--success))" 
                              : "hsl(var(--warning))" 
                      }} 
                    />
                    <span>{product.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ 
                          width: `${product.value * 2.5}%`,
                          backgroundColor: product.name === "Software" 
                            ? "hsl(var(--primary))" 
                            : product.name === "Hardware" 
                              ? "hsl(var(--info))" 
                              : product.name === "Services" 
                                ? "hsl(var(--success))" 
                                : "hsl(var(--warning))" 
                        }} 
                      />
                    </div>
                    <span className="text-sm font-medium">{product.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
