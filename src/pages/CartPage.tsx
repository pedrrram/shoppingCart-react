import React, { FC } from 'react';
import CartSummary from '../components/cart/CartSummary';
import ProductItem from '../components/cart/ProductItem';
import Layout from '../components/layout/Layout';
import { useCart } from '../providers/cart/CartProvider';

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const {
    cart: { products },
  } = useCart();

  return (
    <Layout>
      <main className="flex flex-col items-center max-w-screen-xl mx-auto">
        {products.length ? (
          <section className="grid sm:grid-cols-6 w-full gap-5">
            <section className="sm:col-span-4 shadow-2xl rounded-2xl overflow-hidden">
              <section className="bg-sky-100 p-4 text-2xl text-center">
                Cart
              </section>
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </section>
            <CartSummary />
          </section>
        ) : (
          <h3 className="text-4xl font-thin">Cart is empty :(</h3>
        )}
      </main>
    </Layout>
  );
};

export default Cart;
