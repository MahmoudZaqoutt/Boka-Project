import React from "react";
import SlidesOfSections from "../SlidesOfSections/SlidesOfSections";

const ExploringBusinessesSection = () => {
  return (
    <section className="mt-[80px]">
      <SlidesOfSections
        categoryId={3}
        id={500}
        content="Exploring Businesses"
      />
    </section>
  );
};

export default ExploringBusinessesSection;
