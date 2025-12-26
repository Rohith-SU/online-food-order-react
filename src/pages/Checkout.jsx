import { useState } from "react";
import { useCart } from "../contexts/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handlePlaceOrder() {
    if (!name.trim()) {
      alert("Please enter your name before placing the order.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // success message
    setOrderPlaced(true);

    // clear cart
    clearCart();
  }

  if (orderPlaced) {
    return (
      <div style={styles.container}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>Order Placed Successfully!</h2>
        <p style={{ fontSize: 20 }}>Thank you, {name}. Your order is confirmed.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Checkout</h1>

      <label style={styles.label}>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
        placeholder="Enter your name"
      />

      <h2 style={{ marginTop: 40 }}>Order Summary</h2>

      <div style={styles.box}>
        {cart.map((item) => (
          <div key={item.id} style={styles.itemRow}>
            <span>{item.name} x {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <hr />
        <div style={styles.totalRow}>
          <strong>Total:</strong>
          <strong>₹{totalAmount}</strong>
        </div>
      </div>

      <button style={styles.btn} onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 800,
    margin: "50px auto",
    padding: 20
  },
  label: {
    fontWeight: "bold",
    fontSize: 18
  },
  input: {
    width: "100%",
    padding: 12,
    fontSize: 18,
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: 6
  },
  box: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  itemRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 22,
    marginTop: 10
  },
  btn: {
    width: "100%",
    padding: 15,
    background: "#007BFF",
    color: "white",
    fontSize: 20,
    border: "none",
    borderRadius: 8,
    marginTop: 30,
    cursor: "pointer"
  }
};
