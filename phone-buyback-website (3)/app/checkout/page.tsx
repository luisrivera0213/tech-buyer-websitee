"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Check, Truck } from "lucide-react"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [quoteData, setQuoteData] = useState<any>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "paypal",
    agreedToTerms: false,
  })

  useEffect(() => {
    const savedQuote = localStorage.getItem("quoteData")
    if (savedQuote) {
      setQuoteData(JSON.parse(savedQuote))
    }
  }, [])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const submitOrder = async () => {
    // Submit order logic here
    console.log("Order submitted:", { ...formData, ...quoteData })
    setStep(4)
  }

  if (!quoteData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No quote found</h2>
          <p className="text-gray-600 mb-6">Please get a quote first before proceeding to checkout.</p>
          <Button onClick={() => (window.location.href = "/")} className="bg-green-600 hover:bg-green-700">
            Get a quote
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TB</span>
              </div>
              <span className="text-xl font-medium text-gray-900">Tech Buyer</span>
            </div>
            <Button variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            {/* Step 1: Contact Info */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Contact information</h2>
                  <p className="text-gray-600">We'll use this to send your shipping kit and payment</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First name
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last name
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                <Button
                  onClick={() => setStep(2)}
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Step 2: Shipping Address */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Shipping address</h2>
                  <p className="text-gray-600">Where should we send your shipping kit?</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                      Street address
                    </Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                        City
                      </Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                        State
                      </Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="zipCode" className="text-sm font-medium text-gray-700">
                      ZIP code
                    </Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="ghost" onClick={() => setStep(1)} className="flex-1">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!formData.address || !formData.city || !formData.state || !formData.zipCode}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment Method */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">How do you want to get paid?</h2>
                  <p className="text-gray-600">Choose your preferred payment method</p>
                </div>

                <div className="space-y-3">
                  {[
                    { id: "paypal", name: "PayPal", description: "Fast and secure" },
                    { id: "venmo", name: "Venmo", description: "Quick mobile payments" },
                    { id: "zelle", name: "Zelle", description: "Bank to bank transfer" },
                    { id: "check", name: "Check", description: "Mailed to your address" },
                  ].map((method) => (
                    <Button
                      key={method.id}
                      variant="outline"
                      className={`h-16 justify-start text-left border-gray-200 hover:border-green-500 hover:bg-green-50 p-4 ${
                        formData.paymentMethod === method.id ? "border-green-500 bg-green-50" : ""
                      }`}
                      onClick={() => handleInputChange("paymentMethod", method.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            formData.paymentMethod === method.id ? "border-green-500 bg-green-500" : "border-gray-300"
                          }`}
                        >
                          {formData.paymentMethod === method.id && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{method.name}</div>
                          <div className="text-sm text-gray-600">{method.description}</div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>

                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the Terms of Service and Privacy Policy. I understand that my device will be inspected
                    and the final payout may vary based on actual condition.
                  </Label>
                </div>

                <div className="flex space-x-3">
                  <Button variant="ghost" onClick={() => setStep(2)} className="flex-1">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={submitOrder}
                    disabled={!formData.agreedToTerms}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium"
                  >
                    Complete order
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Check className="h-8 w-8 text-green-600" />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Order confirmed!</h2>
                  <p className="text-gray-600">Your shipping kit is on the way</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={quoteData.device?.image || "/placeholder.svg"}
                        alt={quoteData.device?.name}
                        className="w-12 h-16 rounded-lg"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">{quoteData.device?.name}</div>
                        <div className="text-sm text-gray-600">
                          {quoteData.storage} • {quoteData.condition}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">${quoteData.quote}</div>
                      <div className="text-sm text-gray-600">Your payout</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-left">
                  <div className="flex items-center mb-3">
                    <Truck className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-blue-800">What happens next?</h4>
                  </div>
                  <ol className="text-sm text-blue-700 space-y-1">
                    <li>1. We'll email you a shipping label within 2 hours</li>
                    <li>2. Pack your device and attach the label</li>
                    <li>3. Drop it off at any shipping location</li>
                    <li>4. Get paid within 24 hours of inspection</li>
                  </ol>
                </div>

                <Button
                  onClick={() => (window.location.href = "/")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium"
                >
                  Done
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Order Summary Sidebar */}
        {step < 4 && (
          <Card className="mt-6 border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Order summary</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={quoteData.device?.image || "/placeholder.svg"}
                    alt={quoteData.device?.name}
                    className="w-10 h-12 rounded"
                  />
                  <div>
                    <div className="font-medium text-sm">{quoteData.device?.name}</div>
                    <div className="text-xs text-gray-600">
                      {quoteData.storage} • {quoteData.condition}
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold text-green-600">${quoteData.quote}</div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
