"use client";

import React from 'react'
import { MovieProps } from './MovieProps';
import { getDirectors } from './helper';
import { useRouter } from 'next/navigation';

const Directors = ({ movie }: MovieProps) => {
    const directors = getDirectors(movie);
    const router = useRouter();
    return (
        <>
            {directors.map((director, idx) => (
                <React.Fragment key={director.id}>
                    <button
                        className="text-base font-bold hover:text-green-400"
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