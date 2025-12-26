// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { RESTAURANTS } from "../data/restaurants";

export default function Home() {
  const featured = RESTAURANTS.slice(0, 3);

  return (
    <main>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Hungry? Order from the best local restaurants</h1>
        <p style={styles.heroText}>Fast delivery • Real food photos • Demo app</p>
        <Link to="/restaurants" style={styles.heroBtn}>Explore Restaurants</Link>
      </section>

      <h2 style={styles.sectionTitle}>Featured</h2>

      <div style={styles.grid}>
        {featured.map((r) => (
          <div key={r.id} style={styles.card}>
            <img src={r.image} alt={r.name} style={styles.cardImg} />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{r.name}</h3>
              <p style={styles.cardSub}>{r.cuisine} • {r.eta}</p>
              <Link to={`/restaurants/${r.id}`} style={styles.viewBtn}>View Menu</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

const styles = {
  hero: {
    background: "linear-gradient(135deg,#e6f0ff,#ffffff)",
    padding: "56px 20px",
    borderRadius: 12,
    textAlign: "center",
    marginBottom: 32
  },
  heroTitle: { fontSize: 36, margin: 0, fontWeight: 800, color: "#072e70" },
  heroText: { color: "#4b5563", marginTop: 8, marginBottom: 16 },
  heroBtn: { background: "#0066ff", color: "#fff", padding: "10px 16px", borderRadius: 8, textDecoration: "none", fontWeight: 700 },
  sectionTitle: { fontSize: 22, marginBottom: 16, fontWeight: 700 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 },
  card: { background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 6px 18px rgba(15,23,42,0.06)" },
  cardImg: { width: "100%", height: 160, objectFit: "cover" },
  cardBody: { padding: 12 },
  cardTitle: { fontSize: 18, margin: 0 },
  cardSub: { color: "#6b7280", marginTop: 6 },
  viewBtn: { marginTop: 12, display: "inline-block", background: "#0066ff", color: "#fff", padding: "8px 12px", borderRadius: 8, textDecoration: "none" }
};
