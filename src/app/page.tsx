"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/astrix-logo.svg";
import ImageFirst from "@/assets/splash-img-1.svg";
import ImageSec from "@/assets/splash-img-2.svg";
import ImageThird from "@/assets/splash-img-3.svg";
import ImageFourth from "@/assets/splash-img-4.svg";
import ImageFifth from "@/assets/splash-img-5.svg";
import ImageSixth from "@/assets/splash-img-6.svg";
import ImageSeventh from "@/assets/splash-img-7.svg";
import ImageEighth from "@/assets/splash-img-8.svg";

export default function Home() {
  const router = useRouter();
  const [isProgressBarComplete, setIsProgressBarComplete] = useState(false);

  useEffect(() => {
    //Progress completion after 3 seconds
    const timeoutId = setTimeout(() => {
      setIsProgressBarComplete(true);
    }, 7000);

    // Cleanup function to clear timeout
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // For changes in progress bar completion status
    if (isProgressBarComplete) {
      // Once progress bar is complete, navigate to the desired route
      router.push("/events-and-collections");
    }
  }, [isProgressBarComplete, router]);

  return (
    <main className="bg-[#FFF4DF] py-20 px-10 space-y-12 flex flex-col lg:h-full h-[100vh]">
      <Image src={logo} alt="" />
      <div className="xl:text-[64px] w-[80vw] mx-auto sm:text-[36px]">
        WE{" "}
        <div className="inline-block relative lg:top-2 md:top-1 animate-widthscale  overflow-hidden">
          <div className="w-[25.7vw]">
            <Image className="" src={ImageFirst} alt="" />
          </div>
        </div>{" "}
        ORGANIZE THE CONNECTION{" "}
        <div className="inline-block relative md:top-2 sm:top-1 animate-widthscale2 overflow-hidden">
          <div className="w-[37.4vw]">
            <Image src={ImageSec} alt="" />
          </div>
        </div>{" "}
        <div className="inline-block relative md:top-2 sm:top-1 animate-widthscale3 overflow-hidden">
          <div className="w-[23.7vw]">
            <Image src={ImageThird} alt="" />
          </div>
        </div>{" "}
        BETWEEN{" "}
        <div className="inline-block relative md:top-2 sm:top-1">
          <Image
            className="xl:w-[167px] xl:h-[74px] w-[11vw] lg:h-[50px]"
            src={ImageFourth}
            alt=""
          />
        </div>{" "}
        MUSIC ARTIST{" "}
        <div className="inline-block relative md:top-2 sm:top-1 animate-widthscale4 overflow-hidden">
          <div className="w-[20.8vw]">
            <Image src={ImageFifth} alt="" />
          </div>
        </div>{" "}
        CULTURE{" "}
        <div className="inline-block relative md:top-2 sm:top-1 animate-widthscale5 overflow-hidden">
          <div className="w-[21.3vw]">
            <Image src={ImageSixth} alt="" />
          </div>
        </div>
        &nbsp;
        <div className="inline-block relative md:top-2 sm:top-1 animate-widthscale6 overflow-hidden">
          <div className="w-[15.8vw]">
            <Image src={ImageSeventh} alt="" />
          </div>
        </div>{" "}
        ART{" "}
        <div className="inline-block relative md:top-2 sm:top-1">
          <Image
            className="xl:h-[74px] xl:w-[10.5vw] w-[10vw] lg:h-[50px]"
            src={ImageEighth}
            alt=""
          />
        </div>{" "}
        & COLLECTIONS
      </div>
      {/* processbar */}
      <div className="w-full h-2 rounded-full overflow-hidden bg-rose-100">
        <div className="h-2 w-0 bg-amber-950 animate-progressbar"></div>
      </div>
    </main>
  );
}
