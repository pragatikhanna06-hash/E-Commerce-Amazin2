export default function Checkout() {
  return (
    <div className="p-6">
      <h1 className="text-2xl">Checkout</h1>
      <input placeholder="Address" className="border p-2 block mt-2" />
      <select className="border p-2 mt-2">
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Card</option>
      </select>
      <button className="bg-green-500 text-white mt-4 px-4 py-2">Place Order</button>
    </div>
  );
}
