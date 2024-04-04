import Image from 'next/image'
import Link from 'next/link'

import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    return (
        <header className='px-7'>
            <nav className='py-5 flex items-center justify-between gap-3.5'>
                <div className='flex'>
                    <div className='flex-center gap-1.5'>
                        <div className='relative w-10 h-10'><Image src="/logo.png" fill alt='Logo' className='object-cover object-center' /></div>
                        <h2 className='text-red-600 font-bold text-lg'>Printest</h2>
                    </div>

                    <div className='flex-center gap-5 ml-5'>
                        <Link className='font-bold' href="/watch">Watch</Link>
                        <Link className='font-bold' href="/explore">Explore</Link>
                    </div>
                    {/* <div className='relative'>
                        <button type='button' className='flex-center px-6 py-3 ml-5 gap-1.5 rounded-full bg-gray-200 text-black font-bold cursor-pointer'>
                            Explore
                            <IoIosArrowDown className='mt-1' />
                        </button>
                        <div className='absolute w-44 p-5 mt-1.5 flex flex-col border rounded-2xl shadow-xl'>
                            <Link className='font-bold p-3.5 rounded-xl hover:bg-gray-200' href="/watch">Watch</Link>
                            <Link className='font-bold p-3.5 rounded-xl hover:bg-gray-200' href="/explore">Explore</Link>
                        </div>
                    </div> */}

                </div>

                {/* <div className='flex-1 bg-gray-200 rounded-full relative'>
                    <input type="text" className='w-full h-full p-5 rounded-full focus:outline-blue-300 focus:outline-4 bg-transparent' placeholder='Search for easy dinners, fashion, etc.' />

                    <div className='absolute top-16 w-full h-72 bg-gray-100 rounded-xl p-10'>
                    </div>
                </div> */}

                <div className='flex gap-10 items-center'>
                    <ul className='flex gap-5'>
                        <li className='font-bold'>About</li>
                        <li className='font-bold'>Business</li>
                        <li className='font-bold'>Press</li>
                    </ul>
                    <div className='flex gap-2.5'>
                        <button className='px-6 py-3 rounded-full bg-red-600 text-white'>Login</button>
                        <button className='px-6 py-3 rounded-full bg-gray-200 text-black font-bold'>Sing up</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header