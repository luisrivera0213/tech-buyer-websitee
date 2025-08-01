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
