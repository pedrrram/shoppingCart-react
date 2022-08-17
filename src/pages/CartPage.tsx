import React, { FC } from 'react';
import ProductItem from '../components/cart/ProductItem';
import Layout from '../components/layout/Layout';
import { useCart } from '../providers/cart/CartProvider';

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const { cart, dispatch } = useCart();
  const { total, products } = cart;

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
                <ProductItem product={product} />
              ))}
            </section>
            <section className="sm:col-span-2 shadow-2xl bg-sky-100 rounded-lg max-h-[620px]">
              cart summary
            </section>
          </section>
        ) : (
          <h3 className="text-4xl font-thin">Cart is empty :(</h3>
        )}
      </main>
    </Layout>
  );
};

export default Cart;
