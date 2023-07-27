import React from "react";
import { H1 } from "../Typography";
import Card from "../Shared/Card/Card";
import { IPropsSlide } from "../../interfaces/props/IPropsSlide";
// @ts-ignore
import img from "../../assets/Rectangle13.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Button from "../Shared/Button/button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";
import { CARD_CONTENT } from "../../constants/CARD_CONTENT";

const SlidesOfSections = (props: IPropsSlide) => {
  return (
    <Container>
      <div>
        <div className="flex justify-between  items-center mt-[24px] mb-[24px]">
          <H1
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
            <Button
              label={<AiOutlineLeft className="w-7 h-7" />}
              classname={`prev${props.id} hidden md:block`}
            />
            <Button
              label={<AiOutlineRight className="w-7 h-7" />}
              classname={`next${props.id} hidden md:block`}
            />
          </div>
        </div>

        <div>
          <Swiper
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
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
              350: {
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
            {CARD_CONTENT.map((card) => (
              <SwiperSlide>
                <Card
                  id={card.id + (props.id ? props.id : 100)}
                  Images={card.images}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default SlidesOfSections;
