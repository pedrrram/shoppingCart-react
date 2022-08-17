import { ICart, ICartAction, CartActionType } from '../../types/Cart';

export const cartReducer = (state: ICart, action: ICartAction) => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART:
      const updatedProducts = [...state.products];
      const updatedProductIndex = updatedProducts.findIndex(
        (pr) => pr.id === action.payload.id
      );
      if (updatedProductIndex < 0) {
        updatedProducts.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        const updatedProduct = { ...updatedProducts[updatedProductIndex] };
        updatedProduct.quantity++;
        updatedProducts[updatedProductIndex] = updatedProduct;
      }
      return { total: state.total + action.payload.price, products: updatedProducts };
    default:
      return state;
  }
};
