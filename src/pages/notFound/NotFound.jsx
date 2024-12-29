import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'; // Archivo de estilos

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Redirige a la página principal
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Lo sentimos, la página que buscas no existe.</p>
        <button className="not-found-button" onClick={handleGoHome}>
          Volver a la página principal
        </button>
      </div>
    </div>
  );
};

export default NotFound;