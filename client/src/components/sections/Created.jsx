import Image from "next/image";

const Created = () => {
  return (
    <div className="grid grid-cols-8 gap-3.5">
      {[1, 2, 3].map((item) => (
        <div key={item} className="relative h-52 rounded-2xl overfolow-hidden">
            <Image src="/shop-bg.png" fill alt="" className="object-ceover object-center" />
            <div className="absolute top-0 left-0 w-full p-3.5 flex justify-between">
                <span>WEB</span>
                <button className="py-2 px-3.5 bg-primary hover:bg-primary-dark text-sm text-white font-semibold text-center rounded-[24px] cursor-pointer">Login</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Created;
