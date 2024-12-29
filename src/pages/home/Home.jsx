import React, { useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import BookCarousel from '../../components/bookCarousel/BookCarousel';
import { useBooks } from '../../hooks/useBooks';
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0); // Estado para la página actual
  const { filterBooks } = useBooks();

  // Aplica el filtro basado en la barra de búsqueda
  const filteredBooks = filterBooks(search);

  // Resetea la página a 0 cuando el texto del filtro cambia
  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(0);
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