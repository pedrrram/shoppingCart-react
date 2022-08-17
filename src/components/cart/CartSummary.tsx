import { FC } from 'react';
import { useCart } from '../../providers/cart/CartProvider';

interface CartSummaryProps {}

const CartSummary: FC<CartSummaryProps> = () => {
  const { cart: { total } } = useCart();
  return (
    <section className="sm:col-span-2 shadow-2xl bg-sky-100 rounded-lg max-h-[440px]">
      cart summary
      { total }
    </section>
  );
};

export default CartSummary;
