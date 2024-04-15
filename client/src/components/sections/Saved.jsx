import Image from "next/image";

const Saved = () => {
  return (
    <div className="grid grid-cols-8 gap-3.5">
      {[1, 2, 3].map((item) => (
        <div key={item} className="h-52 overfolow-hidden">
          <div className="relative h-full grid grid-cols-3">
            <div className={`absolute left-0  top-0 w-1/2 h-full bg-gray-100 border border-border rounded-2xl overflow-hidden z-[10] ${"bg-[url(/shop-bg.png)] bg-cover"}`} />
            <div className={`absolute left-14 top-0 w-1/2 h-full bg-gray-100 border border-border rounded-2xl overflow-hidden z-[9] ${"bg-[url(/shop-bg.png)] bg-cover"}`} />
            <div className={`absolute left-28 top-0 w-1/2 h-full bg-gray-100 border border-border rounded-2xl overflow-hidden z-[8] ${"bg-[url(/shop-bg.png)] bg-cover"}`} />
            <div className={`absolute left-40 top-0 w-1/2 h-full bg-gray-100 border border-border rounded-2xl overflow-hidden z-[7] ${"bg-[url(/shop-bg.png)] bg-cover"}`} />
          </div>
          <div className="flex flex-col text-red-900">
            <h3 className="text-base black font-bold">All Pins</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Saved;
