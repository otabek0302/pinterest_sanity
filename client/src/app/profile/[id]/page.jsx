"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { client } from "@/utils/sanity";
import { useEffect, useState } from "react";
import { IoMdAdd, IoMdOptions } from "react-icons/io";
import Saved from "@/components/sections/Saved";
import Created from "@/components/sections/Created";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const userId = pathname?.split("/")?.pop();

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          setLoading(true);
          const data = await client.fetch(
            `*[_type == 'user' && _id == '${userId}']`
          );
          if (data === null || data.length === 0) {
            setLoading(false);
            console.log("No user found for id:", userId);
          } else {
            setLoading(false);
            setUser(data[0]);
          }
        } catch (error) {
          setLoading(false);
          throw new Error(error.message);
        }
      }
    };
    fetchUser();
  }, [userId]);

  console.log(user);

  if (loading) {
    return (
      <div className="absolute inset-0 bg-white flex-center">Loading....</div>
    );
  }

  return (
    <section className="">
      {/* Profile Information */}
      <div className="max-w-xl mx-auto flex-center flex-col mb-7">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={user?.image ? user?.image : "/user.png"}
            fill
            alt="Profile picture"
            className="object-cover object-center"
          />
        </div>
        <h3 className="mt-1.5 text-4xl text-copy font-bold">Amonov Otabek</h3>
        <div className="flex gap-0.5 my-3.5">
          <Image src="/logo.png" width={24} height={24} alt="Profile picture" />
          <span className="text-sm text-copy-lighter font-normal">
            otabekamonov
          </span>
        </div>
        <div className="mb-1.5 flex gap-2.5 text-base text-copy font-normal">
          <span>2 Followers</span>
          <span>10 Following</span>
        </div>
        <div className="flex gap-5">
          <button className="min-w-[80px] min-h-[48px] px-4 py-3 bg-gray-200 flex-center rounded-full text-base text-copy font-bold">
            Share
          </button>
          <button className="min-w-[80px] min-h-[48px] px-4 py-3 bg-gray-200 flex-center rounded-full text-base text-copy font-bold">
            <Link href="/setting">Setting</Link>
          </button>
        </div>
      </div>

      {/* Profile controller */}
      <div className="flex-center gap-5 pb-4">
        <button className="text-lg text-copy font-bold border-b-4 border-gray-800">
          Created
        </button>
        <button className="text-lg text-copy font-bold border-b-4 border-gray-800">
          Saved
        </button>
      </div>
      <div className="flex justify-between px-5">
        <Link
          href="/pin-creation-tool"
          className="p-2.5 text-base text-copy font-bold leading-normal hover:bg-border rounded-full cursor-pointer"
        >
          <IoMdOptions className="text-3xl text-copy-lighter" />
        </Link>
        <Link
          href="/desk-creation-tool"
          className="p-2.5 text-base text-copy font-bold leading-normal hover:bg-border rounded-full cursor-pointer"
        >
          <IoMdAdd className="text-3xl text-copy-lighter" />
        </Link>
      </div>

      {/* Posts  */}
      <div className="px-5">
        {/* <Saved /> */}
        <Created />
      </div>
    </section>
  );
};

export default Profile;
