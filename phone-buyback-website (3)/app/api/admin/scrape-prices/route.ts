import { type NextRequest, NextResponse } from "next/server"
import { PriceScraper } from "@/lib/price-scraper"

export async function POST(request: NextRequest) {
  try {
    const scraper = PriceScraper.getInstance()
    await scraper.scrapeCompetitorPrices()

    return NextResponse.json({
      success: true,
      message: "Price scraping completed",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Price scraping failed:", error)
    return NextResponse.json(
      {
        error: "Price scraping failed",
      },
      { status: 500 },
    )
  }
}
