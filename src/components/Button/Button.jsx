import React from "react";

const Button = ({ banda }) => {
  return (
    <button
      className="w-96 h-72 bg-gray-200 rounded-lg shadow-lg flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${banda["imagen de la banda"]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => {
        // Reemplaza '/ruta-de-redireccion' con la URL a la que deseas redirigir
        window.location.href = "/ruta-de-redireccion";
      }}
    ></button>
  );
};

export default Button;
