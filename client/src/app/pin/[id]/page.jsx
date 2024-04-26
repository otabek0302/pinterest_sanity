"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { FiMoreHorizontal, FiUpload } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { pinDetailMorePinQuery, pinDetailQuery } from "@/utils/data";
import { client, urlFor } from "@/utils/sanity";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import fetchUser from "@/utils/fetchUser";
import Mansory from "@/components/sections/Mansory";
import Loader from "@/components/ui/Loader";

const Pin = () => {
    const location = usePathname()
    const user = fetchUser()
    const pinId = location.split("/").pop()

    const [showComment, setShowComment] = useState(false);
    const [open, setOpen] = useState(false);
    const [pins, setPins] = useState();
    const [pinDetail, setPinDetail] = useState();
    const [comment, setComment] = useState('');
    const [addingComment, setAddingComment] = useState(false);
    const [savingPost, setSavingPost] = useState(false);

    const fetchPinDetails = async () => {
        const query = await pinDetailQuery(pinId);

        if (query) {
            const pinDetailData = await client.fetch(`${query}`);
            setPinDetail(pinDetailData[0]);

            if (pinDetailData[0]) {
                const query1 = await pinDetailMorePinQuery(pinDetailData[0]);
                const pinsData = await client.fetch(query1);
                setPins(pinsData);
            }
        }
    };


    useEffect(() => {
        fetchPinDetails();
    }, [pinId]);

    const addComment = async () => {
        if (comment) {
            setAddingComment(true);

            const addedComment = await client
                .patch(pinId)
                .setIfMissing({ comments: [] })
                .insert('after', 'comments[-1]', [{ comment, _key: uuidv4(), postedBy: { _type: 'postedBy', _ref: user._id } }])
                .commit()
                .then(() => {
                    fetchPinDetails();
                    setComment('');
                    setAddingComment(false);
                });
            console.log(addedComment);
        }
    };



    let alreadySaved = pinDetail?.save?.filter((item) => item?.postedBy?._id === user?._id);
    alreadySaved = alreadySaved?.length > 0 ? alreadySaved : [];



    const savePin = async (id) => {
        try {
            if (alreadySaved?.length === 0) {
                setSavingPost(true);
                const savedPin = await client
                    .patch(id)
                    .setIfMissing({ save: [] })
                    .insert('after', 'save[-1]', [{
                        _key: uuidv4(),
                        userId: user?._id,
                        postedBy: {
                            _type: 'postedBy',
                            _ref: user?._id,
                        },
                    }])
                    .commit()
                    .then(() => {
                        setSavingPost(false);
                    });
            } else {
                setSavingPost(true);
                const reviewsToRemove = [`save[_key == "${alreadySaved[0]?._key}"]`];
                const removedPin = await client
                    .patch(id)
                    .unset(reviewsToRemove)
                    .commit()
                    .then(() => {
                        setSavingPost(false);
                        window.location.reload();
                    });
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <section className='container mx-auto py-10'>

            {/* Single Pin Review */}
            {
                pinDetail ? (
                    <div className="max-w-6xl mx-auto">
                        <div className='flex justify-between rounded-[42px] shadow-md'>
                            <div className='relative w-1/2 h-screen rounded-s-[32px] overflow-hidden'>
                                <Image src={(pinDetail?.image && urlFor(pinDetail?.image).url())} fill alt="image" className="object-cover object-center" />
                            </div>
                            <div className="w-1/2 flex flex-col py-5 px-10 relative">
                                <div className="pb-8 flex justify-between relative">
                                    <div className="flex justify-end items-center gap-2.5">
                                        <Link href={`${pinDetail?.image?.asset?.url}?dl=`}>
                                            <button className="p-3 bg-background hover:bg-gray-200 rounded-full text-left cursor-pointer">
                                                <FiUpload className="text-lg" />
                                            </button>
                                        </Link>
                                        <button className="p-3 bg-background hover:bg-gray-200 rounded-full text-left cursor-pointer relative" onClick={() => setOpen(!open)} >
                                            <FiMoreHorizontal className="text-lg" />
                                            <div className={`absolute left-0 bottom-12 w-52 py-2.5 px-1.5 border rounded-xl shadow-xl bg-background ${open ? "block" : "hidden"}`}>
                                                <ul className="flex flex-col gap-1.5">
                                                    <li className="px-2.5 py-1.5 text-base text-copy font-bold leading-normal cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                                                        Hide pin
                                                    </li>
                                                    <li className="px-2.5 py-1.5 text-base text-copy font-bold leading-normal cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                                                        Download image
                                                    </li>
                                                </ul>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center gap-2.5">
                                        <span className="text-base text-copy font-bold line-clamp-1 cursor-pointer">{pinDetail?.destination?.slice(8)}</span>
                                        {
                                            alreadySaved?.length !== 0
                                                ? (<span onClick={(e) => {
                                                    e.stopPropagation();
                                                    savePin(pinDetail?._id);
                                                }} className="text-base text-white font-bold px-8 py-2 bg-primary rounded-full cursor-pointer hover:bg-primary-dark">Saved</span>)
                                                : (<span onClick={(e) => {
                                                    e.stopPropagation();
                                                    savePin(pinDetail?._id);
                                                }} className="text-base text-white font-bold px-8 py-2 bg-primary rounded-full cursor-pointer hover:bg-primary-dark"> {pinDetail?.save?.length}   {savingPost ? 'Saving' : 'Save'}</span>)
                                        }
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="my-5">
                                        <h1 className="text-xl font-bold text-copy-light">{pinDetail?.title}</h1>
                                        <p className="mt-3 line-clamp-3 leading-tight">{pinDetail?.description}</p>
                                    </div>
                                    <div className="my-2.5">
                                        {
                                            pinDetail?.tags?.map((item, i) => (
                                                <span key={i} className="py-2 px-3.5 bg-foreground rounded-full text-sm ">{item}</span>
                                            ))
                                        }
                                    </div>
                                    <div className="flex items-center justify-between mt-5">
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-12 h-12 relative bg-background border rounded-full overflow-hidden">
                                                <Image src={(pinDetail?.postedBy?.image && urlFor(pinDetail?.postedBy?.image).url()) || '/user.png'} fill alt={pinDetail?.postedBy?.username || "picture"} className="object-cover object-center" />
                                            </div>
                                            <p>
                                                <Link href={`/user-profile/${pinDetail?.postedBy?._id}`} className="cursor-pointer">
                                                    <span className="block text-base text-copy-light font-bold leading-tight">{pinDetail?.postedBy?.username}</span>
                                                </Link>
                                                <span className="block text-sm text-copy-lighter font-normal leading-none"><small className="mr-1 font-bold">340</small>follower</span>
                                            </p>
                                        </div>
                                        <div>
                                            <button className="px-3.5 py-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
                                                <span className="text-base text-copy-light font-bold tracking-wider">Follow</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-20">
                                        <div className="flex items-center justify-between">
                                            <p className="text-base text-copy font-bold tracking-wide">Comments</p>
                                            <button className="p-1.5 overflow-hidden rounded-full  hover:bg-gray-200" onClick={() => setShowComment(!showComment)}>
                                                {
                                                    showComment ? <MdKeyboardArrowUp className="text-xl" /> : <MdKeyboardArrowDown className="text-xl" />
                                                }
                                            </button>
                                        </div>
                                        <div className="relative inset-0 h-80 overflow-y-auto shadow-[inset_0px_8px_10px_-12px_rgba(0,0,0,0.05)]">
                                            <div className="absolute inset-0">
                                                <div className="flex flex-col gap-3 py-2.5">
                                                    {
                                                        pinDetail?.comments?.map((item, i) => (
                                                            <div className="py-2.5" key={i}>
                                                                <div className="flex items-center gap-2.5">
                                                                    <div>
                                                                        <div className="w-12 h-12 relative bg-background border rounded-full overflow-hidden">
                                                                            <Image src={(item?.postedBy?.image && urlFor(item?.postedBy?.image).url()) || '/user.png'} fill alt={item?.postedBy?.username} className="object-cover object-center" />
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-base text-copy-light font-bold leading-tight overflow-hidden line-clamp-1">{item?.postedBy?.username}</p>
                                                                </div>
                                                                <p className="text-sm text-copy-lighte pl-14">{item?.comment}</p>
                                                            </div>
                                                        ))
                                                    }

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-5">
                                        <div className="flex items-center gap-3.5">
                                            <Link href={`/profile/${user?._id}`}>
                                                <div className="w-12 h-12 relative bg-background border rounded-full overflow-hidden">
                                                    <Image src={(user?.picture && urlFor(user?.picture).url()) || '/user.png'} fill alt={user?.username} className="object-cover object-center" />
                                                </div>
                                            </Link>
                                            <div className="w-full p-1.5 flex gap-2.5 border border-border rounded-[42px] overflow-hidden">
                                                <input
                                                    type="text"
                                                    placeholder="Add a comment"
                                                    value={comment}
                                                    className="w-full pl-3 py-3.5 focus:border-none focus:outline-none"
                                                    onChange={(e) => setComment(e.target.value)}
                                                />
                                                <button>
                                                    <CiFaceSmile className="text-3xl text-primary" />
                                                </button>
                                                <button onClick={addComment} className={`px-3 py-2 bg-primary rounded-full hover:bg-primary-dark ${addingComment ? "animate-pulse" : ""}`}>
                                                    <IoSend className="text-2xl text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                    : (<div className="h-screen flex-center"><h1>Loading....</h1></div>)
            }

            <div>
                {pins?.length > 0 && (
                    <h2 className="text-center font-bold text-2xl mt-8 mb-4">
                        More like this
                    </h2>
                )}
                {pins ? (
                    <Mansory arr={pins} />
                ) : (
                    <div className="h-96 flex-center">Loading more pins</div>
                )}
            </div>

        </section >
    )
}

export default Pin