import Head from 'next/head';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { LoginIcon } from '@heroicons/react/outline';

import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [message, setMessage] = useState({
        text: '',
        color: '',
    });

   
 const clickHandler=()=>{
    router.replace('/');

 }
      

 
    const inputClass =
        'w-full h-12 px-4 rounded-lg bg-gray-100 focus:outline-none';

   

        return (
            <>
                <Head>
                    <title>Login - Assistants Portal</title>
                </Head>
                <main className='flex flex-col items-center justify-center h-screen bg-white'>
                    <div className='mt-auto mb-4'>
                        <Image
                            src='/logo.webp'
                            width={56}
                            height={56}
                            objectFit='contain'
                            alt='IMV Logo'
                        />
                    </div>
                    <h1 className='mb-8 text-2xl font-bold'>
                        Assistants & Alumni Portal
                    </h1>

                    <div className='flex flex-col items-center mb-16 w-80 gap-y-4'>
                        <p
                            className={`text-sm font-semibold ${message.color} text-center`}>
                            {message.text}
                        </p>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            defaultValue={email}
                            type='email'
                            placeholder='Email'
                            className={inputClass}
                            id='email'
                        />
                        <input
                            onChange={e => setPassword(e.target.value)}
                            defaultValue={password}
                            type='password'
                            placeholder='Password'
                            className={inputClass}
                            id='password'
                        />
                        {signUp ? (
                            <>
                                <button
                                     onClick={clickHandler}
                                    className='flex items-center justify-center w-full h-12 space-x-2 text-white bg-pink-500 rounded-lg'>
                                    <p className='text-sm font-semibold tracking-wide uppercase'>
                                        Sign Up
                                    </p>
                                    <LoginIcon className='w-4 h-4' />
                                </button>
                                <p className='mt-4 text-sm'>
                                    Already have an account
                                    <span
                                        onClick={() => setSignUp(false)}
                                        className='font-semibold text-blue-500 cursor-pointer hover:underline'>
                                        Login
                                    </span>
                                </p>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={clickHandler}
                                    className='flex items-center justify-center w-full h-12 space-x-2 text-white bg-blue-500 rounded-lg'>
                                    <p className='text-sm font-semibold tracking-wide uppercase'>
                                        Login
                                    </p>
                                    <LoginIcon className='w-4 h-4' />
                                </button>
                                <p className='mt-4 text-sm'>
                                    Dont have account?
                                    <span
                                        onClick={() => setSignUp(true)}
                                        className='font-semibold text-pink-500 cursor-pointer hover:underline'>
                                        Sign up
                                    </span>
                                </p>
                              
                            </>
                        )}
                    </div>
                    <p className='mt-auto mb-2'>
                        ©{new Date().getFullYear()} IMV Laboratory | Bandung,
                        Indonesia 🇮🇩
                    </p>
                </main>
            </>
        );
}
