"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";

const SocialButton = () => {
    const router = useRouter();
    const session = useSession();
    const searchParams = useSearchParams();
    const path = searchParams.get('redirect');
    const handleSocialLogin = (providers) => {
        const res = signIn(providers, {
            redirect: true,
            callbackUrl: path ? path : '/'
        });
    }
    if(session.status == "authenticated"){
        router.push('/')
    }
    return (
        <div className='flex gap-5 items-center justify-center'>
            <FaFacebook className='text-2xl' />
            <FaGithub onClick={() => handleSocialLogin('github')} className='text-2xl' />
            <FcGoogle onClick={() => handleSocialLogin('google')} className='text-2xl' />
        </div>
    );
};

export default SocialButton;