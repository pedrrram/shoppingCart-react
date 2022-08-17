import { FC } from 'react';
import { useCart } from '../../providers/cart/CartProvider';
import { CartActionType } from '../../types/Cart';
import { IProduct } from '../../types/IProduct';
import AddIcon from '../icons/AddIcon';

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  const { cart, dispatch } = useCart();

  const addProductHandler = (product: IProduct) => {
    dispatch({ type: CartActionType.ADD_TO_CART, payload: product });
  };

  return (
    <section
      key={product.id}
      className="basis-1/4 min-w-[320px] h-fit bg-sky-50 shadow-lg rounded-lg overflow-hidden"
    >
      <div className="h-52">
        <img src={product.image} alt={product.name} className="w-full h-full" />
      </div>
      <div className="py-3 px-5 font-light text-lg flex items-center justify-between">
        <div>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
        <div onClick={() => addProductHandler(product)}>
          <AddIcon />
        </div>
      </div>
    </section>
  );
};

export default Product;
