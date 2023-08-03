import Popularbusinesses from "./components/PopularBusinessesSection/PopularBusinesses";
import Homesearch from "./components/HeroSection/HomeSearch";
import Popularcategories from "./components/PopularCategory/PopularCategories";
import Featuredbusinesses from "./components/FeaturedBusinessesSection/FeaturedBusinesses";
import Brands from "./components/Footer/Brands";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://api.dev.boka.co/content-management/sections"
        );
        setData(res.data.data);
      } catch (error: any) {
        setError(error.message);
        console.log(error.message);
      }
    })();
  }, []);

  // const sections: any[] = [];
  // data.map((section: any) =>
  //   sections.push(
  //     section.code.charAt(0).toUpperCase() + section.code.slice(1).toLowerCase()
  //   )
  // );
  // console.log(sections);

  return (
    <div className="bg-white ">
      {/* {data.map((section: any, index) => {
        return <section.code key={section} />;
      })} */}

      {error ? (
        <div className="w-full text-center text-4xl text-red-500 font-bold">
          {error}...
        </div>
      ) : (
        <>
          {data.map((section: any, index) => (
            <Fragment key={index}>
              {(() => {
                switch (section.code) {
                  case "HomeSearch":
                    return <Homesearch />;
                    break;

                  case "PopularBusinesses":
                    return (
                      <Popularbusinesses
                        content={section.nameEn}
                        categoryId={section.extraData.query.categoryId}
                      />
                    );
                    break;

                  case "PopularCategories":
                    return <Popularcategories content={section.nameEn} />;
                    break;

                  case "FeaturedBusinesses":
                    return (
                      <Featuredbusinesses
                        content={section.nameEn}
                        categoryId={section.extraData.query.categoryId}
                      />
                    );
                    break;

                  default:
                    return <Brands />;
                }
              })()}
            </Fragment>
          ))}
        </>
      )}

      {/* <Homesearch />
      <SliderSection />
      <SpecialOfferSection />
      <Featuredbusinesses />
      <Popularbusinesses />
      <HairSalonsSection />
      <BokaTransformation />
      <Popularcategories />
      <CommentsOfCustomor />
      <BrandSection />
      <ExploringBusinessesSection />
      <MoreBusinessSection />
      <Brands /> */}
    </div>
  );
}

export default App;
