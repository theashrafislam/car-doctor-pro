"use client"
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import React from 'react';
import { useRouter } from 'next/navigation';
import SocialButton from '@/components/Shared/SocialButton';

const page = () => {
    const router = useRouter();
    const handleSignIn = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const resp = await signIn('credentials', {
            email,
            password,
            redirect: false
        })
        if(resp.status === 200){
            alert('Welcome! User Login Successfully.')
            router.push('/')
        }
        else{
            alert("Something went wrong.")
        }
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
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full" />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full" />
                        </div>

                        <button type='submit' className="btn btn-primary mt-9 w-full">Sing In</button>
                    </form>
                    <div className='mt-8 flex flex-col justify-center items-center gap-5'>
                        <p className='text-center'>Or Sign In With</p>
                        <SocialButton/>
                        <p>Have an account? <Link href={'/signup'} className='font-bold text-primary'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;