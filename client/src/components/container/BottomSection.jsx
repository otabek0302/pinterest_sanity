import Image from "next/image"
import Link from "next/link"
import { IoLogoGoogle } from "react-icons/io"

const BottomSection = () => {
    return (
        <section className="overflow-hidden h-screen relative">
            <div className="absolute inset-0 -z-10">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-10"></div>
                    <Image src="/login.png" fill alt="Authentification" className="object-cover object-center z-0" />
                </div>
            </div>

            <div className="absolute w-full h-full flex flex-col md:flex-row items-center justify-between bg-black bg-opacity-50 z-10">

                {/* Authentification LEFT SIDE */}
                <div className="flex-1">
                    <div className="flex-center flex-col">
                        <h2 className="text-6xl text-white font-black">Sing up to get <br /> you ideas</h2>
                    </div>
                </div>

                {/* Authentification RIGHT SIDE */}
                <div className="flex-1 flex-center">
                    <div className="max-w-lg px-28 py-10 rounded-3xl bg-white">
                        <div>
                            <div className="flex-center flex-col">
                                <div className="w-10 h-10 relative overflow-hidden">
                                    <Image src="/logo.png" fill alt="Logo" className="object-cover object-center" />
                                </div>
                                <h1 className="text-3xl text-gray-700 font-bold">Welcome to Printest</h1>
                                <p className="text-base text-gray-500 font-normal">Find new ideas to try</p>
                            </div>
                            <div className="flex flex-col">
                                <form className="">
                                    <div className="flex flex-col mb-2.5">
                                        <label htmlFor="email" className="ml-2.5 mb-1 font-normal text-gray-600">Email</label>
                                        <input type="email" placeholder="Email address" className="w-72 py-3.5 px-5 rounded-2xl border-2 border-border focus:outline-[12px] focus:outline-blue-300 text-gray-500 font-normal" />
                                    </div>
                                    <div className="flex flex-col mb-2.5">
                                        <label htmlFor="email" className="ml-2.5 mb-1 font-normal text-gray-600">Email</label>
                                        <input type="email" placeholder="Email address" className="w-72 py-3.5 px-5 rounded-2xl border-2 border-border focus:outline-[12px] focus:outline-blue-300 text-gray-500 font-normal" />
                                    </div>
                                    <div className="flex flex-col mb-2.5">
                                        <label htmlFor="email" className="ml-2.5 mb-1 font-normal text-gray-600">Email</label>
                                        <input type="email" placeholder="Email address" className="w-72 py-3.5 px-5 rounded-2xl border-2 border-border focus:outline-[12px] focus:outline-blue-300 text-gray-500 font-normal" />
                                    </div>
                                    <button type="submit" className="w-full py-3 bg-[#e60023] hover:bg-red-700 rounded-full text-white">Continue</button>
                                    <span className="block text-center my-3.5 text-xl font-bold">OR</span>
                                    <button type="button" className="relative w-full py-3 px-3.5 bg-white border-2 border-border rounded-full flex-center text-center text-black font-light">
                                        <IoLogoGoogle  className="absolute left-2 text-blue-400"/>
                                        Continue with Google
                                    </button>
                                </form>
                                <p className="text-xs text-gray-400 text-center font-light px-2 py-5">
                                    By continuing you agree to Printest's <br /> <a href="/" className="text-black font-semibold">Terms of Services</a>  and aknowledge of you've read our <a href="/" className="text-black font-semibold">Privacy Plicy</a>. <a href="/" className="text-black font-semibold">Notice at collection</a>. 
                                </p>
                                <p className="text-xs text-gray-400 text-center font-light">Already a member ?<a href="/" className="text-black font-semibold ml-1.5">Log in</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BottomSection