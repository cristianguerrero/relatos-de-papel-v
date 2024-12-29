import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import SearchBar from '../../components/searchBar/SearchBar';
import BookCarousel from '../../components/bookCarousel/BookCarousel';
import './Home.css'; // Importamos los estilos
import { useBooks } from '../../hooks/useBooks';

// const books = [
//   { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes', price: 20, image: '/src/assets/logo.png', rating: 4.5 },
//   { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez', price: 25, image: '/src/assets/logo.png', rating: 4.7 },
//   { id: 3, title: 'Don Juan Tenorio', author: 'José Zorrilla', price: 15, image: '/src/assets/logo.png', rating: 4.2 },
// ];

const Home = () => {
  const [search, setSearch] = useState(''); // Estado para el filtro
  const [currentPage, setCurrentPage] = useState(0); // Estado para la página actual
  const { books, filterBooks } = useBooks();
  
  // const [quantities, setQuantities] = useState(
  //   books.reduce((acc, book) => ({ ...acc, [book.id]: 1 }), {}) // Inicializamos cantidades
  // );
  // const { addToCart } = useCart();

  // const handleQuantityChange = (id, value) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [id]: Math.max(1, value), // Evitar cantidades menores a 1
  //   }));
  // };

  // Aplica el filtro basado en el estado de búsqueda
  // const filteredBooks = books.filter((book) =>
  //   book.title.toLowerCase().includes(search.toLowerCase())
  // );

  // Aplica el filtro basado en la barra de búsqueda
  const filteredBooks = filterBooks(search);

  // Resetea la página a 0 cuando el texto del filtro cambia
  const handleSearchChange = (value) => {
    setSearch(value); // Actualiza el texto del filtro
    setCurrentPage(0); // Resetea la página a la primera
  };

  return (
    <div className="home-container">
      <header className="home-header">
        {/* Usamos el componente SearchBar */}
        <SearchBar search={search} setSearch={handleSearchChange} />
      </header>
      <main className="home-main">
        <h2 className="main-title">Libros disponibles</h2>
        {/* Usamos el componente BookCarousel para mostrar los libros */}
        <BookCarousel books={filteredBooks} itemsPerPage={3}
        currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </main>
    </div>
  );
};

export default Home;