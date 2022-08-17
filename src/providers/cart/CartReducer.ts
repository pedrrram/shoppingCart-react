import { ICart, ICartAction, CartActionType } from '../../types/Cart';
const { ADD_TO_CART, REMOVE_PRODUCT } = CartActionType;

export const cartReducer = (state: ICart, action: ICartAction) => {
  switch (action.type) {
    case ADD_TO_CART: {
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
      return {
        total: state.total + action.payload.price,
        products: updatedProducts,
      };
    }
    case REMOVE_PRODUCT: {
      let updatedProducts = [...state.products];
      const updatedProductIndex = updatedProducts.findIndex(
        (pr) => pr.id === action.payload.id
      );
      const updatedProduct = { ...updatedProducts[updatedProductIndex] };
      if (updatedProduct.quantity === 1) {
        updatedProducts = updatedProducts.filter(
          (pr) => pr.id !== action.payload.id
        );
      } else {
        updatedProduct.quantity -= 1;
        updatedProducts[updatedProductIndex] = updatedProduct;
      }
      return {
        total: state.total - action.payload.price,
        products: updatedProducts,
      };
    }

    default:
      return state;
  }
};
