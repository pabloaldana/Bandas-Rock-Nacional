import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={"Buscar Banda"}
      className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
  );
};

export default Input;
