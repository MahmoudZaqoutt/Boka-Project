import React from "react";
import { IPropsTypography } from "../../interfaces/props/IPropsTypography";

export const H1 = (props: IPropsTypography) => {
  return <h1 className={props.classnameContent}>{props.content}</h1>;
};
export const H2 = (props: IPropsTypography) => {
  return <h2 className={props.classnameContent}>{props.content}</h2>;
};
export const H3 = (props: IPropsTypography) => {
  return <h3 className={props.classnameContent}>{props.content}</h3>;
};
export const H4 = (props: IPropsTypography) => {
  return <h4 className={props.classnameContent}>{props.content}</h4>;
};
export const H5 = (props: IPropsTypography) => {
  return <h5 className={props.classnameContent}>{props.content}</h5>;
};
export const H6 = (props: IPropsTypography) => {
  return <h6 className={props.classnameContent}>{props.content}</h6>;
};
export const Body = (props: IPropsTypography) => {
  return <p className={props.classnameContent}>{props.content}</p>;
};
export const SPAN = (props: IPropsTypography) => {
  return <span className={props.classnameContent}>{props.content}</span>;
};
