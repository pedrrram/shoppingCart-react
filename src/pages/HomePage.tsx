import React, { FC } from 'react';

import Layout from '../components/layout/Layout';
import * as data from '../data/products';
import { IProduct } from '../types/IProduct';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const addProductHandler = (product: IProduct) => {
    console.log(product)
  };

  return (
    <Layout>
      <main className="container mx-auto max-w-7xl py-5">
        <section className="flex justify-around w-full flex-wrap gap-8 p-5">
          {data.products.map((pr) => (
            <section
              key={pr.id}
              className="basis-1/4 min-w-[270px] h-fit bg-sky-50 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="h-[210px]">
                <img src={pr.image} alt={pr.name} className="w-full h-full" />
              </div>
              <div className="py-3 px-5 font-light text-lg flex items-center justify-between">
                <div>
                  <p>{pr.name}</p>
                  <p>${pr.price}</p>
                </div>
                <div onClick={() => addProductHandler(pr)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-zinc-900 cursor-pointer hover:scale-110 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
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
