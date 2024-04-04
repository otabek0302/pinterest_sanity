import Image from "next/image"
import Link from "next/link"

const BottomSection = () => {
    return (
        <section className="overflow-hidden h-screen relative">
            <div className="absolute inset-0 -z-10">
                <div className="relative w-full h-full after:contents-['dskndsj'] after:absolute after:top-1/2">
                    <Image src="/center.png" fill alt="Authentification" className="object-cover object-center" />
                </div>
            </div>

            <div className="absolute h-full flex flex-col md:flex-row items-center justify-between z-10">

                {/* Authentification LEFT SIDE */}
                <div className="flex-1">
                    <div className="flex-center flex-col px-52 text-center">
                        <h2 className="text-6xl text-[rgb(195,25,82);] font-black">Welcome to Printest</h2>
                        <p className="text-2xl text-[rgb(195,25,82);] font-normal my-4 max-w-md text-center">Find new ideas to try</p>
                    </div>
                </div>

                {/* Authentification RIGHT SIDE */}
                <div className="flex-1">
                    <div className="flex-center flex-col px-52 text-center">
                        <h2 className="text-6xl text-[rgb(195,25,82);] font-black">Welcome to Printest</h2>
                        <p className="text-2xl text-[rgb(195,25,82);] font-normal my-4 max-w-md text-center">Find new ideas to try</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BottomSection