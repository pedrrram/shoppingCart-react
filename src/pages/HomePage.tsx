import React, { FC } from 'react';
import AddIcon from '../components/icons/AddIcon';
import Layout from '../components/layout/Layout';
import * as data from '../data/products';
import { useCart } from '../providers/cart/CartProvider';
import { CartActionType } from '../types/Cart';
import { IProduct } from '../types/IProduct';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { cart, dispatch } = useCart();

  const addProductHandler = (product: IProduct) => {
    dispatch({ type: CartActionType.ADD_TO_CART, payload: product });
  };

  return (
    <Layout>
      <main className="container mx-auto max-w-7xl">
        <section className="flex justify-around w-full flex-wrap gap-8">
          {data.products.map((pr) => (
            <section
              key={pr.id}
              className="basis-1/4 min-w-[320px] h-fit bg-sky-50 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="h-52">
                <img src={pr.image} alt={pr.name} className="w-full h-full" />
              </div>
              <div className="py-3 px-5 font-light text-lg flex items-center justify-between">
                <div>
                  <p>{pr.name}</p>
                  <p>${pr.price}</p>
                </div>
                <div onClick={() => addProductHandler(pr)}>
                  <AddIcon />
                </div>
              </div>
            </section>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Home;
