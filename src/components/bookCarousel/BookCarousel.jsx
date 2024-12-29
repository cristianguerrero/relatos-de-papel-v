import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './BookCarousel.css';

const BookCarousel = ({ books, itemsPerPage = 3, currentPage, setCurrentPage }) => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  // Divide los libros en páginas
  const totalPages = Math.ceil(books.length / itemsPerPage);
  const paginatedBooks = books.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleAddToCart = (book) => {
    const quantity = quantities[book.id] || 1; // Usar la cantidad específica del libro o 1 por defecto
    if (quantity > 0) {
      addToCart(book, quantity);
    } else {
      alert('Por favor, selecciona una cantidad válida.');
    }
  };

  const handleQuantityChange = (bookId, value) => {
    setQuantities({
      ...quantities,
      [bookId]: parseInt(value) || 1, // Actualizar la cantidad específica del libro
    });
  };

  return (
    <div className="book-carousel">
      <div className="carousel-books">
        {paginatedBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h3 className="book-title">{book.title}</h3>
            <p>Autor: {book.author}</p>
            <div className="book-rating">
                {'★'.repeat(Math.floor(book.rating))}
                {'☆'.repeat(5 - Math.floor(book.rating))}
              </div>
            <p>Precio: ${book.price}</p>
            <div className="book-quantity">
              <label htmlFor={`quantity-${book.id}`}>Cantidad:</label>
              <input
                type="number"
                id={`quantity-${book.id}`}
                min="1"
                value={quantities[book.id] || 1}
                onChange={(e) => handleQuantityChange(book.id, e.target.value)}
              />
            </div>
            <div className="button-container">
              <div className="mrg-btm">
                <a href={`/book/${book.id}`} className="button_detalle">
                  Ver detalles
                </a>
              </div>
              <div>
                <button
                  onClick={() => handleAddToCart(book)}
                  className="button-blue"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} disabled={currentPage === 0}>
          Anterior
        </button>
        <span>
          Página {currentPage + 1} de {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default BookCarousel;