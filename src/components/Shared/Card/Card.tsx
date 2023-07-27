import React from "react";
import { Body } from "../../Typography";
import { AiOutlineLeft, AiOutlineRight, AiTwotoneStar } from "react-icons/ai";

import DropDownList from "../../DropDownList/DropDownList";
// @ts-ignore
import img from "../../../assets/Rectangle13.png";
import Button from "../Button/button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import TimeSlider from "./TimeSlider/TimeSlider";
import { IPropsSlide } from "../../../interfaces/props/IPropsSlide";
import { FiHeart } from "react-icons/fi";
import ImageSlider from "./ImageSlider/ImageSlider";
import FormOfHeroSection from "../FormOfHeroSection/FormOfHeroSection";

const Card = (props: IPropsSlide) => {
  return (
    <div className="border-[1px]   border-red-50 bg-white rounded-xl hover:scale-95 ease-in-out duration-100">
      <div className="flex  relative">
        <ImageSlider Images={props.Images} id={props.id} />
      </div>

      <div className="text-center pl-[3px] pr-[3px]">
        <p className="flex items-center gap-1  font-semibold">
          Hair X Pression Un Hair Salons
          <AiTwotoneStar className="text-orange-500" /> 4.5
        </p>
        <Button
          type="submit"
          label="Business"
          classname="m-auto w-[100%] font-semibold  h-[31px] mt-[8px] rounded-xl text-orange-400 border-orange-400 border-2 hover:bg-orange-200 hover:text-black ease-in-out duration-150"
        />
        <FormOfHeroSection
          label="5 mile away: 400 S 2nd St Louisville,"
          icon={<FaMapMarkerAlt />}
          className="flex items-center gap-1  mt-[12px] "
        />
        <DropDownList
          options={[
            "Lashlift",
            "Lash Coloring",
            "Lash Coloring",
            "Lash Coloring",
            "Lash Coloring",
          ]}
          className="w-[100%] font-semibold h-[36px] rounded-xl bg-orange-200 cursor-pointer pl-2 mt-[8px] hover:opacity-70 hover:text-black ease-in-out duration-150"
          title="Manicure"
        />
        <TimeSlider />
        <div className="flex justify-between items-center mt-[12px] mr-[10px]">
          <Body
            content="Booked x today"
            classnameContent="italic text-[#17505C] font-normal text-sm"
          />
          <div className="flex flex-col ">
            <s className="text-[#17505C] ">$31.99</s>
            <div className="flex gap-4 items-center">
              <Body content="$29.92 " classnameContent="font-bold text-lg" />
              <Body
                content="20%"
                classnameContent="bg-[#EB5757] text-white text-xs w-[34px] h-[20px] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
