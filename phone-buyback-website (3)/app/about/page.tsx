"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Truck,
  DollarSign,
  Clock,
  Award,
  Users,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
  ArrowRight,
} from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Devices Purchased", value: "2.5M+", icon: Users },
    { label: "Customer Rating", value: "4.9/5", icon: Star },
    { label: "Years in Business", value: "12+", icon: Award },
    { label: "Countries Served", value: "50+", icon: Globe },
  ]

  const features = [
    {
      icon: DollarSign,
      title: "Highest Payouts",
      description:
        "We consistently offer 15-30% more than our competitors. Our AI-powered pricing ensures you get the maximum value for your device.",
    },
    {
      icon: Clock,
      title: "24-Hour Payment",
      description:
        "Get paid within 24 hours of device inspection. Choose from PayPal, Venmo, Zelle, or traditional check - whatever works best for you.",
    },
    {
      icon: Truck,
      title: "Free Shipping Kit",
      description:
        "We send you a prepaid shipping kit with protective packaging. Your device is insured from pickup to our facility.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Military-grade data wiping ensures your personal information is completely removed. We're certified by NIST and ISO 27001.",
    },
    {
      icon: Award,
      title: "Price Lock Guarantee",
      description:
        "Your quote is locked for 30 days. If market prices increase, you get the higher amount. If they decrease, you keep your original quote.",
    },
    {
      icon: CheckCircle,
      title: "No Hidden Fees",
      description:
        "What you see is what you get. No processing fees, no shipping costs, no surprise deductions. 100% transparent pricing.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      rating: 5,
      text: "Sold my iPhone 15 Pro and got $200 more than what Apple offered for trade-in. The process was incredibly smooth and payment was instant!",
      image: "/placeholder.svg?height=60&width=60&text=SJ",
    },
    {
      name: "Michael Chen",
      location: "Austin, TX",
      rating: 5,
      text: "I've sold 5 devices through Tech Buyer over the years. Always fair prices, always fast payment. They're my go-to for device sales.",
      image: "/placeholder.svg?height=60&width=60&text=MC",
    },
    {
      name: "Emily Rodriguez",
      location: "Miami, FL",
      rating: 5,
      text: "Was skeptical about selling online, but Tech Buyer exceeded expectations. Great communication, secure packaging, and quick payment.",
      image: "/placeholder.svg?height=60&width=60&text=ER",
    },
  ]

  const awards = [
    { title: "Best Electronics Buyback Service", year: "2024", org: "TechCrunch" },
    { title: "Top Customer Service Award", year: "2023", org: "Consumer Reports" },
    { title: "Most Trusted Reseller", year: "2023", org: "Better Business Bureau" },
    { title: "Innovation in Sustainability", year: "2022", org: "Green Tech Awards" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              {/* Updated Logo */}
              <div className="text-xl font-bold">
                <span className="text-black">Tech</span>
                <span className="text-green-600">Buyer</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Home
              </a>
              <a href="/about" className="text-green-600 text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Support
              </a>
              <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
                Track order
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
            #1 Rated Electronics Buyback Service
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why millions trust
            <br />
            <span className="text-green-600">TechBuyer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            For over 12 years, we've been the industry leader in electronics buyback, paying out over $2.8 billion to
            satisfied customers worldwide.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why we're rated the best</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've revolutionized the electronics buyback industry with transparent pricing, lightning-fast payments,
              and unmatched customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What our customers say</h2>
            <p className="text-xl text-gray-600">Over 2.5 million satisfied customers can't be wrong</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Industry recognition for our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-600">
                    {award.org} • {award.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-8">
            We believe everyone deserves fair value for their electronics. By combining cutting-edge technology with
            human expertise, we've created the most transparent, efficient, and rewarding way to sell your devices. Our
            commitment to sustainability means every device we purchase gets a second life, reducing electronic waste
            and protecting our planet.
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <div className="text-sm">Fair Pricing</div>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <div className="text-sm">Secure Process</div>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 mx-auto mb-2" />
              <div className="text-sm">Global Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to experience the difference?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of satisfied customers and get the best value for your device today.
          </p>
          <Button
            size="lg"
            onClick={() => (window.location.href = "/")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-full"
          >
            Get your quote now
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
  )
}
