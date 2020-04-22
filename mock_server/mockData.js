const products = [
  {
    id: 1,
    name: "Echo Dot (3rd Gen)",
    description: "Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal",
    imgUrl:
      "https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UL320_ML3_.jpg",
    categoryId: 1,
    price: 49.99,
    promoPrice: 29.99,
    soldBy: "Amazon",
  },
  {
    id: 2,
    name: "Fire TV Stick",
    description:
      "Fire TV Stick streaming media player with Alexa built in, includes Alexa Voice Remote, HD, easy set-up, released 2019",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL.jpg",
    categoryId: 2,
    price: 39.99,
    promoPrice: 0,
    soldBy: "Amazon",
  },
  {
    id: 3,
    name: "WD Blue 3D NAND 500GB",
    description:
      'WD Blue 3D NAND 500GB Internal PC SSD - SATA III 6 Gb/s, 2.5"/7mm, Up to 560 MB/s - WDS500G2B0A',
    imgUrl:
      "https://www.westerndigital.com/content/dam/western-digital/en-us/assets/products/internal-drives/wd-blue-3d-nand-sata-ssd/product-hero-image-wd-blue-3d-nand-sata-ssd-western-digital.png",
    categoryId: 2,
    price: 99.99,
    promoPrice: 66.99,
    soldBy: "Western Digital",
  },
  {
    id: 4,
    name: "Ring Spotlight Cam",
    description:
      "Ring Spotlight Cam Battery HD Security Camera with Built Two-Way Talk and a Siren Alarm, White, Works with Alexa",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71kcqsUvpoL._SY355_.jpg",
    categoryId: 2,
    price: 199,
    promoPrice: 0,
    soldBy: "Western Digital",
  },
  {
    id: 5,
    name: "Hanes Men's Graphic",
    description: "Hanes Men's Graphic T-Shirt - Rugged Outdoor Collection",
    imgUrl:
      "https://m.media-amazon.com/images/I/91rK2mpHuCL._AC_UL320_ML3_.jpg",
    categoryId: 2,
    price: 8,
    promoPrice: 5.35,
    soldBy: "Wardrobe",
  },
  {
    id: 6,
    name: "ARIAT Men's Groundbreake",
    description:
      "ARIAT Men's Groundbreaker Chelsea Waterproof Steel Toe Work Boot",
    imgUrl:
      "https://m.media-amazon.com/images/I/71VyahbxteL._AC_UL320_ML3_.jpg",
    categoryId: 3,
    price: 149.95,
    promoPrice: 103.49,
    soldBy: "Amazon",
  },
  {
    id: 7,
    name: "S-ZONE Oversized Canvas",
    description:
      "S-ZONE Oversized Canvas Genuine Leather Trim Travel Tote Duffel Shoulder Weekend Bag Weekender Overnight Carryon Handbag",
    imgUrl:
      "https://i.pinimg.com/originals/e2/6b/d9/e26bd9f66ec0000e5613e5abbe4ba1e5.jpg",
    categoryId: 2,
    price: 49.99,
    promoPrice: 0,
    soldBy: "S-ZONE",
  },
  {
    id: 8,
    name: "Smith & Wesson Extreme",
    description:
      "Smith & Wesson Extreme Ops SWA24S 7.1in S.S. Folding Knife with 3.1in Serrated Clip Point Blade and Aluminum Handle for Outdoor, Tactical, Survival and EDC",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81FWNXaX%2BvL._AC_SX425_.jpg",
    categoryId: 4,
    price: 11.64,
    promoPrice: 0,
    soldBy: "Smith & Wesson",
  },
  {
    id: 9,
    name: "KINGLETING Heated",
    description:
      "KINGLETING Heated Seat Cushion with Intelligent Temperature Controller.(12Volt,Black)",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71ggPF5EiyL._AC_SL1200_.jpg",
    categoryId: 4,
    price: 99.99,
    promoPrice: 41.99,
    soldBy: "KINGLETING",
  },
];

const locations = [
  {
    id: 1,
    name: "New York",
    imgUrl:
      "https://blog.coupontop10.com/wp-content/uploads/2018/10/Best-Places-to-Visit-in-the-USA-730x445.jpg",
  },
  {
    id: 2,
    name: "Los Angeles",
    imgUrl:
      "https://cdn1.thr.com/sites/default/files/2020/01/hollywood_sign.jpg",
  },
  {
    id: 3,
    name: "Nashville",
    imgUrl:
      "https://media.driveboo.com/assets-image/768x420/003731d2-c3ac-4819-ba4e-7159834e5e70.jpg",
  },
  {
    id: 4,
    name: "Ohio",
    imgUrl:
      "https://www.visittheusa.co/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2019-03/ff761cc884c3dfeb1871a647039d8ac4.jpeg",
  },
];

const newProduct = {
  id: null,
  name: "",
  categoryId: null,
  price: 0,
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newProduct,
  products,
  locations,
};
