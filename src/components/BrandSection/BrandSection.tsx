import React from "react";
// @ts-ignore
import brand1 from "../../assets/brands.png";
// @ts-ignore
import brand2 from "../../assets/brands1.png";
// @ts-ignore
import brand3 from "../../assets/brands2.png";
// @ts-ignore
import brand4 from "../../assets/brands3.png";
// @ts-ignore
import brand5 from "../../assets/brands4.png";
// @ts-ignore
import Union from "../../assets/Union.png";
import Container from "../Shared/Container/Container";
const BrandSection = () => {
  return (
    <div className="bg-[#E3ECEE] ">
      <Container>
        <div className="h-[185px] bg-[#E3ECEE] flex justify-around items-center">
          <img
            src={brand1}
            alt="brand1"
            className="sm:w-[128.08px] sm:h-[30px] w-[60px]"
          />
          <img
            src={brand2}
            alt="brand2"
            className="sm:w-[78px] sm:h-[29px] w-[60px]"
          />
          <img
            src={brand3}
            alt="brand3"
            className="sm:w-[140.2px] sm:h-[29.55px] w-[60px]"
          />
          <img
            src={brand4}
            alt="brand4"
            className="sm:w-[125px] sm:h-[30px] w-[60px]"
          />
          <img
            src={brand5}
            alt="brand5"
            className="sm:w-[96px] sm:h-[34px] w-[60px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default BrandSection;
