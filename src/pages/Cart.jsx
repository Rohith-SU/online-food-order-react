import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Your Cart</h2>

      {cart.length === 0 ? (
        <p style={{ fontSize: "18px" }}>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={styles.cartCard}>
            <img
              src={item.image}
              alt={item.name}
              style={styles.cartImage}
            />

            <div style={styles.cartDetails}>
              <h3 style={styles.itemName}>{item.name}</h3>
              <p style={styles.itemPrice}>
                ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
              </p>

              {/* Quantity Buttons */}
              <div style={styles.qtyBox}>
                <button
                  style={styles.qtyBtn}
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>

                <span style={styles.qtyText}>{item.quantity}</span>

                <button
                  style={styles.qtyBtn}
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              <button
                style={styles.removeBtn}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {/* Subtotal Section */}
      {cart.length > 0 && (
        <>
          <h3 style={styles.subtotal}>Subtotal: ₹{subtotal}</h3>

          <Link to="/checkout">
            <button style={styles.checkoutBtn}>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

/* ---------------------------------------------------------
   STYLES (Modern Swiggy/Zomato UI Inspired)
--------------------------------------------------------- */

const styles = {
  wrapper: {
    width: "70%",
    margin: "40px auto",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  cartCard: {
    display: "flex",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    gap: "20px",
    alignItems: "center",
  },

  cartImage: {
    width: "110px",
    height: "110px",
    borderRadius: "12px",
    objectFit: "cover",
  },

  cartDetails: {
    flex: 1,
  },

  itemName: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "6px",
  },

  itemPrice: {
    fontSize: "15px",
    color: "#444",
    marginBottom: "10px",
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },

  qtyBtn: {
    width: "32px",
    height: "32px",
    background: "#eee",
    borderRadius: "6px",
    border: "1px solid #ccc",
    cursor: "pointer",
    fontSize: "18px",
  },

  qtyText: {
    fontSize: "16px",
    fontWeight: "600",
  },

  removeBtn: {
    marginTop: "5px",
    background: "none",
    border: "none",
    color: "red",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "underline",
  },

  subtotal: {
    marginTop: "20px",
    fontSize: "22px",
    fontWeight: "700",
  },

  checkoutBtn: {
    marginTop: "15px",
    padding: "12px 25px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
