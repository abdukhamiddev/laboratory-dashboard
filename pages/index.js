import Head from 'next/head';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import { PencilIcon } from '@heroicons/react/solid';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const hashString = window.location.hash;

        if (hashString) {
            const hashSplits = hashString.split('&');
            const hashObj = {
                accessToken: hashSplits[0].split('=')[1],
                type: hashSplits[4].split('=')[1],
            };

            if (hashObj.type === 'recovery') {
                router.push({
                    pathname: '/auth/request-reset',
                    query: hashObj,
                });
            }
        }
    }, [router]);

    return (
        <Layout>
            <h1 className='text-2xl font-semibold'>Welcome home!</h1>
            <div className='flex flex-col-reverse items-center md:flex-row justify-evenly'>
                <Image
                    src='/home_illustration.png'
                    width={500}
                    height={500}
                    objectFit='contain'
                    alt='Hand'
                />

                <div className='w-full md:w-1/2'>
                    <h1 className='mt-8 mb-8 text-3xl font-bold md:mt-0'>
                        Hi there! 👋🏻
                    </h1>
                    <p className='text-lg'>
                    Welcome to your Dashboard
                       
                    </p>
                    <p className='mt-8 text-lg'>
                        Let &apos s starts by completing your profile info!
                    </p>
                    <button
                        onClick={() => router.push('/profile')}
                        className='flex items-center justify-center h-12 gap-4 px-6 mt-8 text-sm font-semibold text-white uppercase bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-700'>
                        <p>Edit your profile</p>
                        <PencilIcon className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </Layout>
    );
}
