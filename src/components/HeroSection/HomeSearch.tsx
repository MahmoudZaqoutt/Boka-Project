import { H1, SPAN } from "../Typography";
import { WiTime9 } from "react-icons/wi";
import { BsCalendarDate } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Button from "../Shared/Button/button";
import { Link } from "react-router-dom";
// @ts-ignore
import heroImg from "../../assets/heroSection.png";
import Header from "../Header/Header";
import Topheader from "../Topheader/Topheader";
import FormOfHeroSection from "../Shared/FormOfHeroSection/FormOfHeroSection";

const Homesearch = () => {
  return (
    <section
      className="h-[680px] background-I bg-cover bg-center  bg-no-repeat  "
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Topheader />
      <Header />
      <div className=" h-[560px]">
        <H1
          content="Book your beauty and wellness appointments instantly"
          classnameContent="font-bold hidden md:block text-5xl lg:mt-[8rem]  h-[124px] text-center text-white	"
        />
        <form>
          <div className="flex flex-col lg:flex-row gap-3 items-center justify-center mt-7 sm:mt-14 md:mt-0">
            <div className="flex lg:flex-row flex-col w-[80%]  lg:w-[504px] lg:h-[60px] items-center lg:bg-white font-semibold gap-3 border-l-stone-50 rounded-md	">
              <div className="flex lg:flex-col w-full lg:w-[95px] h-[50px] lg:h-[44px] pl-3 bg-white !rounded-xl	 ">
                <FormOfHeroSection
                  className="flex items-center w-[98%] lg:w-[89px] h-[50px] lg:h-[44px]  gap-x-2 "
                  label="At home"
                  inputClassName="lg:mr-1 accent-orange-400  scale-150"
                  type="checkbox"
                />
                <FormOfHeroSection
                  className="flex items-center w-full lg:w-[82px] h-[50px] lg:h-[44px] gap-x-2 bg-white border-l-2 lg:border-none  pl-3 lg:pl-0 rounded-r-xl"
                  label="Business"
                  inputClassName="lg:mr-1 accent-orange-400 scale-150"
                  type="checkbox"
                />
              </div>

              <div className="flex lg:flex-row bg-white w-full lg:w-auto rounded-xl	">
                <FormOfHeroSection
                  className="flex items-center w-full lg:w-[89px] h-[50px] lg:h-[44px]  gap-x-2 lg:border-l-2 pl-2 "
                  icon={<BsCalendarDate className="text-2xl" />}
                  label="Today"
                />

                <FormOfHeroSection
                  className="flex items-center w-full lg:w-[82px] h-[50px] lg:h-[44px] gap-x-2 bg-white border-l-2 pl-2 rounded-r-xl"
                  icon={<WiTime9 className="text-2xl" />}
                  label="Now"
                />
              </div>
              <FormOfHeroSection
                placeholder="Location"
                inputClassName="w-[118px] outline-none"
                type="text"
                icon={<FaMapMarkerAlt className="text-2xl" />}
                className="flex items-center lg:w-[200px] lg:rounded-none w-full gap-x-2  rounded-xl	 h-[60px] lg:h-[44px] bg-white border-l-2 pl-2"
              />
            </div>

            <FormOfHeroSection
              placeholder="Location, service, Keyword"
              inputClassName="w-full outline-none"
              type="search"
              icon={<BsSearch className="text-2xl" />}
              className="flex items-center gap-x-2 rounded-xl 	 bg-white pl-2 lg:w-[288px] h-[60px] rounded-md w-[80%]"
            />

            <div className="lg:w-auto w-[80%] rounded-xl">
              <Button
                type="submit"
                classname="font-semibold text-white w-full	lg:w-[120px] h-[60px] bg-orange-400 border-2 border-orange-400 rounded-xl	hover:bg-orange-300 ease-in duration-150	rounded-md"
                label="Search"
              />
            </div>
          </div>
        </form>

        <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-[22px] justify-center mt-[24px] text-white">
          <SPAN content="It looks like you're in Dhaka Division. Not correct?" />
          <div className="flex  items-center gap-3 text-orange-400">
            <FaMapMarkerAlt className="text-lg " />
            <Link to={""}>Get current location</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homesearch;
