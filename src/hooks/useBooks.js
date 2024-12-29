import { useState } from 'react';

const initialBooks = [
  { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes', price: 20, image: '/src/assets/logo.png', rating: 4.5, description: 'Una obra maestra de la literatura española.', reviews: ['Una obra maestra de la literatura.', 'Muy inspirador y profundo.'], },
  { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez', price: 25, image: '/src/assets/logo.png', rating: 4.7, description: 'Un clásico de la literatura latinoamericana.', reviews: ['Un libro increíblemente emotivo.', 'Obra maestra del realismo mágico.'], },
  { id: 3, title: 'Don Juan Tenorio', author: 'José Zorrilla', price: 15, image: '/src/assets/logo.png', rating: 4.2, description: 'Una obra destacada del romanticismo español.', reviews: ['Una historia clásica que nunca envejece.', 'Fascinante y llena de emoción.'], },
  { id: 4, title: 'Matar a un ruiseñor', author: 'Harper Lee', price: 22, image: '/src/assets/logo.png', rating: 4.8, description: 'Un poderoso relato sobre la injusticia racial y la pérdida de la inocencia en el sur de los Estados Unidos.', reviews: ['Una novela conmovedora e impactante.', 'Un clásico que todos deberían leer al menos una vez.'], },
  { id: 5, title: '1984', author: 'George Orwell', price: 18, image: '../assets/logo.png', rating: 4.6, description: 'Una inquietante distopía que explora los peligros del totalitarismo y la vigilancia extrema.', reviews: ['Un libro que te hace reflexionar profundamente sobre la sociedad.', 'Una obra maestra inquietantemente relevante en la actualidad.'], },
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