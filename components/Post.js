import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import {
  deleteDoc,
  doc,
  setDoc,
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import bluelike from "../assets/25like.png";
import blacklike from "../assets/2unlike.png";

const Post = ({ id, username, userImg, img, caption, timestamp }) => {
  const { data: session } = useSession();
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  //When Likes update in the db update the likes in the app as well
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  //Checking if user liked already
  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  //When Comments update in db update them in the app as well
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  //When double like delete like from db
  //When clicked once add like
  const likePost = async () => {
    if (hasLiked) {
      console.log(session?.user?.uid);
      await deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user?.uid), {
        username: session?.user?.name,
      });
    }
  };

  //Send comments to db
  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session?.user?.name,
      image: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  };

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
                <div className="flex items-center">
                  <div className="w-5 h-5 z-10">
                    <Image src={hearth} />
                  </div>
                  <div className="  w-[1.12rem] h-[1.12rem]">
                    <Image src={like} />
                  </div>
                </div>

                <p className="text-[0.9rem] ml-1">
                  {`Emilly Doe and another ${likes.length}`}
                </p>
              </div>
              <div className="text-[0.9rem]">
                <p>{`${comments.length} Comments`}</p>
              </div>
            </div>

            <div className="border-b py-1"></div>

            <div className="flex justify-between px-5 py-1 sm:py-[10px]">
              <div className="flex items-center " onClick={likePost}>
                <div className="">
                  <img
                    src={hasLiked ? bluelike.src : blacklike.src}
                    className="w-5 h-5 mr-1 "
                  />
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
        <div className="px-3 py-2 max-h-36 overflow-y-scroll ">
          <div className="flex justify-between items-center  text-[#8e8d8d] text-[0.9rem]  sm:py-0.5 ">
            <p>{`See ${comments.length} previous comments`}</p>
            <div className="flex items-center">
              <p>Most Relevant</p>
              <RiArrowDownSLine />
            </div>
          </div>
          {/* Comment1 */}
          {comments.map((comment) => (
            <div key={comment.id} className="">
              <div className="flex items-center mt-2">
                <div className=" flex items-center pr-3">
                  <div className="w-9 h-9 mr-2">
                    <img src={comment.data().image} className="rounded-full" />
                  </div>
                  <p className="whitespace-nowrap font-medium">
                    {comment.data().username}
                  </p>
                </div>
                <div className="truncate">
                  <p className="truncate text-sm">{comment.data().comment}</p>
                </div>
              </div>
              <div className=" flex pl-11 text-xs font-semibold text-[#8e8d8d]">
                <p className="pr-2">Like</p>
                <p>Reply</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="px-3 flex items-center w-full py-2">
          <div className="w-9 h-9 mr-2 shrink-0">
            <img src={session?.user?.image} className="rounded-full" />
          </div>
          <div className="flex items-center w-full relative bg-[#f2f3f7]  rounded-full">
            <input
              type="text"
              placeholder="Write a comment"
              className=" p-1 pl-3 mr-[4.5rem] w-full bg-[#f2f3f7] rounded-full outline-0"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="mr-2.5 px-1.5 text-sm bg-blue-500 rounded-full font-semibold text-white hover:bg-blue-400"
              onClick={sendComment}
            >
              Post
            </button>
            <div className="absolute flex right-14 text-[#929293] space-x-2">
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
