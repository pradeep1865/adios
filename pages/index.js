import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  return (
    <main className="max-w-7xl mx-auto py-10 px-4">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-pink-600">Welcome to Adios</h1>
        <p className="mt-2 text-pink-700">Cute & Quality Products for Kids and Babies</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(product =>
          <ProductCard key={product._id} product={product} />
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  // Replace with your real API/products path
  const res = await fetch('https://adios-hazel.vercel.app/api/products');
  const products = await res.json();
  return { props: { products } };
}
