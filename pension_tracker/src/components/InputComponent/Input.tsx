// import React from 'react'

import { InputProps } from "./Input.types";

const Input = ({ name, label, value, handleChange }: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
