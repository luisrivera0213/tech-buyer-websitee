"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Smartphone, Truck, DollarSign, Shield, Star, Users, Award, CheckCircle } from "lucide-react"
import { QuoteCalculator, CartProvider } from "@/components/quote-calculator"
import { CartWidget } from "@/components/cart-widget"

export default function TechBuyerHomepage() {
  const trustIndicators = [
    {
      icon: Users,
      stat: "2.5M+",
      label: "Happy Customers",
      description: "Trusted by millions worldwide",
    },
    {
      icon: Star,
      stat: "4.9/5",
      label: "Customer Rating",
      description: "Based on 500K+ reviews",
    },
    {
      icon: Award,
      stat: "12+",
      label: "Years Experience",
      description: "Industry leader since 2012",
    },
    {
      icon: Shield,
      stat: "100%",
      label: "Secure & Safe",
      description: "Military-grade data wiping",
    },
  ]

  const customerPhotos = [
    {
      name: "Sarah M.",
      location: "San Francisco",
      amount: "$850",
      device: "iPhone 15 Pro",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face&auto=format",
      review: "Got $200 more than Apple's trade-in!",
    },
    {
      name: "Mike R.",
      location: "Austin",
      amount: "$650",
      device: "Galaxy S24",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format",
      review: "Super fast payment, highly recommend!",
    },
    {
      name: "Emily L.",
      location: "Miami",
      amount: "$1,200",
      device: "MacBook Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format",
      review: "Easiest way to sell electronics online.",
    },
    {
      name: "David K.",
      location: "Seattle",
      amount: "$450",
      device: "iPad Air",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format",
      review: "Transparent process, no hidden fees.",
    },
    {
      name: "Lisa T.",
      location: "Chicago",
      amount: "$320",
      device: "Apple Watch",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face&auto=format",
      review: "Received payment within 24 hours!",
    },
    {
      name: "James W.",
      location: "Denver",
      amount: "$750",
      device: "Pixel 8 Pro",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format",
      review: "Best prices I found anywhere online.",
    },
  ]

  const guarantees = [
    {
      icon: DollarSign,
      title: "Highest Payouts",
      description: "We guarantee to beat competitor prices by 15% or more",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Prepaid shipping kit with insurance included",
    },
    {
      icon: CheckCircle,
      title: "30-Day Price Lock",
      description: "Your quote is guaranteed for 30 full days",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Military-grade data wiping for complete privacy",
    },
  ]

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote-calculator")
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                {/* Word Logo - Half Black Half Green */}
                <div className="text-2xl font-bold">
                  <span className="text-black">Tech</span>
                  <span className="text-green-600">Buyer</span>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => (window.location.href = "#how-it-works")}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  How it works
                </button>
                <button
                  onClick={() => (window.location.href = "/about")}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => alert("Support: Call 1-800-TECH-BUY or email support@techbuyer.com")}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Support
                </button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-300 bg-transparent"
                  onClick={() =>
                    alert(
                      "Track your order: Enter order ID TB-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
                    )
                  }
                >
                  Track order
                </Button>
              </nav>
            </div>
          </div>
        </header>

        {/* Cart Widget */}
        <CartWidget />

        {/* Hero Section with Background */}
        <section
          className="pt-20 pb-16 px-6 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&auto=format&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
              #1 Rated Electronics Buyback Service
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Trade in your device.
              <br />
              <span className="text-green-600">Get cash today.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The simplest and safest way to sell your phone, tablet, or laptop online. Get an instant quote and free
              shipping.
            </p>

            {/* Get Instant Quote Button - Fixed */}
            <Button
              size="lg"
              onClick={scrollToQuote}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200 mb-8 cursor-pointer"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Quote Calculator - Always Visible with ID */}
        <section id="quote-calculator" className="pb-16 px-6 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <QuoteCalculator />
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by millions worldwide</h2>
              <p className="text-gray-600">Join the millions who have chosen Tech Buyer for the best value</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustIndicators.map((indicator, index) => {
                const IconComponent = indicator.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{indicator.stat}</div>
                    <div className="font-semibold text-gray-900 mb-1">{indicator.label}</div>
                    <div className="text-sm text-gray-600">{indicator.description}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get cash in three simple steps</h2>
              <p className="text-xl text-gray-600">It's never been easier to sell your electronics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Get instant quote</h3>
                <p className="text-gray-600 leading-relaxed">
                  Answer a few questions about your device and get an instant quote. No surprises, no hidden fees.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Ship for free</h3>
                <p className="text-gray-600 leading-relaxed">
                  We'll send you a prepaid shipping label. Pack your device securely and send it our way.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Get cash fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Once we receive your device, you'll get paid within 24 hours via your preferred method.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Real customers, real results</h2>
              <p className="text-xl text-gray-600">See what our customers are saying about their experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customerPhotos.map((customer, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={customer.image || "/placeholder.svg"}
                        alt={customer.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name)}&background=10b981&color=fff&size=48`
                        }}
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-600">{customer.location}</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-2xl font-bold text-green-600">{customer.amount}</div>
                      <div className="text-sm text-gray-600">for {customer.device}</div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm">"{customer.review}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our guarantees to you</h2>
              <p className="text-xl text-gray-600">We stand behind every transaction with these promises</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guarantees.map((guarantee, index) => {
                const IconComponent = guarantee.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{guarantee.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{guarantee.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6">Ready to get the best value for your device?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join millions of customers who have sold their devices with us and got the best prices.
            </p>
            <Button
              size="lg"
              onClick={scrollToQuote}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              Start selling now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="text-lg font-bold">
                  <span className="text-black">Tech</span>
                  <span className="text-green-600">Buyer</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">© 2024 TechBuyer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  )
}
