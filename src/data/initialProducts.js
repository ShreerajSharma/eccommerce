export const DEFAULT_CATEGORIES = [
  { id: "cat-1", name: "Kurtis & Suits", icon: "✨", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", description: "Designer Anarkalis, Chikankari & Daily Kurtas" },
  { id: "cat-2", name: "Sarees", icon: "🥻", image: "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=600&q=80", description: "Banarasi, Kanjivaram, Georgette & Organza Sarees" },
  { id: "cat-3", name: "Lehenga Choli", icon: "👑", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", description: "Bridal, Partywear & Festive Designer Lehengas" },
  { id: "cat-4", name: "Western Dresses", icon: "👗", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80", description: "Maxi Dresses, Midi Gowns & Floral Party Dresses" },
  { id: "cat-5", name: "Co-ord & Indo-Western", icon: "💃", image: "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=600&q=80", description: "Trendy Crop Tops, Peplum Sets & Fusion Wear" },
  { id: "cat-6", name: "Tops & Tunics", icon: "👚", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80", description: "Casual Tops, Embroidered Shirts & Tunics" },
  { id: "cat-7", name: "Bottom Wear & Palazzos", icon: "👖", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80", description: "Shararas, Silk Pants, Flared Palazzos & Skirts" },
  { id: "cat-8", name: "Dupattas & Stoles", icon: "🧣", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", description: "Phulkari, Banarasi Brocade & Organza Dupattas" },
  { id: "cat-9", name: "Ethnic Jewellery", icon: "💎", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80", description: "Kundan Jhumkas, Choker Sets & Bangles" },
  { id: "cat-10", name: "Footwear & Juttis", icon: "👠", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80", description: "Hand-Embroidered Punjabi Juttis & Heels" }
];

export const INITIAL_PRODUCTS = [
  // =========================================================================
  // 1. KURTIS & SUITS (4 Items)
  // =========================================================================
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
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
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
  {
    id: "item-003",
    name: "Hand-Block Printed Angrakha Flared Suit Set",
    category: "Kurtis & Suits",
    price: 1599,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "100% Premium Mulmul Cotton with Gota Patti",
    color: "Indigo Blue & Ivory",
    badge: "New Arrival",
    offer: "Special Summer Edition",
    rating: 4.9,
    reviewsCount: 76,
    inStock: true,
    description: "Traditional Jaipuri Angrakha side-tie pattern kurta paired with cigarette pants and pure cotton malmal dupatta."
  },
  {
    id: "item-004",
    name: "Velvet Mirror-Work Straight Kurta with Afghani Pants",
    category: "Kurtis & Suits",
    price: 2199,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    fabric: "Micro Velvet 9000 with Real Mirror Embroidery",
    color: "Royal Emerald Green",
    badge: "Wedding Edit",
    offer: "Flat ₹1,800 OFF • Premium Velvet",
    rating: 5.0,
    reviewsCount: 64,
    inStock: true,
    description: "Opulent velvet straight-cut kurta embellished with shimmering hand-set mirror embroidery and pleated Afghani salwar."
  },

  // =========================================================================
  // 2. SAREES (4 Items)
  // =========================================================================
  {
    id: "item-005",
    name: "Pure Katan Banarasi Woven Zari Saree",
    category: "Sarees",
    price: 2999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Free Size (5.5m + 0.8m Blouse)"],
    fabric: "Pure Katan Silk with Golden Weaving",
    color: "Royal Crimson Red & Gold",
    badge: "Heritage",
    offer: "Flat 50% OFF • Free Matching Blouse Piece",
    rating: 5.0,
    reviewsCount: 84,
    inStock: true,
    description: "Heritage Banarasi masterpiece with opulent golden Zari floral jaal work across the pallu and body. Includes matching unstitched blouse piece."
  },
  {
    id: "item-006",
    name: "Organza Floral Digital Print Party Saree",
    category: "Sarees",
    price: 1499,
    originalPrice: 2899,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Free Size (5.5m Saree)"],
    fabric: "Premium Sheer Organza with Scallop Lace",
    color: "Blush Peach & Rose",
    badge: "Hot Trend",
    offer: "Special Summer Festive Offer",
    rating: 4.7,
    reviewsCount: 52,
    inStock: true,
    description: "Feather-light organza saree draped with blooming pastel digital floral prints and delicate hand-cut scalloped borders."
  },
  {
    id: "item-007",
    name: "Handwoven Kanjivaram Golden Temple Border Silk Saree",
    category: "Sarees",
    price: 3499,
    originalPrice: 6999,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Free Size (6.3m with Blouse)"],
    fabric: "South Silk with Korvai Temple Zari Border",
    color: "Mustard Gold & Magenta",
    badge: "Royal Bridal",
    offer: "Bridal Special • Flat 50% OFF",
    rating: 4.9,
    reviewsCount: 110,
    inStock: true,
    description: "Magnificent South Indian bridal silk saree featuring traditional temple motif borders and rich contrast pallu."
  },
  {
    id: "item-008",
    name: "Chiffon Georgette Foil Print Saree with Embroidered Blouse",
    category: "Sarees",
    price: 1199,
    originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Free Size"],
    fabric: "Soft Lightweight Poly-Georgette",
    color: "Midnight Navy & Silver",
    badge: "Cocktail Pick",
    offer: "Buy 1 Get 15% OFF",
    rating: 4.8,
    reviewsCount: 46,
    inStock: true,
    description: "Contemporary lightweight cocktail drape saree with metallic foil shimmer dots and sequined unstitched blouse piece."
  },

  // =========================================================================
  // 3. LEHENGA CHOLI (4 Items)
  // =========================================================================
  {
    id: "item-009",
    name: "Embroidered Velvet Semi-Stitched Bridal Lehenga",
    category: "Lehenga Choli",
    price: 4999,
    originalPrice: 9999,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Semi-Stitched (Up to 44 Bust)"],
    fabric: "Heavy Micro Velvet 9000 with Dori Work",
    color: "Deep Maroon & Antique Gold",
    badge: "Royal Bridal",
    offer: "Festive Mega Deal • Flat ₹5,000 OFF",
    rating: 4.9,
    reviewsCount: 77,
    inStock: true,
    description: "Breathtaking bridal lehenga adorned with dori embroidery, diamond stones, layered canvas flair (3.5m flare) and dual net dupattas."
  },
  {
    id: "item-010",
    name: "Multi-Color Gujarati Mirror-Work Navratri Chaniya Choli",
    category: "Lehenga Choli",
    price: 2499,
    originalPrice: 4899,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Free Size (Stitched Lehenga + Blouse Fabric)"],
    fabric: "100% Pure Cotton with Gamthi Hand Embroidery",
    color: "Multi-Color Festive",
    badge: "Festive Pick",
    offer: "Navratri Special • Free Handcrafted Latkan",
    rating: 4.8,
    reviewsCount: 92,
    inStock: true,
    description: "Authentic Kutch mirror work chaniya choli with 6-meter circular flare, cowrie shells, and bright bandhani print dupatta."
  },
  {
    id: "item-011",
    name: "Pastel Pink Floral Organza Bridesmaid Lehenga Set",
    category: "Lehenga Choli",
    price: 3299,
    originalPrice: 6499,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Imported Organza Silk with Can-Can Lining",
    color: "Dusty Rose & Champagne",
    badge: "Trending",
    offer: "Bridesmaid Edit • 48% OFF",
    rating: 4.9,
    reviewsCount: 65,
    inStock: true,
    description: "Modern fairy-tale silhouette featuring dreamy watercolor floral digital prints, pearl border blouse, and sheer dupatta."
  },
  {
    id: "item-012",
    name: "Royal Peacock Blue Resham Thread Partywear Lehenga",
    category: "Lehenga Choli",
    price: 3899,
    originalPrice: 7599,
    image: "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Semi-Stitched"],
    fabric: "Art Silk Jacquard with Heavy Resham & Sequin",
    color: "Peacock Royal Blue",
    badge: "Luxury Pick",
    offer: "Flat 48% OFF • Free Dispatch",
    rating: 5.0,
    reviewsCount: 38,
    inStock: true,
    description: "Stunning evening reception lehenga with opulent floral embroidery, sequin shimmer highlights, and matching blouse."
  },

  // =========================================================================
  // 4. WESTERN DRESSES (3 Items)
  // =========================================================================
  {
    id: "item-013",
    name: "Tiered Floral Chiffon Maxi Vacation Dress",
    category: "Western Dresses",
    price: 1199,
    originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
    ],
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
  {
    id: "item-014",
    name: "Satin Silk Pleated Wrap Cocktail Midi Dress",
    category: "Western Dresses",
    price: 1399,
    originalPrice: 2699,
    image: "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Heavy Italian Satin with Lustrous Finish",
    color: "Emerald Bottle Green",
    badge: "Party Look",
    offer: "Flat 48% OFF",
    rating: 4.7,
    reviewsCount: 42,
    inStock: true,
    description: "Sophisticated wrap-around V-neck midi dress with subtle front slit and pleated waist detailing for evening soirees."
  },
  {
    id: "item-015",
    name: "Cotton Linen Button-Down Summer A-Line Dress",
    category: "Western Dresses",
    price: 999,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabric: "100% Breathable Linen Cotton",
    color: "Beige Khaki & Olive",
    badge: "Everyday Chic",
    offer: "Summer Essential Deal",
    rating: 4.9,
    reviewsCount: 88,
    inStock: true,
    description: "Effortless casual daywear dress with tortoise shell front buttons, dual side pockets, and waist sash."
  },

  // =========================================================================
  // 5. CO-ORD & INDO-WESTERN (3 Items)
  // =========================================================================
  {
    id: "item-016",
    name: "Embellished Peplum Top & Flared Sharara Set",
    category: "Co-ord & Indo-Western",
    price: 1799,
    originalPrice: 3299,
    image: "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596783049554-380c8f615f10?auto=format&fit=crop&w=800&q=80"
    ],
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
  {
    id: "item-017",
    name: "Printed Crepe Long Kimono Shrug & Trousers Co-ord",
    category: "Co-ord & Indo-Western",
    price: 1499,
    originalPrice: 2799,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Premium Butter Crepe with Digital Print",
    color: "Rust Orange & Burgundy",
    badge: "Hot Deal",
    offer: "Extra 10% OFF on Prepaid",
    rating: 4.8,
    reviewsCount: 54,
    inStock: true,
    description: "3-piece stylish Indo-Western set including crop inner, straight formal pants, and floor-length printed overlay cape."
  },
  {
    id: "item-018",
    name: "High-Slit Dhoti Pants & Handcrafted Crop Top Set",
    category: "Co-ord & Indo-Western",
    price: 1899,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Pure Silk Satin with Zardozi Handwork",
    color: "Wine Burgundy & Rose Gold",
    badge: "Celebrity Style",
    offer: "Exclusive Runway Collection",
    rating: 5.0,
    reviewsCount: 31,
    inStock: true,
    description: "Fashion-forward fusion statement ensemble with cowl dhoti drape bottoms and intricately embellished boat-neck crop blouse."
  },

  // =========================================================================
  // 6. TOPS & TUNICS (3 Items)
  // =========================================================================
  {
    id: "item-019",
    name: "Jaipuri Hand-Block Printed Cotton Short Kurti/Top",
    category: "Tops & Tunics",
    price: 649,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80"
    ],
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
  {
    id: "item-020",
    name: "Schiffli Embroidered White Cotton Peplum Tunic",
    category: "Tops & Tunics",
    price: 799,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "100% Pure Schiffli Hakoba Cotton",
    color: "Pristine Pure White",
    badge: "Bestseller",
    offer: "Flat ₹700 OFF",
    rating: 4.8,
    reviewsCount: 124,
    inStock: true,
    description: "Elegant white eyelet embroidery peplum tunic with ruffled bell sleeves and sweet sweetheart neckline."
  },
  {
    id: "item-021",
    name: "Bohemian Mirror Tassel Rayon Casual Top",
    category: "Tops & Tunics",
    price: 549,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Super-Soft Premium Rayon 14KG",
    color: "Mustard Yellow & Maroon",
    badge: "Budget Buy",
    offer: "Buy 2 Get 1 Free",
    rating: 4.7,
    reviewsCount: 96,
    inStock: true,
    description: "Lightweight bohemian tunic top with ethnic neck yoke embroidery and handmade colorful thread tassels."
  },

  // =========================================================================
  // 7. BOTTOM WEAR & PALAZZOS (3 Items)
  // =========================================================================
  {
    id: "item-022",
    name: "Heavy Rayon Flared Palazzo with Golden Gota Lace",
    category: "Bottom Wear & Palazzos",
    price: 599,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80"
    ],
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
  {
    id: "item-023",
    name: "Pure Chanderi Silk Cigarette Pants with Zari Hem",
    category: "Bottom Wear & Palazzos",
    price: 749,
    originalPrice: 1399,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["M (28-32)", "L (32-36)", "XL (36-40)", "XXL (40-44)"],
    fabric: "Pure Chanderi Silk with Soft Cotton Lining",
    color: "Golden Beige / Rose Gold",
    badge: "Party Match",
    offer: "Flat 45% OFF",
    rating: 4.9,
    reviewsCount: 68,
    inStock: true,
    description: "Tailored slim-fit cigarette trousers with side ankle slit and antique gold zari embroidery. Perfect pairing for heavy kurtis."
  },
  {
    id: "item-024",
    name: "Tiered Crinkled Georgette Flared Sharara Bottoms",
    category: "Bottom Wear & Palazzos",
    price: 899,
    originalPrice: 1699,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Free Size (Stretchable Waist)"],
    fabric: "Fox Georgette with Micro Crepe Lining",
    color: "Ruby Wine Red",
    badge: "Trending",
    offer: "Festive Ready",
    rating: 4.8,
    reviewsCount: 52,
    inStock: true,
    description: "3-tier gathered festive sharara pants with immense circular flare. Gives any simple kurti an instant regal look."
  },

  // =========================================================================
  // 8. DUPATTAS & STOLES (3 Items)
  // =========================================================================
  {
    id: "item-025",
    name: "Authentic Amritsari Phulkari Embroidered Dupatta",
    category: "Dupattas & Stoles",
    price: 899,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
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
  {
    id: "item-026",
    name: "Pure Organza Floral Hand-Painted Scallop Dupatta",
    category: "Dupattas & Stoles",
    price: 999,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["2.5 Meters Long • Full Width"],
    fabric: "Premium Korean Sheer Organza",
    color: "Blush Pink & Gold",
    badge: "Hot Trend",
    offer: "Special Hand-Painted Edit",
    rating: 4.9,
    reviewsCount: 71,
    inStock: true,
    description: "Delicate organza stole hand-painted with pastel botanical roses and detailed with cut-work scalloped zari edges."
  },
  {
    id: "item-027",
    name: "Banarasi Brocade Weaving Gold Zari Dupatta",
    category: "Dupattas & Stoles",
    price: 1199,
    originalPrice: 2399,
    image: "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["2.4 Meters Length"],
    fabric: "Art Silk Brocade with Meenakari Weave",
    color: "Royal Emerald Green & Gold",
    badge: "Heritage",
    offer: "Flat 50% OFF",
    rating: 5.0,
    reviewsCount: 88,
    inStock: true,
    description: "Heavy heirloom Banarasi brocade dupatta with traditional floral motifs and ornate tassels on both borders."
  },

  // =========================================================================
  // 9. ETHNIC JEWELLERY (3 Items)
  // =========================================================================
  {
    id: "item-028",
    name: "Royal Kundan & Meenakari Choker Necklace with Earrings",
    category: "Ethnic Jewellery",
    price: 999,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
    ],
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
  {
    id: "item-029",
    name: "Antique Gold-Plated Peacock Jhumkas with Hydro Pearls",
    category: "Ethnic Jewellery",
    price: 499,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Length: 7.5cm (Medium-Heavy)"],
    fabric: "High-Grade Brass with Matte Gold Micron Plating",
    color: "Antique Matte Gold & Ruby Stones",
    badge: "Bestseller",
    offer: "Buy 1 Get 1 @ 30% OFF",
    rating: 4.8,
    reviewsCount: 140,
    inStock: true,
    description: "Intricately carved temple peacock design statement jhumkas finished with tiny cluster pearls and push-back lock."
  },
  {
    id: "item-030",
    name: "Handcrafted Brass Temple Bangles Kada Set (Pack of 2)",
    category: "Ethnic Jewellery",
    price: 699,
    originalPrice: 1399,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["2.4 (Small)", "2.6 (Medium)", "2.8 (Large)"],
    fabric: "Brass Gold Plated with Screw Open Lock",
    color: "Traditional Yellow Gold",
    badge: "Heritage",
    offer: "Flat 50% OFF",
    rating: 4.9,
    reviewsCount: 57,
    inStock: true,
    description: "Pair of openable temple jewellery kada bangles embossed with divine motifs and sparkling cubic zirconia stones."
  },

  // =========================================================================
  // 10. FOOTWEAR & JUTTIS (3 Items)
  // =========================================================================
  {
    id: "item-031",
    name: "Hand-Embroidered Zardozi Punjabi Jutti",
    category: "Footwear & Juttis",
    price: 849,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["36 (UK 3)", "37 (UK 4)", "38 (UK 5)", "39 (UK 6)", "40 (UK 7)", "41 (UK 8)"],
    fabric: "Genuine Leather Sole with Double Cushioning",
    color: "Golden Champagne",
    badge: "Comfort Fit",
    offer: "Bite-Free Cushioned Padding Guaranteed",
    rating: 4.8,
    reviewsCount: 88,
    inStock: true,
    description: "100% genuine leather hand-stitched traditional jutti with rich dabka, sequins, and pearl hand-embroidery."
  },
  {
    id: "item-032",
    name: "Dabka & Real Mirror Work Pastel Mojari Jutti",
    category: "Footwear & Juttis",
    price: 799,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["36 (UK 3)", "37 (UK 4)", "38 (UK 5)", "39 (UK 6)", "40 (UK 7)", "41 (UK 8)"],
    fabric: "Silk Satin Upper with Memory Foam Insole",
    color: "Blush Peach & Silver",
    badge: "Trending",
    offer: "Festive Special Deal",
    rating: 4.9,
    reviewsCount: 62,
    inStock: true,
    description: "Ultra-comfortable festive mojari designed with authentic mirror work and extra-padded heel for all-day celebrations."
  },
  {
    id: "item-033",
    name: "Golden Velvet Bridal Pointed Toe Juttis with Ghungroo",
    category: "Footwear & Juttis",
    price: 999,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["36 (UK 3)", "37 (UK 4)", "38 (UK 5)", "39 (UK 6)", "40 (UK 7)", "41 (UK 8)"],
    fabric: "Royal Velvet with Hand-Embroidered Zari & Ghungroo",
    color: "Deep Maroon & Gold",
    badge: "Royal Bridal",
    offer: "Bridal Footwear Deal • Flat 47% OFF",
    rating: 5.0,
    reviewsCount: 45,
    inStock: true,
    description: "Royal bridal velvet jutti decorated with musical miniature ghungroos and traditional floral zari craftsmanship."
  }
];

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "Free Size"];
