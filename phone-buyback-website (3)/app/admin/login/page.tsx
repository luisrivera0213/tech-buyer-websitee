"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Shield, Copy, Check } from "lucide-react"

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState({ username: false, password: false })

  // Check if already logged in
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated")
    const loginTime = localStorage.getItem("adminLoginTime")

    if (isAuthenticated === "true" && loginTime) {
      const loginDate = new Date(loginTime)
      const now = new Date()
      const hoursSinceLogin = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60)

      // Auto-logout after 8 hours
      if (hoursSinceLogin < 8) {
        window.location.href = "/admin"
        return
      } else {
        localStorage.removeItem("adminAuthenticated")
        localStorage.removeItem("adminLoginTime")
      }
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Multiple admin credentials for testing
    const validCredentials = [
      { username: "admin", password: "admin123" },
      { username: "techbuyer", password: "password123" },
      { username: "demo", password: "demo" },
      { username: "test", password: "test123" },
    ]

    const isValidLogin = validCredentials.some(
      (cred) => cred.username === credentials.username && cred.password === credentials.password,
    )

    if (isValidLogin) {
      // Set admin session
      localStorage.setItem("adminAuthenticated", "true")
      localStorage.setItem("adminLoginTime", new Date().toISOString())
      localStorage.setItem("adminUser", credentials.username)

      // Small delay for better UX
      setTimeout(() => {
        window.location.href = "/admin"
      }, 500)
    } else {
      setError("Invalid username or password. Please try one of the demo credentials below.")
    }

    setIsLoading(false)
  }

  const copyToClipboard = async (text: string, type: "username" | "password") => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied({ ...copied, [type]: true })
      setTimeout(() => setCopied({ ...copied, [type]: false }), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const fillCredentials = (username: string, password: string) => {
    setCredentials({ username, password })
    setError("")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Admin Login</CardTitle>
          <p className="text-gray-600">Access the Tech Buyer admin dashboard</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500 pr-10"
                  placeholder="Enter password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 space-y-3">
            <h4 className="font-medium text-gray-800 text-center">Demo Credentials (Click to use):</h4>

            {[
              { username: "admin", password: "admin123", label: "Admin Account" },
              { username: "demo", password: "demo", label: "Demo Account" },
              { username: "test", password: "test123", label: "Test Account" },
            ].map((cred, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:bg-gray-50 transition-colors border border-gray-200"
                onClick={() => fillCredentials(cred.username, cred.password)}
              >
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-gray-800">{cred.label}</p>
                      <p className="text-xs text-gray-600">
                        {cred.username} / {cred.password}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        copyToClipboard(`${cred.username}:${cred.password}`, "username")
                      }}
                    >
                      {copied.username ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-700 text-center">
              💡 Click any credential card above to auto-fill the login form
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
