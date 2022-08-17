import { ICart } from '../types/Cart';
import { IProduct } from '../types/IProduct';

export const isInCart = (cart: ICart, product: IProduct): boolean => {
  const isIn = cart.products.find((pr) => pr.id === product.id) ? true : false;
  return isIn;
};
