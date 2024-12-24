import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Book = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const books = [
    { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes' },
    { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    { id: 3, title: 'Don Juan Tenorio', author: 'José Zorrilla' },
  ];

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Autor: {book.author}</p>
      <button onClick={() => addToCart(book)}>Añadir al carrito</button>
    </div>
  );
};

export default Book;