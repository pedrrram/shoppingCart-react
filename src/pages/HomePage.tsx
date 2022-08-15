import React, { FC } from 'react';

import Layout from "../components/layout/Layout"

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <h1>HomePage</h1>
    </Layout>
  );
};

export default Home;
