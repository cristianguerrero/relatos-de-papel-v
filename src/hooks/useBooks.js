import { useState } from 'react';

const initialBooks = [
  { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes', price: 20, image: '/src/assets/logo.png', rating: 4.5 },
  { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez', price: 25, image: '/src/assets/logo.png', rating: 4.7 },
  { id: 3, title: 'Don Juan Tenorio', author: 'José Zorrilla', price: 15, image: '/src/assets/logo.png', rating: 4.2 },
  { id: 4, title: 'Matar a un ruiseñor', author: 'Harper Lee', price: 22, image: '/src/assets/logo.png', rating: 4.8 },
  { id: 5, title: '1984', author: 'George Orwell', price: 18, image: '/src/assets/logo.png', rating: 4.6 },
];

export const useBooks = () => {
  const [books, setBooks] = useState(initialBooks); // Estado para los libros

  // Función para filtrar libros
  const filterBooks = (searchTerm) => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Función para agregar un libro nuevo
  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  // Devuelve libros, una función de filtro y una función para agregar libros
  return { books, filterBooks, addBook };
};