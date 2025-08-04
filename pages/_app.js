import '../styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className="bg-pink-300 py-3 px-8 flex gap-8">
        <Link href="/" className="font-bold text-pink-900 text-xl">Adios</Link>
        <Link href="/cart">Cart</Link>
      </nav>
      <Component {...pageProps} />
    </>
  )
}
