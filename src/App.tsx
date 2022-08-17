import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/CartPage';
import Home from './pages/HomePage';
import CartProvider from './providers/cart/CartProvider';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <CartProvider>
      <div className="text-slate-900 bg-sky-50 h-full min-h-screen">
        <ToastContainer position="top-right" autoClose={2000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
