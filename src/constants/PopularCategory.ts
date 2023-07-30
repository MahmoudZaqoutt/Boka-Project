// @ts-ignore
import img1 from "../assets/Rectangle15.png";
// @ts-ignore

import img2 from "../assets/Rectangle16.png";
// @ts-ignore

import img3 from "../assets/Rectangle17.png";
// @ts-ignore

import img4 from "../assets/Rectangle18.png";

import { IPropsPopularCategoryCard } from "../interfaces/props/IPropsPopularCategoryCard";

export const POPULAR_CATEGORY: IPropsPopularCategoryCard[] = [
  {
    id: 1,
    backgroundImage: img1,
    content: "Pedicure",
    usedNo: "350+",
    className:
      "bg-cover bg-center  bg-no-repeat   h-[150px] xl:h-[180px]  hover:scale-105 ease-in-out duration-150 rounded-xl flex  justify-between items-end pr-5 pb-7 pl-5  text-white",
    href: "/",
  },
  {
    id: 2,
    backgroundImage: img2,
    content: "IV therap",
    usedNo: "350+",
    className:
      "bg-cover bg-center  bg-no-repeat   h-[150px] xl:h-[180px]  hover:scale-105 ease-in-out duration-150 rounded-xl flex  justify-between items-end pr-5 pb-7 pl-5  text-white",
    href: "/",
  },
  {
    id: 3,
    backgroundImage: img3,
    content: "Haircut",
    usedNo: "350+",
    className:
      "bg-cover bg-center  bg-no-repeat   h-[150px] xl:h-[180px]  hover:scale-105 ease-in-out duration-150 rounded-xl flex  justify-between items-end pr-5 pb-7 pl-5  text-white",
    href: "/",
  },
  {
    id: 4,
    backgroundImage: img4,
    content: "Trimming",
    usedNo: "350+",
    className:
      "bg-cover bg-center xl:w-[235px] bg-no-repeat   h-[150px] xl:h-[180px]  hover:scale-105 ease-in-out duration-150 rounded-xl flex  justify-between items-end pr-5 pb-7 pl-5  text-white",
    href: "/",
  },
];
