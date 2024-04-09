import Interest from "@/components/sections/Interest"
import Image from "next/image"

const Videos = () => {
    return (
        <section className='container mx-auto'>

            {/* Header */}
            <div className='px-2 py-3 max-w-[1440px] mx-auto pt-16'>
                {/* Head */}
                <div className='px-5'>
                    <div className='grid grid-cols-3 gap-1.5'>
                        {
                            [1, 2, 3].map((ietm, i) => (
                                <div key={i} className='h-[450px] overflow-hidden bg-[url(/shop-bg.png)] bg-cover'>
                                    <div className='w-full h-full bg-black bg-opacity-5 hover:bg-opacity-50 p-5 flex flex-col items-start justify-end cursor-pointer'>
                                        <h4 className='text-3xl text-white font-bold'>Shipping Container House</h4>
                                        <a href="/" className='py-2.5 px-3.5 mt-3.5 text-lg text-black bg-gray-200 rounded-full'>
                                            View more
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Subhead */}
                <div className='px-20'>
                    <h1 className='mb-3.5 text-black text-lg font-semibold text-center'>Featured videos</h1>
                    <div className='mx-auto'>
                        <div className='grid grid-cols-5 gap-3.5'>
                            {
                                [1, 2, 3, 4, 5].map((items) => (
                                    <div key={items} className='h-[450px]'>
                                        <div className='relative h-full bg-red-50 rounded-2xl overflow-hidden'>
                                            <Image src="/shop-bg.png" fill alt="" className="object-cover object-center" />
                                        </div>
                                        <div className='flex-center text-red-900'>
                                            <span>Description text for subtitle</span>
                                            <h3 className='text-base black font-bold'>Animals</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>


            {/* Instrests */}
            <Interest title="Food And Drink" arr={[4, 6, 8, 4, 5, 6]} />
            <Interest title="Diy And Crafts" arr={[4, 6, 8, 4, 5, 6]} />
            <Interest title="Hair" arr={[4, 6, 8, 4, 8, 6]} />
        </section>
    )
}

export default Videos