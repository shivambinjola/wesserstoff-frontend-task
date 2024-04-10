import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";

interface myProps {
  slides: any;
  spaceBetween: number;
  preview: number;
  centerslide: boolean;
  autoplay: any;
  breakpoints: any;
}

const SliderCoverFlow = ({
  slides,
  spaceBetween,
  preview,
  centerslide,
  autoplay,
  breakpoints,
}: myProps) => {
  return (
    <Swiper
      loop
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 260,
        modifier: 2,
        // slideShadows: 2,
      }}
      modules={[Autoplay, EffectCoverflow]}
      autoplay={autoplay}
      className=" sm:w-[32vw] xs:w-full"
      //   loop={true}
      spaceBetween={spaceBetween}
      slidesPerView={preview}
      breakpoints={breakpoints}
      centeredSlides={centerslide}
    >
      {slides}
    </Swiper>
  );
};

export default SliderCoverFlow;
