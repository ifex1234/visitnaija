/* eslint-disable react/no-unescaped-entities */
import { PEOPLE_URL } from "../constants";
import Image, { StaticImageData } from "next/image";
import quote from "../../public/quote.svg";
import folded from "../../public/folded-map.svg";
import camp from "../../public/img-1.png";
import camp2 from "../../public/img-2.png";

interface CampProps {
  backgroundImage: StaticImageData;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full overflow-hidden w-full min-w-[1100px] lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className=" w-full">
        <Image src={camp} alt="" />
      </div>

      <div className="flex flex-col items-start justify-between p-6 lg:px-20 lg:py-10 absolute">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src={backgroundImage} alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className=" justify-center gap-6 -mt-24 z-30 absolute">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="w-full relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 overflow-hidden">
      <div className=" flex h-[340px] w-full items-start justify-start gap-8 overflow-x-hidden lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage={camp}
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage={camp2}
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="mt-10 px-6 md:-mt-36 lg:mr-6 h-32 w-full lg:w-1/2 ">
        <div className="bg-green-600 px-2 py-2 relative overflow-hidden">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
