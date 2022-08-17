import { Dispatch } from 'react';
import { IProduct } from './IProduct';

export interface ICart {
  products: IProduct[];
  total: number;
}

export enum CartActionType {
  ADD_TO_CART = 'ADD_TO_CART',
}

export interface ICartAction {
  type: CartActionType;
  payload?: any;
}

export type ICartContext = {
  cart: ICart;
  dispatch: Dispatch<ICartAction>;
};
