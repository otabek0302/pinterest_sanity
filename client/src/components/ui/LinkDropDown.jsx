import Link from "next/link";

import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const LinkDropDown = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button className="p-2.5 overflow-hidden rounded-full  hover:bg-gray-200" onClick={() => setOpen(!open)}>
                <IoMdAdd className="text-3xl text-copy-lighter" />
            </button>

            <div className={`absolute right-14 -translate-y-1/2 w-52 py-5 px-1.5 rounded-xl bg-gray-100 z-50 ${open ? "block" : "hidden"}`}>
                <ul className="flex flex-col gap-1.5">
                    <li className="px-3.5 py-2.5 text-base text-copy font-bold leading-normal cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                        Pin
                    </li>
                    <li className="px-3.5 py-2.5 text-base text-copy font-bold leading-normal cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                        Desk
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LinkDropDown;