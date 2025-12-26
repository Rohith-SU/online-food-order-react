// src/data/restaurants.js
export const RESTAURANTS = [
  {
    id: "r1",
    name: "Spice Junction",
    cuisine: "Indian",
    rating: 4.5,
    eta: "25–35 min",
    image: `${process.env.PUBLIC_URL}/images/Spice-Junction.jpg`,
menu: [
  { id: "m1", name: "Butter Chicken", price: 240, image: `${process.env.PUBLIC_URL}/images/Spice-Junction-Butter-Chicken-01.jpg` },
  { id: "m2", name: "Paneer Tikka", price: 180, image: `${process.env.PUBLIC_URL}/images/Spice-Junction-Paneer-Tikka-02.jpg` },
  { id: "m3", name: "Garlic Naan (2 pcs)", price: 40, image: `${process.env.PUBLIC_URL}/images/Spice-Junction-Garlic-Naan-03.jpg` }
]

  },
  {
    id: "r2",
    name: "Pasta Palace",
    cuisine: "Italian",
    rating: 4.3,
    eta: "30–40 min",
    image: `${process.env.PUBLIC_URL}/images/Pasta-Palace.jpg`,
menu: [
  { id: "m4", name: "Carbonara", price: 320, image: `${process.env.PUBLIC_URL}/images/Pasta-Palace-Carbonara-01.jpg` },
  { id: "m5", name: "Margherita Pizza", price: 280, image: `${process.env.PUBLIC_URL}/images/Pasta-Palace-Margherita-Pizza-02.jpg` },
  { id: "m6", name: "Garlic Bread", price: 90, image: `${process.env.PUBLIC_URL}/images/Pasta-Palace-Garlic-Bread-03.jpg` }
]

  },
  {
    id: "r3",
    name: "Sushi Central",
    cuisine: "Japanese",
    rating: 4.7,
    eta: "20–30 min",
    image: `${process.env.PUBLIC_URL}/images/Sushi-Central.jpg`,
menu: [
  { id: "m7", name: "Salmon Nigiri", price: 420, image: `${process.env.PUBLIC_URL}/images/Sushi-Central-Salmon-Nigiri-01.jpg` },
  { id: "m8", name: "Miso Soup", price: 70, image: `${process.env.PUBLIC_URL}/images/Sushi-Central-Miso-Soup-02.jpg` },
  { id: "m9", name: "Tempura", price: 260, image: `${process.env.PUBLIC_URL}/images/Sushi-Central-Tempura-03.jpg` }
]

  }
];
      