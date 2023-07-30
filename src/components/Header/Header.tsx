import Logo from "../Logo/Logo";
import Button from "../Shared/Button/button";

const Header = () => {
  return (
    <div className=" flex md:justify-between justify-end md:h-[84px]  items-center  ">
      <div className="ml-4 hidden md:block ">
        <Logo classname=" ml-[40px] flex gap-1" />
      </div>
      <div className="flex justify-end  gap-x-[20px] md:mr-14 mr-4 mt-10 md:mt-0 z-10 ">
        <Button
          type="submit"
          classname="font-semibold	w-[110px] h-[40px]  bg-orange-400 border-2 border-orange-400 rounded text-white	hover:bg-orange-300 ease-in duration-150	"
          label="Sign Up"
        />
        <Button
          type="submit"
          classname="font-semibold w-[110px] h-[40px]	text-orange-400  border-2 border-orange-400 rounded hover:bg-orange-100  hover:text-black	ease-in duration-150"
          label=" login"
        />
      </div>
    </div>
  );
};

export default Header;
