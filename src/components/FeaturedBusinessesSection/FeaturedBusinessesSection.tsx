import React from "react";
import SlidesOfSections from "../SlidesOfSections/SlidesOfSections";
import Container from "../Shared/Container/Container";

const FeaturedBusinessesSection = () => {
  return (
    <Container>
      <section className="mt-[80px] ">
        <SlidesOfSections
          id={200}
          categoryId={2}
          content="Featured Businesses"
        />
      </section>
    </Container>
  );
};

export default FeaturedBusinessesSection;
