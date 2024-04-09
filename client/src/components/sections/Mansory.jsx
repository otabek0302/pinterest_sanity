const Mansory = ({ title, arr, className }) => {
    return (
        <div>
            <span className='block text-center'>{title}</span>
            <div className='grid_mansory'>
                {arr.map((item, i) => (
                    <div key={i} className={`${item >= 5 ? "small" : "big"} bg-slate-200 rounded-3xl p-4`}>
                        <div className={`bg-slate-800 h-full rounded-3xl`} />
                        <div className="mt-2">{item}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Mansory