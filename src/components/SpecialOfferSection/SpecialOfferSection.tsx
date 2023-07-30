import React from "react";
// @ts-ignore
import img from "../../assets/bannar.png";
import SlidesOfSections from "../SlidesOfSections/SlidesOfSections";
import Container from "../Shared/Container/Container";

const SpecialOfferSection = () => {
  return (
    <section className="h-[950px] bg-[#FFFAF8]">
      <Container>
        <div className="flex justify-center pt-[76px]">
          <img
            src={img}
            alt="Manicure Monday"
            className="w-full max-h-[280px]"
          />
        </div>
      </Container>

      <SlidesOfSections
        id={100}
        categoryId={0}
        content="Special offer"
        className="mt-[24px]"
      />
    </section>
  );
};

export default SpecialOfferSection;
