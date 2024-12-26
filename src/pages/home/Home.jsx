import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './Home.css'; // Importamos los estilos

const Home = () => {
  const [search, setSearch] = useState('');
  const { addToCart } = useCart();

  const books = [
    { id: 1, title: 'El Quijote', image: '/src/assets/logo.png', rating: 4.5, },
    { id: 2, title: 'Cien años de soledad', image: '/src/assets/logo.png', rating: 5, },
    { id: 3, title: 'Don Juan Tenorio', image: '/src/assets/logo.png', rating: 4, },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <header className="home-header">
        <input
          type="text"
          placeholder="Buscar libros por título..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </header>
      <main className="home-main">
        <h2 className="main-title">Libros disponibles</h2>
        <ul className="book-list">
          {filteredBooks.map((book) => (
            <li key={book.id} className="book-item">
              <img src={book.image} alt={book.title} className="book-image" />
              <h3 className="book-title">{book.title}</h3>
              <div className="book-rating">
                {'★'.repeat(Math.floor(book.rating))}
                {'☆'.repeat(5 - Math.floor(book.rating))}
              </div>

              {/* <span>
                <strong>{book.title}</strong> -{' '}
                <a href={`/book/${book.id}`} className="details-link">
                  Ver detalles
                </a>
              </span> */}
              <button
                onClick={() => addToCart(book)}
                className="add-to-cart-button"
              >
                Añadir al carrito
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
