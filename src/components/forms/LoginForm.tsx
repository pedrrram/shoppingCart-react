import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import { Link } from 'react-router-dom';

interface LoginProps {}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Email is NOT valid :(')
    .required('Email is Required :('),
  password: Yup.string().required('Password is Required :('),
});

const Login: FC<LoginProps> = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form
      className="flex flex-col items-center shadow-lg rounded-2xl overflow-hidden w-[670px]"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-full py-4 bg-sky-100 flex justify-center items-center border-b-2 border-sky-600">
        <h1 className="text-2xl font-thin">Login</h1>
      </div>
      <div className="flex flex-col items-center justify-center px-5 py-10">
        <Input
          label="Email:"
          name="email"
          placeholder="example@email.com"
          formik={formik}
          type="email"
        />
        <Input
          label="Password:"
          name="password"
          formik={formik}
          type="password"
          placeholder="password"
        />
        <button
          type="submit"
          className="relative bg-sky-600 rounded-xl w-80 px-4 py-2 flex items-center justify-center text-white cursor-pointer disabled:bg-sky-200 disabled:cursor-not-allowed transition-all active:bg-sky-700"
          disabled={!formik.isValid}
        >
          Login
        </button>
        <Link to="/signup" className='w-full mt-2'>
          <span className="text-sky-600 font-medium">
            Dont have an account? Join us
          </span>
        </Link>
      </div>
    </form>
  );
};

export default Login;
