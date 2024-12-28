import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Agregar un libro al carrito con cantidades
  const addToCart = (book, quantity = 1) => {
    setCart((prevCart) => {
      const existingBookIndex = prevCart.findIndex((item) => item.id === book.id);

      if (existingBookIndex >= 0) {
        // Si el libro ya está en el carrito, actualizamos la cantidad
        const updatedCart = prevCart.map((item, index) =>
          index === existingBookIndex
            ? { ...item, quantity: item.quantity + quantity } // Incrementamos la cantidad
            : item
        );
        return updatedCart;
      } else {
        // Si no está, lo agregamos con la cantidad seleccionada
        return [...prevCart, { ...book, quantity }];
      }
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);