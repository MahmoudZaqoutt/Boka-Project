import SlidesOfSections from "../SlidesOfSections/SlidesOfSections";
import Container from "../Shared/Container/Container";
import { IPropsSlide } from "../../interfaces/props/IPropsSlide";

const Featuredbusinesses = (props: IPropsSlide) => {
  return (
    <Container>
      <section className="mt-[80px] -ml-4 -mr-4">
        <SlidesOfSections
          id={200}
          categoryId={props.categoryId}
          content={props.content ? props.content : ""}
        />
      </section>
    </Container>
  );
};

export default Featuredbusinesses;
