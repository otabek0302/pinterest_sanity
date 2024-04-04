import Image from "next/image"
import Link from "next/link"
import { IoMdSearch } from "react-icons/io"

const SearchSection = () => {
  return (
    <section className="overflow-hidden bg-[rgb(255,253,146)]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* SEARCH LEFT SIDE */}
          <div className="flex-1 h-screen flex-center">
            <div className="w-[537px] h-[611px] flex-center relative">
              {/* SEARCH IMAGES */}
              <div className="absolute w-[298px] h-[456px] rounded-xl z-[10]">
                <Image src="/center.png" fill alt="Center" className="object-cover object-center" />
              </div>
              <div className="absolute left-0 w-[204px] h-[285px] rounded-xl z-[9]">
                <Image src="/left.png" fill alt="Center" className="object-cover object-center" />
              </div>
              <div className="absolute right-0 top-0 w-[178px] h-[218px] rounded-xl z-[9]">
                <Image src="/topRight.png" fill alt="Center" className="object-cover object-center" />
              </div>
              <div className="absolute right-0 bottom-0 w-[164px] h-[258px] rounded-xl z-[9]">
                <Image src="/right.png" fill alt="Center" className="object-cover object-center" />
              </div>
              {/* SEARCH INPUT */}
              <div className="absolute w-80 h-24 rounded-full bg-white flex-center gap-2.5 z-[11]">
                <IoMdSearch className="text-3xl font-black" />
                <span className="text-2xl font-black text-[rgb(110,15,60);] text-center">easy chiken dinner</span>
              </div>
            </div>
          </div>

          {/* SEARCH RIGHT SIDE */}
          <div className="flex-1">
            <div className="flex-center flex-col">
              <h2 className="text-6xl text-[rgb(195,25,82);] font-black">Search for an idea</h2>
              <p className="text-2xl text-[rgb(195,25,82);] font-normal my-4 max-w-md text-center">What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.</p>
              <Link href="/" className="my-5">
                <span className="px-10 py-5 bg-[#e60023] rounded-full text-white">Explore</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SearchSection