import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <div className="flex justify-between items-center p-4 bg-black text-white">
      <Link to="/" className="text-2xl font-bold">AmazonClone</Link>

      <div className="flex gap-6">
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}
