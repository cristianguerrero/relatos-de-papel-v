import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './Home.css'; // Importamos los estilos

const books = [
  { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes', price: 20, image: '/src/assets/logo.png', rating: 4.5 },
  { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez', price: 25, image: '/src/assets/logo.png', rating: 4.7 },
  { id: 3, title: 'Don Juan Tenorio', author: 'José Zorrilla', price: 15, image: '/src/assets/logo.png', rating: 4.2 },
];

const Home = () => {
  const [search, setSearch] = useState('');
  const [quantities, setQuantities] = useState(
    books.reduce((acc, book) => ({ ...acc, [book.id]: 1 }), {}) // Inicializamos cantidades
  );
  const { addToCart } = useCart();

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, value), // Evitar cantidades menores a 1
    }));
  };

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
              <p>Autor: {book.author}</p>
              <p>Precio: ${book.price}</p>
              <div className="book-rating">
                {'★'.repeat(Math.floor(book.rating))}
                {'☆'.repeat(5 - Math.floor(book.rating))}
              </div>
              <div className="quantity-container">
                <label htmlFor={`quantity-${book.id}`}>Cantidad:</label>
                <input
                  id={`quantity-${book.id}`}
                  type="number"
                  min="1"
                  value={quantities[book.id]}
                  onChange={(e) => handleQuantityChange(book.id, parseInt(e.target.value))}
                  className="quantity-input"
                />
              </div>
              <button
                onClick={() => addToCart({ ...book, quantity: quantities[book.id] })}
                className="button-blue"
              >
                Añadir al carrito
              </button>
              <a href={`/book/${book.id}`} className="button-blue">
                Ver detalles
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
