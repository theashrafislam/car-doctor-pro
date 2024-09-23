"use client"
import SocialButton from '@/components/Shared/SocialButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {

    const handleSignUp = async (event) => {
        event.preventDefault();
        const user = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        const res = await fetch('http://localhost:3000/signup/api', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        })
        if (res.status === 200) {
            event.target.reset();
            alert('User Create Successfully.')
        }
        else if (res.status === 409) {
            alert('The email already exist.')
        }
        else {
            alert('Something went wrong.')
        }
    }

    return (
        <div className='container mx-auto py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='flex justify-center items-center'>
                    <Image alt='login page' height={430} width={430} src={'/images/login/login.svg'} />
                </div>
                <div className='border-2 border-gray-500 p-20'>
                    <h1 className='font-bold text-2xl text-center mb-4'>Sign Up</h1>

                    <form onSubmit={handleSignUp}>
                        <div className='flex flex-col gap-2 mb-3'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' placeholder="Enter your Name" className="input input-bordered w-full" />
                        </div>

                        <div className='flex flex-col gap-2 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full" />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full" />
                        </div>

                        <button type='submit' className="btn btn-primary mt-9 w-full">Sing Up</button>
                    </form>
                    <div className='mt-8 flex flex-col justify-center items-center gap-5'>
                        <p className='text-center'>Or Sign In With</p>
                        <SocialButton/>
                        <p>Already have an account? <Link href={'/signin'} className='font-bold text-primary'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;