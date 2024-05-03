// backtick ``
import React from "react";
import { ROUTES } from "../../const/routes";
import { useNavigate } from "react-router-dom";

const Card = ({ banda }) => {
  const navigate = useNavigate();
  const onClickDetallesHandler = () => {
    navigate(`${ROUTES.detalles.replace(":id", banda.id)}`);
    //navigate(`${ROUTES.detalles}/${banda.id}`);
    //navigate(`${ROUTES.detalles}`);
  };
  // console.log(banda.id);
  return (
    <button
      className="w-96 h-72 bg-gray-200 rounded-lg shadow-lg flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${banda["imagen de la banda"]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClickDetallesHandler}
    ></button>
  );
};

export default Card;
