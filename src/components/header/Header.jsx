import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Puedes agregar estilos aquí

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Relatos de Papel</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;