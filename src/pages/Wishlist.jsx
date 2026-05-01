import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl">Wishlist</h1>
      {wishlist.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}