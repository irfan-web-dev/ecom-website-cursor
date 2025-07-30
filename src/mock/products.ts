const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    description: "High-quality wireless headphones with noise cancellation.",
    images: [
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
      "https://images.pexels.com/photos/159853/headphones-music-earpads-earphones-159853.jpeg"
    ],
    category: "Electronics",
    quantity: 20
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 149.99,
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    description: "Stay connected and track your fitness with this smart watch.",
    images: [
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
      "https://images.pexels.com/photos/267393/pexels-photo-267393.jpeg"
    ],
    category: "Electronics",
    quantity: 15
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 79.99,
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    description: "Comfortable and durable running shoes for all terrains.",
    images: [
      "https://images.pexels.com/photos/19090/pexels-photo.jpg",
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
    ],
    category: "Shoes",
    quantity: 30
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: 59.99,
    image: "https://images.pexels.com/photos/374703/pexels-photo-374703.jpeg",
    description: "Portable Bluetooth speaker with deep bass and long battery life.",
    images: [
      "https://images.pexels.com/photos/374703/pexels-photo-374703.jpeg",
      "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg"
    ],
    category: "Electronics",
    quantity: 25
  },
  {
    id: 5,
    title: "Leather Wallet",
    price: 39.99,
    image: "https://images.pexels.com/photos/179934/pexels-photo-179934.jpeg",
    description: "Premium leather wallet with multiple card slots and coin pocket.",
    images: [
      "https://images.pexels.com/photos/179934/pexels-photo-179934.jpeg",
      "https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg"
    ],
    category: "Accessories",
    quantity: 40
  },
  {
    id: 6,
    title: "Sports Sunglasses",
    price: 29.99,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    description: "UV-protected sports sunglasses for outdoor activities.",
    images: [
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
      "https://images.pexels.com/photos/46711/pexels-photo-46711.jpeg"
    ],
    category: "Accessories",
    quantity: 35
  },
  {
    id: 7,
    title: "Gaming Mouse",
    price: 49.99,
    image: "https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg",
    description: "High-precision gaming mouse with customizable buttons.",
    images: [
      "https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg",
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"
    ],
    category: "Electronics",
    quantity: 50
  },
  {
    id: 8,
    title: "Classic Sneakers",
    price: 69.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    description: "Timeless design sneakers for everyday wear.",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg"
    ],
    category: "Shoes",
    quantity: 28
  },
  {
    id: 9,
    title: "Laptop Backpack",
    price: 89.99,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    description: "Spacious and water-resistant backpack for laptops up to 17 inches.",
    images: [
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      "https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg"
    ],
    category: "Accessories",
    quantity: 18
  },
  {
    id: 10,
    title: "Fitness Tracker",
    price: 59.99,
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    description: "Track your steps, heart rate, and sleep with this fitness tracker.",
    images: [
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
      "https://images.pexels.com/photos/267393/pexels-photo-267393.jpeg"
    ],
    category: "Electronics",
    quantity: 22
  },
  {
    id: 11,
    title: "Men's Dress Shoes",
    price: 109.99,
    image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    description: "Elegant leather dress shoes for formal occasions.",
    images: [
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
      "https://images.pexels.com/photos/19090/pexels-photo.jpg"
    ],
    category: "Shoes",
    quantity: 12
  },
  {
    id: 12,
    title: "Wireless Earbuds",
    price: 89.99,
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    description: "Compact wireless earbuds with superior sound quality.",
    images: [
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
      "https://images.pexels.com/photos/788947/pexels-photo-788947.jpeg"
    ],
    category: "Electronics",
    quantity: 33
  },
  {
    id: 13,
    title: "Travel Duffel Bag",
    price: 69.99,
    image: "https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg",
    description: "Durable duffel bag perfect for weekend getaways.",
    images: [
      "https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg",
      "https://images.pexels.com/photos/179934/pexels-photo-179934.jpeg"
    ],
    category: "Accessories",
    quantity: 17
  },
  {
    id: 14,
    title: "Women's Sandals",
    price: 49.99,
    image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    description: "Comfortable and stylish sandals for summer.",
    images: [
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg"
    ],
    category: "Shoes",
    quantity: 21
  },
  {
    id: 15,
    title: "Digital Camera",
    price: 299.99,
    image: "https://images.pexels.com/photos/51383/pexels-photo-51383.jpeg",
    description: "Capture stunning photos with this high-resolution digital camera.",
    images: [
      "https://images.pexels.com/photos/51383/pexels-photo-51383.jpeg",
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
    ],
    category: "Electronics",
    quantity: 10
  }
];

export default products; 