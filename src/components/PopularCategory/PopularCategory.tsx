import { Fragment, useEffect, useState } from "react";
import { Body } from "../Typography";
import { Link } from "react-router-dom";
import PopularCategoryCard from "./PopularCategoryCard/PopularCategoryCard";
import Container from "../Shared/Container/Container";
import axios from "axios";
import { className } from "../../interfaces/props/IPropsPopularCategoryCard";

const PopularCategory = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://api.dev.boka.co/business-management/lookups/business-categories?limit=5"
        );
        setData(res.data.data);
      } catch (error: any) {
        setError(error.message);
      }
    })();
  }, []);
  return (
    <Container>
      <section className="pb-[80px] mt-[50px] ">
        <div className="flex justify-between items-center">
          <Body
            content="Popular Category"
            classnameContent=" text-4xl	font-bold	pt-[50px] mb-[50px]"
          />
          <Link
            to={""}
            className=" text-orange-400 hover:bg-orange-100 ease-in-out duration-200 rounded-xl font-semibold"
          >
            View all Category
          </Link>
        </div>

        {error ? (
          <div className="w-full text-center text-4xl text-red-500 font-bold">
            {error}...
          </div>
        ) : (
          <div className=" grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2   mx-auto gap-[15px] xl:gap-[30px] xl:!w-full  w-[90%] ">
            {data.map((item: any, index) => (
              <Fragment key={item.id}>
                <PopularCategoryCard
                  content={item.nameEn}
                  backgroundImage={item.thumbnailUrl}
                  usedNo={item.usedNo}
                  className={
                    index === 0 ? className.bigCard : className.smallCard
                  }
                  href={item.href}
                />
              </Fragment>
            ))}
          </div>
          // </div>
        )}
      </section>
    </Container>
  );
};

export default PopularCategory;
