import React from "react";
// @ts-ignore
import LogoImage from "../../assets/Logo.png";
import { Body } from "../Typography";
import { Link, NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <div className="ml-[40px] flex ">
      <Link to={"/"}>
        <img src={LogoImage} alt="LogoImage" />
      </Link>
      <Link to={"/"}>
        <Body
          classnameContent="w-[84.94px] h-[25.58px] font-semibold font-sans text-3xl"
          content="Boka"
        />
      </Link>
    </div>
  );
};

export default Logo;
