import { Body } from "../../Typography";
import { AiTwotoneStar } from "react-icons/ai";

import DropDownList from "../../DropDownList/DropDownList";
import Button from "../Button/button";
import { FaMapMarkerAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import TimeSlider from "./TimeSlider/TimeSlider";
import { IPropsSlide } from "../../../interfaces/props/IPropsSlide";
import ImageSlider from "./ImageSlider/ImageSlider";
import FormOfHeroSection from "../FormOfHeroSection/FormOfHeroSection";
import "../../../styles/globals.css";
import { useState } from "react";
const Card = (props: IPropsSlide) => {
  const services: any[] = [];
  props.services?.map((item) =>
    services.push({ id: item.id, lang: item.nameEn })
  );

  const [value, setValue] = useState(services[0]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="card border-[1px]     border-red-50 bg-white !rounded-xl md:hover:-translate-y-2 	md:mt-2 ease-in-out duration-100 ">
      <div className="flex  relative ">
        <ImageSlider Images={props.Images} id={props.id} />
      </div>

      <div className="text-center  ">
        <div className="flex items-center gap-1  font-semibold !w-full ">
          <Body
            content={props.name ? props.name : ""}
            classnameContent="truncate"
          />
          <AiTwotoneStar className="text-orange-500" />{" "}
          {Math.round(props.rating ? props.rating : 0)}
        </div>
        <Button
          type="submit"
          label="Business"
          classname="m-auto w-[100%] font-semibold  h-[31px] mt-[8px] rounded-xl text-orange-400 border-orange-400 border-2 hover:bg-orange-200 hover:text-black ease-in-out duration-150"
        />
        <FormOfHeroSection
          label={props.address}
          icon={<FaMapMarkerAlt className="w-[12px] h-[14.99px]" />}
          className="flex items-center gap-1  mt-[12px] "
        />
        <DropDownList
          onChange={handleChange}
          options={services}
          className="w-[100%] font-semibold h-[36px] rounded-xl bg-[#FFE6D6] cursor-pointer pl-2 mt-[8px] hover:bg-orange-200 hover:text-black ease-in-out duration-150"
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
              {props.services?.map((item) =>
                item.nameEn === value ? (
                  <div key={item.id}>
                    <Body
                      content={`$${item.price}`}
                      classnameContent="font-bold text-lg"
                    />
                  </div>
                ) : (
                  ""
                )
              )}

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
