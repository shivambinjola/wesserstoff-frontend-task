import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface myProps {
  year: string;
  by: string;
  collectibleName: string;
  img: any;
}

const Card = ({ year, by, collectibleName, img }: myProps) => {
  return (
    <div className="bg-[#B9A0FF] p-[10px] rounded-[8.96px] w-[164.8px] space-y-2">
      <div className={`${inter.className} flex justify-between `}>
        <p className="bg-black rounded-full font-bold text-[6.72px] px-2">
          {year}
        </p>
        <p className="text-black text-[7.84px] font-semibold">{by}</p>
      </div>
      <h5 className="text-black text-center text-[11.2px] font-medium">
        {collectibleName}
      </h5>
      <div>
        <Image width={143.92} height={164.08} src={img} alt="" />
      </div>
    </div>
  );
};

export default Card;
