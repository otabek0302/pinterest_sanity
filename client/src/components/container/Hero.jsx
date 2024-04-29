"use client"

import { fetchPinsHero } from "@/utils/data";
import { client, urlFor } from "@/utils/sanity";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [pins, setPins] = useState(null);

  useEffect(() => {
    const fetchPins = async () => {
      const data = await client.fetch(fetchPinsHero);
      setPins(data);
    };
    fetchPins();
  }, []);

  return (
    <section className="h-screen overflow-hidden relative">
      <div className="pt-28 flex-center">
        <div className="flex flex-col text-center">
          <h2 className="text-black text-5xl font-bold">Get your next</h2>
          <span className="text-green-600 text-5xl font-bold">weeking dinner idea</span>
        </div>
      </div>
      <div className="max-w-[1640px] mx-auto grid grid-cols-7 gap-x-5">
        <div className="flex flex-col gap-y-5">
          {pins?.slice(0, 3).map((item, i) => (
            <div className="h-72 border rounded-2xl relative overflow-hidden" key={i}>
              <Image
                src={urlFor(item?.image?.asset?.url)?.url()}
                fill
                alt="image"
                className="object-cover object-center z-0"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-5 mt-32">
          {pins?.slice(0, 3).map((item, i) => (
            <div className="h-72 border rounded-2xl relative overflow-hidden" key={i}>
              <Image
                src={urlFor(item?.image?.asset?.url)?.url()}
                fill
                alt="image"
                className="object-cover object-center z-0"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-5 mt-52">
          {pins?.slice(0, 3).map((item, i) => (
            <div className="h-72 border rounded-2xl relative overflow-hidden" key={i}>
              <Image
                src={urlFor(item?.image?.asset?.url)?.url()}
                fill
                alt="image"
                className="object-cover object-center z-0"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-5 mt-72">
          {pins?.slice(0, 3).map((item, i) => (
            <div className="h-72 border rounded-2xl relative overflow-hidden" key={i}>
              <Image
                src={urlFor(item?.image?.asset?.url)?.url()}
                fill
                alt="image"
                className="object-cover object-center z-0"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-5 mt-52">
          {pins?.slice(0, 3).map((item, i) => (
            <div className="h-72 border rounded-2xl relative overflow-hidden" key={i}>
              <Image
                src={urlFor(item?.image?.asset?.url)?.url()}
                fill
                alt="image"
                className="object-cover object-center z-0"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-5 mt-32">
          {pins?.slice(0, 3).map((item, i) => (
            <div className="h-72 border rounded-2xl relative overflow-hidden" key={i}>
              <Image
                src={urlFor(item?.image?.asset?.url)?.url()}
                fill
                alt="image"
                className="object-cover object-center z-0"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-5">
          {pins?.slice(0, 3).map((item, i) => (
            <div className="h-72 border rounded-2xl relative overflow-hidden" key={i}>
              <Image
                src={urlFor(item?.image?.asset?.url)?.url()}
                fill
                alt="image"
                className="object-cover object-center z-0"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#ffffff] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#ffffff] to-transparent"></div>
    </section>
  )
}

export default Hero