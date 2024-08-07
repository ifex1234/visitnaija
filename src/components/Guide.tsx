import Image from "next/image";
import React from "react";
import camp from "../../public/camp.svg";
import boat from "../../public/boat.png";
import meter from "../../public/meter.svg";

const Guide = () => {
  return (
    <section className="flex flex-col md:container px-3 my-5">
      <div className="w-full pb-24 min-h-[400px]">
        <Image src={camp} alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-500 font-semibold text-2xl">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="xl:max-w-[390px] font-bold text-5xl">
            Guide You to Easy Path
          </h2>
          <p className="regular-16  xl:max-w-[520px] text-gray-500">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="flex container relative w-full">
        <Image
          src={boat}
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src={meter}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className=" w-full flex justify-between">
                <p className="regular-16 text-gray-300">Destination</p>
                <p className="font-bold text-green-300">48 min</p>
              </div>
              <p className="font-bold mt-2">Confluence state</p>
            </div>

            <div className="flex w-full flex-col mt-7">
              <p className=" text-gray-300">Start track</p>
              <h4 className="font-bold mt-2">
                Experince the confluence of the <br />
                river Niger and river Benue
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
