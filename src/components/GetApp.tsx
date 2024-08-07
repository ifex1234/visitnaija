import React from "react";
import Image from "next/image";
import play from "../../public/play.svg";
import apple from "../../public/apple.svg";
import phones from "../../public/phones.png";
import { Button } from "./ui/button";

const GetApp = () => {
  return (
    <section className="flex w-full flex-col pb-[100px] ">
      <div className="bg-gray-950 flex md:container px-5 min-h-[500px]">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="font-bold text-6xl xl:max-w-[320px] text-white">
            Get for free now!
          </h2>
          <p className="text-gray-50 text-lg">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button className="w-64 bg-slate-50 h-14 rounded-md text-green-500 flex gap-x-4 text-lg font-semibold">
              <Image src={apple} alt="" /> Apple store
            </Button>
            <Button className="w-64 bg-transparent border h-14 text-gray-50 flex gap-x-4 text-lg font-semibold">
              <Image src={play} alt="" /> Play store
            </Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src={phones} alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
