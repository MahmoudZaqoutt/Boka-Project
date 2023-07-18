import React from "react";
import { HEADER_ICONS } from "../../constants/HeaderIcons";
import { Link } from "react-router-dom";
import DropDownList from "../DropDownList/DropDownList";

const Topheader = () => {
  return (
    <div className="flex justify-between h-[40px] bg-slate-50 align-middle p-2 border-b-current">
      <div>
        <ul className="flex gap-x-5 ml-12 ">
          {HEADER_ICONS.map((icon) => (
            <li>
              <Link to={""}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex gap-7 text-sm mr-12	">
          <li>
            {" "}
            <Link to={""}>For Business </Link>
          </li>
          <li>|</li>
          <li>
            <Link to={""}>Help</Link>
          </li>
          <li>|</li>

          <li>
            <DropDownList
              title="EN"
              options={["EN", "AR"]}
              className="bg-slate-50 cursor-pointer hover:bg-white"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topheader;
