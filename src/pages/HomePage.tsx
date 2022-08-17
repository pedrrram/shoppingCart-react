import React, { FC } from 'react';
import Layout from '../components/layout/Layout';
import Product from '../components/products/Product';
import * as data from '../data/products';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <main className="container mx-auto max-w-7xl">
        <section className="flex justify-around w-full flex-wrap gap-8">
          {data.products.map((pr) => (
            <Product key={pr.id} product={pr} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Home;
