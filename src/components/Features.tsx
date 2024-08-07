import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import phone from "../../public/phone.png";
import camp from "../../public/camp.svg";

const Features = () => {
  return (
    <section className="flex-col overflow-hidden bg-no-repeat py-24">
      <div className="relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src={phone}
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative px-4">
            <Image
              src={camp}
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[10px] top-[-22px] w-10 lg:w-[50px]"
            />
            <h2 className="font-bold text-6xl">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start px-4">
      <div className="rounded-full p-4 lg:p-7 bg-green-500">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="font-bold mt-5 capitalize">{title}</h2>
      <p className=" mt-5 bg-transparent text-gray-500 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
