import React from "react";
import SlidesOfSections from "../SlidesOfSections/SlidesOfSections";
import Container from "../Shared/Container/Container";

const FeaturedBusinessesSection = () => {
  return (
    <Container>
      <div className="mt-[80px] ">
        <SlidesOfSections id={2} content="Featured Businesses" />
      </div>
    </Container>
  );
};

export default FeaturedBusinessesSection;
