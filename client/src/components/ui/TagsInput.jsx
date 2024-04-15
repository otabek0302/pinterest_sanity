function TagsInput({ tags, setTags, placeholder, className }) {

    function handleKeyDown(e) {
        if (e.keyCode !== 32) return;
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <>
            <input onKeyDown={handleKeyDown} type="text" className={className} placeholder={placeholder} />
            <div className="flex flex-wrap items-center justify-start gap-2.5">
                {tags.map((tag, index) => (
                    <div className="w-fit py-[3vw] sm:py-2 px-[7vw] sm:px-4 rounded-[1.8vw] sm:rounded-xl flex-center bg-background dark:bg-primary-dark border-2 border-primary-dark dark:border-0 hover:bg-primary-dark cursor-fancy" key={index} onClick={() => removeTag(index)}>
                        <span className="text-copy hover:text-copy-light dark:text-copy text-[4vw] sm:text-sm font-bold drop-shadow-2xl tracking-wider leading-tight capitalize">{tag}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TagsInput;