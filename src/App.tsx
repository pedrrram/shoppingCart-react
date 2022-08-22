import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/HomePage';
import Cart from './pages/CartPage';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';

import CartProvider from './providers/cart/CartProvider';
import AuthProvider from './providers/auth/AuthProvider';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="text-slate-900 bg-sky-50 h-full min-h-screen">
          <ToastContainer position="top-right" autoClose={2000} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
