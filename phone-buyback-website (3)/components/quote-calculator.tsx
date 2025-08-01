"use client"

import type React from "react"

import { useState, useContext, createContext, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Gamepad2,
  Headphones,
  Plus,
} from "lucide-react"
import { deviceDatabase, calculatePrice, type DeviceModel } from "@/lib/device-database"
import { ConditionGuide } from "@/components/condition-guide"

interface CartItem {
  id: string
  category: string
  brand: string
  device: DeviceModel
  storage: string
  carrier: string
  condition: string
  quote: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  getTotalValue: () => number
  getItemCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("techBuyerCart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setItems(parsedCart)
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("techBuyerCart", JSON.stringify(items))
  }, [items])

  const addItem = (item: CartItem) => {
    const newItem = { ...item, id: `${item.device.id}-${Date.now()}-${Math.random()}` }
    setItems((prev) => [...prev, newItem])
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const getTotalValue = () => {
    return items.reduce((total, item) => total + item.quote, 0)
  }

  const getItemCount = () => items.length

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, getTotalValue, getItemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export function QuoteCalculator() {
  const [step, setStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedBrand, setSelectedBrand] = useState<string>("")
  const [selectedDevice, setSelectedDevice] = useState<DeviceModel | null>(null)
  const [selectedStorage, setSelectedStorage] = useState<string>("")
  const [selectedCarrier, setSelectedCarrier] = useState<string>("")
  const [selectedCondition, setSelectedCondition] = useState<string>("")
  const [quote, setQuote] = useState<number>(0)

  const cart = useCart()

  const categories = [
    { id: "phone", name: "Phones", icon: Smartphone, description: "iPhones, Samsung, Google Pixel" },
    { id: "tablet", name: "Tablets", icon: Tablet, description: "iPads, Galaxy Tabs, Surface" },
    { id: "laptop", name: "Laptops", icon: Laptop, description: "MacBooks, Surface, Galaxy Books" },
    { id: "watch", name: "Watches", icon: Watch, description: "Apple Watch, Galaxy Watch" },
    { id: "gaming", name: "Gaming", icon: Gamepad2, description: "PlayStation, Xbox, Nintendo" },
    { id: "headphones", name: "Audio", icon: Headphones, description: "AirPods, Galaxy Buds, Sony" },
  ]

  const brands = Object.keys(deviceDatabase).filter((brand) =>
    deviceDatabase[brand].categories.includes(selectedCategory),
  )

  const availableDevices = selectedBrand
    ? deviceDatabase[selectedBrand].models.filter((model) => model.category === selectedCategory)
    : []

  const calculateQuote = () => {
    if (!selectedDevice || !selectedStorage || !selectedCondition) return

    const calculatedQuote = calculatePrice(selectedBrand, selectedDevice.id, selectedStorage, selectedCondition as any)
    setQuote(calculatedQuote)
    setStep(7)
  }

  const addToCart = () => {
    if (!selectedDevice) return

    const cartItem: CartItem = {
      id: "",
      category: selectedCategory,
      brand: selectedBrand,
      device: selectedDevice,
      storage: selectedStorage,
      carrier: selectedCarrier,
      condition: selectedCondition,
      quote: quote,
    }

    cart.addItem(cartItem)
    resetQuote()
  }

  const resetQuote = () => {
    setStep(1)
    setSelectedCategory("")
    setSelectedBrand("")
    setSelectedDevice(null)
    setSelectedStorage("")
    setSelectedCarrier("")
    setSelectedCondition("")
    setQuote(0)
  }

  const proceedToCheckout = () => {
    if (cart.getItemCount() === 0 && selectedDevice) {
      addToCart()
    }
    localStorage.setItem("cartItems", JSON.stringify(cart.items))
    window.location.href = "/checkout"
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-0 shadow-lg bg-white">
        <CardContent className="p-8">
          {/* Step 1: Category Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">What are you selling?</h3>
                <p className="text-gray-600">Choose your device category to get started</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <Card
                      key={category.id}
                      className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 border-gray-200 hover:border-green-300"
                      onClick={() => {
                        setSelectedCategory(category.id)
                        setStep(2)
                      }}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 2: Brand Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Choose your brand</h3>
                <p className="text-gray-600">Select the brand of your {selectedCategory}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {brands.map((brand) => (
                  <Card
                    key={brand}
                    className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 border-gray-200 hover:border-green-300"
                    onClick={() => {
                      setSelectedBrand(brand)
                      setStep(3)
                    }}
                  >
                    <CardContent className="p-6 flex items-center space-x-4">
                      <img
                        src={deviceDatabase[brand].logo || "/placeholder.svg"}
                        alt={brand}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `/placeholder.svg?height=48&width=48&text=${encodeURIComponent(brand)}`
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{deviceDatabase[brand].name}</h4>
                        <p className="text-sm text-gray-600">
                          {deviceDatabase[brand].models.filter((m) => m.category === selectedCategory).length} models
                          available
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="ghost" onClick={() => setStep(1)} className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </div>
          )}

          {/* Step 3: Device Selection */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Which {selectedBrand} device?</h3>
                <p className="text-gray-600">Select your specific device model</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                {availableDevices.map((device) => (
                  <Card
                    key={device.id}
                    className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 border-gray-200 hover:border-green-300"
                    onClick={() => {
                      setSelectedDevice(device)
                      setStep(4)
                    }}
                  >
                    <CardContent className="p-4 text-center">
                      <img
                        src={device.image || "/placeholder.svg"}
                        alt={device.name}
                        className="w-20 h-24 object-contain mx-auto mb-3 rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = `/placeholder.svg?height=96&width=80&text=${encodeURIComponent(device.name)}`
                        }}
                      />
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{device.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{device.releaseYear}</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        Up to ${device.basePrice}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="ghost" onClick={() => setStep(2)} className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </div>
          )}

          {/* Step 4: Storage Selection */}
          {step === 4 && selectedDevice && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Storage capacity</h3>
                <p className="text-gray-600">Select your device's storage capacity</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedDevice.storageOptions.map((storage) => (
                  <Card
                    key={storage}
                    className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 border-gray-200 hover:border-green-300"
                    onClick={() => {
                      setSelectedStorage(storage)
                      setStep(5)
                    }}
                  >
                    <CardContent className="p-4 text-center">
                      <span className="text-lg font-medium text-gray-900">{storage}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="ghost" onClick={() => setStep(3)} className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </div>
          )}

          {/* Step 5: Carrier Selection */}
          {step === 5 && selectedDevice && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Carrier or connectivity</h3>
                <p className="text-gray-600">Select your device's carrier or connectivity option</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedDevice.carriers.map((carrier) => (
                  <Card
                    key={carrier}
                    className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 border-gray-200 hover:border-green-300"
                    onClick={() => {
                      setSelectedCarrier(carrier)
                      setStep(6)
                    }}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <span className="text-lg font-medium text-gray-900">{carrier}</span>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="ghost" onClick={() => setStep(4)} className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </div>
          )}

          {/* Step 6: Condition Selection with Detailed Guide */}
          {step === 6 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Device condition</h3>
                <p className="text-gray-600">Select the condition that best describes your device</p>
              </div>

              <ConditionGuide
                onSelect={(condition) => {
                  setSelectedCondition(condition)
                  calculateQuote()
                }}
                selectedCondition={selectedCondition}
              />

              <Button variant="ghost" onClick={() => setStep(5)} className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </div>
          )}

          {/* Step 7: Quote Result */}
          {step === 7 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-8 w-8 text-green-600" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Your instant quote</h3>
                <p className="text-gray-600">Here's what your device is worth today</p>
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedDevice?.image || "/placeholder.svg"}
                        alt={selectedDevice?.name}
                        className="w-16 h-20 rounded-lg object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `/placeholder.svg?height=80&width=64&text=${encodeURIComponent(selectedDevice?.name || "Device")}`
                        }}
                      />
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">{selectedDevice?.name}</div>
                        <div className="text-sm text-gray-600">
                          {selectedStorage} • {selectedCarrier} • {selectedCondition}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2">${quote}</div>
                  <div className="text-sm text-gray-600">Instant cash offer</div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <div className="flex space-x-3">
                  <Button
                    size="lg"
                    onClick={addToCart}
                    variant="outline"
                    className="flex-1 border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    <Plus className="mr-2 h-5 w-5" />
                    Add to Sellbox
                  </Button>
                  <Button
                    size="lg"
                    onClick={proceedToCheckout}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    Sell Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <Button variant="ghost" onClick={resetQuote} className="w-full">
                  Get another quote
                </Button>
              </div>

              <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
                Final payout depends on actual device condition upon inspection. Prices updated daily from market data.
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
