
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Lock, 
  Globe, 
  CreditCard, 
  Save
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("account");
  
  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been saved successfully",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your account settings and preferences.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted/60">
          <TabsTrigger value="account" className="gap-2 data-[state=active]:bg-background">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2 data-[state=active]:bg-background">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2 data-[state=active]:bg-background">
            <Lock className="h-4 w-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2 data-[state=active]:bg-background">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="gap-2 data-[state=active]:bg-background">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Billing</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Update your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    First Name
                  </label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Last Name
                  </label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Job Title
                </label>
                <Input id="role" defaultValue="Sales Manager" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2" onClick={handleSave}>
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose what notifications you want to receive.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications for important updates.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Sales Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Get notified about new sales and transactions.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Product Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about product changes.
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Team Messages</h3>
                  <p className="text-sm text-muted-foreground">
                    Get notified when team members send you messages.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2" onClick={handleSave}>
                <Save className="h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Password & Security</CardTitle>
              <CardDescription>
                Manage your password and security settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="currentPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Current Password
                </label>
                <Input id="currentPassword" type="password" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="newPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  New Password
                </label>
                <Input id="newPassword" type="password" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Confirm New Password
                </label>
                <Input id="confirmPassword" type="password" />
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account.
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2" onClick={handleSave}>
                <Save className="h-4 w-4" />
                Update Password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>
                Customize how the dashboard looks for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Language</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred language.
                  </p>
                </div>
                <select className="px-3 py-2 rounded-md border border-input bg-background">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Compact Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Display more content on the screen.
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Dashboard Animation</h3>
                  <p className="text-sm text-muted-foreground">
                    Show animations on dashboard elements.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2" onClick={handleSave}>
                <Save className="h-4 w-4" />
                Save Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>
                Manage your billing information and view payment history.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Current Plan</h3>
                <div className="bg-muted/40 rounded-md p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Enterprise Plan</p>
                      <p className="text-sm text-muted-foreground">$499 per month</p>
                    </div>
                    <Badge variant="success">Active</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Payment Method</h3>
                <div className="flex items-center gap-3 bg-muted/40 rounded-md p-3">
                  <CreditCard className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Billing Address</h3>
                <div className="bg-muted/40 rounded-md p-3">
                  <p>John Doe</p>
                  <p>1234 Market Street</p>
                  <p>San Francisco, CA 94103</p>
                  <p>United States</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Update Billing Info</Button>
              <Button className="gap-2" onClick={handleSave}>
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
