import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

interface myProps {
  slides: any;
  spaceBetween: number;
  preview: number;
  centerslide: boolean;
  autoplay: any;
  breakpoints: any;
}

const Slider = ({
  slides,
  spaceBetween,
  preview,
  centerslide,
  autoplay,
  breakpoints,
}: myProps) => {
  return (
    <Swiper
      //   effect={"coverflow"}
      modules={[Autoplay]}
      autoplay={autoplay}
      className=""
      //   loop={true}
      spaceBetween={spaceBetween}
      slidesPerView={preview}
      centeredSlides={centerslide}
      breakpoints={breakpoints}
    >
      {slides}
    </Swiper>
  );
};

export default Slider;
