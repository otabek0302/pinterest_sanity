import Mansory from "@/components/sections/Mansory"

const Ideas = () => {
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
                                [1, 2, 3].map((ietm, i) => (
                                    <div key={i} className='h-52 rounded-2xl overflow-hidden bg-[url(/shop-bg.png)] bg-cover'>
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
                </div>

                {/* Subhead */}
                <div className='px-32'>
                    <h1 className='mb-3.5 text-black text-lg font-semibold text-center'>Discover interests</h1>
                    <div className='mx-auto'>
                        <div className='grid grid-cols-5 gap-5'>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items) => (
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

            <Mansory title="Explore popular ideas" arr={[3,4,5,2,7,2,9,10,11,3,4,2,6,2,8,9,10]} />
        </section>
    )
}

export default Ideas