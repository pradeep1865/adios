import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (id) {
      fetch('/api/products')
        .then(res => res.json())
        .then(products => setProduct(products.find(p => p._id === id)))
    }
  }, [id])

  if (!product) return <div className="p-8">Loading…</div>

  return (
    <div className="p-8 min-h-screen bg-pink-50">
      <div className="max-w-2xl mx-auto bg-white rounded-md shadow p-6">
        <img src={product.image} className="w-full h-64 object-cover mb-4" />
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-pink-600 font-bold text-xl mt-2">₹{product.price}</p>
        <p className="mt-2">{product.description}</p>
        <button
          onClick={() => {
            // Simple cart: save product ID to localStorage
            let cart = JSON.parse(localStorage.getItem('cart') || '[]')
            cart.push(product)
            localStorage.setItem('cart', JSON.stringify(cart))
            alert('Added to cart!')
          }}
          className="mt-4 px-5 py-2 bg-pink-500 rounded text-white hover:bg-pink-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
