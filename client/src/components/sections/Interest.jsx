import Link from 'next/link'

const Interest = ({ title, arr }) => {
  return (
    <div className='mt-20'>
      <div className='flex items-center justify-between px-3.5 mb-2.5'>
        <span className='block text-center'>{title}</span>
        <Link href="/">See all</Link>
      </div>
      <div className='grid grid-cols-6 gap-5'>
        {arr.map((item, i) => (
          <div key={i} className={`col-span-1`}>
            <div className={`bg-slate-800 h-[400px] bg-[url(/shop-bg.png)] bg-cover rounded-3xl`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Interest