import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './pages/Landing';
import Home from './pages/home/Home';
import Book from './pages/book/Book';
import Checkout from './pages/checkout/Checkout';
import Cart from './components/Cart';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const location = useLocation();

  // Definir las rutas en las que se mostrará el carrito
  const showCartOnPaths = ['/home', '/book'];

  return (
    // 
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // 
    <>
      <Header />
      {showCartOnPaths.some((path) => location.pathname.startsWith(path)) && <Cart />}

      {/* <Cart /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<><Cart /><Home /></>} />
        <Route path="/book/:id" element={<><Cart /><Book /></>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
