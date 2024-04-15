"use client";

import Image from "next/image";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { client } from "@/utils/sanity";

const Header = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const { data: session, status } = useSession();
  const [location, setLocation] = useState("/");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const email = session?.user?.email;

  useEffect(() => {
    if (pathname) {
      setLocation(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    const fetchUser = async () => {
      if (email) {
        try {
          setLoading(true);
          const data = await client.fetch(
            `*[_type == "user" && email == '${email}']`
          );
          if (data === null || data.length === 0) {
            console.log("No user found for email:", email);
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
  }, [email]);

  return (
    <header className="px-7">
      <nav className="py-5 flex items-center justify-between gap-3.5">
        <div className="flex">
          <Link href="/" className="flex-center gap-1.5">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                fill
                alt="Logo"
                className="object-cover object-center"
              />
            </div>
            <h2 className="text-primary-dark font-bold text-lg">Printest</h2>
          </Link>

          {location === "/" && (
            <div className="flex-center gap-5 ml-5">
              <Link
                className="text-base text-copy font-bold leading-normal"
                href="/videos"
              >
                Watch
              </Link>
              <Link
                className="text-base text-copy font-bold leading-normal"
                href="/ideas"
              >
                Explore
              </Link>
            </div>
          )}
          {location !== "/" && (
            <div className="relative">
              <button
                type="button"
                className="flex-center px-6 py-3 ml-5 gap-1.5 rounded-full bg-gray-200 text-black font-bold cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {location.includes("/videos") ? "Watch" : ""}
                {location.includes("/ideas") ? "Explore" : ""}
                <IoIosArrowDown className="mt-1" />
              </button>
              <div
                className={`absolute w-44 p-5 mt-1.5 flex flex-col border rounded-2xl shadow-xl bg-background ${
                  open ? "block" : "hidden"
                }`}
              >
                <Link
                  className="font-bold p-3.5 rounded-xl hover:bg-gray-200"
                  href="/videos"
                  onClick={() => setOpen(!open)}
                >
                  Watch
                </Link>
                <Link
                  className="font-bold p-3.5 rounded-xl hover:bg-gray-200"
                  href="/ideas"
                  onClick={() => setOpen(!open)}
                >
                  Explore
                </Link>
              </div>
            </div>
          )}
        </div>
        {location !== "/" && (
          <div className="flex-1 bg-gray-200 rounded-full relative">
            <input
              type="text"
              className="w-full h-full p-5 rounded-full focus:outline-blue-300 focus:outline-4 bg-transparent"
              placeholder="Search for easy dinners, fashion, etc."
            />

            {/* <div className='absolute top-16 w-full h-72 bg-gray-100 rounded-xl p-10'>
                            </div> */}
          </div>
        )}


                <div className='flex items-center'>
                    <div>
                        {
                            location === "/" && status === "unauthenticated"
                                ? (
                                    <ul className='flex gap-5'>
                                        <li className='text-base text-copy font-bold leading-normal'>About</li>
                                        <li className='text-base text-copy font-bold leading-normal'>Business</li>
                                        <li className='text-base text-copy font-bold leading-normal'>Press</li>
                                    </ul>
                                )
                                : (
                                    <ul className='flex gap-3.5'>
                                        <li className='p-1.5 text-base text-copy font-bold leading-normal hover:bg-border rounded-full cursor-pointer'>
                                            <IoIosNotifications className='text-3xl text-copy-lighter' />
                                        </li>
                                        <li className='p-1.5 text-base text-copy font-bold leading-normal hover:bg-border rounded-full cursor-pointer'>
                                            <BiSolidMessageRoundedDots className='text-3xl text-copy-lighter' />
                                        </li>
                                    </ul>
                                )
                        }
                    </div>
                    <div className='ml-5'>
                        {
                            status === "authenticated"
                                ? (<Link href="/profile"><div className='relative w-8 h-8 rounded-full overflow-hidden'><Image src="/logo.png" fill alt="Avatar" className='object-cover object-center' /></div></Link>)
                                : (<div className='flex gap-2.5'><Link href="/auth/login"><button className='py-2 px-3.5 bg-primary hover:bg-primary-dark text-sm text-white font-semibold text-center rounded-[24px] cursor-pointer'>Login</button></Link><Link href="/auth/singup"><button className='py-2 px-3.5 bg-background hover:bg-gray-200 border border-border text-sm text-copy font-semibold text-center rounded-[24px] cursor-pointer'>Sing up</button></Link></div>)
                        }
                    </div>
                    <div className='relative ml-1'>
                        <div className='relative p-0.5 flex-center rounded-full overflow-hidden hover:bg-gray-200'>
                            <MdKeyboardArrowDown className='text-xl' />
                        </div>
                        <div className='absolute w-96 top-12 -right-2.5 p-2.5 rounded-xl bg-gray-300'>
                            <div className='flex'>
                                <Link href="/profile">
                                    <div className='relative w-8 h-8 rounded-full overflow-hidden'><Image src="/logo.png" fill alt="Avatar" className='object-cover object-center' /></div>
                                </Link>
                                <div className='flex-col gap-1.5'>
                                    <h2>Amonov Otabek</h2>
                                    <span>Personal</span>
                                    <span>otabekjon0302@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
        <div className="flex gap-5 items-center">
          <div>
            {location === "/" && status === "unauthenticated" ? (
              <ul className="flex gap-5">
                <li className="text-base text-copy font-bold leading-normal">
                  About
                </li>
                <li className="text-base text-copy font-bold leading-normal">
                  Business
                </li>
                <li className="text-base text-copy font-bold leading-normal">
                  Press
                </li>
              </ul>
            ) : (
              <ul className="flex gap-3.5">
                <li className="p-1.5 text-base text-copy font-bold leading-normal hover:bg-border rounded-full cursor-pointer">
                  <IoIosNotifications className="text-3xl text-copy-lighter" />
                </li>
                <li className="p-1.5 text-base text-copy font-bold leading-normal hover:bg-border rounded-full cursor-pointer">
                  <BiSolidMessageRoundedDots className="text-3xl text-copy-lighter" />
                </li>
              </ul>
            )}
          </div>
          <div>
            {status === "authenticated" ? (
              <Link href={`/profile/${user?._id}`}>
                <div className={`relative w-8 h-8 border border-border rounded-full overflow-hidden ${loading && "animete-pulse"}`}>
                  <Image
                    src="/user.png"
                    fill
                    alt="Avatar"
                    className="object-cover object-center"
                  />
                </div>
              </Link>
            ) : (
              <div className="flex gap-2.5">
                <Link href="/auth/login">
                  <button className="py-2 px-3.5 bg-primary hover:bg-primary-dark text-sm text-white font-semibold text-center rounded-[24px] cursor-pointer">
                    Login
                  </button>
                </Link>
                <Link href="/auth/singup">
                  <button className="py-2 px-3.5 bg-background hover:bg-gray-200 border border-border text-sm text-copy font-semibold text-center rounded-[24px] cursor-pointer">
                    Sing up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
