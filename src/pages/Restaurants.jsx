// src/pages/Restaurants.jsx
import { Link } from "react-router-dom";
import { RESTAURANTS } from "../data/restaurants";
import { useMemo, useState } from "react";

export default function Restaurants() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return RESTAURANTS;
    return RESTAURANTS.filter((r) => r.name.toLowerCase().includes(t) || r.cuisine.toLowerCase().includes(t));
  }, [q]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <h2 style={{ margin: 0 }}>Restaurants</h2>
        <input placeholder="Search restaurants or cuisine" value={q} onChange={(e) => setQ(e.target.value)} style={{ padding: 8, width: 320, borderRadius: 8, border: "1px solid #e6e6e6" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
        {filtered.map((r) => (
          <div key={r.id} style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 6px 18px rgba(15,23,42,0.06)" }}>
            <img src={r.image} alt={r.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
            <div style={{ padding: 14 }}>
              <h3 style={{ margin: 0 }}>{r.name}</h3>
              <p style={{ color: "#6b7280", marginTop: 8 }}>{r.cuisine} • {r.eta}</p>
              <Link to={`/restaurants/${r.id}`} style={{ marginTop: 12, display: "inline-block", background: "#0066ff", color: "#fff", padding: "8px 12px", borderRadius: 8, textDecoration: "none" }}>View Menu</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
