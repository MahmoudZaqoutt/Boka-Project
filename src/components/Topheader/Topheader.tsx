import { HEADER_ICONS } from "../../constants/HEADER_ICONS";
import { List } from "../Shared/List/List";
import { HEADER_LINKS } from "../../constants/HEADER_LINKS";

const Topheader = () => {
  return (
    <nav className="md:flex hidden justify-between h-[40px]  align-middle p-2 border-b-current  text-white ">
      <List
        classNameOfLI="hover:text-orange-400 ease-in-out duration-150 text-black"
        className="flex gap-x-5 ml-12 "
        options={HEADER_ICONS}
      />
      <List
        classNameOfLI="hover:text-orange-400 ease-in-out duration-150 text-black pl-6 	"
        className="flex gap-x-6 text-sm mr-12"
        options={HEADER_LINKS}
      />
    </nav>
  );
};

export default Topheader;
