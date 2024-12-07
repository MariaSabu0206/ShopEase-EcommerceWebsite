import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; 
import Shop from './components/Shop'; 
import Product from './components/Product'; 
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import Auth from './components/Auth'; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} /> {/* Auth page displayed by default */}
          
          {/* Routes with Header and Footer */}
          <Route path="/home" element={<><Header /><Home /><Footer /></>} /> {/* Home page */}
          <Route path="/shop" element={<><Header /><Shop /><Footer /></>} /> {/* Shop page to show all products */}
          <Route path="/shop/:category" element={<><Header /><Shop /><Footer /></>} /> {/* Dynamic route for categories */}
          <Route path="/product" element={<><Header /><Product /><Footer /></>} /> {/* Route for Product page */}
          <Route path="/cart" element={<><Header /><Cart /><Footer /></>} /> {/* Route for Cart */}
          <Route path="*" element={<div>404: Page Not Found</div>} /> {/* Fallback route */}
        </Routes>  
      </Router>
    </CartProvider>
  );
};

export default App;
