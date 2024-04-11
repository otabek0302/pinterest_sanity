"use client"

import { usePathname } from 'next/navigation'
import AuthForm from '../ui/AuthForm'
import { useEffect, useState } from 'react'

const Authentication = () => {
    const location = usePathname()
    const [auth, setAuth] = useState(null)

    useEffect(() => {

        if (location.includes('login')) {
            setAuth("login")
        }
        if (location.includes('singup')) {
            setAuth("singup")
        }

    }, [location])

    return (
        <section className="fixed inset-0 bg-black bg-opacity-50 z-50 ">
            <div className='w-full h-full flex-center'>
                {/* Authentification Form */}
                <AuthForm auth={auth} />
            </div>
        </section>
    )
}

export default Authentication