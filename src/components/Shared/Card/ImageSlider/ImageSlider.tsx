// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { IPropsSlide } from "../../../../interfaces/props/IPropsSlide";
import Button from "../../Button/button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

const ImageSlider = (props: IPropsSlide) => {
  return (
    <>
      <Button
        label={<FiHeart className="w-6 h-6 ml-1" />}
        classname="absolute z-10 w-8 h-8 bg-white opacity-20 hover:opacity-100 ease-in-out duration-150 hover:text-orange-500 right-2 top-2  rounded-md "
      />
      <Button
        label={<AiOutlineLeft className="w-6 h-6 " />}
        classname={`prev${props.id} w-7 h-7 opacity-20 hover:opacity-100 ease-in-out duration-150 bg-white  absolute z-10 rounded-md left-0 top-20 left-2 `}
      />
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
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={0}
      >
        {props.Images?.map((img) => (
          <SwiperSlide>
            <img src={img} alt="img" className="h-[172px] w-[100%]" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        label={<AiOutlineRight className="w-6 h-6 " />}
        classname={`next${props.id} w-7 h-7  bg-white opacity-20 hover:opacity-100 absolute z-10 rounded-md right-0 top-20 right-2 `}
      />
    </>
  );
};

export default ImageSlider;
