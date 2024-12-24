import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h1>Resumen del Pedido</h1>
      <p>Aquí se mostrarán los libros seleccionados para comprar.</p>
      <button onClick={() => alert('Compra realizada con éxito!')}>
        Confirmar Compra
      </button>
    </div>
  );
};

export default Checkout;