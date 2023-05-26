import { MdInfo } from "react-icons/md";

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  required,
  label,
  currency,
  ...props
}) => {
  return (
    <div className={`flex w-full flex-col ${label ? "my-3" : "my-0"}`}>
      {label && (
        <label htmlFor={field.name} className="mb-2 text-sm">
          {label}
          {required && <span className="font-bold text-red-500">*</span>}
        </label>
      )}
      <div
        className={`
        flex
        flex-row
        items-center
        rounded
        border-[1px]
        focus-within:border-transparent
        focus-within:outline
        focus-within:outline-2
        focus-within:outline-blue-500
        ${
          touched[field.name] && errors[field.name]
            ? "border-red-500"
            : "border-gray-400"
        }
      `}
      >
        {currency && <div className="pl-4 text-slate-400">{currency}</div>}
        <input
          type="text"
          {...field}
          {...props}
          className="
            h-12
            w-full
            rounded
            px-4
            py-3.5
            text-slate-700
            outline-none
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        />
      </div>

      {touched[field.name] && errors[field.name] && (
        <div className="mb-2 flex items-center gap-1 text-sm text-red-500">
          <MdInfo />
          {errors[field.name]}
        </div>
      )}
    </div>
  );
};

export default Input;
