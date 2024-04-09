import Mansory from '@/components/sections/Mansory'
import React from 'react'

const Best = () => {
    return (
        <section className='container mx-auto'>
            {/* Header */}
            <div className='px-2 py-3 max-w-4xl mx-auto'>
                {/* Banner */}
                <div className="px-20">
                    <div className='h-[320px] rounded-[32px] overflow-hidden bg-[url(/shop-bg.png)] bg-cover'>
                        <div className='w-full h-full bg-black bg-opacity-5 hover:bg-opacity-50 p-5 flex-center flex-col gap-5'>
                            <h4 className='text-4xl text-white font-bold'>Animals</h4>
                            <p className="text-white text-center max-w-2xl">Animals are the best. Boost your mood with funny cat memes, or learn everything you need to know about caring for the family pet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto text-left max-w-xl mb-5'>
                <h4>Zesty lemon, citrusy grapefruit, punchy raspberries...these spring desserts are fruity, flavourful and a little lighter for the new season.</h4>
            </div>
            <Mansory arr={[3, 4, 5, 2, 7, 2, 9, 10, 11, 3, 4, 2, 6, 2, 8, 9, 10]} />
        </section>
    )
}

export default Best