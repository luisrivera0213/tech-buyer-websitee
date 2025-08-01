import { type NextRequest, NextResponse } from "next/server"
import { PriceScraper } from "@/lib/price-scraper"

export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication
    const authHeader = request.headers.get("authorization")
    if (!authHeader || authHeader !== "Bearer admin-token") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const scraper = PriceScraper.getInstance()

    // Check if already running
    if (scraper.isCurrentlyRunning()) {
      return NextResponse.json(
        {
          error: "Price update already in progress",
          status: "running",
        },
        { status: 409 },
      )
    }

    // Start price scraping
    await scraper.scrapeItsWorthMorePrices()

    return NextResponse.json({
      success: true,
      message: "Price update completed successfully",
      timestamp: new Date().toISOString(),
      lastUpdate: scraper.getLastUpdateTime(),
    })
  } catch (error) {
    console.error("Manual price update failed:", error)
    return NextResponse.json(
      {
        error: "Price update failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const scraper = PriceScraper.getInstance()

    return NextResponse.json({
      isRunning: scraper.isCurrentlyRunning(),
      lastUpdate: scraper.getLastUpdateTime(),
      status: "healthy",
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to get scraper status" }, { status: 500 })
  }
}
