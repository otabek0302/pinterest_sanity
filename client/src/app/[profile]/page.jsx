import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
    <section className='container mx-auto'>

      {/* Profile Information */}
      <div className='max-w-xl mx-auto flex-center'>
        <div className='relative w-32 h-32 rounded-full overflow-hidden'>
          <Image src="/profile.jpeg" fill alt="Profile picture" className="object-cover object-center" />
        </div>
        <h3>Amonov Otabek</h3>
        <div>
          <Image src="/logo.png" width={24} height={24} alt="Profile picture" />
          <span>otabekamonov</span>
        </div>
        <div>
          <span>2 Followers</span>
          <span>10 Following</span>
        </div>
        <div className="flex gap-5">
          <button>Share</button>
          <Link href="/setting">
            <button>Setting</button>
          </Link>
        </div>
      </div>

      {/* Profile controller */}
      <div className="flex-center gap-5">
        <button>Created</button>
        <button>Saved</button>
      </div>
      <div className="flex justify-between">
        <button>ADD</button>
        <button>FILTER</button>
      </div>

      {/* Posts  */}
      <div className='px-16'>
        <div className='mx-auto'>
          <div className='grid grid-cols-5 gap-3.5'>
            {
              [1, 2, 3, 4, 5].map((items) => (
                <div key={items} className='h-52'>
                  <div className='relative h-full bg-red-50 rounded-2xl overflow-hidden'>
                    <Image src="/shop-bg.png" fill alt="" className="object-cover object-center" />
                  </div>
                  <div className='flex flex-col text-red-900'>
                    <h3 className='text-base black font-bold'>Animals</h3>
                    <div className="flex gap-5">
                      <span>14 pin</span>
                      <span>2 hours ago</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </section>
  )
}

export default Profile