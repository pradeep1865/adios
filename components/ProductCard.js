import Image from 'next/image';
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="rounded shadow p-4 hover:shadow-md bg-white flex flex-col">
      <Image
  src={product.image}
  alt={product.name}
  width={400}
  height={400}
  className="rounded h-48 w-full object-cover mb-2"
/>
      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
      <p className="text-pink-600 font-bold mb-2">₹{product.price}</p>
      <div className="flex-1 flex items-end">
        <Link href={`/products/${product._id}`}>
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded transition">View Details</button>
        </Link>
      </div>
    </div>
  );
}
