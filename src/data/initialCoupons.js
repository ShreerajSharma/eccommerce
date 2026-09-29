export const INITIAL_COUPONS = [
  {
    id: 'coup-1',
    code: 'ROYAL10',
    discountType: 'percentage', // 'percentage' | 'flat'
    discountValue: 10,
    minOrderAmount: 0,
    description: 'Flat 10% OFF on entire boutique order',
    isActive: true
  },
  {
    id: 'coup-2',
    code: 'FESTIVE20',
    discountType: 'percentage',
    discountValue: 20,
    minOrderAmount: 1999,
    description: 'Flat 20% OFF on orders above ₹1,999',
    isActive: true
  },
  {
    id: 'coup-3',
    code: 'FIRSTBUY',
    discountType: 'flat',
    discountValue: 300,
    minOrderAmount: 1499,
    description: 'Flat ₹300 OFF for new customers on orders above ₹1,499',
    isActive: true
  },
  {
    id: 'coup-4',
    code: 'LUXE500',
    discountType: 'flat',
    discountValue: 500,
    minOrderAmount: 2999,
    description: 'Flat ₹500 Mega Discount on orders above ₹2,999',
    isActive: true
  }
];

export const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Meera Rajput',
    city: 'Jaipur, Rajasthan',
    rating: 5,
    date: '2 days ago',
    productName: 'Royal Zari Embroidered Anarkali Kurti Set',
    comment: 'Fabric quality is extraordinary! Looks 10x better than pictures and fitting was absolute perfection for my sister\'s sangeet function.',
    verifiedBuyer: true
  },
  {
    id: 'rev-2',
    name: 'Pooja Singhania',
    city: 'South Mumbai',
    rating: 5,
    date: '1 week ago',
    productName: 'Pure Katan Banarasi Silk Handloom Saree',
    comment: 'The gold zari work is authentic and pure royal luxury. Fast delivery and instant WhatsApp order confirmation. Will order again!',
    verifiedBuyer: true
  },
  {
    id: 'rev-3',
    name: 'Ananya Deshmukh',
    city: 'Bangalore',
    rating: 5,
    date: '2 weeks ago',
    productName: 'Chikankari Georgette Lucknowi Kurti Set',
    comment: 'Pure elegance! The hand embroidery is delicate, breathable fabric and super comfortable for all-day wear. Highly recommended brand.',
    verifiedBuyer: true
  }
];
