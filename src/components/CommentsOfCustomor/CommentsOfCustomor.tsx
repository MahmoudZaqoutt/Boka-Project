import { Body } from "../Typography";
import CommentsOfCustomorCard from "./CommentsOfCustomorCard/CommentsOfCustomorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Button from "../Shared/Button/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Container from "../Shared/Container/Container";
import { COMMENTS } from "../../constants/COMMENTS";

const CommentsOfCustomor = () => {
  return (
    <Container>
      <div className="mb-[80px]">
        <Body
          content="Our happy customers say about us"
          classnameContent="font-bold	text-4xl text-center text-[#02323D] mb-[45px] "
        />
        <div className="flex  ">
          <Button
            label={
              <HiArrowNarrowLeft className="text-[#FF914D] bg-[#F9F9F9] drop-shadow-lg w-9 h-9 rounded-full " />
            }
            classname="prev"
          />
          <Swiper
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: `.next`,
              prevEl: `.prev`,
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
              350: {
                slidesPerView: 1,
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
              900: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              1250: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
            }}
          >
            {COMMENTS.map((comment) => (
              <SwiperSlide>
                <CommentsOfCustomorCard comment={comment} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Button
            label={
              <HiArrowNarrowRight className="text-[#FF914D]  bg-[#F9F9F9] drop-shadow-lg w-9 h-9 rounded-full " />
            }
            classname="next"
          />
        </div>
      </div>
    </Container>
  );
};

export default CommentsOfCustomor;
