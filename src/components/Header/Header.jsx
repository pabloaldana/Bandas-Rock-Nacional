import React from "react";
import Input from "../Input/Input";

const Header = () => {
  return (
    <div className="h-auto bg-black flex justify-end items-center p-4">
      {/* Agrega el componente Input aquí */}
      <Input type="text" placeholder="Buscar..." />
    </div>
  );
};

export default Header;
