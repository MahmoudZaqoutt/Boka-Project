// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { IPropsSlide } from "../../../../interfaces/props/IPropsSlide";
import Button from "../../Button/button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";

const ImageSlider = (props: IPropsSlide) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handleChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <>
      <Button
        label={<FiHeart className="w-6 h-6 ml-1" />}
        classname=" love hidden absolute z-10 w-8 h-8 bg-white  opacity-80 hover:opacity-100 ease-in-out duration-150 hover:text-orange-500 right-2 top-2  rounded-md "
      />

      {isBeginning ? (
        <Button
          label={<AiOutlineLeft className="w-6 h-6 " />}
          classname={`prev${props.id} hidden w-7 h-7 opacity-80 hover:opacity-100 ease-in-out duration-150 bg-white  absolute z-10 rounded-md left-0 top-20 left-2 `}
        />
      ) : (
        <Button
          label={<AiOutlineLeft className="w-6 h-6 " />}
          classname={`prev${props.id}  endSlider hidden w-7 h-7 opacity-80 hover:opacity-100 ease-in-out duration-150 bg-white  absolute z-10 rounded-md left-0 top-20 left-2 `}
        />
      )}
      <Swiper
        onSlideChange={handleChange}
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
        className="rounded-t-xl"
      >
        {props.Images?.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.imageUrl} alt="img" className="h-[172px] w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      {isEnd ? (
        <Button
          label={<AiOutlineRight className="w-6 h-6 " />}
          classname={`next${props.id}  hidden w-7 h-7 opacity-80 bg-white hover:opacity-100 absolute z-10 rounded-md right-0 top-20 right-2 `}
        />
      ) : (
        <Button
          label={<AiOutlineRight className="w-6 h-6 " />}
          classname={`next${props.id} endSlider hidden w-7 h-7 opacity-80 bg-white hover:opacity-100 absolute z-10 rounded-md right-0 top-20 right-2 `}
        />
      )}
    </>
  );
};

export default ImageSlider;
