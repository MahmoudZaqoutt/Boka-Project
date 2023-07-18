import React from "react";
import { IPropsButton } from "../../../interfaces/props/IPropsButton";

const Button = (props: IPropsButton) => {
  return (
    <button type={props.type} className={props.classname}>
      {props.label}
    </button>
  );
};

export default Button;
