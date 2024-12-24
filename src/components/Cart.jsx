import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div style={{ position: 'fixed', right: '10px', top: '10px', width: '250px', border: '1px solid #ccc', padding: '10px', background: '#fff' }}>
      <h3>Carrito</h3>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((book) => (
            <li key={book.id} style={{ marginBottom: '5px' }}>
              {book.title}{' '}
              <button onClick={() => removeFromCart(book.id)} style={{ marginLeft: '10px' }}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={() => navigate('/checkout')}>Ir al Checkout</button>
      )}
    </div>
  );
};

export default Cart;