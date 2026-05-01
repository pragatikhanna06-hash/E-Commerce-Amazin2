import { useState } from "react";

const products = [
  { id: 1, name: "Wireless Noise-Cancelling Headphones", emoji: "🎧", cat: "Electronics", price: 2499, old: 4999, rating: 4.5, reviews: 12340, badge: "Deal", prime: true },
  { id: 2, name: "Men's Running Shoes — Lightweight", emoji: "👟", cat: "Fashion", price: 1299, old: 2499, rating: 4.2, reviews: 8762, badge: null, prime: true },
  { id: 3, name: "Stainless Steel Water Bottle 1L", emoji: "🧴", cat: "Home", price: 399, old: 699, rating: 4.7, reviews: 34100, badge: "Deal", prime: false },
  { id: 4, name: "Atomic Habits — James Clear", emoji: "📚", cat: "Books", price: 349, old: 599, rating: 4.9, reviews: 55000, badge: "Bestseller", prime: true },
  { id: 5, name: "Smart LED Bulb — Voice Control", emoji: "💡", cat: "Electronics", price: 599, old: 999, rating: 4.3, reviews: 7821, badge: null, prime: true },
  { id: 6, name: "Yoga Mat with Carry Strap", emoji: "🧘", cat: "Sports", price: 799, old: 1499, rating: 4.6, reviews: 15230, badge: "New", prime: false },
  { id: 7, name: "Non-Stick Cookware Set 5-Piece", emoji: "🍳", cat: "Home", price: 1999, old: 3499, rating: 4.4, reviews: 9110, badge: "Deal", prime: true },
  { id: 8, name: "Wireless Mechanical Keyboard", emoji: "⌨️", cat: "Electronics", price: 3299, old: 5499, rating: 4.8, reviews: 4320, badge: null, prime: true },
  { id: 9, name: "Women's Floral Kurta Set", emoji: "👗", cat: "Fashion", price: 899, old: 1799, rating: 4.1, reviews: 6540, badge: "New", prime: false },
  { id: 10, name: "Resistance Bands Set of 5", emoji: "🏋️", cat: "Sports", price: 499, old: 899, rating: 4.5, reviews: 21000, badge: null, prime: true },
  { id: 11, name: "The Psychology of Money", emoji: "📖", cat: "Books", price: 299, old: 499, rating: 4.8, reviews: 42000, badge: "Deal", prime: true },
  { id: 12, name: "Electric Toothbrush Premium", emoji: "🪥", cat: "Home", price: 1499, old: 2999, rating: 4.6, reviews: 8800, badge: null, prime: true },
  { id: 13, name: "Portable Bluetooth Speaker", emoji: "🔊", cat: "Electronics", price: 1799, old: 3199, rating: 4.4, reviews: 6600, badge: "Deal", prime: true },
  { id: 14, name: "Sunglasses UV400 Protection", emoji: "🕶️", cat: "Fashion", price: 699, old: 1299, rating: 4.3, reviews: 4530, badge: null, prime: false },
  { id: 15, name: "Air Fryer 4L Capacity", emoji: "🍟", cat: "Home", price: 3499, old: 5999, rating: 4.7, reviews: 18900, badge: "Bestseller", prime: true },
];

const categories = ["All", "Electronics", "Fashion", "Home", "Books", "Sports"];

function StarRating({ rating }) {
  return (
    <span style={{ color: "#ff9900", fontSize: 13 }}>
      {[1, 2, 3, 4, 5].map((i) =>
        i <= Math.floor(rating) ? "★" : i - 0.5 <= rating ? "✩" : "☆"
      ).join("")}
      <span style={{ color: "#555", fontSize: 12, marginLeft: 4 }}>{rating}</span>
    </span>
  );
}

function Toast({ show }) {
  return show ? (
    <div style={{
      position: "fixed", bottom: 24, right: 24, background: "#067d62",
      color: "white", padding: "12px 20px", borderRadius: 6, fontSize: 14,
      fontWeight: 600, zIndex: 999, animation: "fadeIn 0.3s"
    }}>
      ✓ Added to cart!
    </div>
  ) : null;
}

