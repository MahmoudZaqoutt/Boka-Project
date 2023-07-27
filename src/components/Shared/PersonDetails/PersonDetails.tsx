import { Body } from "../../Typography";
import { Link } from "react-router-dom";
// @ts-ignore
import Person from "../../../assets/Ellipse9.png";

const PersonDetails = () => {
  return (
    <div className="flex flex-row items-center   ">
      <img src={Person} alt="person" />
      <div className="-mt-3">
        <Body content="Shoukri Kattan" classnameContent="font-bold" />
        <Link to={""} className="text-[#6B7C80]">
          Hair Specialist @boka
        </Link>
      </div>
    </div>
  );
};

export default PersonDetails;
