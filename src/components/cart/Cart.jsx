import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Agrupar productos por ID y sumar cantidades
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity; // Sumar cantidad real
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  return (
    <div>
      {/* Botón para desplegar/ocultar el carrito */}
      <button className="cart-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Carrito' : 'Abrir Carrito'}
      </button>

      {/* Contenedor del carrito desplegable */}
      <div className={`cart-container ${isOpen ? 'open' : 'closed'}`}>
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
    </div>
  );
};

export default Cart;