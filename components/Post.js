import Image from "next/image";
import React from "react";
import guy from "../assets/guy7.jpg";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import hearth from "../assets/hearth.png";
import like from "../assets/like.png";
import { BiLike, BiSmile } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import share from "../assets/share.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Moment from "react-moment";

const Post = ({ username, userImg, img, caption, timestamp }) => {
  return (
    <div>
      <div className="my-4 bg-white    mx-auto w-full max-w-[25rem]   rounded-[0.6rem] py-2   sm:max-w-[30rem] md:max-w-[34rem]">
        {/* Header */}
        <div className="flex items-center p-2 justify-between px-4 sm:pt-3">
          <div className="flex items-center">
            <div className="w-10 h-10">
              <img src={userImg} className="rounded-full" />
            </div>
            <div className="flex flex-col pl-3 ">
              <p className="font-semibold">{username}</p>
              <div className="flex ">
                <p className="text-xs pr-1">
                  <Moment className="" fromNow>
                    {timestamp?.toDate()}
                  </Moment>{" "}
                  &#8226;
                </p>
                <BiWorld />
              </div>
            </div>
          </div>
          <div className="w-9 h-9">
            <Image src={dots} />
          </div>
        </div>
        {/* Caption */}
        <div className="px-4 py-1 sm:py-2">
          <p>{caption}</p>
        </div>
        {/* Image */}
        <div className="">
          <img src={img} />
        </div>
        {/* Number of Likes + Butons */}
        <div className="">
          <div className="px-3 pt-1">
            <div className="flex items-center justify-between text-[#8e8d8d] sm:py-2">
              <div className="flex items-center">
                <div className="flex">
                  <div className="w-5 h-5 z-10">
                    <Image src={hearth} />
                  </div>
                  <div className="  w-5 h-5">
                    <Image src={like} />
                  </div>
                </div>

                <p className="text-[0.9rem] ml-1">
                  Emilly Doe and another 2,743
                </p>
              </div>
              <div className="text-[0.9rem]">
                <p>291 Comments</p>
              </div>
            </div>

            <div className="border-b py-1"></div>

            <div className="flex justify-between px-5 py-1 sm:py-[10px]">
              <div className="flex items-center">
                <div className="">
                  <BiLike className="w-5 h-5 mr-1" />
                </div>
                <p>Like</p>
              </div>
              <div className="flex items-center">
                <div className="">
                  <FaRegCommentAlt className="w-[1.1rem] h-[1.1rem] mr-1" />
                </div>
                <p>Comment</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 ">
                  <Image className="rotate-20 " src={share} />
                </div>
                <p className="ml-1">Share</p>
              </div>
            </div>

            <div className="border-b "></div>
          </div>
        </div>
        {/* Comment section */}
        <div className="px-3 py-2  ">
          <div className="flex justify-between items-center  text-[#8e8d8d] text-[0.9rem]  sm:py-0.5 ">
            <p>See 230 previous comments</p>
            <div className="flex items-center">
              <p>Most Relevant</p>
              <RiArrowDownSLine />
            </div>
          </div>
          {/* Comment1 */}
          <div className="">
            <div className="flex items-center mt-2">
              <div className=" flex items-center pr-3">
                <div className="w-9 h-9 mr-2">
                  <Image src={guy} className="rounded-full" />
                </div>
                <p className="whitespace-nowrap font-medium">Joe Doe</p>
              </div>
              <div className="truncate">
                <p className="truncate text-sm">
                  Love the color!Love the color!Love the color!
                </p>
              </div>
            </div>
            <div className=" flex pl-11 text-xs font-semibold text-[#8e8d8d]">
              <p className="pr-2">Like</p>
              <p>Reply</p>
            </div>
          </div>

          {/* Comment1 */}
          <div className="">
            <div className="flex items-center mt-2">
              <div className=" flex items-center pr-3">
                <div className="w-9 h-9 mr-2">
                  <Image src={guy} className="rounded-full" />
                </div>
                <p className="whitespace-nowrap font-medium">Joe Doe</p>
              </div>
              <div className="truncate">
                <p className="truncate text-sm">
                  Love the color!Love the color!Love the color!
                </p>
              </div>
            </div>
            <div className=" flex pl-11 text-xs font-semibold text-[#8e8d8d]">
              <p className="pr-2">Like</p>
              <p>Reply</p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="px-3 flex items-center w-full py-2">
          <div className="w-9 h-9 mr-2 shrink-0">
            <Image src={guy} className="rounded-full" />
          </div>
          <div className="flex items-center w-full relative">
            <input
              type="text"
              placeholder="Write a comment"
              className="bg-[#f2f3f7] rounded-full p-1 pl-3 w-full "
            />
            <div className="absolute flex right-5 text-[#929293] space-x-2">
              <BiSmile />
              <AiOutlineCamera />
              <AiOutlineGif />
            </div>
          </div>
        </div>
        <div className="text-xs ml-14">Press Enter To Post.</div>
      </div>
    </div>
  );
};

export default Post;
