import React from 'react';
import './SearchBar.css';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar libros por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;