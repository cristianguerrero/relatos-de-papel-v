import React from 'react';
import './SearchBar.css';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar libros por título..."
        value={search} // Estado controlado desde el componente padre (Home)
        onChange={(e) => setSearch(e.target.value)} // Actualiza el estado
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;