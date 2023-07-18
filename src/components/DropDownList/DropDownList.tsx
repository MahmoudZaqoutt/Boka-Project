import React from "react";
import { IPropsDropDownList } from "../../interfaces/props/IPropsDropDownList";

const DropDownList = (props: IPropsDropDownList) => {
  return (
    <div>
      <select title="selection" className={props.className}>
        <option hidden>{props.title}</option>
        {props.options.map((option) => (
          <option key={option}> {option}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDownList;
