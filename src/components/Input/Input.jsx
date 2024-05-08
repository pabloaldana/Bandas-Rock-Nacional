import React from "react";

const Input = ({ label, value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 "
    />
  );
};

export default Input;
