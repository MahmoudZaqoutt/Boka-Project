// @ts-ignore
import BeforImage from "../../assets/transformation-before.png";
// @ts-ignore
import AfterImage from "../../assets/transformation-after.png";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { Body } from "../Typography";
import Button from "../Shared/Button/button";

import PersonDetails from "../Shared/PersonDetails/PersonDetails";
import Container from "../Shared/Container/Container";
const BokaTransformation = () => {
  return (
    <div className="bg-[#FFFAF8]">
      <Container>
        <div className="xl:h-[700px] h-[800px]  pb-44 mt-[80px]  ">
          <div className="flex justify-between items-center">
            <Body
              content="Boka Transformation"
              classnameContent=" text-4xl	font-bold	pt-[50px] mb-[50px]"
            />
            <Button
              label="Book Now"
              classname=" text-orange-400 border-2 border-orange-400 w-[110px] h-[45px] hover:bg-orange-100 ease-in-out duration-200 rounded-xl font-semibold"
              type="submit"
            />
          </div>

          <div className="h-[100%]  flex xl:flex-row  flex-col items-center xl:justify-between xl:items-center">
            <ImgComparisonSlider className="xl:w-[67%] w-[85%] h-auto xl:h-[95%] rounded-3xl outline-none">
              <img
                alt="Befor"
                slot="first"
                src={BeforImage}
                className="w-full "
              />
              <img
                alt="After"
                slot="second"
                src={AfterImage}
                className="w-full "
              />
            </ImgComparisonSlider>

            <div className="xl:w-[28%] w-[84%] flex flex-col gap-10 pt-10 xl:pt-0">
              <Body
                content="Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...”"
                classnameContent="text-lg "
              />
              <PersonDetails />
              <Body
                content="Book Shoukri for $49"
                classnameContent=" font-semibold text-[#FF914D]"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BokaTransformation;
