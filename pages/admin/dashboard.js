import Link from 'next/link';
export default function Dashboard() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <ul>
        <li>
  <Link href="/admin/products" className="text-pink-700 underline">Manage Products</Link>
</li>
        {/* Add analytics/links here */}
      </ul>
    </main>
  );
}
