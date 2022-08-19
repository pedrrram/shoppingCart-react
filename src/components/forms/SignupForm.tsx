import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import { Link } from 'react-router-dom';
import Checkbox from '../../common/Checkbox';

interface SignupFormProps {}

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less :(')
    .required('Name is Required :('),
  email: Yup.string()
    .email('Email is NOT valid :(')
    .required('Email is Required :('),
  phoneNumber: Yup.string()
    .required('Phone number is Required :(')
    .matches(/^[0-9]{11}$/, 'Phone number is NOT valid :('),
  password: Yup.string()
    .min(6, '6 characters at least :(')
    .required('Password is Required :('),
  passwordConfirm: Yup.string()
    .required('Confirm is Required :(')
    .oneOf([Yup.ref('password'), null], 'Password must be match :('),
  terms: Yup.boolean()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'The terms and conditions must be accepted.'),
});

const SignupForm: FC<SignupFormProps> = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      passwordConfirm: '',
      terms: false,
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
        <h1 className="text-2xl font-thin">Sign up</h1>
      </div>
      <div className="flex flex-col items-center justify-center p-5 pb-10">
        <Input
          label="Name:"
          name="name"
          placeholder="your name..."
          formik={formik}
        />
        <Input
          label="Email:"
          name="email"
          placeholder="example@email.com"
          formik={formik}
          type="email"
        />
        <Input
          label="Phone:"
          name="phoneNumber"
          placeholder="09123456789"
          formik={formik}
          type="tel"
        />
        <Input
          label="Password:"
          name="password"
          formik={formik}
          type="password"
          placeholder="6+ strong password"
        />
        <Input
          label="Confirm Password:"
          name="passwordConfirm"
          formik={formik}
          type="password"
          placeholder="confirm your password"
        />

        <Checkbox
          label="Accept Terms And Conditions"
          name="terms"
          formik={formik}
        />

        <button
          type="submit"
          className="relative bg-sky-600 rounded-xl w-80 px-4 py-2 flex items-center justify-center text-white cursor-pointer disabled:bg-sky-200 disabled:cursor-not-allowed transition-all active:bg-sky-700"
          disabled={!formik.isValid}
        >
          Sign up
        </button>

        <Link to="/login" className="w-full mt-2">
          <span className="text-sky-600 font-medium">
            have an account? Log in
          </span>
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
