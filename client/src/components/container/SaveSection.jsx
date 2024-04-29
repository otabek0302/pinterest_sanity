import Image from 'next/image'
import Link from 'next/link'

const SaveSection = () => {
    return (
        <section className="overflow-hidden bg-[rgb(218,255,246)]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    {/* SEARCH RIGHT SIDE */}
                    <div className="flex-1">
                        <div className="flex-center flex-col">
                            <h2 className="text-6xl text-[rgb(0,107,108);] font-black">Save ideas you like</h2>
                            <p className="text-2xl text-[rgb(0,107,108);] font-normal my-4 max-w-md text-center">Collect your favorites so you can get back to them later.</p>
                            <Link href="/ideas" className="my-5">
                                <span className="px-8 py-5 bg-[#e60023] rounded-full text-white">Explore</span>
                            </Link>
                        </div>
                    </div>

                    {/* SEARCH LEFT SIDE */}
                    <div className="flex-1 h-screen flex-center">
                        <div className="w-[687px] h-[695px] bg-red-200 grid grid-cols-3">
                            {/* SEARCH IMAGES */}
                            <div className="col-span-2 row-span-2 relative rounded-xl">
                                <Image src="/center.png" fill alt="Center" className="object-cover object-center" />
                            </div>
                            <div className="col-span-1 relative rounded-xl">
                                <Image src="/left.png" fill alt="Center" className="object-cover object-center" />
                            </div>
                            <div className="relative rounded-xl">
                                <Image src="/topRight.png" fill alt="Center" className="object-cover object-center" />
                            </div>
                            <div className="col-span-2 relative rounded-xl">
                                <Image src="/right.png" fill alt="Center" className="object-cover object-center" />
                            </div>
                            <div className="relative rounded-xl">
                                <Image src="/right.png" fill alt="Center" className="object-cover object-center" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SaveSection