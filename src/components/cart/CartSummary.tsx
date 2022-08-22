import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../providers/auth/AuthProvider';
import { useCart } from '../../providers/cart/CartProvider';

interface CartSummaryProps {}

const CartSummary: FC<CartSummaryProps> = () => {
  const {
    cart: { products, total },
  } = useCart();

  const { userData } = useAuth();

  const discountedTotal: number = products.reduce(
    (sum, pr) => sum + pr.offPrice * pr.quantity,
    0
  );

  return (
    <section className="sm:col-span-2 shadow-2xl bg-sky-100 rounded-2xl max-h-[440px] overflow-hidden">
      <div className="py-4 px-6 pb-3 border-b-2 border-dashed border-slate-500">
        <h4 className="font-thin text-3xl">Total</h4>
      </div>
      <div className="py-4 px-6 flex flex-col font-thin text-xl">
        <div className="space-y-3 pb-3 border-b border-slate-300">
          <p>
            Subtotal: <span className="ml-3 font-semibold">${total}</span>
          </p>
          <p>
            Discount:
            <span className="ml-3 font-semibold">
              ${total - discountedTotal}
            </span>
          </p>
        </div>
        <p className="font-medium text-2xl py-3">
          Total:
          <span className="ml-3 font-bold text-xl">${discountedTotal}</span>
        </p>
        <Link to={userData ? '/checkout' : '/login?redirect=checkout'}>
          <button className="bg-sky-600 text-white py-3 rounded-xl mt-5 font-medium w-full">
            Checkout
          </button>
        </Link>
        <span className="text-sky-600 text-base mt-2 font-medium cursor-pointer">
          I Have a Coupon
        </span>
      </div>
    </section>
  );
};

export default CartSummary;
