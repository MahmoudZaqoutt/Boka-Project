import SlidesOfSections from "../SlidesOfSections/SlidesOfSections";

const PopularBusinessesSection = () => {
  return (
    <section className="mt-[80px]">
      <SlidesOfSections id={3} categoryId={2} content="Popular Businesses" />
    </section>
  );
};

export default PopularBusinessesSection;
