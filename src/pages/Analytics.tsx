
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Download
} from "lucide-react";
import { useState, useEffect } from "react";
import { BarChart } from "@/components/charts/BarChart";
import { PieChart as PieChartComponent } from "@/components/charts/PieChart";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock data
const salesByChannel = [
  { name: "Direct", value: 45 },
  { name: "Social", value: 28 },
  { name: "Email", value: 15 },
  { name: "Affiliate", value: 12 },
];

const salesByDevice = [
  { name: "Desktop", value: 58 },
  { name: "Mobile", value: 32 },
  { name: "Tablet", value: 10 },
];

const monthlySales = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 150 },
  { name: "Mar", value: 180 },
  { name: "Apr", value: 210 },
  { name: "May", value: 250 },
  { name: "Jun", value: 220 },
  { name: "Jul", value: 280 },
  { name: "Aug", value: 300 },
  { name: "Sep", value: 320 },
  { name: "Oct", value: 350 },
  { name: "Nov", value: 370 },
  { name: "Dec", value: 390 },
];

export default function Analytics() {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate loading state for a smooth entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  const handleExportData = () => {
    toast({
      title: "Export Started",
      description: "Your analytics data is being exported to CSV",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Analytics Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            Gain insights into your sales and customer behavior.
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
      
      {/* Monthly Sales Chart */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Monthly Sales Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <BarChart data={monthlySales} />
          </div>
        </CardContent>
      </Card>
      
      {/* Distribution charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Sales by Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <PieChartComponent data={salesByChannel} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Sales by Device</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <PieChartComponent 
                data={salesByDevice} 
                colors={[
                  "hsl(var(--info))",
                  "hsl(var(--warning))",
                  "hsl(var(--success))",
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Key Metrics */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Key Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="acquisition">
            <TabsList>
              <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
              <TabsTrigger value="behavior">Behavior</TabsTrigger>
              <TabsTrigger value="conversion">Conversion</TabsTrigger>
            </TabsList>
            <TabsContent value="acquisition" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Traffic Sources</span>
                  <span className="text-2xl font-bold mt-1">12,543</span>
                  <span className="text-green-500 text-sm flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +12.3%
                  </span>
                </div>
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">New Users</span>
                  <span className="text-2xl font-bold mt-1">847</span>
                  <span className="text-green-500 text-sm flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +3.7%
                  </span>
                </div>
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Bounce Rate</span>
                  <span className="text-2xl font-bold mt-1">32.4%</span>
                  <span className="text-red-500 text-sm flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +2.1%
                  </span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="behavior" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Page Views</span>
                  <span className="text-2xl font-bold mt-1">38,621</span>
                  <span className="text-green-500 text-sm flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +8.3%
                  </span>
                </div>
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Avg. Session Duration</span>
                  <span className="text-2xl font-bold mt-1">2m 43s</span>
                  <span className="text-green-500 text-sm flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +1.2%
                  </span>
                </div>
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Pages/Session</span>
                  <span className="text-2xl font-bold mt-1">3.8</span>
                  <span className="text-green-500 text-sm flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +5.6%
                  </span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="conversion" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Conversion Rate</span>
                  <span className="text-2xl font-bold mt-1">3.2%</span>
                  <span className="text-green-500 text-sm flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +0.5%
                  </span>
                </div>
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Goal Completions</span>
                  <span className="text-2xl font-bold mt-1">423</span>
                  <span className="text-green-500 text-sm flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +12.7%
                  </span>
                </div>
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Abandoned Carts</span>
                  <span className="text-2xl font-bold mt-1">218</span>
                  <span className="text-red-500 text-sm flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +3.8%
                  </span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
