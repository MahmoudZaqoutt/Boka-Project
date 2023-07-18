import React from "react";
import { IPropsInput } from "../../interfaces/props/IPropsInput";

const Input = (props: IPropsInput) => {
  return (
    <input
      id={props.id}
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
