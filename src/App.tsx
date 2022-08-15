import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/CartPage';
import Home from './pages/HomePage';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className='text-slate-900'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  );
};

export default App;
