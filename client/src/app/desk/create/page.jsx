"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Desk = () => {
  const router = useRouter()
  const [dest, setDesk] = useState("")
  const [hide, setHide] = useState(false)

  const handleClose = () => {
    router.push("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dest, hide);
  }

  return (
    <section className='absolute inset-0 flex-center bg-black bg-opacity-50'>
      <div className="relative w-[520px]">
        <button className="absolute right-5 top-5 p-2.5 hover:bg-gray-200 hover:rounded-full" onClick={handleClose}>
          <IoClose className="text-2xl" />
        </button>
        <form className=" bg-white shadow-2xl rounded-2xl flex flex-col gap-10 p-6" onSubmit={handleSubmit}>
          <h2 className='py-7 text-3xl text-copy font-bold tracking-wide break-words text-center'>Creating Desks</h2>
          <div className="flex-1 px-7">
            <div className="">
              <span className="text-sm text-copy font-normal tracking-wide break-words cursor-pointer">Title</span>
              <input name="title" type="text" onChange={(e) => setDesk(e.target.value)} className="w-full py-2.5 px-5 my-1.5 border-2 border-border rounded-xl text-base text-copy-light font-normal" placeholder="For example, ' Where to go ? ' or 'Recipes' " />
            </div>
            <div className="flex items-center justify-start gap-2.5 mt-10">
              <input name="hide" type="checkbox" checked={hide} onChange={(e) => setHide(e.target.checked)} className="w-7 h-7 border-2 border-border rounded-full text-base text-copy-light font-normal" />
              <p className="flex flex-col text-sm text-copy font-normal tracking-wide break-words">
                <span className='text-copy'>Set hidden desk</span>
                <span className='text-copy-lighter'>Only you and your co-authors can see.</span>
              </p>
            </div>
          </div>
          <div className='p-6 flex justify-end'>
            <button className="min-w-[80px] min-h-[48px] px-4 py-3 bg-gray-200 flex-center rounded-full text-base text-copy font-bold">
              Create
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Desk