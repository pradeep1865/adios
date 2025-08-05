import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ProductDetail({ product }) {
  if (!product) return <div>Loading…</div>;

  return (
    <main className="max-w-2xl mx-auto rounded shadow bg-white p-8 mt-10">
      <Image
  src={product.image}
  alt={product.name}
  width={400}
  height={400}
  className="rounded h-48 w-full object-cover mb-2"
/>
      <h2 className="text-3xl font-bold text-pink-600 mt-4">{product.name}</h2>
      <p className="text-pink-700 font-bold text-xl mt-2 mb-4">₹{product.price}</p>
      <div className="mb-4">{product.description}</div>
      <button className="px-6 py-2 bg-pink-500 rounded text-white hover:bg-pink-600">Add to Cart</button>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://adios-hazel.vercel.app/api/products`);
  const products = await res.json();
  const product = products.find(p => p._id === params.id) || null;
  return { props: { product } };
}
