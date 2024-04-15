import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { signOut } from "next-auth/react";
import { useState } from "react";

const ProfileDropDown = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button className="p-1.5 overflow-hidden rounded-full  hover:bg-gray-200" onClick={() => setOpen(!open)}>
        {
          open ? <MdKeyboardArrowUp className="text-xl" /> : <MdKeyboardArrowDown className="text-xl" />
        }
      </button>

      <div className={`absolute -right-5 top-14 w-96 py-5 px-1.5 rounded-xl bg-gray-100 ${open ? "block" : "hidden"}`}>
        <span className="text-sm font-normal text-copy-lighter ml-1.5">Current:</span>
        <Link href={`/profile/${user?._id}`} className="cursor-pointer">
          <div className="flex items-center gap-2.5 mt-2.5 hover:bg-gray-200 hover:rounded-xl p-2.5">
            <div className="relative w-16 h-16 border border-border rounded-full overflow-hidden">
              <Image
                src={user?.picture ? user?.picture : "/user.png"}
                fill
                alt="Avatar"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-copy">{user?.username || "Username"}</h3>
              <span className="text-sm font-normal text-copy-lighter">Personal</span>
              <span className="text-sm font-normal text-copy-lighter break-words">{user?.email || "example@gmail.com"}</span>
            </div>
          </div>
        </Link>
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
        <div className="mt-5">
          <ul className="flex flex-col gap-1.5">
            <li className="px-3.5 py-2.5 text-base text-copy font-bold leading-normal cursor-pointer hover:bg-gray-200 hover:rounded-lg" onClick={signOut}>
              Sing out
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileDropDown