import Image from "next/image";
import star from "../../public/star.svg";
import play from "../../public/play.svg";
import hero_bg from "../../public/hero-bg.svg";
import { Button } from "./ui/button";
import { CarouselPlugin } from "./carousel";
const Hero = () => {
  return (
    <section className=" w-full flex flex-col px-3 gap-20 py-10 pb-32 md:gap-28 lg:py-20 md:flex-row lg:container">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className=" font-bold text-6xl">
          Premium Tourism Experience like no other
        </h1>
        <p className="regular-16 mt-6 text-slate-400 text-xl xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the Nigeria in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src={star}
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className=" text-2xl">
            198k
            <span className=" text-2xl ml-1 ">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex w-full gap-3 flex-row items-center">
          <Button className=" bg-green-600 rounded-3xl w-40 h-14 hover:bg-slate-100 hover:text-green-600 text-lg">
            Download App
          </Button>
          <Button className=" bg-transparent text-slate-800 text-lg flex justify-between w-44 hover:text-white">
            <Image alt="" src={play} />
            How we work
          </Button>
        </div>
      </div>

      <div className="relative flex flex-1 items-start w-1/2 ">
        {/* <Image src={hero_bg} alt="" /> */}
        {/* <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src={close} alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div> 
        </div> */}
        <CarouselPlugin />
      </div>
    </section>
  );
};

export default Hero;
