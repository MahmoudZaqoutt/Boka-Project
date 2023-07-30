export interface IPropsPopularCategoryCard {
  id?: number;
  backgroundImage?: any;
  className: string;
  content?: string;
  usedNo?: string;
  href?: string;
}

export enum className {
  smallCard = "bg-cover bg-center   bg-no-repeat   h-[140px] xl:h-[178px]  hover:scale-105 ease-in-out duration-150 rounded-xl flex  justify-between items-end pr-5 pb-3 pl-5  text-white",
  bigCard = "bg-cover bg-center  row-span-2 col-span-2 bg-no-repeat w-full  h-[300px] xl:h-[390px]  hover:scale-105 ease-in-out duration-150 rounded-2xl flex  justify-between items-end pr-10 pb-3 pl-10  text-white",
}
