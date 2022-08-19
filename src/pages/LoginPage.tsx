import { FC } from 'react';
import Layout from '../components/layout/Layout';
import LoginForm from '../components/forms/LoginForm';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Login;
