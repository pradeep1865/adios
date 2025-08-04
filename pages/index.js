import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts)
  }, [])

  return (
    <div className="bg-pink-50 min-h-screen">
      <header className="text-center py-8 bg-pink-200 text-pink-800">
        <h1 className="text-4xl font-bold">Adios</h1>
        <p className="text-xl">Baby & Kids Products Store</p>
      </header>
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product._id} className="bg-white shadow-md rounded-lg p-4 text-center">
              <img src={product.image} alt={product.name} className="mx-auto mb-2 h-40 object-cover"/>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-pink-500 font-semibold">₹{product.price}</p>
              <Link href={`/products/${product._id}`}>
                <button className="mt-2 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
