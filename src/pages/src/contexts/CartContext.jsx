// src/pages/Cart.jsx
import { useCart } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeItem, subtotal } = useCart();
  const navigate = useNavigate();

  if (!cart.length) {
    return <div style={{ padding: 20 }}>Cart is empty. <Link to="/restaurants">Browse restaurants</Link></div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>

      <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
        {cart.map((it) => (
          <div key={it.cartId} style={styles.row}>
            <img src={it.image || "https://source.unsplash.com/200x200/?food"} alt={it.name} style={styles.img} />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h4 style={{ margin: 0 }}>{it.name}</h4>
                  <p style={{ color: "#6b7280", margin: "6px 0" }}>{it.restaurantName}</p>
                  <div>₹{it.price} × {it.qty} = ₹{it.price * it.qty}</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <button onClick={() => updateQty(it.cartId, Math.max(1, it.qty - 1))}>-</button>
                    <div style={{ minWidth: 24, textAlign: "center" }}>{it.qty}</div>
                    <button onClick={() => updateQty(it.cartId, it.qty + 1)}>+</button>
                  </div>
                  <button onClick={() => removeItem(it.cartId)} style={{ background: "transparent", color: "#d32f2f", border: "none" }}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 18 }}>Subtotal: <strong>₹{subtotal}</strong></div>
        <div>
          <button onClick={() => navigate("/checkout")} style={styles.checkoutBtn}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  row: { display: "flex", gap: 12, background: "#fff", padding: 12, borderRadius: 10, boxShadow: "0 6px 18px rgba(15,23,42,0.05)", alignItems: "center" },
  img: { width: 110, height: 80, objectFit: "cover", borderRadius: 8 },
  checkoutBtn: { background: "#0066ff", color: "#fff", padding: "10px 14px", borderRadius: 8, border: "none", cursor: "pointer" }
};
