const Input = ({ keyword, value, setData, placeholder, loading }) => {
    function handleChange(e) {
        setData((prevData) => ({ ...prevData, [keyword]: e.target.value }))
    }
    return (
        <input
            name={keyword || ""}
            type={keyword === "password" ? "password" : "text"}
            className="py-[3vw] sm:py-3.5 px-[4vw] sm:px-4 block flex-1 border-2 border-gray-200 focus:border-red-700 focus:outline-none rounded-[1.8vw] sm:rounded-xl text-black font-bold text-[2.7vw] sm:text-sm disabled:opacity-50 disabled:pointer-events-none"
            placeholder={placeholder || ""}
            value={value || ""}
            onChange={handleChange}
            disabled={loading}

        />
    )
}

export default Input