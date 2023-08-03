import Button from "../Shared/Button/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Container from "../Shared/Container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton, Stack } from "@mui/material";

const SliderSection = () => {
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
    (async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          "https://api.dev.boka.co/business-management/lookups/business-categories?limit=12"
        );

        setData(res.data.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
    })();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <div className="mt-[108px] mb-[80px] mx-auto  ">
          <Stack className="!grid grid-cols-4 md:grid-cols-8 gap-6 justify-center items-center">
            <Skeleton animation="wave" variant="rectangular" height={115} />
            <Skeleton animation="wave" variant="rectangular" height={115} />
            <Skeleton animation="wave" variant="rectangular" height={115} />
            <Skeleton animation="wave" variant="rectangular" height={115} />
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={115}
              className="!hidden md:!block"
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={115}
              className="!hidden md:!block"
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={115}
              className="!hidden md:!block"
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={115}
              className="!hidden md:!block"
            />
          </Stack>
        </div>
      ) : (
        <section className="mt-[108px] mb-[80px] bg-white flex ">
          {error ? (
            <div className="w-full text-center text-4xl text-red-500 font-bold">
              {error}...
            </div>
          ) : (
            <>
              {isBeginning ? (
                <Button
                  label={<AiOutlineLeft className="w-7 h-7" />}
                  classname="prev text-[#ccc3c3] cursor-not-allowed"
                />
              ) : (
                <Button
                  label={<AiOutlineLeft className="w-7 h-7" />}
                  classname="prev"
                />
              )}

              <Swiper
                onSlideChange={handleChange}
                scrollbar={{ draggable: true }}
                navigation={{
                  nextEl: `.next`,
                  prevEl: `.prev`,
                  enabled: true,
                }}
                modules={[Navigation]}
                slidesPerView={8}
                slidesPerGroup={1}
                spaceBetween={12}
                breakpoints={{
                  100: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  280: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                  },
                  350: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                  },
                  537: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                  },
                  760: {
                    slidesPerView: 5,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                  },
                  900: {
                    slidesPerView: 7,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                  },
                  1300: {
                    slidesPerView: 8,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                  },
                }}
              >
                {data.map((slide: any) => (
                  <SwiperSlide
                    key={slide.id}
                    className=" hover:text-orange-400 ease-in duration-150 !flex flex-col items-center justify-center gap-4 "
                  >
                    <img src={slide.iconUrl} alt={`slide ${slide.id}`} />
                    <Button
                      label={slide.nameEn ? slide.nameEn : ""}
                      classname="font-semibold  "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {isEnd ? (
                <Button
                  label={<AiOutlineRight className="w-7 h-7" />}
                  classname="next text-[#ccc3c3] cursor-not-allowed"
                />
              ) : (
                <Button
                  label={<AiOutlineRight className="w-7 h-7" />}
                  classname="next "
                />
              )}
            </>
          )}
        </section>
      )}
    </Container>
  );
};

export default SliderSection;
