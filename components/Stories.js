import Image from "next/image";
import React from "react";
import therock from "../assets/therock.jpg";
import therock2 from "../assets/therock2.webp";
import therock20 from "../assets/therock20.jpg";
import mike from "../assets/1miketyson.jpg";
import mikeprofile from "../assets/mikeprofile.webp";
import mrbeastbackground from "../assets/mrbeastbackground.webp";
import mrbeast from "../assets/1mrbeast.jpg";
import kobebackground from "../assets/kobebackground.jpg";
import kobe from "../assets/1kobe.webp";
import arnoldbackground from "../assets/arnoldbackground.webp";
import arnold from "../assets/1arnold.jpg";
import { useSession, signIn, signOut } from "next-auth/react";

const Stories = () => {
  const { data: session } = useSession();
  const stories = [
    { profile: mikeprofile, background: mike },
    { profile: mrbeast, background: mrbeastbackground },
    { profile: kobebackground, background: kobe },
    { profile: arnold, background: arnoldbackground },
  ];

  return (
    <div className="w-full">
      <div className="flex  h-[9rem] w-screen sm:w-full mt-4 px-2 mx-auto md:h-[11rem]">
        <div className="bg-white  flex justify-center mx-auto w-full max-w-[25rem] space-x-4 rounded-[1rem] py-2 px-2  sm:max-w-[30rem] md:max-w-[34rem]">
          {/* My story */}
          <div key="mystory" className="relative flex  w-[5rem] md:w-[7rem] ">
            <div className="flex bg-gray-700 rounded-[1rem] ">
              <img
                src={session ? session.user.image : therock20.src}
                className="object-cover opacity-80 rounded-[1rem]"
              />
            </div>

            <div className="absolute flex w-8 h-8 top-1 left-1 rounded-full border-[3.5px] border-[#0a84d0]">
              <img
                src={session ? session.user.image : therock.src}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          {/* My story */}

          {/* Story 1 */}
          {stories.map((story) => (
            <div
              key={story.profile}
              className="relative flex  w-[5rem] md:w-[7rem] "
            >
              <div className="flex bg-gray-700 rounded-[1rem] ">
                <Image
                  src={story.profile}
                  className="object-cover opacity-80 rounded-[1rem]"
                />
              </div>

              <div className="absolute flex w-8 h-8 top-1 left-1 rounded-full border-[3.5px] border-[#0a84d0]">
                <Image
                  src={story.background}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
