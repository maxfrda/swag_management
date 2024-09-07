# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all

Product.create([
  {
    name: "Windbreaker",
    description: "A lightweight, water-resistant jacket perfect for windy and rainy days. Easily packable and ideal for outdoor activities.",
    price: 49.99,
    image_url: 'https://shopthearena.com/cdn/shop/products/MI22MJK008-Front_1_400x.jpg?v=1656920682'
  },
  {
    name: "Softshell",
    description: "A versatile jacket with a soft, breathable outer layer and inner insulation for warmth. Great for outdoor adventures and daily wear.",
    price: 89.99,
    image_url: 'https://m.media-amazon.com/images/I/71B50-lXwWL._AC_SX522_.jpg'
  },
  {
    name: "Puff",
    description: "A cozy, quilted jacket with down insulation to keep you warm in cold weather. Lightweight and easily compressible for travel.",
    price: 129.99,
    image_url: 'https://di2ponv0v5otw.cloudfront.net/posts/2024/01/27/65b57a4d1741be53051dec46/m_wp_66db90099d05c4d98ec98d71.webp'
  },
  {
    name: "Vest",
    description: "A stylish and functional insulated vest that adds warmth without restricting movement. Perfect for layering in cooler weather.",
    price: 59.99,
    image_url: 'https://m.media-amazon.com/images/I/71rNE+tFA5L._AC_SY550_.jpg'
  },
  {
    name: "Bomber",
    description: "A classic bomber jacket with a modern twist, featuring a durable exterior and a soft lining. Great for casual outings and urban style.",
    price: 99.99,
    image_url: 'https://image.hm.com/assets/hm/c5/5e/c55ed8080ef3b5d2c069353cbbca461a4d627600.jpg?imwidth=384'
  },
  {
    name: "Track Jacket",
    description: "A sleek, athletic track jacket designed for performance and comfort. Features moisture-wicking fabric and a streamlined fit.",
    price: 74.99,
    image_url: 'https://m.media-amazon.com/images/I/71GHbNTqw3L._AC_SY550_.jpg'
  }
])