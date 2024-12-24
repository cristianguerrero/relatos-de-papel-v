import React, { useState } from 'react';

const Home = () => {
  const [search, setSearch] = useState('');
  const books = [
    { id: 1, title: 'El Quijote' },
    { id: 2, title: 'Cien años de soledad' },
    { id: 3, title: 'Don Juan Tenorio' },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <header style={{ padding: '10px', background: '#f5f5f5' }}>
        <input
          type="text"
          placeholder="Buscar libros por título..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '5px', width: '300px' }}
        />
      </header>
      <main>
        <h2>Libros disponibles</h2>
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              {book.title} - <a href={`/book/${book.id}`}>Ver detalles</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;