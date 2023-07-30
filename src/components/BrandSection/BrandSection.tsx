import { BRANDS } from "../../constants/BRANDS";
import Container from "../Shared/Container/Container";
const BrandSection = () => {
  return (
    <div className="bg-[#E3ECEE] ">
      <Container>
        <section className="h-[185px] bg-[#E3ECEE] flex justify-around items-center">
          {BRANDS.map((brand) => (
            <img
              key={brand.id}
              src={brand.brand}
              alt={`brand ${brand.id}`}
              className={brand.className}
            />
          ))}
        </section>
      </Container>
    </div>
  );
};

export default BrandSection;
