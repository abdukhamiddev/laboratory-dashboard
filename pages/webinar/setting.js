import { useState } from 'react';
import Layout from '../../components/Layout';
import { PlusIcon } from '@heroicons/react/solid';
import { useWebinars } from '../../hooks/useWebinars';

import Form from '../../components/Webinar/Form';
import ListItem from '../../components/Webinar/ListItem';

export default function Setting() {
    const [form, setForm] = useState({
        show: false,
        editMode: false,
        data: null,
        title: null,
    });

    const closeForm = () => {
        setForm({
            show: false,
            editMode: false,
            data: null,
            title: null,
        });
    };

    const { data: webinars, isLoading, refetch } = useWebinars();


    return (
        <>
            <Layout>
                <div className='flex items-center justify-between mb-8'>
                    <h1 className='text-2xl font-semibold'>Webinar Setting</h1>
                    <button
                        onClick={() => {
                            setForm({
                                show: true,
                                editMode: false,
                                data: null,
                                title: 'Add new webinar',
                            });
                        }}
                        className='flex items-center justify-center h-10 gap-2 px-3 text-sm font-semibold text-blue-500 uppercase bg-blue-100 rounded-lg'>
                        <PlusIcon className='w-6 h-6' />
                        <p>Add</p>
                    </button>
                </div>
               
            </Layout>
            {form.show && (
                <Form
                    closeForm={closeForm}
                    formTitle={form.title}
                    data={form.data}
                    editMode={form.editMode}
                />
            )}
        </>
    );
}
