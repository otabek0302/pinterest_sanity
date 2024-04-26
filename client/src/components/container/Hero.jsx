"use client"

import { feedQuery } from "@/utils/data";
import { client } from "@/utils/sanity";
import { useEffect, useState } from "react";

const Hero = () => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    client.fetch(feedQuery).then((data) => {
      setPins(data);
      setLoading(false);
    })
  }, [])


  return (
    <section className="h-screen overflow-hidden">
      <div className="pt-28 flex-center">
        <div className="flex flex-col text-center">
          <h2 className="text-black text-5xl font-bold">Get your next</h2>
          <span className="text-green-600 text-5xl font-bold">weeking dinner idea</span>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-7 gap-x-5">
        <div className="flex flex-col gap-y-5">
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
        </div>
        <div className="flex flex-col gap-y-5 mt-32">
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
        </div>
        <div className="flex flex-col gap-y-5 mt-52">
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
        </div>
        <div className="flex flex-col gap-y-5 mt-72">
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
        </div>
        <div className="flex flex-col gap-y-5 mt-52">
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
        </div>
        <div className="flex flex-col gap-y-5 mt-32">
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
          <div className="h-72 border rounded-2xl"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero