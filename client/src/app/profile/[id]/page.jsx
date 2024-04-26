"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { client } from "@/utils/sanity";
import { useEffect, useState } from "react";
import { IoMdAdd, IoMdOptions } from "react-icons/io";
import Saved from "@/components/sections/Saved";
import Created from "@/components/sections/Created";
import { useSession } from "next-auth/react";
import FilterDropDown from "@/components/ui/FilterDropDown";
import LinkDropDown from "@/components/ui/LinkDropDown";
import { fetchMyPins, fetchMySavedPins } from "@/utils/data";

const Profile = () => {
  const { status } = useSession()
  const pathname = usePathname();
  const userId = pathname?.split("/")?.pop();
  const router = useRouter();

  const [show, setSHow] = useState("created")
  const [pins, setPins] = useState([])
  const [save, setSave] = useState([])
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/")
    }
  }, [status])

  useEffect(() => {
    if (show == "created") {
      const fetchPins = async () => {
        setLoading(true);
        try {
          const query = await fetchMyPins(user?._id);
          const data = await client.fetch(query);
          setPins(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching pins:", error);
          setLoading(false);
        }
      };
      fetchPins();
    } else {
      const fetchPins = async () => {
        setLoading(true);
        try {
          const query = await fetchMySavedPins(user?._id);
          const data = await client.fetch(query);
          setSave(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching pins:", error);
          setLoading(false);
        }
      };
      fetchPins();
    }
  }, [show, user]);


  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          setLoading(true);
          const data = await client.fetch(
            `*[_type == 'user' && _id == '${userId}']`
          );
          if (data === null || data.length === 0) {
            setUser(data[0])
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
        <button className={`text-lg text-copy font-bold ${show === "saved" && "border-b-4 border-gray-800"}`} onClick={() => setSHow("saved")}>
          Created
        </button>
        <button className={`text-lg text-copy font-bold ${show === "created" && "border-b-4 border-gray-800"}`} onClick={() => setSHow("created")}>
          Saved
        </button>
      </div>
      <div className="flex justify-between px-5">
        <FilterDropDown />
        <LinkDropDown />
      </div>

      {/* Posts  */}
      <div className="px-5 py-10">
        {
          show === "created" ? <Saved arr={save} /> : <Created arr={pins} />
        }
      </div>
    </section>
  );
};

export default Profile;
