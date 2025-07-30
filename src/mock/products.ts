const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    image: "https://images.jbl.com/JBL_TUNE720BT_ProductImage_Hero_Black_1605x1605px.png",
    description: "High-quality wireless headphones with noise cancellation.",
    images: [
      "https://images.jbl.com/JBL_TUNE720BT_ProductImage_Hero_Black_1605x1605px.png",
      "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2e2b1e2e/JBL_TUNE720BT_ProductImage_Back_Black_1605x1605px.png"
    ],
    category: "Electronics",
    quantity: 20
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 149.99,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQKW3_VW_34FR+watch-41-alum-starlight-nc-se_VW_34FR_WF_CO_GEO_US?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1660778453921",
    description: "Stay connected and track your fitness with this smart watch.",
    images: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQKW3_VW_34FR+watch-41-alum-starlight-nc-se_VW_34FR_WF_CO_GEO_US?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1660778453921",
      "https://images.samsung.com/is/image/samsung/p6pim/levant/galaxy-watch6-44mm-sm-r940nzkamea-thumb-537377-537377-01.jpg"
    ],
    category: "Electronics",
    quantity: 15
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 79.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b2e8b6e-2b7e-4e7e-8b7e-2b7e8b6e2b7e/air-zoom-pegasus-39-road-running-shoes-4W8v7F.png",
    description: "Comfortable and durable running shoes for all terrains.",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b2e8b6e-2b7e-4e7e-8b7e-2b7e8b6e2b7e/air-zoom-pegasus-39-road-running-shoes-4W8v7F.png",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6e2e8b6e2b7e4e7e8b7e2b7e8b6e2b7e_9366/Ultraboost_Light_Shoes_Black_GY9351_01_standard.jpg"
    ],
    category: "Shoes",
    quantity: 30
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: 59.99,
    image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2208/gallery/levant-portable-bluetooth-speaker-sr-b40b-533664-sm-rb40bzkameb-533664-533664-01.jpg",
    description: "Portable Bluetooth speaker with deep bass and long battery life.",
    images: [
      "https://images.samsung.com/is/image/samsung/p6pim/levant/2208/gallery/levant-portable-bluetooth-speaker-sr-b40b-533664-sm-rb40bzkameb-533664-533664-01.jpg",
      "https://www.sony.com/image/2e2b1e2e2e2e2e2e2e2e2e2e2e2e2e2e?fmt=png-alpha&wid=720"
    ],
    category: "Electronics",
    quantity: 25
  },
  {
    id: 5,
    title: "Leather Wallet",
    price: 39.99,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/ClassicLeatherWallet-Black_1200x1200.jpg",
    description: "Premium leather wallet with multiple card slots and coin pocket.",
    images: [
      "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/ClassicLeatherWallet-Black_1200x1200.jpg",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
    ],
    category: "Accessories",
    quantity: 40
  },
  {
    id: 6,
    title: "Sports Sunglasses",
    price: 29.99,
    image: "https://cdn.shopify.com/s/files/1/0257/6087/5566/products/1_1_1200x1200.jpg",
    description: "UV-protected sports sunglasses for outdoor activities.",
    images: [
      "https://cdn.shopify.com/s/files/1/0257/6087/5566/products/1_1_1200x1200.jpg",
      "https://images.ray-ban.com/is/image/RayBan/805289602057__STD__shad__fr.png"
    ],
    category: "Accessories",
    quantity: 35
  },
  {
    id: 7,
    title: "Gaming Mouse",
    price: 49.99,
    image: "https://resource.logitechg.com/content/dam/gaming/en/products/g502-hero/g502-hero-gallery-1.png",
    description: "High-precision gaming mouse with customizable buttons.",
    images: [
      "https://resource.logitechg.com/content/dam/gaming/en/products/g502-hero/g502-hero-gallery-1.png",
      "https://cdn.mos.cms.futurecdn.net/4k2Qd8QXl3k5i6QwO5jM8P-1200-80.jpg"
    ],
    category: "Electronics",
    quantity: 50
  },
  {
    id: 8,
    title: "Classic Sneakers",
    price: 69.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2b1e8b6e-2b7e-4e7e-8b7e-2b7e8b6e2b7e/air-force-1-07-shoe-KyTDGepj.png",
    description: "Timeless design sneakers for everyday wear.",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2b1e8b6e-2b7e-4e7e-8b7e-2b7e8b6e2b7e/air-force-1-07-shoe-KyTDGepj.png",
      "https://images.stockx.com/images/Nike-Air-Force-1-07-White-Product.jpg"
    ],
    category: "Shoes",
    quantity: 28
  },
  {
    id: 9,
    title: "Laptop Backpack",
    price: 89.99,
    image: "https://cdn.thewirecutter.com/wp-content/media/2022/08/backpacks-2048px-0001.jpg",
    description: "Spacious and water-resistant backpack for laptops up to 17 inches.",
    images: [
      "https://cdn.thewirecutter.com/wp-content/media/2022/08/backpacks-2048px-0001.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
    ],
    category: "Accessories",
    quantity: 18
  },
  {
    id: 10,
    title: "Fitness Tracker",
    price: 59.99,
    image: "https://cdn.thewirecutter.com/wp-content/media/2022/06/fitnesstrackers-2048px-0001.jpg",
    description: "Track your steps, heart rate, and sleep with this fitness tracker.",
    images: [
      "https://cdn.thewirecutter.com/wp-content/media/2022/06/fitnesstrackers-2048px-0001.jpg",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYDP2_VW_34FR+watch-44-alum-silver-nc-se_VW_34FR_WF_CO_GEO_US?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1599010368000"
    ],
    category: "Electronics",
    quantity: 22
  },
  {
    id: 11,
    title: "Men's Dress Shoes",
    price: 109.99,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/DressShoes-Black_1200x1200.jpg",
    description: "Elegant leather dress shoes for formal occasions.",
    images: [
      "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/DressShoes-Black_1200x1200.jpg",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    ],
    category: "Shoes",
    quantity: 12
  },
  {
    id: 12,
    title: "Wireless Earbuds",
    price: 89.99,
    image: "https://cdn.thewirecutter.com/wp-content/media/2022/06/wirelessearbuds-2048px-0001.jpg",
    description: "Compact wireless earbuds with superior sound quality.",
    images: [
      "https://cdn.thewirecutter.com/wp-content/media/2022/06/wirelessearbuds-2048px-0001.jpg",
      "https://images.samsung.com/is/image/samsung/p6pim/levant/galaxy-buds2-pro-r510-sm-r510nzkamea-thumb-533664-533664-01.jpg"
    ],
    category: "Electronics",
    quantity: 33
  },
  {
    id: 13,
    title: "Travel Duffel Bag",
    price: 69.99,
    image: "https://cdn.shopify.com/s/files/1/0257/6087/5566/products/duffelbag_1200x1200.jpg",
    description: "Durable duffel bag perfect for weekend getaways.",
    images: [
      "https://cdn.shopify.com/s/files/1/0257/6087/5566/products/duffelbag_1200x1200.jpg",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    ],
    category: "Accessories",
    quantity: 17
  },
  {
    id: 14,
    title: "Women's Sandals",
    price: 49.99,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/Sandals-White_1200x1200.jpg",
    description: "Comfortable and stylish sandals for summer.",
    images: [
      "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/Sandals-White_1200x1200.jpg",
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
    ],
    category: "Shoes",
    quantity: 21
  },
  {
    id: 15,
    title: "Digital Camera",
    price: 299.99,
    image: "https://cdn.thewirecutter.com/wp-content/media/2022/06/digitalcameras-2048px-0001.jpg",
    description: "Capture stunning photos with this high-resolution digital camera.",
    images: [
      "https://cdn.thewirecutter.com/wp-content/media/2022/06/digitalcameras-2048px-0001.jpg",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
    ],
    category: "Electronics",
    quantity: 10
  }
];

export default products; 