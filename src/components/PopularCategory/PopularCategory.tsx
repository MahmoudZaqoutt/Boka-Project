import React from "react";
import { Body } from "../Typography";
import { Link } from "react-router-dom";
// @ts-ignore
import img from "../../assets/Rectangle 14.png";
// @ts-ignore
import img1 from "../../assets/Rectangle 15.png";
// @ts-ignore
import heroImg from "../../assets/Rectangle14.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import PopularCategoryCard from "./PopularCategoryCard/PopularCategoryCard";
import { POPULAR_CATEGORY } from "../../constants/PopularCategory";
import Container from "../Shared/Container/Container";

const PopularCategory = () => {
  return (
    <Container>
      <div className="pb-[80px] mt-[50px]">
        <div className="flex justify-between items-center">
          <Body
            content="Popular Category"
            classnameContent=" text-4xl	font-bold	pt-[50px] mb-[50px]"
          />
          <Link
            to={""}
            className=" text-orange-400 hover:bg-orange-100 ease-in-out duration-200 rounded-xl font-semibold"
          >
            View all Category
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <PopularCategoryCard
            className="bg-cover bg-center  bg-no-repeat w-[90%] xl:w-[729px] h-[300px] xl:h-[390px]  hover:scale-105 ease-in-out duration-150 rounded-2xl flex  justify-between items-end pr-10 pb-7 pl-10  text-white"
            content="Manicure"
            backgroundImage={heroImg}
            NoOfBusiness="350+"
            href={"/"}
          />

          <div className="grid grid-cols-2 gap-[15px] xl:gap-[30px] w-[80%] xl:w-auto ">
            {POPULAR_CATEGORY.map((item) => (
              <PopularCategoryCard
                content={item.content}
                backgroundImage={item.backgroundImage}
                NoOfBusiness={item.NoOfBusiness}
                className={item.className}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularCategory;
