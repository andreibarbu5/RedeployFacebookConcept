import Image from "next/image";
import React from "react";
import facebook from "../assets/facebook1.png";
import guy from "../assets/guy7.jpg";

import { MdHome } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="">
      <div className="flex items-center justify-between border-b py-3 px-4  md:py-4 md:px-6">
        {/* Left */}
        <div className="flex  items-center">
          <div
            className="flex  items-center justify-center w-10 h-10 "
            onClick={() => router.push("/")}
          >
            <Image src={facebook} />
          </div>
          <div className="hidden sm:block ml-4 ">
            <input
              type="text"
              placeholder="Search Facebook"
              className="outline-0 bg-[#f2f3f7] rounded-full p-1.5 pl-4"
            />
          </div>
        </div>
        {/* Middle */}
        <div className="flex space-x-6 items-center md:space-x-9 mx-4">
          <MdHome className="w-6 h-6 md:w-8 md:h-8" />
          <FiFlag className="navbuttons" />
          <FiPlayCircle className="navbuttons" />
          <BsCart3 className="navbuttons" />
          <GrGroup className="navbuttons" />
        </div>
        {/* Right */}
        <div className="flex items-center lg:space-x-2">
          <div className="hidden lg:block">
            <GrAppsRounded className="navbuttons mr-4" />
          </div>
          <div className="hidden lg:block">
            <FaBell className="navbuttons mr-4" />
          </div>
          <div className="hidden sm:block">
            <AiOutlineMessage className="navbuttons mr-4" />
          </div>

          <div className="w-9 h-9 " onClick={signIn}>
            <img src={session?.user?.image} className="rounded-full   " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
