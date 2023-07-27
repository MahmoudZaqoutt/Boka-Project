import React from "react";
// @ts-ignore
import img from "../../assets/Banners.png";
import SlidesOfSections from "../SlidesOfSections/SlidesOfSections";
import Container from "../Shared/Container/Container";

const SpecialOfferSection = () => {
  return (
    <div className="h-[950px] bg-[#FFFAF8]">
      <Container>
        <div className="flex justify-center pt-[76px]">
          <img src={img} alt="Manicure Monday" className="w-[100%] h-[280px]" />
        </div>
      </Container>

      <SlidesOfSections id={1} content="Special offer" className="mt-[24px]" />
    </div>
  );
};

export default SpecialOfferSection;
