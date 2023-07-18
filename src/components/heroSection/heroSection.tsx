import React from "react";
import { H1, SPAN } from "../Typography";
import { WiTime9 } from "react-icons/wi";
import { BsCalendarDate } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Button from "../Shared/Button/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col h-[560px]  ">
      <div className=" h-[560px]  bg-black bg-gradient-to-r from-orange-200 to-orange-100 -mt-6">
        <H1
          content="Book your beauty and wellness appointments instantly"
          classnameContent="font-bold text-5xl mt-[8rem]  h-[124px] text-center	"
        />
        <div className="flex gap-3 items-center justify-center">
          <div className="flex w-[504px] h-[60px] items-center bg-white font-semibold gap-x-3 border-l-stone-50 rounded-md	">
            <div className="flex flex-col w-[95px] h-[44px] pl-3 ">
              <div>
                <input type="checkbox" id="At home" className="mr-1 " />
                <label htmlFor="At home">At home</label>
              </div>
              <div>
                <input type="checkbox" id="Business" className="mr-1" />
                <label htmlFor="Business">Business</label>
              </div>
            </div>

            <div className="flex items-center w-[89px] h-[44px] gap-x-2 border-l-2 pl-2">
              <BsCalendarDate />
              <label>Today</label>
            </div>

            <div className="flex items-center w-[82px] h-[44px] gap-x-2 border-l-2 pl-2">
              <WiTime9 />
              <label>Now</label>
            </div>

            <div className="flex items-center gap-x-2 h-[44px] border-l-2 pl-2">
              <FaMapMarkerAlt />
              <input placeholder="Location" className="w-[118px]" />
            </div>
          </div>

          <div className="flex items-center gap-x-2 bg-white pl-2 w-[288px] h-[60px] rounded-md">
            <BsSearch />
            <input
              type="text"
              placeholder="Location, service, Keyword"
              className="w-full"
            />
          </div>

          <div>
            <Button
              type="submit"
              classname="font-semibold	w-[120px] h-[60px] bg-orange-400 border-2 border-orange-400 rounded	hover:bg-orange-300 ease-in duration-150	rounded-md"
              label="Search"
            />
          </div>
        </div>

        <div className="flex items-center gap-[22px] justify-center mt-[24px]">
          <SPAN content="It looks like you're in Dhaka Division. Not correct?" />
          <div className="flex items-center gap-3 text-orange-400">
            <FaMapMarkerAlt />
            <Link to={""}>
              <SPAN content="Get current location" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
