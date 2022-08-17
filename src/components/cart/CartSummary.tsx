import { FC } from 'react';

interface CartSummaryProps {}

const CartSummary: FC<CartSummaryProps> = () => {
  return (
    <section className="sm:col-span-2 shadow-2xl bg-sky-100 rounded-lg max-h-[440px]">
      cart summary
    </section>
  );
};

export default CartSummary;
