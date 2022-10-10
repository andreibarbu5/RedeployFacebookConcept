import React from "react";
import guy from "../assets/guy7.jpg";
import { MdHome, MdGroups } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import {
  BsCart3,
  BsPeopleFill,
  BsFillCalendarDateFill,
  BsCalendar2Fill,
} from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  AiOutlineMessage,
  AiOutlineDesktop,
  AiFillClockCircle,
} from "react-icons/ai";

import Image from "next/image";
// py-3 px-4  md:py-4 md:px-6
const LeftSide = () => {
  return (
    <div>
      <div className="  w-40 space-y-3 mt-6 py-3 pl-4 md:py-4 md:pl-6 xl:w-[15rem]">
        <div className="flex items-center">
          <MdHome className="w-8 h-8" />
          <p className="ml-2 font-semibold">Home</p>
        </div>
        <div className="flex">
          <div className="w-8 h-8 mr-2 ">
            <Image src={guy} className="rounded-full" />
          </div>
          <p className="font-semibold">Andrei Barbu</p>
        </div>
        <div className="border-t border-[#d2d0d0]"></div>
        <div className="space-y-7">
          <div className="flex ">
            <AiOutlineDesktop className="w-6 h-6" />
            <p className="font-semibold ml-2">Watch</p>
          </div>
          <div className="flex ">
            <BsPeopleFill className="w-6 h-6" />
            <p className="font-semibold ml-2">Friends</p>
          </div>
          <div className="flex ">
            <MdGroups className="w-6 h-6" />
            <p className="font-semibold ml-2">Groups</p>
          </div>
          <div className="flex ">
            <BsCart3 className="w-6 h-6" />
            <p className="font-semibold ml-2">Marketplace</p>
          </div>
          <div className="flex ">
            <BsCalendar2Fill className="w-6 h-6" />
            <p className="font-semibold ml-2">Events</p>
          </div>
          <div className="flex ">
            <AiFillClockCircle className="w-6 h-6" />
            <p className="font-semibold ml-2">Memories</p>
          </div>
          <div className="flex items-center ">
            <RiArrowDownSLine className="w-5 h-5" />
            <p className="ml-2">See More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
