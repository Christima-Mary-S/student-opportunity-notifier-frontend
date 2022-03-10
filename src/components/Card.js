import React from "react";
import {
  FaUserAlt,
  FaRupeeSign,
  FaBuilding,
  FaCalendarTimes,
  FaSave,
} from "react-icons/fa";

export const Card = ({ props }) => {
  const { title, link, location, stipend, apply_by } = props;
  console.log(location);
  return (
    <article className=" h-80 w-80 border-2 border-none bg-black-light capitalize text-gray-dark shadow-xl shadow-slate-600">
      <div className="banner bg-cyan-light h-2/6"></div>
      <div className="info h-3/6  flex items-center justify-around border-b-2 border-slate-700">
        <div className="">
          <div className="flex gap-4 mb-2 font-semibold pl-2 pr-2">
            <FaUserAlt /> <p>{title}</p>
          </div>
          <div className="flex gap-4 mb-2 font-semibold pl-2 pr-2">
            <FaRupeeSign /> <p>stipend: {stipend}</p>
          </div>
          <div className="flex gap-4 mb-2 font-semibold pl-2 pr-2">
            <FaBuilding /> <p>location: {location.split(",")[0]}</p>
          </div>
          <div className="flex gap-4 mb-2 font-semibold pl-2 pr-2">
            <FaCalendarTimes /> <p>apply by: {apply_by}</p>
          </div>
        </div>
      </div>
      <div className="btn-container  h-1/6 flex items-center justify-around ">
        <button>
          <FaSave />
        </button>
        <button className="p-1 shadow-md shadow-slate-700">
          <a href={link}>Read Now</a>
        </button>
      </div>
    </article>
  );
};
