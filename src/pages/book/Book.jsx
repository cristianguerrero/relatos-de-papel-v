import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useBooks } from '../../hooks/useBooks'; 
import './Book.css';

// const books = [
//   { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes', price: 20, image: '/src/assets/logo.png', description: 'Una obra maestra de la literatura española.', reviews: ['Una obra maestra de la literatura.', 'Muy inspirador y profundo.'], },
//   { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez', price: 25, image: '/src/assets/logo.png', description: 'Un clásico de la literatura latinoamericana.', reviews: ['Un libro increíblemente emotivo.', 'Obra maestra del realismo mágico.'], },
//   { id: 3, title: 'Don Juan Tenorio', author: 'José Zorrilla', price: 15, image: '/src/assets/logo.png', description: 'Una obra destacada del romanticismo español.', reviews: ['Una historia clásica que nunca envejece.', 'Fascinante y llena de emoción.'], },
// ];

const Book = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { books } = useBooks();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(book, quantity);
    } else {
      alert('Por favor, selecciona una cantidad válida.');
    }
  };

  return (
    <div className="book-container">
      <div className="book-content">
        {/* Imagen del libro */}
        <div className="book-image">
          <img src={book.image} alt={book.title} />
        </div>

        {/* Información del libro */}
        <div className="book-details">
          <h1>{book.title}</h1>
          <p className="book-author">Autor: {book.author}</p>
          <div className="book-rating">
                {'★'.repeat(Math.floor(book.rating))}
                {'☆'.repeat(5 - Math.floor(book.rating))}
              </div>
          <p className="book-description">{book.description}</p>
          <p className="book-price">Precio: ${book.price}</p>
          <div className="book-quantity">
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
          </div>
          <button className="book-add-button" onClick={handleAddToCart}>
            Añadir al carrito
          </button>
        </div>
      </div>

      {/* Reseñas */}
      <div className="book-reviews">
        <h3>Reseñas:</h3>
        <ul>
          {book.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Book;