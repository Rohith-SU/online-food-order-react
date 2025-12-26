import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Restaurant from "./pages/Restaurant";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import { CartProvider } from "./contexts/CartContext";
import { useCart } from "./contexts/CartContext";


// ---------------- NAVBAR ----------------
function Navbar() {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={styles.header}>
      <div style={styles.nav}>
        <Link to="/" style={styles.brand}>OnlineFood</Link>

        <nav style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/restaurants" style={styles.link}>Restaurants</Link>
          <Link to="/cart" style={styles.link}>Cart ({totalQuantity})</Link>
        </nav>
      </div>
    </header>
  );
}

// ---------------- APP ----------------
export default function App() {
  return (
    <CartProvider>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<Restaurant />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </Router>
    </CartProvider>
  );
}

// ---------------- STYLES (KEEP ONLY ONE!!) ----------------
const styles = {
  header: {
    padding: 20,
    borderBottom: "1px solid #ddd",
    background: "#fff",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  brand: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0066FF",
    textDecoration: "none"
  },
  navLinks: {
    display: "flex",
    gap: 20
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: 18
  }
};
