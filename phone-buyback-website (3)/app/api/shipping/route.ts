import { type NextRequest, NextResponse } from "next/server"
import { ShippingService } from "@/lib/shipping"

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    const shippingService = new ShippingService(process.env.SHIPENGINE_API_KEY || "")
    const label = await shippingService.createShippingLabel(orderData)

    return NextResponse.json({
      success: true,
      trackingNumber: label.trackingNumber,
      labelUrl: label.labelUrl,
      cost: label.cost,
    })
  } catch (error) {
    console.error("Shipping label creation failed:", error)
    return NextResponse.json(
      {
        error: "Failed to create shipping label",
      },
      { status: 500 },
    )
  }
}
