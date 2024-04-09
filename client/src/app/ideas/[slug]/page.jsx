import Mansory from "@/components/sections/Mansory"

const Category = () => {
    return (
        <section className='container mx-auto'>

            {/* Header */}
            <div className='px-2 py-3 max-w-[1440px] mx-auto'>
                {/* Banner */}
                <div className="px-20">
                    <div className='h-72 rounded-2xl overflow-hidden bg-[url(/shop-bg.png)] bg-cover'>
                        <div className='w-full h-full bg-black bg-opacity-5 hover:bg-opacity-50 p-5 flex-center flex-col gap-5'>
                            <a href="/" className='py-1.5 px-2.5 text-xs text-black bg-white rounded-full'>View more</a>
                            <h4 className='text-4xl text-white font-bold'>Animals</h4>
                            <p className="text-white text-center max-w-2xl">Animals are the best. Boost your mood with funny cat memes, or learn everything you need to know about caring for the family pet.</p>
                        </div>
                    </div>
                </div>

                {/* Head */}
                <div className='px-20'>
                    <h1 className='text-black mb-12 text-4xl font-semibold text-center'>Explore the best of Pinterest</h1>
                    <div className='mx-auto'>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                [1, 2, 3].map((ietm, i) => (
                                    <div key={i} className='h-72 rounded-[42px] overflow-hidden bg-[url(/shop-bg.png)] bg-cover'>
                                        <div className='w-full h-full bg-black bg-opacity-5 hover:bg-opacity-50 p-5 flex flex-col items-center justify-end cursor-pointer'>
                                            <p className='text-sm text-white font-light'>Artfull Idea</p>
                                            <h4 className='text-xl text-white font-bold'>Cool Helena Design</h4>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

                {/* Subhead */}
                <div className='px-20'>
                    <h1 className='mb-3.5 text-black text-lg font-semibold text-center'>Related</h1>
                    <div className='mx-auto'>
                        <div className='grid grid-cols-4 gap-5'>
                            {
                                [1, 2, 3, 4].map((items) => (
                                    <div key={items} className='h-32 rounded-2xl overflow-hidden bg-[url(/shop-bg.png)] bg-cover'>
                                        <div className='w-full h-full bg-black bg-opacity-20 hover:bg-opacity-50 p-5 flex-center cursor-pointer'>
                                            <h4 className='text-xl text-white font-bold'>Animals</h4>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Mansory title="Explore popular ideas" arr={[3, 4, 5, 2, 7, 2, 9, 10, 11, 3, 4, 2, 6, 2, 8, 9, 10]} />
        </section>
    )
}

export default Category