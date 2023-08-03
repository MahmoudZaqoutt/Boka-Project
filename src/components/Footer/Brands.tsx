import Logo from "../Logo/Logo";
import { Body } from "../Typography";
// @ts-ignore
import FooterImage from "../../assets/image10.png";
import Container from "../Shared/Container/Container";
import { List } from "../Shared/List/List";
import { DISCOVER_ICONS } from "../../constants/DISCOVER_ICONS";
import { OPENTABLE } from "../../constants/OPENTABLE";
import { MORE } from "../../constants/MORE";
import { OUR_SITES } from "../../constants/OUR_SITES";
import { BUSINESSES } from "../../constants/BUSINESSES";
import { JOIN_US_ON } from "../../constants/JOIN_US_ON";
import { FOOTER_LINKS } from "../../constants/FOOTER_LINKS";

const Brands = () => {
  return (
    <section className="bg-[#F9F9F9] ">
      <Container>
        <div className="xl:h-[608px] h-auto bg-[#F9F9F9] mt-[80px]">
          <div className="pt-[80px] flex flex-col gap-14  sm:gap-20  sm:grid sm:grid-cols-2  xl:grid-cols-2  xl:grid-cols-2 ">
            <div>
              <Logo classname="flex gap-1" />
              <Body
                content="Boka is the new favorite online destination for beauty & wellness bookings, for both professionals and clients. On Boka, providers get a chance to connect with new clients, showcase their work, and streamline their business. Clients can discover their new favorite providers, get inspired, find last-minute bookings, and simply schedule all their beauty & wellness appointments for the upcoming month."
                classnameContent="text-[#6B7C80] mt-2"
              />
            </div>
            <div className="  grid grid-cols-2 gap-5 xl:grid-cols-4 sm:grid-cols-2">
              <div>
                <List
                  options={DISCOVER_ICONS}
                  title="Discover"
                  classNameOfLI="text-[#6B7C80] hover:underline ease-in-out duration-150 "
                />
              </div>

              <div className="flex flex-col gap-5">
                <List
                  options={OPENTABLE}
                  title="Opentable"
                  classNameOfLI="text-[#6B7C80] hover:underline ease-in-out duration-150 "
                />
                <List
                  options={MORE}
                  title="More"
                  classNameOfLI="text-[#6B7C80] hover:underline ease-in-out duration-150 "
                />
              </div>

              <div>
                <List
                  options={OUR_SITES}
                  title="Our Sites"
                  classNameOfLI="text-[#6B7C80] hover:underline ease-in-out duration-150 "
                />
              </div>
              <div className="flex flex-col gap-5">
                <List
                  options={BUSINESSES}
                  title="Businesses"
                  classNameOfLI="text-[#6B7C80] hover:underline ease-in-out duration-150 "
                />
                <List
                  options={JOIN_US_ON}
                  title="Join Us On"
                  className="flex gap-4 mt-[12px]"
                  classNameOfLI="text-[#6B7C80] hover:text-orange-400 ease-in-out duration-150 "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 lg:gap-0 lg:flex-row justify-between mt-[50px]">
            <div>
              <List
                options={FOOTER_LINKS}
                className="flex gap-9"
                classNameOfLI="text-[#6B7C80] hover:underline ease-in-out duration-150 "
              />
            </div>

            <Body
              content="Copyright © 2023 Boka, Inc. All rights reserved."
              classnameContent="text-[#6B7C80] "
            />
          </div>

          <div className="flex flex-col items-center gap-3 lg:gap-0 lg:flex-row justify-between mt-[40px]">
            <Body
              content="OpenTable is part of Booking Holdings, the world leader in online travel and related services."
              classnameContent="text-[#6B7C80] w-auto"
            />
            <img src={FooterImage} alt="FooterImage" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Brands;
