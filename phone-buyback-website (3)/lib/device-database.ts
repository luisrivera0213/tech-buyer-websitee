export interface DeviceModel {
  id: string
  name: string
  basePrice: number
  storageOptions: string[]
  carriers: string[]
  releaseYear: number
  image: string
  category: "phone" | "tablet" | "laptop" | "watch" | "gaming" | "headphones"
}

export interface DeviceBrand {
  id: string
  name: string
  logo: string
  models: DeviceModel[]
  categories: string[]
}

// Enhanced database with optimized images
export const deviceDatabase: Record<string, DeviceBrand> = {
  Apple: {
    id: "apple",
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    categories: ["phone", "tablet", "laptop", "watch", "headphones"],
    models: [
      // iPhones - Updated with optimized images
      {
        id: "iphone-16-pro-max",
        name: "iPhone 16 Pro Max",
        basePrice: 950,
        storageOptions: ["256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1725040927053",
        category: "phone",
      },
      {
        id: "iphone-16-pro",
        name: "iPhone 16 Pro",
        basePrice: 850,
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1725040927053",
        category: "phone",
      },
      {
        id: "iphone-16-plus",
        name: "iPhone 16 Plus",
        basePrice: 750,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-plus-pink-select?wid=470&hei=556&fmt=png-alpha&.v=1725040927053",
        category: "phone",
      },
      {
        id: "iphone-16",
        name: "iPhone 16",
        basePrice: 650,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pink-select?wid=470&hei=556&fmt=png-alpha&.v=1725040927053",
        category: "phone",
      },
      {
        id: "iphone-15-pro-max",
        name: "iPhone 15 Pro Max",
        basePrice: 850,
        storageOptions: ["256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2023,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1693086369781",
        category: "phone",
      },
      {
        id: "iphone-15-pro",
        name: "iPhone 15 Pro",
        basePrice: 750,
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2023,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1693086369781",
        category: "phone",
      },
      {
        id: "iphone-15-plus",
        name: "iPhone 15 Plus",
        basePrice: 650,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2023,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-plus-pink-select?wid=470&hei=556&fmt=png-alpha&.v=1693086369781",
        category: "phone",
      },
      {
        id: "iphone-15",
        name: "iPhone 15",
        basePrice: 550,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2023,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select?wid=470&hei=556&fmt=png-alpha&.v=1693086369781",
        category: "phone",
      },
      {
        id: "iphone-14-pro-max",
        name: "iPhone 14 Pro Max",
        basePrice: 700,
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2022,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-spaceblack-select?wid=470&hei=556&fmt=png-alpha&.v=1663703841896",
        category: "phone",
      },
      {
        id: "iphone-14-pro",
        name: "iPhone 14 Pro",
        basePrice: 600,
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2022,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-spaceblack-select?wid=470&hei=556&fmt=png-alpha&.v=1663703841896",
        category: "phone",
      },
      {
        id: "iphone-14-plus",
        name: "iPhone 14 Plus",
        basePrice: 500,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2022,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-plus-purple-select?wid=470&hei=556&fmt=png-alpha&.v=1663703841896",
        category: "phone",
      },
      {
        id: "iphone-14",
        name: "iPhone 14",
        basePrice: 450,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2022,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-purple-select?wid=470&hei=556&fmt=png-alpha&.v=1663703841896",
        category: "phone",
      },
      {
        id: "iphone-13-pro-max",
        name: "iPhone 13 Pro Max",
        basePrice: 550,
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2021,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956",
        category: "phone",
      },
      {
        id: "iphone-13-pro",
        name: "iPhone 13 Pro",
        basePrice: 450,
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2021,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956",
        category: "phone",
      },
      {
        id: "iphone-13",
        name: "iPhone 13",
        basePrice: 350,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2021,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1631652956",
        category: "phone",
      },
      {
        id: "iphone-12-pro-max",
        name: "iPhone 12 Pro Max",
        basePrice: 450,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2020,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1604021661",
        category: "phone",
      },
      {
        id: "iphone-12-pro",
        name: "iPhone 12 Pro",
        basePrice: 350,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2020,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1604021661",
        category: "phone",
      },
      {
        id: "iphone-12",
        name: "iPhone 12",
        basePrice: 300,
        storageOptions: ["64GB", "128GB", "256GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2020,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1617130317",
        category: "phone",
      },
      {
        id: "iphone-11-pro-max",
        name: "iPhone 11 Pro Max",
        basePrice: 350,
        storageOptions: ["64GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2019,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-spacegray-select?wid=470&hei=556&fmt=png-alpha&.v=1566953859",
        category: "phone",
      },
      {
        id: "iphone-11-pro",
        name: "iPhone 11 Pro",
        basePrice: 300,
        storageOptions: ["64GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2019,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-spacegray-select?wid=470&hei=556&fmt=png-alpha&.v=1566953859",
        category: "phone",
      },
      {
        id: "iphone-11",
        name: "iPhone 11",
        basePrice: 250,
        storageOptions: ["64GB", "128GB", "256GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2019,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-purple-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144",
        category: "phone",
      },

      // iPads
      {
        id: "ipad-pro-13-m4",
        name: 'iPad Pro 13" M4',
        basePrice: 800,
        storageOptions: ["256GB", "512GB", "1TB", "2TB"],
        carriers: ["Wi-Fi", "Wi-Fi + Cellular"],
        releaseYear: 2024,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-select-wifi-spacegray-202405?wid=470&hei=556&fmt=png-alpha&.v=1713308272877",
        category: "tablet",
      },
      {
        id: "ipad-pro-11-m4",
        name: 'iPad Pro 11" M4',
        basePrice: 650,
        storageOptions: ["256GB", "512GB", "1TB", "2TB"],
        carriers: ["Wi-Fi", "Wi-Fi + Cellular"],
        releaseYear: 2024,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202405?wid=470&hei=556&fmt=png-alpha&.v=1713308272877",
        category: "tablet",
      },
      {
        id: "ipad-air-13-m2",
        name: 'iPad Air 13" M2',
        basePrice: 550,
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        carriers: ["Wi-Fi", "Wi-Fi + Cellular"],
        releaseYear: 2024,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-13-select-wifi-spacegray-202405?wid=470&hei=556&fmt=png-alpha&.v=1713308272877",
        category: "tablet",
      },
      {
        id: "ipad-air-11-m2",
        name: 'iPad Air 11" M2',
        basePrice: 450,
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        carriers: ["Wi-Fi", "Wi-Fi + Cellular"],
        releaseYear: 2024,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-11-select-wifi-spacegray-202405?wid=470&hei=556&fmt=png-alpha&.v=1713308272877",
        category: "tablet",
      },
      {
        id: "ipad-10th-gen",
        name: "iPad 10th Generation",
        basePrice: 300,
        storageOptions: ["64GB", "256GB"],
        carriers: ["Wi-Fi", "Wi-Fi + Cellular"],
        releaseYear: 2022,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-select-wifi-blue-202210?wid=470&hei=556&fmt=png-alpha&.v=1664411207213",
        category: "tablet",
      },
      {
        id: "ipad-mini-6th-gen",
        name: "iPad Mini 6th Generation",
        basePrice: 350,
        storageOptions: ["64GB", "256GB"],
        carriers: ["Wi-Fi", "Wi-Fi + Cellular"],
        releaseYear: 2021,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840835",
        category: "tablet",
      },

      // MacBooks
      {
        id: "macbook-pro-16-m3-max",
        name: 'MacBook Pro 16" M3 Max',
        basePrice: 2200,
        storageOptions: ["512GB", "1TB", "2TB", "4TB", "8TB"],
        carriers: ["N/A"],
        releaseYear: 2023,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202310?wid=470&hei=556&fmt=png-alpha&.v=1697230830200",
        category: "laptop",
      },
      {
        id: "macbook-pro-14-m3-pro",
        name: 'MacBook Pro 14" M3 Pro',
        basePrice: 1800,
        storageOptions: ["512GB", "1TB", "2TB", "4TB"],
        carriers: ["N/A"],
        releaseYear: 2023,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=470&hei=556&fmt=png-alpha&.v=1697230830200",
        category: "laptop",
      },
      {
        id: "macbook-air-15-m3",
        name: 'MacBook Air 15" M3',
        basePrice: 1000,
        storageOptions: ["256GB", "512GB", "1TB", "2TB"],
        carriers: ["N/A"],
        releaseYear: 2024,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202402?wid=470&hei=556&fmt=png-alpha&.v=1708367688034",
        category: "laptop",
      },
      {
        id: "macbook-air-13-m3",
        name: 'MacBook Air 13" M3',
        basePrice: 850,
        storageOptions: ["256GB", "512GB", "1TB", "2TB"],
        carriers: ["N/A"],
        releaseYear: 2024,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=470&hei=556&fmt=png-alpha&.v=1708367688034",
        category: "laptop",
      },

      // Apple Watch
      {
        id: "apple-watch-ultra-2",
        name: "Apple Watch Ultra 2",
        basePrice: 450,
        storageOptions: ["64GB"],
        carriers: ["GPS", "GPS + Cellular"],
        releaseYear: 2023,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-titanium-select-202309?wid=470&hei=556&fmt=png-alpha&.v=1693347342240",
        category: "watch",
      },
      {
        id: "apple-watch-series-10",
        name: "Apple Watch Series 10",
        basePrice: 300,
        storageOptions: ["64GB"],
        carriers: ["GPS", "GPS + Cellular"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop&auto=format&q=80",
        category: "watch",
      },
      {
        id: "apple-watch-se-2nd-gen",
        name: "Apple Watch SE 2nd Gen",
        basePrice: 180,
        storageOptions: ["32GB"],
        carriers: ["GPS", "GPS + Cellular"],
        releaseYear: 2022,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-aluminum-midnight-select-202209?wid=470&hei=556&fmt=png-alpha&.v=1661971890240",
        category: "watch",
      },

      // AirPods
      {
        id: "airpods-pro-2nd-gen",
        name: "AirPods Pro 2nd Generation",
        basePrice: 180,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2022,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2nd-gen-select-202209?wid=470&hei=556&fmt=png-alpha&.v=1661971890240",
        category: "headphones",
      },
      {
        id: "airpods-max",
        name: "AirPods Max",
        basePrice: 350,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2020,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha&.v=1605304004000",
        category: "headphones",
      },
      {
        id: "airpods-3rd-gen",
        name: "AirPods 3rd Generation",
        basePrice: 120,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2021,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-3rd-gen-select-202110?wid=470&hei=556&fmt=png-alpha&.v=1633551090240",
        category: "headphones",
      },
    ],
  },
  Samsung: {
    id: "samsung",
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    categories: ["phone", "tablet", "laptop", "watch", "headphones"],
    models: [
      // Galaxy Phones
      {
        id: "galaxy-s24-ultra",
        name: "Galaxy S24 Ultra",
        basePrice: 750,
        storageOptions: ["256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "galaxy-s24-plus",
        name: "Galaxy S24+",
        basePrice: 600,
        storageOptions: ["256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "galaxy-s24",
        name: "Galaxy S24",
        basePrice: 500,
        storageOptions: ["128GB", "256GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "galaxy-s23-ultra",
        name: "Galaxy S23 Ultra",
        basePrice: 650,
        storageOptions: ["256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2023,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "galaxy-s23-plus",
        name: "Galaxy S23+",
        basePrice: 500,
        storageOptions: ["256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2023,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "galaxy-s23",
        name: "Galaxy S23",
        basePrice: 400,
        storageOptions: ["128GB", "256GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2023,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "galaxy-z-fold-6",
        name: "Galaxy Z Fold6",
        basePrice: 1200,
        storageOptions: ["256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "galaxy-z-flip-6",
        name: "Galaxy Z Flip6",
        basePrice: 700,
        storageOptions: ["256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },

      // Galaxy Tablets
      {
        id: "galaxy-tab-s10-ultra",
        name: "Galaxy Tab S10 Ultra",
        basePrice: 800,
        storageOptions: ["256GB", "512GB", "1TB"],
        carriers: ["Wi-Fi", "5G"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=500&fit=crop&auto=format&q=80",
        category: "tablet",
      },
      {
        id: "galaxy-tab-s10-plus",
        name: "Galaxy Tab S10+",
        basePrice: 650,
        storageOptions: ["256GB", "512GB"],
        carriers: ["Wi-Fi", "5G"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=500&fit=crop&auto=format&q=80",
        category: "tablet",
      },

      // Galaxy Laptops
      {
        id: "galaxy-book-4-pro-16",
        name: 'Galaxy Book4 Pro 16"',
        basePrice: 1200,
        storageOptions: ["512GB", "1TB"],
        carriers: ["N/A"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format&q=80",
        category: "laptop",
      },
      {
        id: "galaxy-book-4-pro-14",
        name: 'Galaxy Book4 Pro 14"',
        basePrice: 1000,
        storageOptions: ["512GB", "1TB"],
        carriers: ["N/A"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format&q=80",
        category: "laptop",
      },

      // Galaxy Watch
      {
        id: "galaxy-watch-7",
        name: "Galaxy Watch7",
        basePrice: 220,
        storageOptions: ["32GB"],
        carriers: ["Bluetooth", "LTE"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format&q=80",
        category: "watch",
      },
      {
        id: "galaxy-watch-ultra",
        name: "Galaxy Watch Ultra",
        basePrice: 450,
        storageOptions: ["32GB"],
        carriers: ["Bluetooth", "LTE"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format&q=80",
        category: "watch",
      },

      // Galaxy Buds
      {
        id: "galaxy-buds-3-pro",
        name: "Galaxy Buds3 Pro",
        basePrice: 180,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format&q=80",
        category: "headphones",
      },
      {
        id: "galaxy-buds-3",
        name: "Galaxy Buds3",
        basePrice: 120,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format&q=80",
        category: "headphones",
      },
    ],
  },
  Google: {
    id: "google",
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    categories: ["phone", "tablet", "headphones"],
    models: [
      // Pixel Phones
      {
        id: "pixel-9-pro-xl",
        name: "Pixel 9 Pro XL",
        basePrice: 650,
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "pixel-9-pro",
        name: "Pixel 9 Pro",
        basePrice: 550,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "pixel-9",
        name: "Pixel 9",
        basePrice: 450,
        storageOptions: ["128GB", "256GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "pixel-8-pro",
        name: "Pixel 8 Pro",
        basePrice: 500,
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2023,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "pixel-8",
        name: "Pixel 8",
        basePrice: 400,
        storageOptions: ["128GB", "256GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2023,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "pixel-7-pro",
        name: "Pixel 7 Pro",
        basePrice: 400,
        storageOptions: ["128GB", "256GB", "512GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2022,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },
      {
        id: "pixel-7",
        name: "Pixel 7",
        basePrice: 300,
        storageOptions: ["128GB", "256GB"],
        carriers: ["Unlocked", "Verizon", "AT&T", "T-Mobile"],
        releaseYear: 2022,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=500&fit=crop&auto=format&q=80",
        category: "phone",
      },

      // Pixel Tablets
      {
        id: "pixel-tablet",
        name: "Pixel Tablet",
        basePrice: 350,
        storageOptions: ["128GB", "256GB"],
        carriers: ["Wi-Fi"],
        releaseYear: 2023,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=500&fit=crop&auto=format&q=80",
        category: "tablet",
      },

      // Pixel Buds
      {
        id: "pixel-buds-pro",
        name: "Pixel Buds Pro",
        basePrice: 150,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2022,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format&q=80",
        category: "headphones",
      },
      {
        id: "pixel-buds-a-series",
        name: "Pixel Buds A-Series",
        basePrice: 80,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2021,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format&q=80",
        category: "headphones",
      },
    ],
  },
  Microsoft: {
    id: "microsoft",
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    categories: ["laptop", "tablet", "gaming", "headphones"],
    models: [
      // Surface Laptops
      {
        id: "surface-laptop-7",
        name: "Surface Laptop 7",
        basePrice: 1200,
        storageOptions: ["256GB", "512GB", "1TB"],
        carriers: ["N/A"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format&q=80",
        category: "laptop",
      },
      {
        id: "surface-laptop-studio-2",
        name: "Surface Laptop Studio 2",
        basePrice: 1800,
        storageOptions: ["512GB", "1TB", "2TB"],
        carriers: ["N/A"],
        releaseYear: 2023,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format&q=80",
        category: "laptop",
      },

      // Surface Tablets
      {
        id: "surface-pro-11",
        name: "Surface Pro 11",
        basePrice: 1000,
        storageOptions: ["256GB", "512GB", "1TB"],
        carriers: ["Wi-Fi", "5G"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=500&fit=crop&auto=format&q=80",
        category: "tablet",
      },
      {
        id: "surface-pro-10",
        name: "Surface Pro 10",
        basePrice: 900,
        storageOptions: ["256GB", "512GB", "1TB"],
        carriers: ["Wi-Fi", "5G"],
        releaseYear: 2024,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=500&fit=crop&auto=format&q=80",
        category: "tablet",
      },

      // Xbox Gaming
      {
        id: "xbox-series-x",
        name: "Xbox Series X",
        basePrice: 350,
        storageOptions: ["1TB"],
        carriers: ["N/A"],
        releaseYear: 2020,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop&auto=format&q=80",
        category: "gaming",
      },
      {
        id: "xbox-series-s",
        name: "Xbox Series S",
        basePrice: 200,
        storageOptions: ["512GB"],
        carriers: ["N/A"],
        releaseYear: 2020,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop&auto=format&q=80",
        category: "gaming",
      },

      // Surface Headphones
      {
        id: "surface-headphones-2",
        name: "Surface Headphones 2",
        basePrice: 180,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2020,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&auto=format&q=80",
        category: "headphones",
      },
    ],
  },
  Sony: {
    id: "sony",
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
    categories: ["gaming", "headphones"],
    models: [
      // PlayStation Gaming
      {
        id: "playstation-5",
        name: "PlayStation 5",
        basePrice: 400,
        storageOptions: ["825GB"],
        carriers: ["N/A"],
        releaseYear: 2020,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop&auto=format&q=80",
        category: "gaming",
      },
      {
        id: "playstation-5-digital",
        name: "PlayStation 5 Digital Edition",
        basePrice: 320,
        storageOptions: ["825GB"],
        carriers: ["N/A"],
        releaseYear: 2020,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop&auto=format&q=80",
        category: "gaming",
      },
      {
        id: "playstation-4-pro",
        name: "PlayStation 4 Pro",
        basePrice: 250,
        storageOptions: ["1TB"],
        carriers: ["N/A"],
        releaseYear: 2016,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop&auto=format&q=80",
        category: "gaming",
      },

      // Sony Headphones
      {
        id: "wh-1000xm5",
        name: "WH-1000XM5",
        basePrice: 280,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2022,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&auto=format&q=80",
        category: "headphones",
      },
      {
        id: "wh-1000xm4",
        name: "WH-1000XM4",
        basePrice: 220,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2020,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&auto=format&q=80",
        category: "headphones",
      },
      {
        id: "wf-1000xm4",
        name: "WF-1000XM4",
        basePrice: 180,
        storageOptions: ["N/A"],
        carriers: ["N/A"],
        releaseYear: 2021,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format&q=80",
        category: "headphones",
      },
    ],
  },
  Nintendo: {
    id: "nintendo",
    name: "Nintendo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg",
    categories: ["gaming"],
    models: [
      {
        id: "nintendo-switch-oled",
        name: "Nintendo Switch OLED",
        basePrice: 220,
        storageOptions: ["64GB"],
        carriers: ["N/A"],
        releaseYear: 2021,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format&q=80",
        category: "gaming",
      },
      {
        id: "nintendo-switch",
        name: "Nintendo Switch",
        basePrice: 180,
        storageOptions: ["32GB"],
        carriers: ["N/A"],
        releaseYear: 2017,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format&q=80",
        category: "gaming",
      },
      {
        id: "nintendo-switch-lite",
        name: "Nintendo Switch Lite",
        basePrice: 120,
        storageOptions: ["32GB"],
        carriers: ["N/A"],
        releaseYear: 2019,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format&q=80",
        category: "gaming",
      },
    ],
  },
}

export const conditionMultipliers = {
  excellent: 1.0,
  good: 0.85,
  fair: 0.65,
  poor: 0.4,
}

export const storageMultipliers: Record<string, number> = {
  "32GB": 0.9,
  "64GB": 1.0,
  "128GB": 1.1,
  "256GB": 1.2,
  "512GB": 1.35,
  "825GB": 1.4,
  "1TB": 1.5,
  "2TB": 1.7,
  "4TB": 2.0,
  "8TB": 2.5,
  "N/A": 1.0,
}

export function calculatePrice(
  brand: string,
  modelId: string,
  storage: string,
  condition: keyof typeof conditionMultipliers,
): number {
  // First check if we have scraped pricing data
  const scrapedPricing = JSON.parse(localStorage.getItem("devicePricing") || "{}")

  if (scrapedPricing[modelId] && scrapedPricing[modelId][condition]) {
    const basePrice = scrapedPricing[modelId][condition]
    const storageMultiplier = storageMultipliers[storage] || 1.0
    return Math.round(basePrice * storageMultiplier)
  }

  // Fallback to database pricing
  const brandData = deviceDatabase[brand]
  if (!brandData) return 0

  const model = brandData.models.find((m) => m.id === modelId)
  if (!model) return 0

  const basePrice = model.basePrice
  const storageMultiplier = storageMultipliers[storage] || 1.0
  const conditionMultiplier = conditionMultipliers[condition]

  return Math.round(basePrice * storageMultiplier * conditionMultiplier)
}