function Navbar({ cartCount, search, setSearch }) {
  return (
    <div style={{ background: "#131921", color: "white", padding: "8px 20px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ fontSize: 24, fontWeight: 800, color: "#ff9900", letterSpacing: -1 }}>amazin</div>
      <div style={{ flex: 1, display: "flex", minWidth: 200 }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          style={{ flex: 1, padding: "8px 12px", border: "none", borderRadius: "4px 0 0 4px", fontSize: 14, outline: "none" }}
        />
        <button style={{ background: "#ff9900", border: "none", padding: "8px 14px", borderRadius: "0 4px 4px 0", cursor: "pointer", fontSize: 16 }}>🔍</button>
      </div>
      <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#ccc" }}>
        <span style={{ cursor: "pointer" }}>Returns</span>
        <span style={{ cursor: "pointer" }}>Orders</span>
        <span style={{ cursor: "pointer" }}>Account</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer", fontSize: 13 }}>
        🛒 Cart
        <span style={{ background: "#ff9900", color: "#111", borderRadius: "50%", padding: "1px 7px", fontSize: 12, fontWeight: 700 }}>
          {cartCount}
        </span>
      </div>
    </div>
  );
}

function SubNav() {
  const links = ["☰ All", "Electronics", "Fashion", "Home & Kitchen", "Sports", "Books", "Beauty", "Toys", "Mobiles", "Grocery"];
  return (
    <div style={{ background: "#232f3e", color: "white", padding: "6px 20px", display: "flex", gap: 20, overflowX: "auto" }}>
      {links.map((l) => (
        <span key={l} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: 13, color: "#ddd" }}>{l}</span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <div style={{ background: "linear-gradient(135deg, #131921 60%, #232f3e)", color: "white", padding: "48px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 13, color: "#ff9900", marginBottom: 8, letterSpacing: 2, textTransform: "uppercase" }}>⚡ Today Only</div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>Lightning Deals — Up to 70% Off</h1>
      <p style={{ color: "#aaa", fontSize: 15, marginBottom: 24 }}>Shop thousands of deals across categories. Limited time offer!</p>
      <button style={{ background: "#ff9900", color: "#111", border: "none", padding: "13px 36px", borderRadius: 4, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
        Shop Now
      </button>
    </div>
  );
}

function ProductCard({ product, onAddToCart, onView }) {
  const badgeColors = { Deal: "#cc0c39", New: "#067d62", Bestseller: "#e07b00" };
  const discount = Math.round(((product.old - product.price) / product.old) * 100);

  return (
    <div
      onClick={() => onView(product)}
      style={{
        background: "white", borderRadius: 8, border: "1px solid #e0e0e0",
        cursor: "pointer", transition: "box-shadow 0.2s, transform 0.15s",
        position: "relative", overflow: "hidden",
        display: "flex", flexDirection: "column"
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.13)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {product.badge && (
        <div style={{ position: "absolute", top: 10, left: 10, background: badgeColors[product.badge] || "#cc0c39", color: "white", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 3, zIndex: 1 }}>
          {product.badge}
        </div>
      )}
      <div style={{ background: "#f8f8f8", height: 170, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 60 }}>
        {product.emoji}
      </div>
      <div style={{ padding: 12, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#0f1111", marginBottom: 4, lineHeight: 1.35 }}>{product.name}</div>
        <StarRating rating={product.rating} />
        <div style={{ fontSize: 12, color: "#007185", marginBottom: 6 }}>{product.reviews.toLocaleString()} ratings</div>
        <div style={{ marginTop: "auto" }}>
          <div>
            <span style={{ fontSize: 20, fontWeight: 700 }}>₹{product.price.toLocaleString()}</span>
            <span style={{ fontSize: 13, color: "#888", textDecoration: "line-through", marginLeft: 6 }}>₹{product.old.toLocaleString()}</span>
            <span style={{ fontSize: 12, color: "#cc0c39", marginLeft: 6, fontWeight: 600 }}>({discount}% off)</span>
          </div>
          {product.prime && <div style={{ color: "#00a8e0", fontSize: 12, fontWeight: 600, marginTop: 2 }}>✓ prime</div>}
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            style={{ width: "100%", marginTop: 10, background: "#ff9900", border: "none", padding: "8px", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", color: "#111" }}
            onMouseEnter={e => e.currentTarget.style.background = "#e68900"}
            onMouseLeave={e => e.currentTarget.style.background = "#ff9900"}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;
  const discount = Math.round(((product.old - product.price) / product.old) * 100);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: "white", borderRadius: 12, maxWidth: 560, width: "100%", padding: 28, position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 16, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#555" }}>✕</button>
        <div style={{ fontSize: 72, textAlign: "center", background: "#f8f8f8", borderRadius: 8, padding: "20px 0", marginBottom: 20 }}>{product.emoji}</div>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{product.name}</h2>
        <StarRating rating={product.rating} />
        <div style={{ fontSize: 13, color: "#007185", marginBottom: 12 }}>{product.reviews.toLocaleString()} ratings</div>
        <div style={{ borderTop: "1px solid #eee", paddingTop: 12, marginBottom: 16 }}>
          <span style={{ fontSize: 28, fontWeight: 800 }}>₹{product.price.toLocaleString()}</span>
          <span style={{ fontSize: 14, color: "#888", textDecoration: "line-through", marginLeft: 8 }}>₹{product.old.toLocaleString()}</span>
          <span style={{ fontSize: 13, color: "#cc0c39", marginLeft: 8, fontWeight: 600 }}>Save {discount}%</span>
        </div>
        {product.prime && <div style={{ color: "#00a8e0", fontSize: 13, fontWeight: 600, marginBottom: 12 }}>✓ FREE delivery with Prime</div>}
        <div style={{ fontSize: 13, color: "#555", marginBottom: 16, lineHeight: 1.6 }}>
          In Stock. Ships from and sold by <strong>Amazin</strong>. Packaging may vary. Returns accepted within 30 days.
        </div>
        <button
          onClick={() => { onAddToCart(product); onClose(); }}
          style={{ width: "100%", background: "#ff9900", border: "none", padding: "12px", borderRadius: 4, fontSize: 15, fontWeight: 700, cursor: "pointer", color: "#111", marginBottom: 10 }}
        >
          Add to Cart
        </button>
        <button
          style={{ width: "100%", background: "#ffd814", border: "none", padding: "12px", borderRadius: 4, fontSize: 15, fontWeight: 700, cursor: "pointer", color: "#111" }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

function CartSidebar({ cart, onClose, onRemove }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", justifyContent: "flex-end" }}>
      <div onClick={onClose} style={{ flex: 1, background: "rgba(0,0,0,0.4)" }} />
      <div style={{ width: 360, background: "white", height: "100%", overflowY: "auto", padding: 20, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>🛒 Your Cart ({cart.reduce((s,i) => s+i.qty, 0)})</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer" }}>✕</button>
        </div>
        {cart.length === 0 ? (
          <div style={{ textAlign: "center", color: "#888", marginTop: 60 }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🛒</div>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div style={{ flex: 1 }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: "flex", gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #eee" }}>
                  <div style={{ fontSize: 36, background: "#f8f8f8", borderRadius: 8, padding: "8px 12px" }}>{item.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, lineHeight: 1.3 }}>{item.name}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>₹{item.price.toLocaleString()} × {item.qty}</div>
                    <button onClick={() => onRemove(item.id)} style={{ fontSize: 11, color: "#cc0c39", background: "none", border: "none", cursor: "pointer", marginTop: 4 }}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "2px solid #111", paddingTop: 16, marginTop: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
                <span>Total:</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <button style={{ width: "100%", background: "#ffd814", border: "none", padding: 13, borderRadius: 4, fontSize: 15, fontWeight: 700, cursor: "pointer", color: "#111", marginBottom: 8 }}>
                Proceed to Checkout
              </button>
              <button style={{ width: "100%", background: "#ff9900", border: "none", padding: 13, borderRadius: 4, fontSize: 15, fontWeight: 700, cursor: "pointer", color: "#111" }}>
                Buy with Prime
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const filtered = products.filter((p) => {
    const matchCat = activeFilter === "All" || p.cat === activeFilter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f3f3f3", minHeight: "100vh" }}>
      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }`}</style>

      <Navbar cartCount={cartCount} search={search} setSearch={setSearch} />
      <SubNav />
      <Hero />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}>
        {/* Promo Banner */}
        <div style={{ background: "#fff3cd", borderLeft: "4px solid #ff9900", padding: "12px 20px", borderRadius: 4, fontSize: 13, color: "#6d4c00", marginBottom: 24 }}>
          📦 <strong>Free delivery</strong> on orders over ₹499 — Prime members get same-day delivery on eligible items.
        </div>

        <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Recommended for You</div>

        {/* Category Filters */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                background: activeFilter === cat ? "#ff9900" : "white",
                border: `1px solid ${activeFilter === cat ? "#ff9900" : "#d5d9d9"}`,
                padding: "6px 16px", borderRadius: 20, fontSize: 13,
                cursor: "pointer", fontWeight: activeFilter === cat ? 700 : 400,
                color: activeFilter === cat ? "#111" : "#555",
                transition: "all 0.15s"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: 60, color: "#888" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
            <p>No products found for "<strong>{search}</strong>"</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 16 }}>
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={addToCart} onView={setSelectedProduct} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ background: "#232f3e", color: "#ccc", textAlign: "center", padding: "28px 16px", fontSize: 13, marginTop: 40 }}>
        <div style={{ color: "#ff9900", fontSize: 20, fontWeight: 800, marginBottom: 8 }}>amazin</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 12 }}>
          {["Careers", "Blog", "About Us", "Investor Relations", "Devices", "Sell on Amazin", "Help"].map(l => (
            <span key={l} style={{ cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <div>© 2026 Amazin — All rights reserved · Conditions of Use · Privacy Notice · Help</div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={addToCart} />
      )}

      {/* Cart Sidebar */}
      {cartOpen && (
        <CartSidebar cart={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
      )}

      {/* Toast */}
      <Toast show={toast} />
    </div>
  );
}
