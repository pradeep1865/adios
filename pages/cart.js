import { useState, useEffect } from 'react';
import Cart from '../components/Cart';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  const total = cart.reduce((t, p) => t + p.price, 0);

  function onCheckout() {
    alert('Checkout is not implemented in demo.');
  }

  return <Cart cartItems={cart} total={total} onCheckout={onCheckout} />;
}
