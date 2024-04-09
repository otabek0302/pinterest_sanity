import Image from "next/image";

const Pin = () => {
    return (
        <section className='container mx-auto'>

            {/* Single Pin Review */}
            <div className="max-w-6xl">
                <div className='p-7 flex justify-between rounded-[42px] shadow-md'>
                    <div className='relative w-2/5 h-[70vh] rounded-[32px] overflow-hidden'>
                        <Image src="/shop-bg.png" fill alr="Image" className="object-cover object-center" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <div>left</div>
                            <div>right</div>
                        </div>
                        <div className="flex flex-col">
                            <span>twitter.com</span>
                            <h3>Dolce (@daily_dolce) on X</h3>
                            <p>Mini lemon tarts made by weeeek_</p>
                            <div>btns</div>
                            <div>profile</div>  
                            <div>
                                <h4>Comments</h4>
                                <div>input</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Pin