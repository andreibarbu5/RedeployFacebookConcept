import Image from "next/image";
import React, { useRef, useState } from "react";
import guy from "../assets/guy7.jpg";
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

const NewPost = () => {
  const { data: session } = useSession();
  const captionRef = useRef(null);
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);
  console.log(image);
  const [loading, setLoading] = useState(false);

  //Create data post and add it to the collection
  const uploadPost = async (e) => {
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      profileImg: session?.user?.image,
      username: session?.user?.name,
      caption: captionRef.current.value,
      timestamp: serverTimestamp(),
    });

    //Path for the image
    const imagePath = ref(storage, `posts/${docRef.id}/image`);

    //Upload image to that adress
    //Then with the snapshot declare the download URL
    await uploadString(imagePath, image, "data_url").then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imagePath);
      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    });

    setImage("");
    captionRef.current.value = null;

    setLoading(false);
  };

  const addImageToState = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };
  };

  return (
    <div>
      <div className="bg-white   mx-auto w-full max-w-[25rem]  rounded-[0.6rem] py-3 px-2  sm:max-w-[30rem] md:max-w-[34rem] mt-4 ">
        <div className="flex mx-2 mt-2 items-center">
          <div className="w-10 h-10 mr-4 shrink-0">
            <img src={session?.user?.image} className="rounded-full  " />
          </div>
          <input
            type="text"
            className="bg-[#f2f3f7] rounded-full w-full px-5  truncate outline-0 h-10"
            placeholder="What's on your mind, Jon Doe ?"
            ref={captionRef}
          />
          <button
            onClick={image ? uploadPost : () => alert("Please add an Image")}
            className="flex items-center bg-blue-500 p-2 ml-2 h-8 rounded-full text-white font-semibold hover:bg-blue-400"
          >
            {loading ? "Loading" : "Post"}
          </button>
        </div>
        <div className="">
          {image ? (
            <div className="" onClick={() => setImage("")}>
              <img src={image} alt="" className="p-4" />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full border-t my-4"></div>

        <div className=""></div>

        <div className="flex justify-center space-x-2 sm:space-x-10 mb-2">
          <div className="flex items-center">
            <div className=" w-5 h-5">
              <Image src={camera} />
            </div>
            <p className="pl-2 whitespace-nowrap">Live Video</p>
          </div>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => imageRef.current.click()}
          >
            <div className="w-5 h-5">
              <Image src={photos} />
            </div>
            <p className="pl-2">Photo/Video</p>
            <input
              type="file"
              className="hidden"
              ref={imageRef}
              onChange={addImageToState}
            />
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5">
              <Image src={smile} />
            </div>
            <p className="pl-2">Feeling/Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
