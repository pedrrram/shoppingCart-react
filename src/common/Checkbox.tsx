import { FC } from 'react';

interface CheckboxProps {
  label: string;
  name: string;
  formik: any;
}

const Checkbox: FC<CheckboxProps> = ({ label, name, formik }) => {
  return (
    <div className="mb-5 flex flex-col w-80">
      <div className="flex items-center w-full">
        <label className="mb-1 mr-3 text-gray-400" htmlFor={name}>
          {label}
        </label>
        <input
          type="checkbox"
          name={name}
          value={formik.values[name]}
          id={name}
          {...formik.getFieldProps(name)}
          checked={formik.values[name]}
        />
          </div>
        {formik.errors[name] && formik.touched[name] && (
          <div className="text-rose-600 font-light w-full block">{formik.errors[name]}</div>
        )}
    </div>
  );
};

export default Checkbox;
