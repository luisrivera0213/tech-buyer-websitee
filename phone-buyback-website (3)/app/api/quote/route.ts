import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { deviceId, condition, storage } = await request.json()

    // Calculate quote based on device and condition
    const basePrice = getDeviceBasePrice(deviceId)
    const conditionMultiplier = getConditionMultiplier(condition)
    const storageMultiplier = getStorageMultiplier(storage)

    const quote = Math.round(basePrice * conditionMultiplier * storageMultiplier)

    return NextResponse.json({
      quote,
      deviceId,
      condition,
      storage,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to calculate quote" }, { status: 500 })
  }
}

function getDeviceBasePrice(deviceId: string): number {
  const prices: Record<string, number> = {
    "iphone-15-pro": 850,
    "iphone-15": 650,
    "galaxy-s24-ultra": 750,
    "pixel-8-pro": 500,
  }
  return prices[deviceId] || 0
}

function getConditionMultiplier(condition: string): number {
  const multipliers: Record<string, number> = {
    excellent: 1.0,
    good: 0.85,
    fair: 0.65,
    poor: 0.4,
  }
  return multipliers[condition] || 1.0
}

function getStorageMultiplier(storage: string): number {
  const multipliers: Record<string, number> = {
    "128GB": 1.0,
    "256GB": 1.1,
    "512GB": 1.2,
    "1TB": 1.3,
  }
  return multipliers[storage] || 1.0
}
