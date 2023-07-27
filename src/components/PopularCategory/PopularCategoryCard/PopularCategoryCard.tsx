import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
// @ts-ignore
import { IPropsPopularCategoryCard } from "../../../interfaces/props/IPropsPopularCategoryCard";
import { Body } from "../../Typography";
const PopularCategoryCard = (props: IPropsPopularCategoryCard) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      className={props.className}
    >
      <div>
        <Body
          content={props.content ? props.content : ""}
          classnameContent="font-semibold xl:text-2xl"
        />
        <Body content={`${props.NoOfBusiness} Business`} />
      </div>

      <Link to={props.href ? props.href : ""}>
        <AiOutlineArrowRight className="rounded-full opacity-20 hover:opacity-100 ease-in-out duration-150 bg-orange-400 p-2 text-4xl hover:bg-orange-300" />
      </Link>
    </div>
  );
};

export default PopularCategoryCard;
