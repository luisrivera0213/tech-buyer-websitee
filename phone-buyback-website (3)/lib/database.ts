// Database schema and connection utilities
export interface Device {
  id: string
  brand: string
  model: string
  storage: string
  condition: "excellent" | "good" | "fair" | "poor"
  basePrice: number
  currentPrice: number
  image: string
  releaseYear: number
  carriers: string[]
  storageOptions: string[]
  lastUpdated: Date
}

export interface Order {
  id: string
  customerEmail: string
  customerName: string
  customerPhone: string
  devices: OrderDevice[]
  totalAmount: number
  status: "pending" | "shipped" | "received" | "paid" | "cancelled"
  trackingNumber?: string
  shippingLabel?: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderDevice {
  deviceId: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

export interface PriceUpdate {
  id: string
  deviceId: string
  oldPrice: number
  newPrice: number
  source: string
  updatedAt: Date
}

// Mock database functions (replace with real database in production)
export const db = {
  devices: [] as Device[],
  orders: [] as Order[],
  priceUpdates: [] as PriceUpdate[],
}
