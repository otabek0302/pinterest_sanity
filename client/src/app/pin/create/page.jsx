"use client"

import TagsInput from "@/components/ui/TagsInput";

import { useState } from "react";
import { GrUploadOption } from "react-icons/gr";

const CraetePinPage = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [destionation, setDestination] = useState("")
    const [desk, setDesk] = useState("")
    const [tags, setTags] = useState([])

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(tags);
        console.log(desk);
        console.log(description);
        console.log(destionation);
        console.log(title);
    }

    return (
        <section>
            <div className='flex justify-between py-5 px-10 text-left border-y-2 border-border'>
                <h3 className="text-2xl text-copy font-bold">Creting Pin</h3>
                <button type="button" className="min-w-[80px] min-h-[48px] px-4 py-3 bg-red-600 flex-center rounded-full text-base text-white font-bold" onClick={handleSumbit}>
                    Create
                </button>
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="flex gap-10 p-10">
                    <div className="flex">
                        <div className="w-[420px] p-5 bg-gray-200 border-2 border-dotted border-gray-400 rounded-2xl">
                            <div className="flex-1 h-[35vh] flex-center">
                                <div className="flex-center flex-col">
                                    <GrUploadOption className="text-4xl" />
                                    <span className="text-base text-copy font-bold mt-3.5">Choose file and drag drop here !</span>
                                </div>
                            </div>
                            <div className="py-10">
                                <p className="text-sm text-copy text-center">Рекомендуем использовать файлы высокого качества в формате .jpg (размером меньше 20MB) или .mp4 (размером меньше 200MB).</p>
                            </div>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                    <div className="flex-1">
                        <div className="">
                            <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Title</span>
                            <input name="title" type="text" onChange={(e) => setTitle(e.target.value)} className="w-full py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 mb-2.5 flex flex-wrap border-4 border-border focus:border-gray-400 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-copy font-bold text-[2.7vw] sm:text-sm capitalize disabled:opacity-50 disabled:pointer-events-none" placeholder="Please enter title" />
                        </div>
                        <div className="">
                            <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Description</span>
                            <textarea rows="4" cols="50" name="description" type="text" onChange={(e) => setDescription(e.target.value)} className="w-full py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 mb-2.5 flex flex-wrap border-4 border-border focus:border-gray-400 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-copy font-bold text-[2.7vw] sm:text-sm capitalize disabled:opacity-50 disabled:pointer-events-none" placeholder="Please enter description" />
                        </div>
                        <div className="">
                            <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Destionation</span>
                            <input name="title" type="destionation" onChange={(e) => setDestination(e.target.value)} className="w-full py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 mb-2.5 flex flex-wrap border-4 border-border focus:border-gray-400 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-copy font-bold text-[2.7vw] sm:text-sm capitalize disabled:opacity-50 disabled:pointer-events-none" placeholder="Please enter Destination" />
                        </div>
                        <div className="">
                            <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Category</span>
                            <input name="title" type="text" onChange={(e) => setDesk(e.target.value)} className="w-full py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 mb-2.5 flex flex-wrap border-4 border-border focus:border-gray-400 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-copy font-bold text-[2.7vw] sm:text-sm capitalize disabled:opacity-50 disabled:pointer-events-none" placeholder="Please choose category" />
                        </div>
                        <div className="">
                            <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Tags</span>
                            <TagsInput
                                tags={tags}
                                setTags={setTags}
                                placeholder={`Please enter Tags`}
                                className={"w-full py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 flex flex-wrap border-4 mb-2.5 border-border focus:border-gray-400 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-copy font-bold text-[2.7vw] sm:text-sm capitalize disabled:opacity-50 disabled:pointer-events-none"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CraetePinPage;