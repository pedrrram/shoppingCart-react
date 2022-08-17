import React, { createContext, FC, useContext, useReducer } from 'react';
import { ICartContext, ICart, ICartAction } from '../../types/Cart';
import { cartReducer } from './CartReducer';

const initialCart: ICart = {
  products: [],
  total: 0,
};

const CartContext = createContext<ICartContext>({
  cart: initialCart,
  dispatch: (action: ICartAction) => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart, dispatch } = useContext(CartContext);
  return { cart, dispatch };
};

export default CartProvider;
