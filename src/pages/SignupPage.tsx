import { FC } from 'react';
import SignupForm from '../components/forms/SignupForm';
import Layout from '../components/layout/Layout';

interface SignupProps {}

const Signup: FC<SignupProps> = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <SignupForm />
      </div>
    </Layout>
  );
};

export default Signup;
