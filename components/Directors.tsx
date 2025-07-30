"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

interface DirectorsProps {
    directors: Array<{
        id: number;
        name: string;
        department: string;
        job: string;
        profile_path: string | null;
    }
    >;
}

const Directors = ({ directors }: DirectorsProps) => {
    const router = useRouter();
    return (
        <>
            {directors.map((director, idx) => (
                <React.Fragment key={director.id}>
                    <button
                        className="text-white font-bold clickable"
                        onClick={() => {
                            router.push(`/personality/${director.id}`)
                            window.sessionStorage.setItem(`personality`, JSON.stringify({ id: director.id, job: 'Director' }));
                        }}
                    >
                        {director.name}
                    </button>
                    {idx < directors.length - 1 && <span className='mr-1'>, </span>}
                </React.Fragment>
            ))}
        </>
    )
};

export default Directors;