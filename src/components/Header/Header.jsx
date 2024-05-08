import React from "react";
import { ROUTES } from "../../const/routes";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onClickHomeHandler = () => {
    navigate(`${ROUTES.home}`);
  };
  return (
    <div className="h-auto bg-black flex justify-between items-center p-4 border-b-2">
      <img
        className="w-12 h-12 rounded-full cursor-pointer hover:cursor-pointer"
        src={`${process.env.PUBLIC_URL}/images/guitarraHome.png`}
        alt="home"
        onClick={onClickHomeHandler}
      />
    </div>
  );
};

export default Header;
