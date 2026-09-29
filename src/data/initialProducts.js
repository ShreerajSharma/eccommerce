export const DEFAULT_CATEGORIES = [
  { id: "cat-1", name: "Kurtis & Suits", icon: "✨", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80", description: "Designer Anarkalis, Chikankari & Daily Kurtas" },
  { id: "cat-2", name: "Sarees", icon: "🥻", image: "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=400&q=80", description: "Banarasi, Kanjivaram, Georgette & Organza Sarees" },
  { id: "cat-3", name: "Lehenga Choli", icon: "👑", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80", description: "Bridal, Partywear & Festive Designer Lehengas" },
  { id: "cat-4", name: "Western Dresses", icon: "👗", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80", description: "Maxi Dresses, Midi Gowns & Floral Party Dresses" },
  { id: "cat-5", name: "Co-ord & Indo-Western", icon: "💃", image: "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=400&q=80", description: "Trendy Crop Tops, Peplum Sets & Fusion Wear" },
  { id: "cat-6", name: "Tops & Tunics", icon: "👚", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80", description: "Casual Tops, Embroidered Shirts & Tunics" },
  { id: "cat-7", name: "Bottom Wear & Palazzos", icon: "👖", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=400&q=80", description: "Shararas, Silk Pants, Flared Palazzos & Skirts" },
  { id: "cat-8", name: "Dupattas & Stoles", icon: "🧣", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400&q=80", description: "Phulkari, Banarasi Brocade & Organza Dupattas" },
  { id: "cat-9", name: "Ethnic Jewellery", icon: "💎", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80", description: "Kundan Jhumkas, Choker Sets & Bangles" },
  { id: "cat-10", name: "Footwear & Juttis", icon: "👠", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80", description: "Hand-Embroidered Punjabi Juttis & Heels" }
];

export const INITIAL_PRODUCTS = [
  // 1. Kurtis & Suits
  {
    id: "item-001",
    name: "Royal Zari Embroidered Anarkali Kurti Set",
    category: "Kurtis & Suits",
    price: 1899,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Pure Chanderi Silk with Santoon Lining",
    color: "Ruby Red & Gold",
    badge: "Bestseller",
    offer: "Flat 45% OFF • Festive Deal",
    rating: 4.9,
    reviewsCount: 142,
    inStock: true,
    description: "Graceful floor-length Ruby Red Anarkali adorned with heavy hand-embroidered Zari work, sequins embellishments, matching dupatta, and comfort pants."
  },
  {
    id: "item-002",
    name: "Lucknowi Handcrafted Chikankari Kurta with Slip",
    category: "Kurtis & Suits",
    price: 1299,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    fabric: "100% Breathable Georgette with Inner Slip",
    color: "Pastel Lavender",
    badge: "Trending",
    offer: "Buy 1 Get 10% Extra OFF",
    rating: 4.8,
    reviewsCount: 98,
    inStock: true,
    description: "Exquisite authentic Lucknowi Chikankari embroidered long kurti in soothing pastel lavender tone with subtle mukaish work."
  },

  // 2. Sarees
  {
    id: "item-003",
    name: "Pure Katan Banarasi Woven Zari Saree",
    category: "Sarees",
    price: 2999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=800&q=80",
    sizes: ["Free Size (5.5m + 0.8m Blouse)"],
    fabric: "Pure Katan Silk with Golden Weaving",
    color: "Royal Crimson Red & Gold",
    badge: "Wedding Edit",
    offer: "Flat 50% OFF • Free Matching Blouse Piece",
    rating: 5.0,
    reviewsCount: 84,
    inStock: true,
    description: "Heritage Banarasi masterpiece with opulent golden Zari floral jaal work across the pallu and body. Includes matching unstitched blouse piece."
  },
  {
    id: "item-004",
    name: "Organza Floral Digital Print Party Saree",
    category: "Sarees",
    price: 1499,
    originalPrice: 2899,
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80",
    sizes: ["Free Size"],
    fabric: "Premium Sheer Organza with Scallop Lace",
    color: "Blush Peach & Rose",
    badge: "Hot Trend",
    offer: "Special Summer Festive Offer",
    rating: 4.7,
    reviewsCount: 52,
    inStock: true,
    description: "Feather-light organza saree draped with blooming pastel digital floral prints and delicate hand-cut scalloped borders."
  },

  // 3. Lehenga Choli
  {
    id: "item-005",
    name: "Embroidered Velvet Semi-Stitched Bridal Lehenga",
    category: "Lehenga Choli",
    price: 4999,
    originalPrice: 9999,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    sizes: ["Semi-Stitched (Up to 44 Bust)"],
    fabric: "Heavy Micro Velvet 9000 with Dori & Dori Work",
    color: "Deep Maroon & Antique Gold",
    badge: "Royal Bridal",
    offer: "Festive Mega Deal • Flat ₹5,000 OFF",
    rating: 4.9,
    reviewsCount: 77,
    inStock: true,
    description: "Breathtaking bridal lehenga adorned with dori embroidery, diamond stones, layered canvas flair (3.5m flare) and dual net dupattas."
  },

  // 4. Western Dresses
  {
    id: "item-006",
    name: "Tiered Floral Chiffon Maxi Vacation Dress",
    category: "Western Dresses",
    price: 1199,
    originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Flowy Chiffon with Soft Lining",
    color: "Sunflower Yellow & White",
    badge: "Summer Vibe",
    offer: "Buy 2 Get 15% OFF",
    rating: 4.8,
    reviewsCount: 65,
    inStock: true,
    description: "Breezy tiered maxi dress featuring ruffle cap sleeves, adjustable waist tie-up belt, and a romantic feminine flare."
  },

  // 5. Co-ord & Indo-Western
  {
    id: "item-007",
    name: "Embellished Peplum Top & Flared Sharara Set",
    category: "Co-ord & Indo-Western",
    price: 1799,
    originalPrice: 3299,
    image: "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL"],
    fabric: "Heavy Georgette with Mirror Highlights",
    color: "Teal Blue & Silver",
    badge: "Trending",
    offer: "Flat 45% OFF",
    rating: 4.9,
    reviewsCount: 43,
    inStock: true,
    description: "Chic contemporary fusion wear consisting of an embroidered peplum top and multi-layered ruffled sharara bottoms."
  },

  // 6. Tops & Tunics
  {
    id: "item-008",
    name: "Jaipuri Hand-Block Printed Cotton Short Kurti/Top",
    category: "Tops & Tunics",
    price: 649,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "100% Pure Jaipur Cotton 60x60",
    color: "Indigo Blue & White",
    badge: "Super Saver",
    offer: "Combo Deal: Any 2 @ ₹1,199",
    rating: 4.9,
    reviewsCount: 180,
    inStock: true,
    description: "Everyday comfortable breathable cotton tunic. Perfect pair with denims, cigarette pants, or palazzos."
  },

  // 7. Bottom Wear & Palazzos
  {
    id: "item-009",
    name: "Heavy Rayon Flared Palazzo with Golden Lace",
    category: "Bottom Wear & Palazzos",
    price: 599,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1583391733975-009776d63435?auto=format&fit=crop&w=800&q=80",
    sizes: ["Free Size (Elastic Waist 28-42)"],
    fabric: "14KG Premium Heavy Rayon",
    color: "Off-White & Gold",
    badge: "Wardrobe Must",
    offer: "Buy 2 Get ₹100 Instant Discount",
    rating: 4.7,
    reviewsCount: 112,
    inStock: true,
    description: "Super comfortable extra-wide flared palazzo pants with delicate golden Gota border along the hemline."
  },

  // 8. Dupattas & Stoles
  {
    id: "item-010",
    name: "Authentic Amritsari Phulkari Embroidered Dupatta",
    category: "Dupattas & Stoles",
    price: 899,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80",
    sizes: ["2.25 Meters Length"],
    fabric: "Chiffon with Silk Pat Thread Work",
    color: "Multi-color Rainbow with Gold Border",
    badge: "Handcrafted",
    offer: "Festive Flat 50% OFF",
    rating: 5.0,
    reviewsCount: 94,
    inStock: true,
    description: "Traditional hand-stitched geometric Phulkari thread embroidery. Adds rich festive glamour to any plain suit or kurti."
  },

  // 9. Ethnic Jewellery
  {
    id: "item-011",
    name: "Royal Kundan & Meenakari Choker Necklace with Earrings",
    category: "Ethnic Jewellery",
    price: 999,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    sizes: ["Adjustable Dori"],
    fabric: "Brass Gold Plated with Hydro Pearls & Kundan",
    color: "Emerald Green & Gold",
    badge: "Luxury Pick",
    offer: "Special Jewellery Box Free",
    rating: 4.9,
    reviewsCount: 68,
    inStock: true,
    description: "Stunning handcrafted Kundan choker necklace paired with matching dangling jhumkas and maang tikka."
  },

  // 10. Footwear & Juttis
  {
    id: "item-012",
    name: "Hand-Embroidered Zardozi Punjabi Jutti",
    category: "Footwear & Juttis",
    price: 849,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    sizes: ["36 (UK 3)", "37 (UK 4)", "38 (UK 5)", "39 (UK 6)", "40 (UK 7)", "41 (UK 8)"],
    fabric: "Genuine Leather Sole with Double Cushioning",
    color: "Golden Champagne",
    badge: "Comfort Fit",
    offer: "Bite-Free Cushioned Padding Guaranteed",
    rating: 4.8,
    reviewsCount: 88,
    inStock: true,
    description: "100% genuine leather hand-stitched traditional jutti with rich dabka, sequins, and pearl hand-embroidery."
  }
];

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "Free Size"];
