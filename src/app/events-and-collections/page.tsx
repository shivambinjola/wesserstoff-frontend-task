"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/astrix-branding.svg";
import SlideImgFirst from "@/assets/slide-img-1.svg";
import SlideImgSec from "@/assets/slide-img-2.svg";
import SlideImgThird from "@/assets/slide-img-3.svg";
import SlideImgFourth from "@/assets/slide-img-4.svg";
import SlideImgFifth from "@/assets/slide-img-5.svg";
import SlideImgSixth from "@/assets/slide-img-6.svg";
import CardImage from "@/assets/Image.svg";
import AstrixIcon from "@/assets/astrix.svg";
import { Inter, Krona_One } from "next/font/google";
import Avatar1 from "@/assets/avatar-1.svg";
import Avatar2 from "@/assets/avatar-2.svg";
import Avatar3 from "@/assets/avatar-3.svg";

import LocationIcon from "@/assets/location-icon.svg";
import ClockIcon from "@/assets/alarm.svg";
import ScanImg from "@/assets/scan-img.svg";
import Slider from "@/components/ui/slider";
import { SwiperSlide } from "swiper/react";
import Card from "@/components/card";
import Marquee from "@/components/ui/marquee";

import ImgFirst from "@/assets/img.svg";
import ImgSec from "@/assets/img2.svg";
import ImgThird from "@/assets/img3.svg";
import SliderCoverFlow from "@/components/ui/slidecoverflow";

const inter = Inter({ subsets: ["latin"] });
const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: "400",
});

