"use client"

import Mansory from "@/components/sections/Mansory";
import { fetchAllCategories, fetchPinByCategory } from "@/utils/data";
import { client, urlFor } from "@/utils/sanity";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const Category = () => {
    const [pins, setPins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(null);
    const [categories, setCategories] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        if (slug) {
            setLoading(true);
            client.fetch(fetchPinByCategory(slug))
                .then((pins) => {
                    setPins(pins);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching pins:", error);
                    setLoading(false);
                });
        }
    }, [slug]);

    useEffect(() => {
        setLoading(true);
        client.fetch(fetchAllCategories)
            .then((categories) => {
                setCategories(categories)
                const category = categories?.find((c) => c.title.toLowerCase().includes(slug.toLowerCase()));
                setCategory(category);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
                setLoading(false);
            });
    }, [slug]);

    return (
        <section className='container mx-auto'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* Header */}
                    <div className='px-2 py-3 max-w-[1440px] mx-auto'>
                        {/* Banner */}
                        <div className="px-20">
                            <div className='h-72 rounded-2xl overflow-hidden bg-[url(/shop-bg.png)] bg-cover'>
                                <div className='w-full h-full bg-black bg-opacity-5 hover:bg-opacity-50 p-5 flex-center flex-col gap-5'>
                                    <Link href="/ideas" className='py-1.5 px-2.5 text-xs text-black bg-white rounded-full'>View more</Link>
                                    <h4 className='text-4xl text-white font-bold capitalize'>{category?.title}</h4>
                                    <p className="text-white text-center max-w-2xl">{category?.description || "Discover recipes, home ideas, style inspiration and other ideas to try."}</p>
                                </div>
                            </div>
                        </div>

                        {/* Head */}
                        <div className='px-20'>
                            <h1 className='text-black my-12 text-4xl font-semibold text-center'>Explore the best of Pinterest</h1>
                            <div className='mx-auto'>
                                <div className='grid grid-cols-3 gap-5'>
                                    {pins.map((pin, index) => (
                                        <div key={index} className={`h-72 rounded-[42px] bg-red-200 overflow-hidden`}>
                                            <div className="relative h-full w-full">
                                                <Image
                                                    src={pin.image?.asset?.url ? urlFor(pin.image.asset.url).url() : '/placeholder.jpg'}
                                                    width={300}
                                                    height={300}
                                                    alt={pin?.title || ""}
                                                    className="h-full object-cover object-center z-[-1]"
                                                />
                                                <div className='w-full h-full absolute top-0 left-0 z-[2] bg-black bg-opacity-30 hover:bg-opacity-50 p-5 flex flex-col items-center justify-center cursor-pointer'>
                                                    <p className='text-sm text-white font-light'>{pin?.tags[0]}</p>
                                                    <h4 className='text-xl text-white font-bold'>{pin?.title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Subhead */}
                        <div className='px-20'>
                            <h1 className='mb-3.5 text-black text-lg font-semibold text-center'>Related</h1>
                            <div className='mx-auto'>
                                <div className='grid grid-cols-4 gap-5'>
                                    {categories && categories.slice(0, 4).map((category, index) => (
                                        <div key={index} className='h-32 rounded-2xl overflow-hidden bg-[url(/shop-bg.png)] bg-cover'>
                                            <div className='w-full h-full bg-black bg-opacity-20 hover:bg-opacity-50 p-5 flex-center cursor-pointer'>
                                                <h4 className='text-xl text-white font-bold'>{category.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Mansory title="Explore popular ideas" arr={pins} />
                </>
            )}
        </section>
    );
}

export default Category;
