import React from 'react';
import './Footer.css'; // Puedes agregar estilos aquí

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 - Relatos de Papel. Todos los derechos reservados.</p>
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;