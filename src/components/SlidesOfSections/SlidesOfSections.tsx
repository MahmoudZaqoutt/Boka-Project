import { useEffect, useState } from "react";
import { Body } from "../Typography";
import Card from "../Shared/Card/Card";
import { IPropsSlide } from "../../interfaces/props/IPropsSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Button from "../Shared/Button/button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";
import axios from "axios";
import { Skeleton, Stack } from "@mui/material";

const SlidesOfSections = (props: IPropsSlide) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `  https://api.dev.boka.co/business-management/businesses?limit=10&categoryId=${props.categoryId}`
        );
        setData(res.data.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <Container>
      {error ? (
        <div className="w-full text-center text-4xl text-red-500 font-bold">
          {error}...
        </div>
      ) : (
        <div>
          <div className="flex justify-between  items-center mt-[24px] mb-[24px]">
            <Body
              content={props.content ? props.content : ""}
              classnameContent="text-4xl	font-bold	 "
            />

            <div className="flex items-center gap-4">
              <Link
                to={""}
                className=" text-orange-400 hover:bg-orange-100 ease-in-out duration-200 rounded-xl font-semibold"
              >
                View all
              </Link>
              {isBeginning ? (
                <Button
                  label={<AiOutlineLeft className="w-7 h-7" />}
                  classname={`prev${props.id} hidden md:block text-[#ccc3c3] cursor-not-allowed`}
                />
              ) : (
                <Button
                  label={<AiOutlineLeft className="w-7 h-7" />}
                  classname={`prev${props.id} hidden md:block`}
                />
              )}

              {isEnd ? (
                <Button
                  label={<AiOutlineRight className="w-7 h-7" />}
                  classname={`next${props.id} hidden md:block text-[#ccc3c3] cursor-not-allowed`}
                />
              ) : (
                <Button
                  label={<AiOutlineRight className="w-7 h-7" />}
                  classname={`next${props.id} hidden md:block`}
                />
              )}
            </div>
          </div>

          <div>
            <Swiper
              onSlideChange={handleChange}
              scrollbar={{ draggable: true }}
              navigation={{
                nextEl: `.next${props.id}`,
                prevEl: `.prev${props.id}`,
                enabled: true,
              }}
              modules={[Navigation]}
              slidesPerView={4}
              slidesPerGroup={1}
              spaceBetween={30}
              breakpoints={{
                100: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                430: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
                537: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
                760: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
                850: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
                },
                1250: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
              }}
            >
              {isLoading ? (
                <>
                  <SwiperSlide className="!w-[18.5rem]">
                    <div className="overflow-hidden  card border-[1px]  !w-[300px] h-[445px]  border-red-50 bg-white !rounded-xl md:hover:-translate-y-2 	md:mt-2 ease-in-out duration-100 ">
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        className="!h-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="!w-[18.5rem]">
                    <div className="overflow-hidden  card border-[1px]  !w-[300px] h-[445px]  border-red-50 bg-white !rounded-xl md:hover:-translate-y-2 	md:mt-2 ease-in-out duration-100 ">
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        className="!h-full"
                      />
                    </div>
                  </SwiperSlide>{" "}
                  <SwiperSlide className="!w-[18.5rem]">
                    <div className="overflow-hidden  card border-[1px]  !w-[300px] h-[445px]  border-red-50 bg-white !rounded-xl md:hover:-translate-y-2 	md:mt-2 ease-in-out duration-100 ">
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        className="!h-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="!w-[18.5rem]">
                    <div className="overflow-hidden  card border-[1px]  !w-[300px] h-[445px]  border-red-50 bg-white !rounded-xl md:hover:-translate-y-2 	md:mt-2 ease-in-out duration-100 ">
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        className="!h-full"
                      />
                    </div>
                  </SwiperSlide>
                </>
              ) : (
                <>
                  {data.map((data: any) => (
                    <SwiperSlide key={data.id} className="!w-[18.5rem]">
                      <Card
                        isLoading={isLoading}
                        name={data.nameEn}
                        id={data.id + (props.id ? props.id : 100)}
                        Images={data.businessImages}
                        services={data.services}
                        rating={data.rating}
                        address={data.address[0].formatted}
                      />
                    </SwiperSlide>
                  ))}
                </>
              )}
            </Swiper>
          </div>
        </div>
      )}
    </Container>
  );
};

export default SlidesOfSections;
