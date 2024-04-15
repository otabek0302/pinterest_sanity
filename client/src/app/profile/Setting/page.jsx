const Setting = () => {
  return (
    <section className='container mx-auto'>
      <div className='flex flex-col'>
        <h2></h2>
        <p>Позаботьтесь о конфиденциальности личных данных. Добавляемая вами информация видна всем, кто может просматривать ваш профиль.</p>
        <form>
          <div className='flex'>
            <div className='relative w-32 h-32 rounded-full overflow-hidden'>
              <Image src="/profile.png" fill alt="Profile picture" className="objcet-cover object-center" />
            </div>
            <button className='btn'>Change</button>
          </div>
          <div className='flex gap-5'>
              <div>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" />
              </div>
              <div>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" />
              </div>
          </div>
          <div className='flex gap-5'>
              <div>
                <label htmlFor="name">Name</label>
                <textarea id='name' type="text" />
              </div>
          </div>
          <div className='flex gap-5'>
              <div>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" />
              </div>
          </div>
          <div className='flex gap-5'>
              <div>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" />
                <span>www.pinterest.com/otabekamonov</span>
              </div>
          </div>
          <div className='flex items-center justify-start gap-5'>
              <button>Save</button>
              <button>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Setting