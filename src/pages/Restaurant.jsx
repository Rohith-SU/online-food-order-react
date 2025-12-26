import React from "react";
import { useParams } from "react-router-dom";
import { RESTAURANTS } from "../data/restaurants";
import { useCart } from "../contexts/CartContext";

export default function Restaurant() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const restaurant = RESTAURANTS.find((res) => res.id === id);

  if (!restaurant) return <h2>Restaurant Not Found</h2>;

  return (
    <div style={styles.container}>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        style={styles.banner}
      />

      <h1 style={styles.title}>{restaurant.name}</h1>
      <p style={styles.subtitle}>
        {restaurant.cuisine} • {restaurant.eta}
      </p>
      <p style={styles.description}>{restaurant.description}</p>

      <h2 style={styles.menuTitle}>Menu</h2>

      <div style={styles.menuGrid}>
        {restaurant.menu.map((item) => (
          <div key={item.id} style={styles.menuCard}>
            <img src={item.image} alt={item.name} style={styles.menuImage} />

            <h3 style={styles.itemName}>{item.name}</h3>
            <p style={styles.itemPrice}>₹{item.price}</p>

            {/* IMPORTANT FIX → Add the MENU ITEM, not the restaurant */}
            <button
              style={styles.addBtn}
              onClick={() => addToCart(item)}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { width: "80%", margin: "40px auto" },
  banner: { width: "100%", height: "260px", objectFit: "cover", borderRadius: "10px" },
  title: { fontSize: "34px", fontWeight: "700", marginTop: "20px" },
  subtitle: { fontSize: "16px", color: "#666", marginBottom: "15px" },
  description: { fontSize: "15px", marginBottom: "30px" },
  menuTitle: { fontSize: "26px", fontWeight: "700", marginBottom: "20px" },

  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
  },

  menuCard: {
    background: "#fff",
    padding: "18px",
    borderRadius: "12px",
    boxShadow: "0 3px 15px rgba(0,0,0,0.08)",
  },

  menuImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  itemName: { fontSize: "18px", marginTop: "10px", fontWeight: "600" },
  itemPrice: { color: "#444", marginBottom: "12px" },

  addBtn: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};
