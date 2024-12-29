import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Bienvenido a Relatos de Papel</h1>
      <p>Serás redirigido a la página principal en breve...</p>
    </div>
  );
};

export default Landing;