// src/pages/Order.jsx
import { useParams, Link } from "react-router-dom";

export default function OrderPage() {
  const { orderId } = useParams();
  const orders = JSON.parse(localStorage.getItem("online_food_orders_v1") || "[]");
  const order = orders.find((o) => o.id === orderId);

  if (!order) return <div style={{ padding: 20 }}>Order not found. <Link to="/">Home</Link></div>;

  return (
    <div>
      <h2>Order Confirmed — {order.id}</h2>
      <div style={{ marginTop: 12 }}>Customer: {order.customer?.name}</div>
      <div>Placed: {new Date(order.createdAt).toLocaleString()}</div>
      <div style={{ marginTop: 12 }}>
        <strong>Total: ₹{order.total}</strong>
      </div>

      <div style={{ marginTop: 18 }}>
        <Link to={`/tracking/${order.id}`} style={{ background: "#0066ff", color: "#fff", padding: "8px 12px", borderRadius: 8, textDecoration: "none" }}>Track Order</Link>
      </div>
    </div>
  );
}
