import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "iPhone 15", price: 80000, category: "Electronics", rating: 4.5 },
  { id: 2, name: "Nike Shoes", price: 5000, category: "Fashion", rating: 4.2 },
  { id: 3, name: "Gaming Laptop", price: 120000, category: "Electronics", rating: 4.8 },
  { id: 4, name: "T-Shirt", price: 800, category: "Fashion", rating: 3.9 }
];

export default function Home() {
  const { addToCart, toggleWishlist } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "all" || p.category === category)
  );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
   return (
    <div className="p-6">
      <div className="flex gap-4 mb-4">
        <input
          placeholder="Search products..."
          className="border p-2 w-1/3"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)} className="border p-2">
          <option value="all">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)} className="border p-2">
          <option value="">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="border p-4 rounded shadow hover:shadow-lg">
            <h2 className="font-bold">{p.name}</h2>
            <p>₹{p.price}</p>
            <p>⭐ {p.rating}</p>

            <Link to={`/product/${p.id}`} className="text-blue-500">View Details</Link>

            <div className="flex gap-2 mt-2">
              <button className="bg-yellow-400 px-2" onClick={() => addToCart(p)}>Add</button>
              <button className="bg-gray-200 px-2" onClick={() => toggleWishlist(p)}>♥</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
