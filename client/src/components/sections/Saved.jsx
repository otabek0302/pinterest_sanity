"use client"

import { urlFor } from "@/utils/sanity";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMoreHorizontal, FiUpload } from "react-icons/fi";

const Saved = ({ arr }) => {
  const [open, setOpen] = useState(false);
  console.log(arr);
  return (
    <>
      <div className="grid grid-cols-5 gap-10">
        {arr && arr?.map(({ postedBy, image, _id, save }, i) => (
          <div key={i} className={`row-span-12 bg-slate-200 rounded-3xl overflow-hidden relative`}>
            <Image src={urlFor(image?.asset?.url).url()} fill alt={postedBy?.username} className="object-cover object-center z-0" />
            <div className="h-full p-4 flex flex-col justify-between relative z-[2] bg-black bg-opacity-60 pin-card">
              <div className="flex justify-between items-center relative -top-52">
                <span className="text-base text-white font-bold line-clamp-1 cursor-pointer">{postedBy?.username}</span>
                {
                  !save?.length
                    ? (<span onClick={(e) => {
                      e.stopPropagation();
                      savePin(_id);
                    }} className="text-base text-white font-bold px-8 py-2 bg-primary rounded-full cursor-pointer hover:bg-primary-dark">Save</span>)
                    : (<span onClick={(e) => {
                      e.stopPropagation();
                      deletePin(_id);
                    }} className="text-base text-white font-bold px-8 py-2 bg-primary rounded-full cursor-pointer hover:bg-primary-dark">Saved</span>)
                }
              </div>
              <div className="flex justify-end items-center gap-2.5 relative -bottom-52">
                <Link href={`pin/${_id}`}>
                  <button className="p-3 bg-background rounded-full text-left cursor-pointer">
                    <FiUpload className="text-lg" />
                  </button>
                </Link>
                <button className="p-3 bg-background rounded-full text-left cursor-pointer relative" onClick={() => setOpen(!open)} >
                  <FiMoreHorizontal className="text-lg" />
                  <div className={`absolute -left-12 bottom-52 -translate-x-1/2 -translate-y-1/2 w-52 py-2.5 px-1.5 border rounded-xl shadow-xl bg-background ${open ? "block" : "hidden"}`}>
                    <ul className="flex flex-col gap-1.5">
                      <li className="px-2.5 py-1.5 text-base text-copy font-bold leading-normal cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                        Hide pin
                      </li>
                      <Link href={`${image.asset.url}?dl=`} download onClick={(e) => e.stopPropagation()}>
                        <li className="px-2.5 py-1.5 text-base text-copy font-bold leading-normal cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                          Download image
                        </li>
                      </Link>
                    </ul>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        !arr.length && (<div className="w-full h-72 flex-center"><span className="text-2xl text-copy font-bold leading-normal">There no saved pins <Link href="/ideas" className="ml-2 underline">Save pins</Link></span></div>)
      }
    </>
  );
};

export default Saved;
