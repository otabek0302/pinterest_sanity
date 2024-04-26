"use client"

import TagsInput from "@/components/ui/TagsInput";
import { fetchCategory } from "@/utils/data";
import fetchUser from "@/utils/fetchUser";
import { client } from "@/utils/sanity";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { GrUploadOption } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const CraetePinPage = () => {
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [destionation, setDestination] = useState("")
    const [category, setCategory] = useState("")
    const [imageAsset, setImageAsset] = useState(null)
    const [tags, setTags] = useState([])
    const [wrongImageType, setWrongImageType] = useState(false);
    const [fields, setFields] = useState();
    const [loading, setLoading] = useState(false);
    const user = fetchUser()

    const router = useRouter();

    const handleSumbit = (e) => {
        e.preventDefault();
        if (title && description && destionation && categories) {
            setWrongImageType(false);
            setLoading(true);

            const doc = {
                _type: 'pin',
                title,
                description,
                destionation,
                image: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageAsset?._id,
                    },
                },
                userId: user?._id,
                postedBy: {
                    _type: 'postedBy',
                    _ref: user?._id,
                },
                category,
                tags,
            }
            client.create(doc).then(() => {
                router.push('/profile/' + user._id);
            });
        } else {
            setFields(true);
            setTimeout(
                () => {
                    setFields(false);
                },
                2000,
            );
        }
    }

    const uploadImage = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff') {
            setWrongImageType(false);
            client.assets.upload("image", e.target.files[0], {
                contentType: selectedFile.type,
                filename: selectedFile.name
            }).then((document) => {
                setImageAsset(document)
            }).catch((err) => {
                console.log("Image upload error !");
                console.log(err.message);
            })
        } else {
            setLoading(false);
            setWrongImageType(true);
        }
    }

    useEffect(() => {
        const fetchCategories = async () => {
            await client.fetch(fetchCategory).then((res) => {
                setCategories(res)
            })
        }
        fetchCategories();
    }, [])

    return (
        <section>
            <div className='flex justify-between py-5 px-10 text-left border-y-2 border-border'>
                <h3 className="text-2xl text-copy font-bold">Creting Pin</h3>
                <button type="button" className="min-w-[80px] min-h-[48px] px-4 py-3 bg-red-600 flex-center rounded-full text-base text-white font-bold" onClick={handleSumbit}>
                    Create
                </button>
            </div>
            <div className="max-w-6xl mx-auto">
                {fields && (
                    <p className="text-red-500 my-5 text-xl transition-all duration-150 ease-in text-center">Please add all fields.</p>
                )}
                <div className="flex gap-10 p-10">
                    <div className="flex">
                        <div className="w-[420px] p-5 bg-gray-200 border-2 border-dotted border-gray-400 rounded-2xl">
                            {
                                !imageAsset ? (
                                    <label htmlFor="imageAsset">
                                        <div className="flex-1 h-[35vh] flex-center cursor-pointer">
                                            <div className="flex-center flex-col">
                                                <GrUploadOption className="text-4xl" />
                                                <span className="text-base text-copy font-bold mt-3.5">Choose file and drag drop here !</span>
                                            </div>
                                        </div>
                                        <div className="py-10">
                                            <p className="text-sm text-copy text-center">Рекомендуем использовать файлы высокого качества в формате .jpg (размером меньше 20MB) или .mp4 (размером меньше 200MB).</p>
                                        </div>
                                        <input type="file" id="imageAsset" className="opacity-0" onChange={uploadImage} />
                                    </label>
                                ) : (
                                    <div className="relative h-full">
                                        <img
                                            src={imageAsset?.url}
                                            alt="uploaded-pic"
                                            className="h-full w-full"
                                        />
                                        <button
                                            type="button"
                                            className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                                            onClick={() => setImageAsset(null)}
                                        >
                                            <MdDelete />
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="">
                            <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Title</span>
                            <input name="title" type="text" onChange={(e) => setTitle(e.target.value)} className="w-full py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 mb-2.5 mt-1 flex flex-wrap border-4 border-border focus:border-gray-400 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-copy font-bold text-[2.7vw] sm:text-sm capitalize disabled:opacity-50 disabled:pointer-events-none" placeholder="Please enter title" />
                        </div>
                        <div className="">
                            <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Description</span>
                            <textarea rows="4" cols="50" name="description" type="text" onChange={(e) => setDescription(e.target.value)} className="w-full py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 mb-2.5 mt-1 flex flex-wrap border-4 border-border focus:border-gray-400 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-copy font-bold text-[2.7vw] sm:text-sm capitalize disabled:opacity-50 disabled:pointer-events-none" placeholder="Please enter description" />
                        </div>
                        <div className="">
                            <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Destionation</span>
                            <input name="title" type="destionation" onChange={(e) => setDestination(e.target.value)} className="w-full py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 mb-2.5 mt-1 flex flex-wrap border-4 border-border focus:border-gray-400 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-copy font-bold text-[2.7vw] sm:text-sm capitalize disabled:opacity-50 disabled:pointer-events-none" placeholder="Please enter Destination" />
                        </div>
                        <div className="">
                            <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Category</span>
                            <select name="category" onChange={(e) => setCategory(e.target.value)} className="w-full py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 mb-2.5 mt-1 flex flex-wrap border-4 border-border focus:border-gray-400 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-copy font-bold text-[2.7vw] sm:text-sm capitalize disabled:opacity-50 disabled:pointer-events-none">
                                <option className="text-copy">Please choose category</option>
                                {
                                    categories?.length && categories?.map((category, i) => (
                                        <option key={i} value={category?.title}>{category?.title}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="">
                            <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Tags</span>
                            <TagsInput
                                tags={tags}
                                setTags={setTags}
                                placeholder={`Please enter Tags`}
                                className={"w-full py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 flex flex-wrap border-4 mb-2.5 mt-1 border-border focus:border-gray-400 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-copy font-bold text-[2.7vw] sm:text-sm capitalize disabled:opacity-50 disabled:pointer-events-none"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CraetePinPage;