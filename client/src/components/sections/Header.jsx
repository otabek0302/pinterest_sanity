"use client"

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ProfileDropDown from "../ui/ProfileDropDown";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { client } from "@/utils/sanity";
import fetchUser from "@/utils/fetchUser";

const Header = () => {
    const userFetched = fetchUser();
    console.log(userFetched);
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const { data: session, status } = useSession();
    const [location, setLocation] = useState("/");
    const [open, setOpen] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [user, setUser] = useState(null);
    const email = session?.user?.email;
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (pathname) {
            setLocation(pathname);
        }
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target !== searchInputRef.current) {
                setSearchResult(false);
            }
        };

        // Add event listener to detect clicks outside the search result dropdown
        document.addEventListener("click", handleClickOutside);

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            if (email) {
                try {
                    setLoading(true);
                    const data = await client?.fetch(
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
                            <Link className="text-base text-copy font-bold leading-normal" href="/videos">
                                Watch
                            </Link>
                            <Link className="text-base text-copy font-bold leading-normal" href="/ideas">
                                Explore
                            </Link>
                        </div>
                    )}
                    {location !== "/" && (
                        <div className="relative">
                            <button type="button" className="flex-center px-6 py-3 ml-5 gap-1.5 rounded-full bg-gray-200 text-black font-bold cursor-pointer" onClick={() => setOpen(!open)} >
                                {location.includes("/videos") ? "Watch" : ""}
                                {location.includes("/ideas") ? "Explore" : ""}
                                <IoIosArrowDown className="mt-1" />
                            </button>
                            <div className={`absolute w-44 p-5 mt-1.5 flex flex-col border rounded-2xl shadow-xl bg-background ${open ? "block" : "hidden"}`} >
                                <Link className="font-bold p-3.5 rounded-xl hover:bg-gray-200"
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
                    <div className="flex-1 bg-gray-200 rounded-full relative z-50">
                        <input
                            ref={searchInputRef}
                            type="text"
                            className="w-full h-full p-5 rounded-full focus:outline-blue-300 focus:outline-4 bg-transparent"
                            placeholder="Search for easy dinners, fashion, etc."
                            onFocus={() => setSearchResult(!searchResult)}
                        />
                        <div className={`absolute right-0 top-16 w-full py-5 px-1.5 border rounded-xl shadow-xl bg-background ${searchResult ? "block" : "hidden"}`}>
                            <div className="mt-5">
                                <span className="text-sm font-normal text-copy-lighter ml-1.5">Account</span>
                                <ul className="flex flex-col gap-1.5">
                                    <li className="px-3.5 py-2.5 text-base text-copy font-bold leading-normal cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                                        About
                                    </li>
                                    <li className="px-3.5 py-2.5 text-base text-copy font-bold leading-normal cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                                        Business
                                    </li>
                                    <li className="px-3.5 py-2.5 text-base text-copy font-bold leading-normal cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                                        Press
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex items-center">
                    {status === "authenticated" && (
                        <ul className="flex gap-3.5">
                            <li className="p-1.5 text-base text-copy font-bold leading-normal hover:bg-border rounded-full cursor-pointer">
                                <IoIosNotifications className="text-3xl text-copy-lighter" />
                            </li>
                            <li className="p-1.5 text-base text-copy font-bold leading-normal hover:bg-border rounded-full cursor-pointer">
                                <BiSolidMessageRoundedDots className="text-3xl text-copy-lighter" />
                            </li>
                        </ul>
                    )}
                    <div className="ml-5">
                        {status === "authenticated" ? (
                            <Link href={`/profile/${user?._id}`}>
                                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                    <Image src="/logo.png" fill alt="Avatar" className="object-cover object-center" />
                                </div>
                            </Link>
                        ) : (
                            <div className="flex gap-2.5">
                                <Link href="/auth/login">
                                    <button className="py-2 px-3.5 bg-primary hover:bg-primary-dark text-sm text-white font-semibold text-center rounded-[24px] cursor-pointer">Login</button>
                                </Link>
                                <Link href="/auth/singup">
                                    <button className="py-2 px-3.5 bg-background hover:bg-gray-200 border border-border text-sm text-copy font-semibold text-center rounded-[24px] cursor-pointer">Sign up</button>
                                </Link>
                            </div>
                        )}
                    </div>
                    {status === "authenticated" && <ProfileDropDown user={user} />}
                </div>
            </nav>
        </header>
    );
};

export default Header;
