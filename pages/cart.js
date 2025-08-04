import { useEffect, useState } from 'react'

export default function Cart() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, [])

  const total = cart.reduce((t, p) => t + p.price, 0)

  return (
    <div className="p-8 min-h-screen bg-pink-50">
      <div className="max-w-xl mx-auto bg-white rounded-md shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.map((p, idx) => (
          <div key={idx} className="border-b py-2 flex justify-between items-center">
            <span>{p.name}</span>
            <span>₹{p.price}</span>
          </div>
        ))}
        <div className="font-bold mt-4 text-right">
          Total: ₹{total}
        </div>
        <button
          className="mt-4 px-5 py-2 bg-pink-500 rounded text-white hover:bg-pink-600"
          onClick={() => { alert("Checkout not implemented in demo!"); }}
        >Checkout</button>
      </div>
    </div>
  )
}
