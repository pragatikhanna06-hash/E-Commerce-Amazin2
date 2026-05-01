import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Product {id}</h1>
      <p className="mt-2">Detailed product description here...</p>

      <button className="bg-yellow-400 mt-4 px-4 py-2" onClick={() => addToCart({ id, name: "Product " + id })}>
        Add to Cart
      </button>
    </div>
  );
}