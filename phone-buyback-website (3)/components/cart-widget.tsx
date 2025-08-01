"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, X, Trash2 } from "lucide-react"
import { useCart } from "@/components/quote-calculator"

export function CartWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const cart = useCart()

  const proceedToCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cart.items))
    window.location.href = "/checkout"
  }

  if (cart.getItemCount() === 0) return null

  return (
    <>
      {/* Cart Button */}
      <div className="fixed top-20 right-6 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <ShoppingCart className="h-6 w-6" />
          {cart.getItemCount() > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
              {cart.getItemCount()}
            </Badge>
          )}
        </Button>
      </div>

      {/* Cart Dropdown */}
      {isOpen && (
        <div className="fixed top-36 right-6 z-50 w-96">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-green-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Your Sellbox</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-700 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0 max-h-96 overflow-y-auto">
              {cart.items.map((item) => (
                <div key={item.id} className="p-4 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <img
                        src={item.device.image || "/placeholder.svg"}
                        alt={item.device.name}
                        className="w-12 h-14 object-contain rounded"
                        onError={(e) => {
                          e.currentTarget.src = `/placeholder.svg?height=56&width=48&text=${encodeURIComponent(item.device.name)}`
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-gray-900 truncate">{item.device.name}</p>
                        <p className="text-xs text-gray-600">
                          {item.storage} • {item.condition}
                        </p>
                        <p className="text-sm font-semibold text-green-600">${item.quote}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => cart.removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0 ml-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="p-4 bg-gray-50 border-t">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">Total Value:</span>
                  <span className="text-xl font-bold text-green-600">${cart.getTotalValue()}</span>
                </div>
                <Button
                  onClick={proceedToCheckout}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
                >
                  Checkout ({cart.getItemCount()} item{cart.getItemCount() > 1 ? "s" : ""})
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-20 z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}
