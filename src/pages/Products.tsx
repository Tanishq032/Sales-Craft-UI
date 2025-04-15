
import { 
  Package, 
  ShoppingCart, 
  Truck, 
  BarChart3,
  Search,
  SlidersHorizontal,
  Plus
} from "lucide-react";
import { useState, useEffect } from "react";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/dashboard/StatCard";

// Mock product data
const products = [
  { 
    id: 1, 
    name: "Enterprise Software Suite", 
    category: "Software", 
    price: 1299, 
    stock: 150, 
    sales: 72,
    status: "Active"
  },
  { 
    id: 2, 
    name: "Cloud Services Platform", 
    category: "Services", 
    price: 299, 
    stock: 0, 
    sales: 184,
    status: "Active"
  },
  { 
    id: 3, 
    name: "Security Hardware Bundle", 
    category: "Hardware", 
    price: 4999, 
    stock: 18, 
    sales: 36,
    status: "Active"
  },
  { 
    id: 4, 
    name: "Advanced Analytics Tool", 
    category: "Software", 
    price: 799, 
    stock: 42, 
    sales: 128,
    status: "Active"
  },
  { 
    id: 5, 
    name: "Training Program Basic", 
    category: "Training", 
    price: 499, 
    stock: 200, 
    sales: 52,
    status: "Inactive"
  },
  { 
    id: 6, 
    name: "Training Program Advanced", 
    category: "Training", 
    price: 999, 
    stock: 200, 
    sales: 23,
    status: "Active"
  },
  { 
    id: 7, 
    name: "Network Router Pro", 
    category: "Hardware", 
    price: 1499, 
    stock: 31, 
    sales: 64,
    status: "Active"
  },
  { 
    id: 8, 
    name: "Virtual Server Package", 
    category: "Services", 
    price: 399, 
    stock: 0, 
    sales: 102,
    status: "Active"
  }
];

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    // Simulate loading state for a smooth entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Product Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your product catalog and monitor inventory.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm" className="gap-1.5">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
          <FilterBar />
        </div>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          title="Total Products" 
          value="8" 
          change={0} 
          icon={<Package className="h-4 w-4" />} 
          highlight={true}
          delay={0}
        />
        <StatCard 
          title="Total Sales" 
          value="661" 
          change={5.3} 
          icon={<ShoppingCart className="h-4 w-4" />} 
          delay={100}
        />
        <StatCard 
          title="Out of Stock" 
          value="2" 
          change={0} 
          icon={<Truck className="h-4 w-4" />} 
          delay={200}
        />
        <StatCard 
          title="Revenue" 
          value="$238,520" 
          change={12.7} 
          icon={<BarChart3 className="h-4 w-4" />} 
          delay={300}
        />
      </div>
      
      {/* Product list with search and filter */}
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="hardware">Hardware</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-9 w-[250px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <TabsContent value="all" className="m-0">
              <div className="rounded-md border">
                <div className="overflow-hidden">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="h-12 px-4 text-left font-medium">Name</th>
                        <th className="h-12 px-4 text-left font-medium">Category</th>
                        <th className="h-12 px-4 text-left font-medium">Price</th>
                        <th className="h-12 px-4 text-left font-medium">Stock</th>
                        <th className="h-12 px-4 text-left font-medium">Sales</th>
                        <th className="h-12 px-4 text-left font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="p-4 align-middle font-medium">{product.name}</td>
                          <td className="p-4 align-middle">{product.category}</td>
                          <td className="p-4 align-middle">${product.price.toLocaleString()}</td>
                          <td className="p-4 align-middle">
                            {product.stock === 0 ? (
                              <Badge variant="destructive">Out of Stock</Badge>
                            ) : product.stock < 20 ? (
                              <Badge variant="warning">Low Stock: {product.stock}</Badge>
                            ) : (
                              product.stock
                            )}
                          </td>
                          <td className="p-4 align-middle">{product.sales}</td>
                          <td className="p-4 align-middle">
                            <Badge variant={product.status === "Active" ? "success" : "secondary"}>
                              {product.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="software" className="m-0">
              <div className="rounded-md border">
                <div className="overflow-hidden">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="h-12 px-4 text-left font-medium">Name</th>
                        <th className="h-12 px-4 text-left font-medium">Category</th>
                        <th className="h-12 px-4 text-left font-medium">Price</th>
                        <th className="h-12 px-4 text-left font-medium">Stock</th>
                        <th className="h-12 px-4 text-left font-medium">Sales</th>
                        <th className="h-12 px-4 text-left font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts
                        .filter(product => product.category === "Software")
                        .map((product) => (
                          <tr key={product.id} className="border-b hover:bg-muted/50 transition-colors">
                            <td className="p-4 align-middle font-medium">{product.name}</td>
                            <td className="p-4 align-middle">{product.category}</td>
                            <td className="p-4 align-middle">${product.price.toLocaleString()}</td>
                            <td className="p-4 align-middle">
                              {product.stock === 0 ? (
                                <Badge variant="destructive">Out of Stock</Badge>
                              ) : product.stock < 20 ? (
                                <Badge variant="warning">Low Stock: {product.stock}</Badge>
                              ) : (
                                product.stock
                              )}
                            </td>
                            <td className="p-4 align-middle">{product.sales}</td>
                            <td className="p-4 align-middle">
                              <Badge variant={product.status === "Active" ? "success" : "secondary"}>
                                {product.status}
                              </Badge>
                            </td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="hardware" className="m-0">
              <div className="rounded-md border">
                <div className="overflow-hidden">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="h-12 px-4 text-left font-medium">Name</th>
                        <th className="h-12 px-4 text-left font-medium">Category</th>
                        <th className="h-12 px-4 text-left font-medium">Price</th>
                        <th className="h-12 px-4 text-left font-medium">Stock</th>
                        <th className="h-12 px-4 text-left font-medium">Sales</th>
                        <th className="h-12 px-4 text-left font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts
                        .filter(product => product.category === "Hardware")
                        .map((product) => (
                          <tr key={product.id} className="border-b hover:bg-muted/50 transition-colors">
                            <td className="p-4 align-middle font-medium">{product.name}</td>
                            <td className="p-4 align-middle">{product.category}</td>
                            <td className="p-4 align-middle">${product.price.toLocaleString()}</td>
                            <td className="p-4 align-middle">
                              {product.stock === 0 ? (
                                <Badge variant="destructive">Out of Stock</Badge>
                              ) : product.stock < 20 ? (
                                <Badge variant="warning">Low Stock: {product.stock}</Badge>
                              ) : (
                                product.stock
                              )}
                            </td>
                            <td className="p-4 align-middle">{product.sales}</td>
                            <td className="p-4 align-middle">
                              <Badge variant={product.status === "Active" ? "success" : "secondary"}>
                                {product.status}
                              </Badge>
                            </td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="m-0">
              <div className="rounded-md border">
                <div className="overflow-hidden">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="h-12 px-4 text-left font-medium">Name</th>
                        <th className="h-12 px-4 text-left font-medium">Category</th>
                        <th className="h-12 px-4 text-left font-medium">Price</th>
                        <th className="h-12 px-4 text-left font-medium">Stock</th>
                        <th className="h-12 px-4 text-left font-medium">Sales</th>
                        <th className="h-12 px-4 text-left font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts
                        .filter(product => product.category === "Services")
                        .map((product) => (
                          <tr key={product.id} className="border-b hover:bg-muted/50 transition-colors">
                            <td className="p-4 align-middle font-medium">{product.name}</td>
                            <td className="p-4 align-middle">{product.category}</td>
                            <td className="p-4 align-middle">${product.price.toLocaleString()}</td>
                            <td className="p-4 align-middle">
                              {product.stock === 0 ? (
                                <Badge variant="destructive">Out of Stock</Badge>
                              ) : product.stock < 20 ? (
                                <Badge variant="warning">Low Stock: {product.stock}</Badge>
                              ) : (
                                product.stock
                              )}
                            </td>
                            <td className="p-4 align-middle">{product.sales}</td>
                            <td className="p-4 align-middle">
                              <Badge variant={product.status === "Active" ? "success" : "secondary"}>
                                {product.status}
                              </Badge>
                            </td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
