import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-pink-100 shadow py-4 px-8 flex justify-between items-center">
      <Link href="/">
        <span className="text-3xl font-extrabold text-pink-700 cursor-pointer">Adios</span>
      </Link>
      <div className="space-x-6">
        <Link href="/cart" className="text-pink-800 font-bold hover:underline">Cart</Link>
        <Link href="/account" className="text-pink-800 font-bold hover:underline">Account</Link>
        <Link href="/admin/dashboard" className="text-pink-600 font-bold hover:underline">Admin</Link>
      </div>
    </nav>
  );
}
