import { IPropsFormOfHeroSection } from "../../../interfaces/props/IPropsFormOfHeroSection";

const FormOfHeroSection = (props: IPropsFormOfHeroSection) => {
  return (
    <div className={props.className}>
      {props.icon ? props.icon : ""}
      {props.type ? (
        <input
          placeholder={props.placeholder}
          type={props.type}
          id={props.label}
          className={props.inputClassName}
          title="input"
        />
      ) : (
        ""
      )}
      {props.label ? (
        <label htmlFor={props.label} className={props.labelClassName}>
          {props.label}
        </label>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormOfHeroSection;
