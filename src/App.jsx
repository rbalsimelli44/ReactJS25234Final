import React, { useState } from 'react';
import Header from './components/layout/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/layout/Footer';
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProdProvider } from "./context/ProdContext";

import './styles/App.css';

export default function App() {
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  return (
    <>
    <AuthProvider>
      <CartProvider>
        <ProdProvider>
          <section className="layout">
            <Header carritoAbierto={carritoAbierto} setCarritoAbierto={setCarritoAbierto} />
            <AppRoutes />           
            <Footer />
          </section>
        </ProdProvider>
      </CartProvider>
    </AuthProvider>
    </>
  );
};