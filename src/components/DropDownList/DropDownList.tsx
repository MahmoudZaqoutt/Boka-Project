import React from "react";
import { IPropsDropDownList } from "../../interfaces/props/IPropsDropDownList";

const DropDownList = (props: IPropsDropDownList) => {
  return (
    <div>
      <select
        title="selection"
        className={props.className}
        onChange={props.onChange}
      >
        {props.title ? (
          <option hidden className={props.titleClassName}>
            {props.title}
          </option>
        ) : (
          ""
        )}
        {props.options.map((option: any) => (
          <option key={option.id}> {option.lang}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDownList;
