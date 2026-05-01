import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl">Shopping Cart</h1>

      {cart.map(item => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h2 className="mt-4">Total: ₹{total}</h2>

      <Link to="/checkout">
        <button className="bg-green-500 text-white px-4 py-2 mt-2">Checkout</button>
      </Link>
    </div>
  );
}