"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  DollarSign,
  Package,
  Users,
  TrendingUp,
  RefreshCw,
  BarChart3,
  Download,
  LogOut,
  Clock,
  CheckCircle,
} from "lucide-react"
import { PriceScraper } from "@/lib/price-scraper"

export default function AdminDashboard() {
  const [isScrapingPrices, setIsScrapingPrices] = useState(false)
  const [lastPriceUpdate, setLastPriceUpdate] = useState<Date>(new Date())
  const [currentUser, setCurrentUser] = useState<string>("")
  const [loginTime, setLoginTime] = useState<string>("")
  const [stats, setStats] = useState({
    totalOrders: 1247,
    totalRevenue: 89432,
    activeDevices: 156,
    avgOrderValue: 287,
  })

  // Check authentication on mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated")
    const user = localStorage.getItem("adminUser")
    const loginTimeStamp = localStorage.getItem("adminLoginTime")

    if (!isAuthenticated || isAuthenticated !== "true") {
      window.location.href = "/admin/login"
      return
    }

    if (user) setCurrentUser(user)
    if (loginTimeStamp) {
      const loginDate = new Date(loginTimeStamp)
      setLoginTime(loginDate.toLocaleString())

      // Check if session expired (8 hours)
      const now = new Date()
      const hoursSinceLogin = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60)

      if (hoursSinceLogin >= 8) {
        handleLogout()
        return
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    localStorage.removeItem("adminUser")
    localStorage.removeItem("adminLoginTime")
    window.location.href = "/admin/login"
  }

  const startPriceScraping = async () => {
    setIsScrapingPrices(true)
    try {
      const scraper = PriceScraper.getInstance()
      await scraper.scrapeItsWorthMorePrices()
      setLastPriceUpdate(new Date())

      // Show success message
      alert("Price scraping completed successfully!")
    } catch (error) {
      console.error("Price scraping failed:", error)
      alert("Price scraping failed. Please try again.")
    } finally {
      setIsScrapingPrices(false)
    }
  }

  const mockOrders = [
    { id: "ORD-001", customer: "John Doe", device: "iPhone 15 Pro", amount: 850, status: "pending" },
    { id: "ORD-002", customer: "Jane Smith", device: "Galaxy S24", amount: 650, status: "shipped" },
    { id: "ORD-003", customer: "Mike Johnson", device: "Pixel 8", amount: 450, status: "received" },
    { id: "ORD-004", customer: "Sarah Wilson", device: "iPad Pro", amount: 750, status: "paid" },
    { id: "ORD-005", customer: "David Brown", device: "MacBook Air", amount: 1200, status: "pending" },
  ]

  const mockDevices = [
    { id: "iphone-15-pro", name: "iPhone 15 Pro", currentPrice: 850, lastUpdated: "2 hours ago", status: "updated" },
    { id: "galaxy-s24", name: "Galaxy S24", currentPrice: 650, lastUpdated: "1 hour ago", status: "updated" },
    { id: "pixel-8", name: "Pixel 8", currentPrice: 450, lastUpdated: "3 hours ago", status: "updated" },
    { id: "ipad-pro", name: "iPad Pro", currentPrice: 750, lastUpdated: "1 hour ago", status: "updated" },
    { id: "macbook-air", name: "MacBook Air", currentPrice: 1200, lastUpdated: "4 hours ago", status: "stale" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tech Buyer Admin</h1>
              <p className="text-sm text-gray-600">Welcome back, {currentUser}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right text-sm text-gray-600">
                <p>Logged in: {loginTime}</p>
                <p className="text-xs">Session expires in 8 hours</p>
              </div>
              <Button
                onClick={startPriceScraping}
                disabled={isScrapingPrices}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isScrapingPrices ? (
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="h-4 w-4 mr-2" />
                )}
                Update Prices
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Price Update Status */}
        <Alert className="mb-6 border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-700">
            <strong>Price Scraping Active:</strong> Last updated {lastPriceUpdate.toLocaleString()}. Next automatic
            update scheduled for 2:00 AM daily.
          </AlertDescription>
        </Alert>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalOrders.toLocaleString()}</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Devices</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.activeDevices}</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                  <p className="text-3xl font-bold text-gray-900">${stats.avgOrderValue}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Manage customer orders and shipments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Device</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.device}</TableCell>
                        <TableCell>${order.amount}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "pending"
                                ? "secondary"
                                : order.status === "shipped"
                                  ? "default"
                                  : order.status === "paid"
                                    ? "default"
                                    : "outline"
                            }
                            className={
                              order.status === "paid"
                                ? "bg-green-100 text-green-800"
                                : order.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : ""
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices">
            <Card>
              <CardHeader>
                <CardTitle>Device Pricing</CardTitle>
                <CardDescription>
                  Manage device prices and inventory. Last updated: {lastPriceUpdate.toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Device</TableHead>
                      <TableHead>Current Price</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockDevices.map((device) => (
                      <TableRow key={device.id}>
                        <TableCell className="font-medium">{device.name}</TableCell>
                        <TableCell>${device.currentPrice}</TableCell>
                        <TableCell>{device.lastUpdated}</TableCell>
                        <TableCell>
                          <Badge
                            variant={device.status === "updated" ? "default" : "secondary"}
                            className={
                              device.status === "updated"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {device.status === "updated" ? (
                              <>
                                <CheckCircle className="h-3 w-3 mr-1" /> Updated
                              </>
                            ) : (
                              <>
                                <Clock className="h-3 w-3 mr-1" /> Stale
                              </>
                            )}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Price Scraping Status</CardTitle>
                  <CardDescription>Automatically update prices from ItsWorthMore</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Auto-scraping enabled</span>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Update frequency</span>
                    <span className="text-sm text-gray-600">Daily at 2:00 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Last update</span>
                    <span className="text-sm text-gray-600">{lastPriceUpdate.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Status</span>
                    <Badge
                      variant="outline"
                      className={isScrapingPrices ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}
                    >
                      {isScrapingPrices ? (
                        <>
                          <RefreshCw className="h-3 w-3 mr-1 animate-spin" /> Running
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" /> Ready
                        </>
                      )}
                    </Badge>
                  </div>
                  <Button onClick={startPriceScraping} disabled={isScrapingPrices} className="w-full">
                    {isScrapingPrices ? "Updating..." : "Update Now"}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pricing Configuration</CardTitle>
                  <CardDescription>Configure automatic pricing adjustments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Competitor margin (%)</label>
                    <Input type="number" placeholder="5" defaultValue="5" />
                    <p className="text-xs text-gray-500">Percentage above competitor prices</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Minimum price ($)</label>
                    <Input type="number" placeholder="50" defaultValue="50" />
                    <p className="text-xs text-gray-500">Minimum price for any device</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Update frequency</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="daily">Daily</option>
                      <option value="hourly">Hourly</option>
                      <option value="weekly">Weekly</option>
                    </select>
                  </div>
                  <Button className="w-full">Save Configuration</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                  <CardDescription>Track your business performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Revenue chart would go here</p>
                      <p className="text-sm text-gray-400">Connect to analytics service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Export Data</CardTitle>
                  <CardDescription>Download reports and analytics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Orders (CSV)
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Pricing Data
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Analytics Report
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Customer Data
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
