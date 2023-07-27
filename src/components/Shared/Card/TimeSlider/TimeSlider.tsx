import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Button from "../../Button/button";
const TimeSlider = () => {
  return (
    <div className="flex gap-x-2 mt-[12px] w-[95%] ">
      <Swiper
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        scrollbar={{ draggable: true }}
        modules={[Navigation]}
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={80}
      >
        <SwiperSlide>
          <Button
            classname="rounded-xl bg-slate-100 w-[84px] h-[36px] hover:bg-orange-200 ease-in-out duration-150 "
            label="8:00 am"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Button
            classname="rounded-xl bg-slate-100 w-[84px] h-[36px] hover:bg-orange-200 ease-in-out duration-150 "
            label="8:00 am"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Button
            classname="rounded-xl bg-slate-100 w-[84px] h-[36px] hover:bg-orange-200 ease-in-out duration-150 "
            label="8:00 am"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Button
            classname="rounded-xl bg-slate-100 w-[84px] h-[36px] hover:bg-orange-200 ease-in-out duration-150 "
            label="8:00 am"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Button
            classname="rounded-xl bg-slate-100 w-[84px] h-[36px] hover:bg-orange-200 ease-in-out duration-150 "
            label="8:00 am"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Button
            classname="rounded-xl bg-slate-100 w-[84px] h-[36px] hover:bg-orange-200 ease-in-out duration-150 "
            label="8:00 am"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TimeSlider;
