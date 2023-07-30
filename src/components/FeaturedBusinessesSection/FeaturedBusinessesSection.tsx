import SlidesOfSections from "../SlidesOfSections/SlidesOfSections";
import Container from "../Shared/Container/Container";

const FeaturedBusinessesSection = () => {
  return (
    <Container>
      <section className="mt-[80px] -ml-4 -mr-4">
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
