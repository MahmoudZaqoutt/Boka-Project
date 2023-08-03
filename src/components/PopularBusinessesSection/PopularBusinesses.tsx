import { IPropsSlide } from "../../interfaces/props/IPropsSlide";
import SlidesOfSections from "../SlidesOfSections/SlidesOfSections";

const Popularbusinesses = (props: IPropsSlide) => {
  return (
    <section className="mt-[80px]">
      <SlidesOfSections
        id={3}
        categoryId={props.categoryId}
        content={props.content}
      />
    </section>
  );
};

export default Popularbusinesses;
