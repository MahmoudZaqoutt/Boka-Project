import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Shared/Button/button";

const Header = () => {
  return (
    <div className="flex justify-between h-[84px]  items-center ">
      <div className="ml-12">
        <Logo />
      </div>
      <div className="flex gap-x-[20px] mr-12">
        <Button
          type="submit"
          classname="font-semibold	w-[110px] h-[40px] bg-orange-400 border-2 border-orange-400 rounded	hover:bg-orange-300 ease-in duration-150	"
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
