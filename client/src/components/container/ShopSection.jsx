import Image from "next/image";
import Link from "next/link";

const ShopSection = () => {
    return (
        <section className="overflow-hidden bg-[#ffe0e0;]">
            <div className="flex flex-col md:flex-row items-center justify-between">

                {/* SHOP LEFT SIDE */}
                <div className="flex-1 h-screen relative">
                    {/* SHOP BACKGROUND */}
                    <Image src="/shop-bg.png" fill alt="Center" className="object-cover object-center" />

                    <div className="relative top-1/2  -mt-12 left-24">
                        <div className="absolute w-[215px] h-[383px] rounded-2xl overflow-hidden">
                            <Image src="/creator-pin-img.png" fill alt="Center" className="object-cover object-center" />
                        </div>

                        <div className="absolute translate-y-80 -translate-x-10 mt-2 flex items-end">
                            <div className="relative w-24 h-24 overflow-hidden rounded-full">
                                <Image src="/creator-avatar.png" fill alt="Avatar" className="object-cover object-center" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-white font-bold text-xl">Scout the City</h3>
                                <span className="text-white font-bold">56.7k followers</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SHOP RIGHT SIDE */}
                <div className="flex-1">
                    <div className="flex-center flex-col px-52 text-center">
                        <h2 className="text-6xl text-[rgb(195,25,82);] font-black">See it, make it, try it, do it</h2>
                        <p className="text-2xl text-[rgb(195,25,82);] font-normal my-4 max-w-md text-center">The best part of Pinterest is discovering new things and ideas from people around the world.</p>
                        <Link href="/" className="my-5">
                            <span className="px-10 py-5 bg-[#e60023] rounded-full text-white">Explore</span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ShopSection;