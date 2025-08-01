import Head from "next/head"

export function SEOHead() {
  return (
    <Head>
      <title>Tech Buyer - Sell Your Phone, Tablet & Electronics for Cash | Best Prices Guaranteed</title>
      <meta
        name="description"
        content="Get instant quotes for your phones, tablets, and electronics. Tech Buyer pays top dollar with free shipping and fast payments. Sell your device today!"
      />
      <meta
        name="keywords"
        content="sell phone, sell iphone, sell samsung, sell tablet, phone buyback, electronics buyback, cash for phones"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://techbuyer.com" />

      {/* Open Graph */}
      <meta property="og:title" content="Tech Buyer - Sell Your Electronics for Cash" />
      <meta
        property="og:description"
        content="Get instant quotes and top dollar for your phones, tablets, and electronics. Free shipping and fast payments guaranteed."
      />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content="https://techbuyer.com" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tech Buyer - Sell Your Electronics for Cash" />
      <meta
        name="twitter:description"
        content="Get instant quotes and top dollar for your phones, tablets, and electronics."
      />
      <meta name="twitter:image" content="/twitter-image.jpg" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tech Buyer",
            url: "https://techbuyer.com",
            logo: "https://techbuyer.com/logo.png",
            description: "Leading electronics buyback service offering top prices for phones, tablets, and more.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-800-TECH-BUY",
              contactType: "customer service",
            },
          }),
        }}
      />
    </Head>
  )
}
