"use client"
import fetchUser from "@/utils/fetchUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const page = () => {
  const router = useRouter();
  const userId = JSON.stringify(localStorage.getItem('user'));
  const userFetched = fetchUser();

  console.log(userFetched);

  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState(null)
  const [wrongImageType, setWrongImageType] = useState(false);
  const [fields, setFields] = useState();
  const [user, setUser] = useState({})

  const handleChange = (e) => {
    setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      setWrongImageType(false);
      setLoading(true);

      const updatedUser = {
        ...user,
        image: {
          _type: 'picture',
          asset: {
            _type: 'reference',
            _ref: picture?._id,
          },
        },
      };

      try {
        const res = await client
          .patch(userFetched._id)
          .set(updatedUser)
          .commit();
        if (res) {
          setLoading(false);
          console.log(res);
          console.log('User updated successfully');
          router.push('/profile/' + userId);
        }
      } catch (error) {
        console.error('Error updating user:', error);
      }
    } else {
      setFields(true);
      setTimeout(() => {
        setFields(false);
      }, 2000);
    }
  };

  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff') {
      setWrongImageType(false);
      client.assets.upload("image", e.target.files[0], {
        contentType: selectedFile.type,
        filename: selectedFile.name
      }).then((document) => {
        setPicture(document)
      }).catch((err) => {
        console.log("Image upload error !");
        console.log(err.message);
      })
    } else {
      setLoading(false);
      setWrongImageType(true);
    }
  }

  const cancelUpdate = () => {
    setUser({});
    setPicture(null);
    router.push('/profile/' + userId);
  };


  return (
    <section className='container mx-auto'>
      <div className='flex flex-col'>
        <h2></h2>
        <p></p>
        <div className="max-w-4xl mx-auto bg-foreground py-14 px-10 border border-border rounded-2xl">
          <form onSubmit={handleSubmit}>
            <div className='flex-center'>
              {
                !picture ? (
                  <label htmlFor="picture" className='relative w-32 h-32 rounded-full overflow-hidden cursor-pointer'>
                    <input onChange={uploadImage} name="picture" type="file" id="picture" className="opacity-0" />
                    <Image src="/user.png" fill alt="Profile picture" className="objcet-cover object-center" />
                  </label>
                ) : (
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={picture?.url}
                      fill
                      alt="uploaded-pic"
                      className="h-full w-full"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                      onClick={() => setPicture(null)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                )
              }

            </div>
            {
              wrongImageType && <p className="text-center py-2.5 text-error text-sm">Wront type of Image</p>
            }
            <div className='flex gap-5 mt-10'>
              <div className="flex-1 flex flex-col">
                <label htmlFor="first_name" className="pl-1.5 text-copy-light text-sm font-normal">First name</label>
                <input onChange={handleChange} name="first_name" id='first_name' type="text" className="py-2.5 px-3.5 my-1 text-copy-lighter text-sm font-normal rounded-xl" placeholder="Enter your first name ..." />
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="last_name" className="pl-1.5 text-copy-light text-sm font-normal">Last name</label>
                <input onChange={handleChange} name="last_name" id='last_name' type="text" className="py-2.5 px-3.5 my-1 text-copy-lighter text-sm font-normal rounded-xl" placeholder="Enter your first name ..." />
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="username" className="pl-1.5 text-copy-light text-sm font-normal">Username</label>
              <input onChange={handleChange} name="username" id='username' type="text" className="py-2.5 px-3.5 my-1 text-copy-lighter text-sm font-normal rounded-xl" placeholder="Enter your username ..." />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="pl-1.5 text-copy-light text-sm font-normal">Email</label>
              <input onChange={handleChange} name="email" id='email' type="email" className="py-2.5 px-3.5 my-1 text-copy-lighter text-sm font-normal rounded-xl" placeholder="Enter your username ..." />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="password" className="pl-1.5 text-copy-light text-sm font-normal">Password</label>
              <input onChange={handleChange} name="password" id='password' type="password" className="py-2.5 px-3.5 my-1 text-copy-lighter text-sm font-normal rounded-xl" placeholder="Enter your username ..." />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="birthday" className="pl-1.5 text-copy-light text-sm font-normal">Birthday</label>
              <input onChange={handleChange} name="birthday" id='birthday' type="date" className="py-2.5 px-3.5 my-1 text-copy-lighter text-sm font-normal rounded-xl" placeholder="Enter your username ..." />
            </div>
            {fields && (
              <p className="text-red-500 my-5 text-xl transition-all duration-150 ease-in text-center">Please add all fields.</p>
            )}
            <div className='flex-1 flex items-center justify-between gap-2.5 mt-5'>
              <button type="submit" disabled={loading} className={`py-3.5 px-5 bg-primary hover:bg-primary-dark text-white rounded-xl text-left cursor-pointer relative ${loading ? "animate-pulse" : ""}`} >Save</button>
              <button type="button" disabled={loading} className="py-3.5 px-5 bg-white hover:bg-gray-100 text-primary border rounded-xl text-left cursor-pointer relative" onClick={cancelUpdate} >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default page;