import { FC } from 'react';

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  formik: any;
}

const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  formik,
  type = 'text',
}) => {
  return (
    <div className="mb-5 flex flex-col w-80">
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        className={`px-4 py-2 rounded-lg outline-slate-900 border-b-2 border-transparent focus:outline-none focus:border-b-2 focus:border-sky-600 ${
          formik.errors[name] && 'focus:border-rose-500'
        }`}
        name={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-rose-600 font-light">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
