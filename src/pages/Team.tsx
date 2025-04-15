
import { Search, SlidersHorizontal } from "lucide-react";
import { PerformanceCard } from "@/components/dashboard/PerformanceCard";
import { BarChart } from "@/components/charts/BarChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const teamMembers = [
  { 
    id: 1,
    name: "Sarah Johnson", 
    role: "Senior Sales Rep", 
    value: 145000, 
    target: 160000, 
    metric: "Revenue",
    region: "North America",
    deals: 28,
  },
  { 
    id: 2,
    name: "Mike Chen", 
    role: "Account Executive", 
    value: 130000, 
    target: 120000, 
    metric: "Revenue",
    region: "Europe",
    deals: 22,
  },
  { 
    id: 3,
    name: "Emily Taylor", 
    role: "Sales Rep", 
    value: 85000, 
    target: 100000, 
    metric: "Revenue",
    region: "North America",
    deals: 16,
  },
  { 
    id: 4,
    name: "David Wilson", 
    role: "Account Manager", 
    value: 110000, 
    target: 120000, 
    metric: "Revenue",
    region: "Asia Pacific",
    deals: 19,
  },
  { 
    id: 5,
    name: "Jessica Martinez", 
    role: "Senior Account Executive", 
    value: 155000, 
    target: 150000, 
    metric: "Revenue",
    region: "Europe",
    deals: 31,
  },
  { 
    id: 6,
    name: "Robert Kim", 
    role: "Sales Rep", 
    value: 78000, 
    target: 90000, 
    metric: "Revenue",
    region: "Asia Pacific",
    deals: 14,
  },
  { 
    id: 7,
    name: "Amanda Lewis", 
    role: "Account Executive", 
    value: 125000, 
    target: 130000, 
    metric: "Revenue",
    region: "North America",
    deals: 25,
  },
  { 
    id: 8,
    name: "Carlos Mendez", 
    role: "Sales Rep", 
    value: 95000, 
    target: 100000, 
    metric: "Revenue",
    region: "Latin America",
    deals: 18,
  },
];

const topPerformerData = teamMembers
  .sort((a, b) => (b.value / b.target) - (a.value / a.target))
  .slice(0, 5)
  .map(member => ({ name: member.name, value: Math.round((member.value / member.target) * 100) }));

export default function Team() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Team Performance</h1>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search team members..."
              className="w-full pl-9 rounded-md"
            />
          </div>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="na">North America</SelectItem>
              <SelectItem value="eu">Europe</SelectItem>
              <SelectItem value="apac">Asia Pacific</SelectItem>
              <SelectItem value="latam">Latin America</SelectItem>
            </SelectContent>
          </Select>
          
          <Button size="icon" variant="outline">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Members</TabsTrigger>
          <TabsTrigger value="top">Top Performers</TabsTrigger>
          <TabsTrigger value="analysis">Performance Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <PerformanceCard
                key={member.id}
                name={member.name}
                role={member.role}
                value={member.value}
                target={member.target}
                metric={member.metric}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="top" className="mt-4">
          <div className="chart-container p-4 h-auto">
            <h2 className="text-lg font-semibold mb-4">Top Performers (% of Target)</h2>
            <div className="h-[400px]">
              <BarChart data={topPerformerData} color="hsl(var(--success))" height={400} />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="analysis" className="mt-4">
          <div className="dashboard-card">
            <h2 className="text-lg font-semibold mb-4">Team Insights</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-md font-medium mb-2">Performance Summary</h3>
                <p className="text-muted-foreground mb-4">
                  5 of 8 team members are meeting or exceeding their targets. The team average is 92% of target.
                </p>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "92%" }} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Top Performer</h4>
                  <p>Jessica Martinez</p>
                  <p className="text-sm text-muted-foreground">103% of target</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Most Deals</h4>
                  <p>Jessica Martinez</p>
                  <p className="text-sm text-muted-foreground">31 deals closed</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Highest AOV</h4>
                  <p>Mike Chen</p>
                  <p className="text-sm text-muted-foreground">$5,909 per deal</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium mb-2">Areas for Improvement</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>3 team members below 90% of target</li>
                  <li>North America team conversion rate below average</li>
                  <li>Deal velocity decreased 5% from previous quarter</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
