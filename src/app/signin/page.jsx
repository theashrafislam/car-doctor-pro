"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";

const page = () => {

    const handleSignIn = () => {
        
    }

    return (
        <div className='container mx-auto py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='flex justify-center items-center'>
                    <Image alt='login page' height={430} width={430} src={'/images/login/login.svg'} />
                </div>
                <div className='border-2 border-gray-500 p-20'>
                    <h1 className='font-bold text-2xl text-center mb-4'>Sign In</h1>

                    <form onSubmit={handleSignIn}>
                        <div className='flex flex-col gap-2 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered w-full" />
                        </div>

                        <button type='submit' className="btn btn-primary mt-9 w-full">Sing In</button>
                    </form>
                    <div className='mt-8 flex flex-col justify-center items-center gap-5'>
                        <p className='text-center'>Or Sign In With</p>
                        <div className='flex gap-3 items-center justify-center'>
                            <FaFacebook className='text-2xl' />
                            <FaInstagram className='text-2xl' />
                            <FcGoogle className='text-2xl' />
                        </div>
                        <p>Have an account? <Link href={'/signup'} className='font-bold text-primary'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;