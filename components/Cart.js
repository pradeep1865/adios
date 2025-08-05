export default function Cart({ cartItems, total, onCheckout }) {
  return (
    <div className="max-w-xl mx-auto rounded shadow p-6 mt-10 bg-white">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, i) => (
            <div key={i} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <div className="flex justify-between mt-4 font-bold">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button onClick={onCheckout} className="mt-6 px-5 py-2 bg-pink-500 rounded text-white hover:bg-pink-600 w-full">Checkout</button>
        </>
      )}
    </div>
  );
}
