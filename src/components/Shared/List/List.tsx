import React from "react";
import { IPropsTopHeaderList } from "../../../interfaces/props/IPropsTopHeaderList";
import { Link } from "react-router-dom";

export const List = (props: IPropsTopHeaderList) => {
  return (
    <ul>
      {props.title ? (
        <li className="font-semibold text-lg"> {props.title}</li>
      ) : (
        ""
      )}
      <ul className={props.className}>
        {props.options.map((option) => (
          <Link to={option.href} key={option.id}>
            <li className={props.classNameOfLI}>{option.content}</li>
          </Link>
        ))}
      </ul>
    </ul>
  );
};
