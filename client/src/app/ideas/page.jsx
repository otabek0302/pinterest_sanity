"use client"
import Mansory from "@/components/sections/Mansory"
import { feedQuery, fetchAllCategories, searchQuery } from "@/utils/data";
import { client } from "@/utils/sanity";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"

const Ideas = () => {
    const [pins, setPins] = useState(null);
    const [categories, setCategories] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchCategories = async () => {
            await client.fetch(fetchAllCategories).then((res) => {
                setCategories(res.slice(0, 10))
            })
        }
        fetchCategories();
    }, [])

    useEffect(() => {
        if (categoryId) {
            const query = searchQuery(categoryId)
            client.fetch(query).then((data) => {
                console.log(data);
                setPins(data);
            })
        } else {
            client.fetch(feedQuery).then((data) => {
                setPins(data);
            })

        }
    }, [categoryId])

    return (
        <section className='container mx-auto'>

            {/* Header */}
            <div className='px-2 py-3 max-w-[1440px] mx-auto pt-16'>
                {/* Head */}
                <div className='px-32'>
                    <h1 className='text-black mb-12 text-4xl font-semibold text-center'>Explore the best of Pinterest</h1>
                    <div className='mx-auto'>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                categories && categories.reverse().slice(0, 3).map((item, i) => (
                                    <div key={i} className='h-52 rounded-2xl overflow-hidden bg-[url(/shop-bg.png)] bg-cover'>
                                        <div className='w-full h-full bg-black bg-opacity-5 hover:bg-opacity-50 p-5 flex flex-col items-start justify-end cursor-pointer'>
                                            <h4 className='text-3xl text-white font-bold'>{item?.title}</h4>
                                            <Link href={`/ideas/${item?.title.replace(/\s+/g, ' ').toLowerCase()}`} className='py-2.5 px-3.5 mt-3.5 text-lg text-black bg-gray-200 rounded-full'>
                                                View more
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

                {/* Subhead */}
                <div className='px-32'>
                    <h1 className='mb-3.5 text-black text-lg font-semibold text-center'>Discover interests</h1>
                    <div className='mx-auto'>
                        <div className='grid grid-cols-5 gap-5'>
                            {
                                categories?.map((items, i) => (
                                    <Link href={`/ideas/${items?.title.replace(/\s+/g, ' ').toLowerCase()}`} key={i} className='h-32 rounded-2xl overflow-hidden bg-[url(/shop-bg.png)] bg-cover'>
                                        <div className='w-full h-full bg-black bg-opacity-20 hover:bg-opacity-50 p-5 flex-center cursor-pointer'>
                                            <h4 className='text-xl text-white font-bold'>{items?.title}</h4>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Mansory title="Explore popular ideas" arr={pins} />
        </section>
    )
}

export default Ideas