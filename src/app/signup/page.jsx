"use client";
import SocialButton from '@/components/Shared/SocialButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage(''); // Reset error message

        const user = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        // Basic validation
        if (!validateEmail(user.email)) {
            setErrorMessage("Please enter a valid email address.");
            setLoading(false);
            return;
        }
        if (user.password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup/api`, { // Use environment variable
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.ok) {
                event.target.reset();
                alert('User created successfully.');
            } else {
                const data = await res.json();
                if (res.status === 409) {
                    setErrorMessage('The email already exists.'); // Show error message
                } else {
                    setErrorMessage(data.message || 'Something went wrong.'); // Use error message from server if available
                }
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false); // Ensure loading state is reset
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <div className='container mx-auto py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='flex justify-center items-center'>
                    <Image 
                        alt='signup page' 
                        height={430} 
                        width={430} 
                        src='/images/login/login.svg' 
                    />
                </div>
                <div className='border-2 border-gray-500 p-20'>
                    <h1 className='font-bold text-2xl text-center mb-4'>Sign Up</h1>

                    {errorMessage && (
                        <div role="alert" className="mb-4 text-red-600">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSignUp}>
                        <div className='flex flex-col gap-2 mb-3'>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter your Name"
                                className="input input-bordered w-full"
                                required
                                aria-label="Name"
                            />
                        </div>

                        <div className='flex flex-col gap-2 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                                aria-label="Email"
                            />
                        </div>

                        <div className='flex flex-col gap-2 mb-3'>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                                aria-label="Password"
                            />
                        </div>

                        <button 
                            type='submit' 
                            className={`btn btn-primary mt-9 w-full ${loading ? 'loading' : ''}`} 
                            disabled={loading}
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </form>

                    <div className='mt-8 flex flex-col justify-center items-center gap-5'>
                        <p className='text-center'>Or Sign In With</p>
                        <SocialButton />
                        <p>Already have an account? <Link href={'/signin'} className='font-bold text-primary'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;