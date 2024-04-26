"use client";
import Image from "next/image";
import Link from "next/link";

import { signUp } from "next-auth-sanity/client";
import { signIn, useSession } from "next-auth/react";

import { IoLogoGoogle, IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthForm = ({ auth }) => {
    const router = useRouter();
    const { status } = useSession()
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => {
        if (status === "authenticated") {
            setSuccess("Your are loged in successfully !");
            setTimeout(() => {
                router.push("/");
            }, 3000);
        }
    }, [status])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (auth === "login") {
            try {
                setLoading(true);
                const res = await signIn('sanity-login', {
                    redirect: false,
                    email: email,
                    password: password
                });
                if (res.ok) {
                    setSuccess("Your are loged in successfully !");
                    setLoading(false);
                    setTimeout(() => {
                        router.push("/");
                    }, 3000);
                } else {
                    setLoading(false);
                    setError(res.error);
                }
            } catch (error) {
                setError(error.message);
                throw new Error(error.message);
            }
        }

        if (auth === "singup") {
            try {
                const res = await signUp({
                    email: email,
                    password: password,
                    birthday: birthday,
                });
                if (res.ok) {
                    setSuccess("Your account created successfully !");
                    setLoading(false);
                    setTimeout(() => {
                        router.push("/");
                    }, 3000);
                }
            } catch (error) {
                setLoading(false);
                setError(error.message);
                throw new Error(error.message);
            }
        }
    };

    return (
        <div className="relative w-[484px] rounded-3xl bg-background overflow-hidden">
            {/* Form controller */}
            <Link href="/">
                <div className="absolute top-5 right-5 p-1.5 border border-border-dark rounded-full cursor-pointer">
                    <IoMdClose className="text-xl font-bold" />
                </div >
            </Link >

            {/* Form top side */}
            <div className="px-2.5 pt-5 pb-6" >
                <div className="flex-center flex-col mb-6">
                    <div className="w-10 h-10 relative overflow-hidden">
                        <Image
                            src="/logo.png"
                            fill
                            alt="Logo"
                            className="object-cover object-center"
                        />
                    </div>
                    <h1 className="text-3xl text-copy font-semibold leading-normal tracking-wideer break-words">
                        Welcome to Printest
                    </h1>
                    {!auth && (
                        <p className="text-base text-copy-light font-normal">
                            Find new ideas to try
                        </p>
                    )}
                </div>

                <div className="w-[268px] mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2 flex flex-col">
                            <label
                                htmlFor="email"
                                className="ml-2.5 mb-1.5 text-sm text-copy-light font-normal leading-tight cursor-pointer"
                            >
                                Email
                            </label>
                            <input
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Email address"
                                className="py-3 px-4 rounded-2xl border-2 border-border hover:border-border-dark focus:outline-6 focus:outline-blue-300 text-base text-copy-lighter font-normal"
                            />
                        </div>
                        <div className="mb-2 flex flex-col">
                            <label
                                htmlFor="password"
                                className="ml-2.5 mb-1.5 text-sm text-copy-light font-normal leading-tight cursor-pointer"
                            >
                                Password
                            </label>
                            <input
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password"
                                className="py-3 px-4 rounded-2xl border-2 border-border hover:border-border-dark focus:outline-6 focus:outline-blue-300 text-base text-copy-lighter font-normal"
                            />
                            {auth === "login" && (
                                <Link href="/forget-password" className="my-2 px-1.5">
                                    <span className="text-sm text-copy font-semibold">
                                        Forgot your password ?
                                    </span>
                                </Link>
                            )}
                        </div>
                        {auth === "singup" && (
                            <div className="mb-2 flex flex-col">
                                <label
                                    htmlFor="birthday"
                                    className="ml-2.5 mb-1.5 text-sm text-copy-light font-normal leading-tight cursor-pointer"
                                >
                                    Birthday
                                </label>
                                <input
                                    name="birthday"
                                    onChange={(e) => setBirthday(e.target.value)}
                                    value={birthday}
                                    type="date"
                                    placeholder="dd/mm/yy"
                                    className="py-3 px-4 rounded-2xl border-2 border-border hover:border-border-dark focus:outline-6 focus:outline-blue-300 text-base text-copy-lighter font-normal"
                                />
                            </div>
                        )}

                        <button
                            disabled={loading && true}
                            type="submit"
                            className={`w-full py-2 px-5 bg-primary hover:bg-primary-dark text-base text-white font-bold text-center rounded-[20px] cursor-pointer ${loading && "animate-pulse"}`}
                        >
                            Continue
                        </button>
                        {
                            error && (<p className="text-center text-error text-sm my-2.5">{error}</p>)
                        }
                        {
                            success && (<p className="text-center text-success text-sm my-2.5">{success}</p>)
                        }

                    </form>

                    <p className="my-2 text-sm text-copy font-bold text-center">OR</p>

                    <div className="mt-2.5">
                        <button
                            type="button"
                            onClick={signIn}
                            className="relative w-full py-2 px-5 bg-background hover:bg-foreground border border-border text-base text-copy font-normal text-center rounded-[20px] cursor-pointer"
                        >
                            <IoLogoGoogle className="absolute left-2 text-blue-400" />
                            Continue with Google
                        </button>
                    </div>

                    <div className="mt-3">
                        <p className=" text-xs text-copy-lighter font-normal text-center">
                            By continuing you agree to Printest's <br />{" "}
                            <a href="/" className="text-copy font-semibold">
                                Terms of Services
                            </a>{" "}
                            and aknowledge of you've read our{" "}
                            <a href="/" className="text-copy font-semibold">
                                Privacy Plicy
                            </a>
                            .{" "}
                            <a href="/" className="text-copy font-semibold">
                                Notice at collection
                            </a>
                            .
                        </p>
                    </div>
                    <div className="h-[2px] w-20 mx-auto bg-border my-5" />
                    <div className="mt-3">
                        {auth === "login" ? (
                            <p className=" text-xs text-copy-lighter font-normal text-center">
                                Not on Pinterest yet ?{" "}
                                <Link href="/auth/singup" className="text-copy font-semibold">
                                    Sing up
                                </Link>
                            </p>
                        ) : (
                            <p className=" text-xs text-copy-lighter font-normal text-center">
                                Already a member ?{" "}
                                <Link href="/auth/login" className="text-copy font-semibold">
                                    Log in
                                </Link>
                            </p>
                        )}
                    </div>
                </div>
            </div >

            {/* Form bottom side */}
            {
                auth === "singup" && (
                    <div className="w-full h-16 flex-center bg-[#e9e9e9]">
                        <p className="text-base text-copy font-semibold text-center">
                            Create a free business account
                        </p>
                    </div>
                )
            }
        </div >
    );
};

export default AuthForm;
