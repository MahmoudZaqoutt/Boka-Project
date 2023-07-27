import { SERVICES_SLIDER } from "../../constants/SERVICES_SLIDER";
import Button from "../Shared/Button/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Container from "../Shared/Container/Container";
const SliderSection = () => {
  return (
    <Container>
      <div className="mt-[108px] mb-[80px] bg-white flex ">
        <Button
          label={<AiOutlineLeft className="w-7 h-7" />}
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
          {SERVICES_SLIDER.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className=" hover:text-orange-400 ease-in duration-150 "
            >
              <img src={slide.SlideImg} alt={`slide ${slide.id}`} />
              <Button
                label={slide.content ? slide.content : ""}
                classname="font-semibold w-[140px] mt-[16px] -ml-5 "
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          label={<AiOutlineRight className="w-7 h-7" />}
          classname="next"
        />
      </div>
    </Container>
  );
};

export default SliderSection;
