// @ts-ignore
import LogoImage from "../../assets/Logo.png";
import { Body } from "../Typography";
import { Link } from "react-router-dom";

import { IPropsButton } from "../../interfaces/props/IPropsButton";

const Logo = (props: IPropsButton) => {
  return (
    <Link to={"/"} className={props.classname}>
      <img src={LogoImage} alt="LogoImage" />
      <Body
        classnameContent="w-[84.94px] h-[25.58px] font-semibold  text-3xl"
        content="Boka"
      />
    </Link>
  );
};

export default Logo;
