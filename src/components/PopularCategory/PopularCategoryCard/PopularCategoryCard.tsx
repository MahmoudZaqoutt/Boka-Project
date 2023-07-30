import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IPropsPopularCategoryCard } from "../../../interfaces/props/IPropsPopularCategoryCard";
import { Body } from "../../Typography";
import "../../../styles/globals.css";
const PopularCategoryCard = (props: IPropsPopularCategoryCard) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.916), rgba(121, 119, 121, 0)),
       url(${props.backgroundImage})`,
      }}
      className={`${props.className} PopularCategoryCard`}
    >
      <div>
        <Body
          content={props.content ? props.content : ""}
          classnameContent="font-semibold xl:text-2xl"
        />
        <Body content={`${props.usedNo} Business`} />
      </div>

      <Link to={props.href ? props.href : ""}>
        <AiOutlineArrowRight className=" arrowOfPopularCategoryCard hidden rounded-full  hover:opacity-100 ease-in-out duration-150 bg-[#FF914D] p-2 text-4xl hover:bg-orange-500" />
      </Link>
    </div>
  );
};

export default PopularCategoryCard;
