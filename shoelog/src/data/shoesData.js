export const shoesData = [
  {
    id: 1,
    name: "Nike Air Max 270",
    brand: "Nike",
    category: "Lifestyle",
    price: 1899000,
    description: "Sepatu lifestyle dengan cushioning Air Max terbesar untuk kenyamanan maksimal. Cocok untuk sehari-hari dengan style yang trendy.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=300&fit=crop"
    ],
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["Black", "White", "Red"],
    rating: 4.5,
    reviews: 128,
    inStock: true
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    brand: "Adidas",
    category: "Running",
    price: 2499000,
    description: "Sepatu running dengan teknologi Boost untuk responsivitas optimal. Ringan dan nyaman untuk lari jarak jauh.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=300&fit=crop"
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["Black", "Blue", "White"],
    rating: 4.8,
    reviews: 95,
    inStock: true
  },
  {
    id: 3,
    name: "Converse Chuck Taylor All Star",
    brand: "Converse",
    category: "Casual",
    price: 799000,
    description: "Sepatu casual klasik yang cocok untuk berbagai gaya. Desain timeless yang never out of style.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=500&h=300&fit=crop"
    ],
    sizes: [37, 38, 39, 40, 41, 42],
    colors: ["Black", "White", "Red"],
    rating: 4.3,
    reviews: 215,
    inStock: true
  },
  {
    id: 4,
    name: "New Balance 574 Classic",
    brand: "New Balance",
    category: "Lifestyle",
    price: 1299000,
    description: "Sepatu lifestyle dengan desain timeless dan kenyamanan terbaik. Cocok untuk aktivitas sehari-hari.",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=300&fit=crop"
    ],
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["Gray", "Navy", "Green"],
    rating: 4.4,
    reviews: 87,
    inStock: true
  },
  {
    id: 5,
    name: "Puma RS-X Toys",
    brand: "Puma",
    category: "Lifestyle",
    price: 1499000,
    description: "Sepatu dengan desain bold dan teknologi RS untuk kenyamanan maksimal. Style yang eye-catching.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=300&fit=crop"
    ],
    sizes: [39, 40, 41, 42, 43],
    colors: ["White", "Black", "Blue"],
    rating: 4.2,
    reviews: 63,
    inStock: false
  },
  {
    id: 6,
    name: "Nike Jordan 1 Retro",
    brand: "Nike",
    category: "Basketball",
    price: 2999000,
    description: "Sepatu basketball legendaris dengan desain klasik. Koleksi must-have untuk sneakerhead.",
    image: "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1584735174974-1aa588427566?w=500&h=300&fit=crop"
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Red", "Black", "White"],
    rating: 4.7,
    reviews: 156,
    inStock: true
  }
];

export const categories = [
  { id: 1, name: "Lifestyle", count: 3, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=150&fit=crop" },
  { id: 2, name: "Running", count: 1, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=200&h=150&fit=crop" },
  { id: 3, name: "Casual", count: 1, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=200&h=150&fit=crop" },
  { id: 4, name: "Basketball", count: 1, image: "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=200&h=150&fit=crop" },
  { id: 5, name: "Sneakers", count: 6, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=150&fit=crop" }
];

export const brands = [
  { id: 1, name: "Nike", count: 2, logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop" },
  { id: 2, name: "Adidas", count: 1, logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&h=200&fit=crop" },
  { id: 3, name: "Converse", count: 1, logo: "https://logos-world.net/wp-content/uploads/2020/04/Converse-Logo.png", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300&h=200&fit=crop" },
  { id: 4, name: "New Balance", count: 1, logo: "https://logos-world.net/wp-content/uploads/2020/04/New-Balance-Logo.png", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=200&fit=crop" },
  { id: 5, name: "Puma", count: 1, logo: "https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop" }
];