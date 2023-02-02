/* eslint-disable react-hooks/exhaustive-deps */
import Layout from '../../components/Layout';
import {
    RefreshIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    DocumentDownloadIcon,
    CheckCircleIcon,
    XCircleIcon,
} from '@heroicons/react/solid';
import useWebinarParticipants from '../../hooks/useWebinarParticipants';
import useCountWebinarParticipants from '../../hooks/useCountWebinarParticipants';
import useDownloadCSV from '../../hooks/useDownloadCSV';
import Loading from '../../components/Loading';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Webinar() {
    const [page, setPage] = useState(0);

    const {
        data: count,
        isLoading: countLoading,
        refetch: refetchCount,
    } = useCountWebinarParticipants();

    const {
        data: participants,
        isLoading: participantsLoading,
        refetch: refectParticipants,
    } = useWebinarParticipants(page);

    const refetch = () => {
        refetchCount();
        refectParticipants();
    };

    const prevPage = () => {
        if (page > 0) {
            setPage(prev => prev - 1);
        }
    };

    const nextPage = () => {
        setPage(prev => prev + 1);
    };

    useEffect(() => {
        refetch();
    }, [page]);

    const { data: csvData, isLoading: csvLoading } = useDownloadCSV(
        'webinar_participants'
    );

    const handleDownloadCSV = () => {
        const element = document.createElement('a');
        const dataBlob = new Blob([csvData], {
            type: 'text/csv',
        });
        element.href = URL.createObjectURL(dataBlob);
        element.download = 'webinar_participants.csv';
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    const formatDate = timestamp => {
        const date = new Date(timestamp);
        return date.toDateString();
    };

    if (participantsLoading || countLoading || csvLoading) return <Loading />;

    return (
        <Layout>
            <div className='flex items-center justify-between mb-8'>
                <h1 className='text-2xl font-semibold'>Webinar Participants</h1>
                <button
                    onClick={() => refetch()}
                    className='flex items-center justify-center h-10 gap-2 px-3 text-sm font-semibold text-blue-500 uppercase bg-blue-100 rounded-lg'>
                    <RefreshIcon className='w-6 h-6' />
                    <p>Refresh</p>
                </button>
            </div>

            <div className='flex flex-wrap gap-4 mb-8'>
                <div className='flex-1 p-4 bg-blue-500 rounded-lg'>
                    <p className='text-lg font-semibold text-white'>
                        Total:
                    </p>
                </div>
                <div className='flex-1 p-4 bg-pink-500 rounded-lg'>
                    <p className='text-lg font-semibold text-white'>
                        Students: 
                    </p>
                </div>
                <div className='flex-1 p-4 bg-yellow-500 rounded-lg'>
                    <p className='text-lg font-semibold text-white'>
                        Attended: 
                    </p>
                </div>
                <div className='flex-1 p-4 bg-gray-800 rounded-lg'>
                    <p className='text-lg font-semibold text-white'>
                   participants
                    </p>
                </div>
            </div>

            <p className='text-sm text-gray-500'>Sorted by latest data in:</p>
            <ul className='ml-8 list-disc'>
               
            </ul>

            <div className='mt-4 overflow-x-scroll'>
                <table className='text-sm text-left table-auto'>
                    <thead className='whitespace-nowrap'>
                        <tr className='bg-gray-100 rounded-lg'>
                            <th className='p-4'>No.</th>
                            <th className='p-4'>Photo</th>
                            <th className='p-4'>Full Name</th>
                            <th className='p-4'>Email Address</th>
                            <th className='p-4'>Phone</th>
                            <th className='p-4'>Status</th>
                            <th className='p-4'>Organization</th>
                            <th className='p-4'>Attendance</th>
                            <th className='p-4'>Webinar</th>
                            <th className='p-4'>Registered on</th>
                        </tr>
                    </thead>

                    <tbody>
                      
                            <tr
                                className= 'bg-gray-100'>
                    
                                <td className='p-4'>
                    </td>
                                <td className='p-4'>
                                    <Image
                                        src=
                                           
                                           
                                                '/logo.webp'
                                        alt='img2'
                                        width={32}
                                        height={32}
                                        layout='fixed'
                                        objectFit='cover'
                                        className='rounded-full'
                                    />
                                </td>
                                <td className='p-4'></td>
                     
                                <td className='p-4'>
                      
                                </td>
                                <td className='p-4'>
                                    <div className='flex items-center justify-center'>
                                  
                                          <CheckCircleIcon className='w-6 h-6 text-green-500' />
                                    
                                         <XCircleIcon className='w-6 h-6 text-red-500' />
                                    
                                    </div>
                                </td>
                                <td className='p-4'>
                                  
                                </td>
                                <td className='p-4'>
                         
                                </td>
                            </tr>
                  
                    </tbody>
                </table>
            </div>
            <div className='flex items-center justify-between mt-8'>
                <button
                    onClick={handleDownloadCSV}
                    className='flex items-center justify-center h-10 gap-2 pl-2 pr-4 text-sm font-semibold text-white bg-green-500 rounded-lg focus:outline-none'>
                    <DocumentDownloadIcon className='w-6 h-6' />
                    <p>Download as .csv</p>
                </button>
                <div className='flex items-center'>
                    <button
                        onClick={prevPage}
                        disabled={page === 0}
                        className='flex items-center justify-center w-8 h-10 text-gray-900 bg-gray-100 rounded-l-lg disabled:text-gray-300 focus:outline-none'>
                        <ChevronLeftIcon className='w-6 h-6' />
                    </button>
                    <p className='flex items-center justify-center h-10 px-4 text-sm font-semibold text-gray-900 bg-gray-100'>
                        {page + 1} of
                    </p>
                    <button
                        onClick={nextPage}
               
                        className='flex items-center justify-center w-8 h-10 text-gray-900 bg-gray-100 rounded-r-lg disabled:text-gray-300 focus:outline-none'>
                        <ChevronRightIcon className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </Layout>
    );
}
