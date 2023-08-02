import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import SliderSection from "./components/CategoriesSliderSection/CategoriesSliderSection";
import SpecialOfferSection from "./components/SpecialOfferSection/SpecialOfferSection";
import FeaturedBusinessesSection from "./components/FeaturedBusinessesSection/FeaturedBusinessesSection";
import PopularBusinessesSection from "./components/PopularBusinessesSection/PopularBusinessesSection";
import HairSalonsSection from "./components/HairSalon’sSection/HairSalonsSection";
import BokaTransformation from "./components/BokaTransformation/BokaTransformation";
import PopularCategory from "./components/PopularCategory/PopularCategory";
import CommentsOfCustomor from "./components/CommentsOfCustomor/CommentsOfCustomor";
import BrandSection from "./components/BrandSection/BrandSection";
import Footer from "./components/Footer/Footer";
import ExploringBusinessesSection from "./components/ExploringBusinessesSection/ExploringBusinessesSection";
import MoreBusinessSection from "./components/MoreBusinessSection/MoreBusinessSection";
import BasicTooltip from "./components/test";

function App() {
  return (
    <div className="bg-white ">
      <HeroSection />
      <SliderSection />
      <SpecialOfferSection />
      <FeaturedBusinessesSection />
      <PopularBusinessesSection />
      <HairSalonsSection />
      <BokaTransformation />
      <PopularCategory />
      <CommentsOfCustomor />
      <BrandSection />
      <ExploringBusinessesSection />
      <MoreBusinessSection />
      <Footer />

      <BasicTooltip />
    </div>
  );
}

export default App;
