// import React from 'react'

import { InputProps } from "./Input.types";

const Input = ({ name, label, value, handleChange }: InputProps) => {
  return (
    <>
      <div className="flex flex-col">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor={name}
        >
          {label}
        </label>
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-900 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id={name}
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
