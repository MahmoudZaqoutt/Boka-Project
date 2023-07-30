import { Body } from "../Typography";
import CommentsOfCustomorCard from "./CommentsOfCustomorCard/CommentsOfCustomorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Button from "../Shared/Button/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Container from "../Shared/Container/Container";
import { COMMENTS } from "../../constants/COMMENTS";
import { useState } from "react";

const CommentsOfCustomor = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handleChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <Container>
      <section className="mb-[80px]">
        <Body
          content="Our happy customers say about us"
          classnameContent="font-bold	text-4xl text-center text-[#02323D] mb-[45px] "
        />
        <div className="flex">
          {isBeginning ? (
            <Button
              label={
                <HiArrowNarrowLeft className="text-[#cfd9db] bg-[#F9F9F9] drop-shadow-lg w-9 h-9 rounded-full " />
              }
              classname="prev cursor-not-allowed"
            />
          ) : (
            <Button
              label={
                <HiArrowNarrowLeft className="text-[#FF914D] bg-[#F9F9F9] drop-shadow-lg w-9 h-9 rounded-full " />
              }
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
              <SwiperSlide key={comment.id}>
                <CommentsOfCustomorCard comment={comment.comment} />
              </SwiperSlide>
            ))}
          </Swiper>

          {isEnd ? (
            <Button
              label={
                <HiArrowNarrowRight className="text-[#cfd9db] bg-[#F9F9F9] drop-shadow-lg w-9 h-9 rounded-full " />
              }
              classname="prev cursor-not-allowed"
            />
          ) : (
            <Button
              label={
                <HiArrowNarrowRight className="text-[#FF914D]  bg-[#F9F9F9] drop-shadow-lg w-9 h-9 rounded-full " />
              }
              classname="next"
            />
          )}
        </div>
      </section>
    </Container>
  );
};

export default CommentsOfCustomor;
