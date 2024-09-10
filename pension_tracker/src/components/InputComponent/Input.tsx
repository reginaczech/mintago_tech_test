import { InputProps } from "./Input.types";

const Input = ({
  name,
  label,
  type,
  value,
  handleChange,
  min,
  max,
  isCurrency,
  suffix,
}: InputProps) => {
  return (
    <>
      <div className="flex flex-col mb-4">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor={name}
        >
          {label}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          {/* <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-900 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"> */}
          {isCurrency && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">£</span>
            </div>
          )}
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            min={min}
            max={max}
            placeholder={isCurrency ? "0.00" : ""}
          />
          {isCurrency && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm">{suffix}</span>
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Input;
