import { StaticImageData } from "next/image";
import img1 from "../../public/carousel/download (6).jpg";
import img2 from "../../public/carousel/download (7).jpg";
import img3 from "../../public/carousel/download (8).jpg";
import img4 from "../../public/carousel/images (1).jpg";
import img5 from "../../public/carousel/images (2).jpg";
import img6 from "../../public/carousel/images (3).jpg";
import img7 from "../../public/carousel/images (4).jpg";

type Props = {
  id: number;
  img: StaticImageData;
}[];
export const Carousel_slide: Props = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
];
