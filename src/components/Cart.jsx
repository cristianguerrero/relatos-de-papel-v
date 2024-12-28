import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Agrupar productos por ID y sumar cantidades
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity; // Sumar cantidad real
    } else {
      acc.push({ ...item }); // Añadir nuevo producto al agrupado
    }
    return acc;
  }, []);

  return (
    <div className="cart-container">
      <h3 className="cart-title">Carrito</h3>
      {groupedCart.length === 0 ? (
        <p className="cart-empty">El carrito está vacío</p>
      ) : (
        <ul className="cart-list">
          {groupedCart.map((book) => (
            <li key={book.id} className="cart-item">
              <span>
                {book.title} <strong>x{book.quantity}</strong>
              </span>
              <button
                className="cart-remove-button"
                onClick={() => removeFromCart(book.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {groupedCart.length > 0 && (
        <button
          className="cart-checkout-button"
          onClick={() => navigate('/checkout')}
        >
          Ir al Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;