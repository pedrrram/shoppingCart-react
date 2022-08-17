import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../providers/cart/CartProvider';
import { CartActionType } from '../../types/Cart';
import { IProduct } from '../../types/IProduct';
import { isInCart } from '../../utils/isInCart';
import AddIcon from '../icons/AddIcon';
import CartIcon from '../icons/CartIcon';

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();

  const addProductHandler = (product: IProduct) => {
    dispatch({ type: CartActionType.ADD_TO_CART, payload: product });
    toast.success(`${product.name} Added to Cart!`, {
      icon: () => <CartIcon className="text-sky-600" />,
      onClick: () => navigate('/cart'),
    });
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
        <div>
          {isInCart(cart, product) ? (
            <span
              onClick={() => navigate('/cart')}
              className="bg-sky-200 text-slate-900 px-3 py-2 rounded-xl cursor-pointer text-base flex items-center"
            >
              Check Cart <CartIcon className="h-5 w-5 cursor-pointer ml-2" />
            </span>
          ) : (
            <AddIcon onClick={() => addProductHandler(product)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
