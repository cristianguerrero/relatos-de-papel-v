import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // Agrupar libros iguales y sumar cantidades
  const groupedCart = cart.reduce((acc, book) => {
    const existingBook = acc.find((item) => item.id === book.id);
    if (existingBook) {
      existingBook.quantity += book.quantity;
    } else {
      acc.push({ ...book });
    }
    return acc;
  }, []);

  const totalBooks = groupedCart.reduce((acc, book) => acc + book.quantity, 0);
  const totalPrice = groupedCart.reduce((acc, book) => acc + book.quantity * book.price, 0);

  const handleConfirmPurchase = () => {
    alert('¡Compra realizada con éxito!');
    clearCart();
    navigate('/');
  };

  return (
    <div className="checkout-container">
      <h1>Resumen del Pedido</h1>
      {groupedCart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="checkout-summary">
            {groupedCart.map((book) => (
              <div key={book.id} className="checkout-item">
                <img src={book.image} alt={book.title} className="checkout-image" />
                <div className="checkout-details">
                  <h3>{book.title}</h3>
                  <p>Autor: {book.author}</p>
                  <p>Cantidad: {book.quantity}</p>
                  <p>Precio total: ${(book.price * book.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-total">
            <p>
              <strong>Total de libros:</strong> {totalBooks}
            </p>
            <p>
              <strong>Precio total:</strong> ${totalPrice.toFixed(2)}
            </p>
          </div>
          <button onClick={handleConfirmPurchase} className="checkout-button">
            Confirmar Compra
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;