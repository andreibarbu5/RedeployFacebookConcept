import Image from "next/image";
import React from "react";
import albert from "../assets/1albert.jpg";
import arnold from "../assets/1arnold.jpg";
import drphil from "../assets/1drphil.webp";
import elon from "../assets/1elon.webp";
import kobe from "../assets/1kobe.webp";
import miketyson from "../assets/1miketyson.jpg";
import mrbeast from "../assets/1mrbeast.jpg";
import rihana from "../assets/1rihana.jpg";
import therock from "../assets/1rock.jpg";

import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import dots from "../assets/dots.png";
const RightSide = () => {
  const profiles = [
    { name: "Albert E.", photo: albert },
    { name: "Arnold S.", photo: arnold },
    { name: "Dr Phill", photo: drphil },
    { name: "Elon Musk", photo: elon },
    { name: "Kobe Briant", photo: kobe },
    { name: "Mike Tyson", photo: miketyson },
    { name: "Mr Beast", photo: mrbeast },
    { name: "Rihana", photo: rihana },
    { name: "The Rock", photo: therock },
  ];
  return (
    <div>
      <div className="hidden lg:block h-[35rem] w-[10rem] xl:w-[15rem]   mt-6 ">
        <div className="flex h-8 w-full justify-between items-center">
          <p className="font-semibold">Contacts</p>
          <div className=" flex items-center space-x-2">
            <BsFillCameraVideoFill />
            <FiSearch />
            <div className="w-6 h-6">
              <Image src={dots} />
            </div>
          </div>
        </div>
        <div className="space-y-7 mt-4">
          {profiles.map((profile) => (
            <div key={profile.photo} className="flex items-center ">
              <div className="relative flex w-10 h-10 mr-2">
                <Image
                  src={profile.photo}
                  className="rounded-full object-cover"
                />
                <div className="absolute w-[13px] h-[13px] bg-green-400 rounded-full bottom-0 right-0 border-[2px]"></div>
              </div>
              <p className="font-medium">{profile.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
