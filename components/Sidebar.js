import Image from 'next/image';
import {
    HomeIcon,
    UserIcon,
    PencilAltIcon,
    VideoCameraIcon,
    LightningBoltIcon,
    BeakerIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const iconStyle = 'w-6 h-6';

const menuItems = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon className={iconStyle} />,
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <UserIcon className={iconStyle} />,
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <PencilAltIcon className={iconStyle} />,
    },
    {
        title: 'Webinar',
        path: '/webinar',
        icon: <VideoCameraIcon className={iconStyle} />,
    },
    {
        title: 'Training',
        path: '/training',
        icon: <LightningBoltIcon className={iconStyle} />,
    },
    {
        title: 'Reasearch & Publication',
        path: '/research',
        icon: <BeakerIcon className={iconStyle} />,
    },
];

export default function SideBar() {
    const router = useRouter();
    const [mainPath, setMainPath] = useState('/');

    // check if path has subpath, then extract only the main path
    useEffect(() => {
        let path = router.pathname;
        let pathSplits = path.split('/');
        if (pathSplits.length > 2) {
            setMainPath(`/${pathSplits[1]}`);
        } else {
            setMainPath(path);
        }
    }, [router.pathname]);

    return (
        <div className='fixed bottom-0 z-10 flex items-center justify-center flex-shrink-0 w-screen h-20 p-4 text-gray-800 bg-white md:sticky md:top-0 md:left-0 md:flex-col md:justify-start md:items-baseline md:p-8 md:w-80 md:h-screen md:text-white md:bg-gray-900'>
            <div className='items-center hidden mb-16 space-x-4 md:flex'>
                <Image
                    src='/logo.webp'
                    width={42}
                    height={42}
                    objectFit='contain'
                    alt='IMV Logo'
                />
                <div>
                  
                    <p className='text-xs'>Dashboard</p>
                </div>
            </div>
            <ul className='flex flex-row justify-between w-full px-1 md:flex-col md:justify-start md:gap-3 md:-mx-2 md:px-0 md:w-auto'>
                {menuItems.map((menu, idx) => {
                    let color =
                        menu.path === mainPath
                            ? 'bg-blue-100 md:bg-blue-500 text-blue-500 md:text-white hover:bg-blue-100 md:hover:bg-blue-500 hover:text-blue-500 md:hover:text-white'
                            : 'bg-white md:bg-gray-900 text-gray-400 hover:bg-gray-100 md:hover:bg-gray-800 hover:text-gray-800 md:hover:text-white';

                    return (
                        <li
                            onClick={() => router.push(menu.path)}
                            key={idx}
                            className={`flex justify-center md:justify-start items-center gap-x-8 p-3 md:p-4 rounded-xl ${color} cursor-pointer`}>
                            {menu.icon}
                            <p className='hidden md:block'>{menu.title}</p>
                        </li>
                    );
                })}
            </ul>
        
        </div>
    );
}