const EventsAndCollections = () => {
  const [eventsAndCollections, setEventsAndCollections] =
    useState("Collections");
  const str = "Event:Oasis Bus tour,JLN Stadium,Delhi";
  const strsec = "Collection Live:Meta Lives,live on astrix";

  const arrayofletter = str.split("");
  const arrayoflettersec = strsec.split("");
  console.log(arrayofletter);

  const dataForCollections = [
    {
      title: "Lunar Palace:",
      para: "ft. Kanye west",
      img: SlideImgFirst.src,
      background: "collectionSlideFirstbg",
    },
    {
      title: "Lunar Palace:",
      para: "ft. Kanye west",
      img: SlideImgSec.src,
      background: "collectionSlideSecbg",
    },
    {
      title: "Lunar Palace:",
      para: "ft. Kanye west",
      img: SlideImgThird.src,
      background: "collectionSlideThirdbg",
    },
    {
      title: "Lunar Palace:",
      para: "ft. Kanye west",
      img: SlideImgFourth.src,
      background: "collectionSlideFourthbg",
    },
  ];

  const dataForEvents = [
    { title: "Event Name", location: "Location", img: SlideImgFifth.src },
    { title: "Event Name", location: "Location", img: SlideImgSec.src },
    { title: "Event Name", location: "Location", img: SlideImgSixth.src },
    { title: "Event Name", location: "Location", img: SlideImgFourth.src },
  ];

  const carData = [
    {
      year: "2024",
      by: "By Pablo",
      collectibleName: "Collectible Name",
      img: CardImage.src,
    },
    {
      year: "2024",
      by: "By Pablo",
      collectibleName: "Collectible Name",
      img: CardImage.src,
    },
    {
      year: "2024",
      by: "By Pablo",
      collectibleName: "Collectible Name",
      img: CardImage.src,
    },
    {
      year: "2024",
      by: "By Pablo",
      collectibleName: "Collectible Name",
      img: CardImage.src,
    },
  ];

  const images = [
    { img: ImgFirst.src },
    { img: ImgSec.src },
    { img: ImgThird.src },
    { img: ImgSec.src },
  ];

  return (
    <>
      <main className="bg-[#15181B] flex lg:flex-row flex-col">
        <div className="lg:w-[57.7vw] pt-[15px] flex flex-col">
          {/* logo */}
          <div className="flex items-center gap-[15px] ml-4">
            <Image src={logo} alt="" />
            <h2 className="text-[#FFCA5F] font-extrabold text-[40px] pt-1">
              Astrix.
            </h2>
          </div>
          {/* background container */}
          <div className="absolute w-[361px] text-[#FFFFFF]/20 font-bold break-words space-y-[108px] mt-[142px] ml-[18px] xl:text-[128px] lg:text-[120px] lg:space-y-10 lg:block hidden">
            <p className="leading-[120px]">ASTRIX</p>
            <p className="leading-[120px]">COLLECTIBLE</p>
          </div>
          {/* slidercontainer */}
          <div className="flex lg:flex-col relative w-full mt-14 justify-between pb-11 h-full flex-col-reverse lg:gap-0 gap-5">
            {/* slider */}
            {eventsAndCollections === "Collections" ? (
              <div className=" flex w-full ">
                <Slider
                  spaceBetween={90}
                  preview={2.1}
                  centerslide={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    240: { slidesPerView: 1, spaceBetween: 0 },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    1024: {
                      slidesPerView: 1.8,
                      spaceBetween: 50,
                    },
                    1288: {
                      slidesPerView: 2.1,
                      spaceBetween: 90,
                    },
                  }}
                  slides={
                    <>
                      {dataForCollections.map((item: any, id) => (
                        <SwiperSlide>
                          <div
                            className={`text-white xl:w-[40vw] lg:h-full lg:w-[32vw] w-[100%] h-[40vh] lg:bg-none lg:p-0 p-10 ${
                              id == 0 && "bg-collectionSlideFirstbg"
                            } ${id == 1 && "bg-collectionSlideSecbg"} ${
                              id == 2 && "bg-collectionSlideThirdbg"
                            } ${
                              id == 3 && "bg-collectionSlideFourthbg"
                            } bg-cover bg-no-repeat`}
                          >
                            <h3 className="text-[32px] font-bold">
                              {item.title}{" "}
                            </h3>
                            <p className="text-2xl -mt-2 font-bold">
                              {item.para}
                            </p>
                            <Image
                              width="412"
                              height="630"
                              className="mt-1 xl:h-[630px] lg:h-[500px] lg:block hidden"
                              src={item.img}
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </>
                  }
                />
              </div>
            ) : (
              <div className=" flex w-full justify-end self-end xl:pt-20">
                <Slider
                  spaceBetween={90}
                  preview={2.1}
                  centerslide={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    240: { slidesPerView: 1, spaceBetween: 0 },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    1024: {
                      slidesPerView: 1.8,
                      spaceBetween: 50,
                    },
                    1288: {
                      slidesPerView: 2.1,
                      spaceBetween: 90,
                    },
                  }}
                  slides={
                    <>
                      {dataForEvents.map((item: any, id) => (
                        <SwiperSlide>
                          <div
                            className={`flex flex-col relative text-white xl:w-[412px] lg:w-[32vw] w-[100%] lg:h-full h-[40vh] lg:bg-none ${
                              id == 0 && "bg-collectionSlideFifthbg"
                            } ${id == 1 && "bg-collectionSlideSecbg"} ${
                              id == 2 && "bg-collectionSlideSixthbg"
                            } ${
                              id == 3 && "bg-collectionSlideFourthbg"
                            } bg-cover bg-no-repeat`}
                          >
                            <div className=" absolute bottom-8 z-20 pl-8">
                              <h3 className="text-[46px] font-bold">
                                {item.title}
                              </h3>
                              <p className="text-[20px] font-medium flex items-center gap-1">
                                <span>
                                  {" "}
                                  <Image
                                    className="w-[13.33px] h-[16.67px]"
                                    src={LocationIcon}
                                    alt=""
                                  />
                                </span>
                                {item.location}
                              </p>
                            </div>
                            <Image
                              className="z-10 lg:block hidden"
                              width="412"
                              height="630"
                              src={item.img}
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </>
                  }
                />
              </div>
            )}
            <div
              className={`${inter.className} ml-[26px] w-[330.46px] font-bold text-lg space-x-3 bg-[#282B30] text-white rounded-full gf:w-[80vw]`}
            >
              <button
                onClick={() => setEventsAndCollections("Events")}
                className={`${
                  eventsAndCollections === "Events"
                    ? "bg-[#484E56] h-[52.71px] "
                    : "h-[50px]"
                } px-[39.4px] gf:px-[12.5px]  rounded-full`}
              >
                Events
              </button>
              <button
                onClick={() => setEventsAndCollections("Collections")}
                className={`${
                  eventsAndCollections === "Collections"
                    ? "bg-[#484E56] h-[52.71px]"
                    : "h-[50px]"
                } px-[39.4px] gf:px-[12.5px]  rounded-full`}
              >
                Collections
              </button>
            </div>
          </div>
        </div>
        {/* marquee */}
        <Marquee containerProperty="break-word overflow-hidden bg-[#B9A0FF] break-words text-center hidden lg:block xl:h-[146vh] w-[91px] lg:h-[158vh]">
          {" "}
          <div
            className={`${kronaOne.className} flex flex-col items-center gap-5 xl:text-2xl  animate-marquee lg:text-lg`}
          >
            <div className="">
              {arrayofletter.map((item, id) => (
                <p
                  className={`font-bold rotate-90 ${item === " " && "h-3"}`}
                  key={id}
                >
                  {item === " " ? "\u00A0" : item}
                </p>
              ))}
            </div>
            <Image className="w-[30px] h-[40px]" src={AstrixIcon} alt="" />
            <div className="">
              {arrayoflettersec.map((item, id) => (
                <p
                  className={`font-bold rotate-90 ${item === " " && "h-3"}`}
                  key={id}
                >
                  {item === " " ? "\u00A0" : item}
                </p>
              ))}
            </div>
          </div>
        </Marquee>

        <div
          className={`text-white lg:pt-14 flex flex-col justify-between pb-8 ${
            eventsAndCollections === "Collections"
              ? "xl:pl-16 lg:pl-10 lg:pr-0 sm:pl-10 pl-5"
              : "sm:pl-10 sm:pr-0 xs:px-5"
          }`}
        >
          <div>
            <p
              className={`${
                eventsAndCollections === "Collections"
                  ? "lg:w-[341px]"
                  : "lg:w-[288px]"
              }  font-semibold text-[26px] leading-9 xs:text-lg`}
            >
              Explore Youre First{" "}
              {eventsAndCollections === "Collections" ? "Collectible" : "Event"}
            </p>
            {eventsAndCollections === "Collections" ? (
              //   for Collections
              <div className="xl:mt-10 lg:mt-8">
                <h2 className=" sm:w-[300px] font-bold sm:leading-[64px] xl:text-[57px] sm:text-[36px] xs:text-2xl">
                  Meta Lives
                </h2>
                <div className="w-[316px] xl:mt-7 space-y-3 lg:mt:2 mt-5 xs:space-y-0 gf:w-full">
                  <p className="font-bold text-2xl xs:text-base">
                    Live in Astrix
                  </p>
                  <p className="font-semibold text-base">
                    Lorem ipsum dolor sit amet consectetur. Ac lorem massa in
                    morbi et sed ipsum. Pellentesque mattis condimentum ut
                    nulla.
                  </p>
                </div>
                <div className="flex items-center space-x-2 xl:mt-8 mt-5 flex-row gf:flex-col gf:items-start">
                  <div className="w-[150px] relative flex">
                    <Image className="absolute z-0" src={Avatar1} alt="" />
                    <Image
                      className="absolute z-10 left-6"
                      src={Avatar2}
                      alt=""
                    />
                    <Image
                      className="absolute z-10 left-12"
                      src={Avatar3}
                      alt=""
                    />
                    <Image
                      className="absolute z-10 left-[78px]"
                      src={Avatar3}
                      alt=""
                    />
                    <Image
                      className="relative z-10 left-[105px]"
                      src={Avatar2}
                      alt=""
                    />
                  </div>
                  <p className="xl:text-[20px] font-medium">
                    22k people interested
                  </p>
                </div>
                <div className="xl:mt-[52px] space-y-4 mt-[30px] lg:pb-0 pb-5">
                  <p className="text-sm font-semibold">Collectibles</p>
                  <div className=" lg:w-[32vw]">
                    <Slider
                      spaceBetween={0}
                      preview={2.6}
                      centerslide={false}
                      autoplay={false}
                      breakpoints={{
                        200: { slidesPerView: 1.5, spaceBetween: 0 },
                        300: { slidesPerView: 2, spaceBetween: 0 },
                        400: { slidesPerView: 2.2, spaceBetween: 0 },
                        640: {
                          slidesPerView: 3.3,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 2.1,
                          spaceBetween: 50,
                        },
                        1280: {
                          slidesPerView: 2.5,
                          spaceBetween: 20,
                        },
                        1288: {
                          slidesPerView: 2.6,
                          spaceBetween: 0,
                        },
                      }}
                      slides={carData.map((item) => (
                        <SwiperSlide>
                          <Card
                            year={item.year}
                            by={item.by}
                            collectibleName={item.collectibleName}
                            img={item.img}
                          />
                        </SwiperSlide>
                      ))}
                    />
                  </div>
                </div>
              </div>
            ) : (
              //   for Events
              <div className="xl:mt-[70px] lg:mt-10 sm:mt-5">
                <h2 className=" w-[352px] font-bold leading-[64px] xl:text-[57px] sm:text-4xl xs:text-2xl">
                  Event Name
                </h2>
                <div className="font-semibold flex lg:mt-4 xl:pl-2 xl:text-[22px] xl:space-x-8 lg:text-lg space-x-5 mt-5  gf:text-xs">
                  <p className="flex items-center xl:gap-5 gap-2">
                    <span>
                      <Image src={LocationIcon} alt="" />
                    </span>{" "}
                    Venue
                  </p>
                  <p className="flex items-center xl:gap-5 gap-2">
                    <span>
                      {" "}
                      <Image src={ClockIcon} alt="" />
                    </span>{" "}
                    04/3/2024 @19:00
                  </p>
                </div>
                <p className="font-semibold text-base w-[316px] lg:mt-5 mt-2 gf:w-full">
                  Lorem ipsum dolor sit amet consectetur. Ac lorem massa in
                  morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.
                </p>
                <div className="mt-8 space-y-8 relative xs:mt-5 xs:pb-5">
                  <p className="text-[26px] font-semibold">Artist Lineup</p>
                  <div className="">
                    <SliderCoverFlow
                      spaceBetween={0}
                      preview={2}
                      centerslide={true}
                      autoplay={false}
                      breakpoints={{
                        240: { slidesPerView: 2, spaceBetween: 0 },
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        1288: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                      }}
                      slides={images.map((item) => (
                        <SwiperSlide className="flex">
                          <div className="w-[192px] h-[198px] mx-auto rounded-lg overflow-hidden  xs:h-full">
                            <Image
                              width={192}
                              height={198}
                              src={item.img}
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={` flex ${
              eventsAndCollections === "Collections"
                ? "justify-end"
                : "justify-between"
            } `}
          >
            {eventsAndCollections === "Events" && (
              <Image src={ScanImg} alt="" />
            )}
            <button
              className={`text-[#1A1D21] self-end text-2xl font-bold bg-[#FFCA5F] rounded-full w-[194px] h-[52px] gf:text-lg ${
                eventsAndCollections === "Collections"
                  ? "xl:mr-24 lg:mr-10 mr-5"
                  : "sm:mr-10"
              } `}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default EventsAndCollections;
