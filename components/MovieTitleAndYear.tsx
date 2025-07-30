'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface MovieTitleAndYearProps {
    title?: string;
    year?: number;
    id?: number;
}

const MovieTitleAndYear = ({ title, year, id } : MovieTitleAndYearProps) => {
    const router = useRouter();
    const handleTitleClick = () => {
        if (id) {
            router.push(`/movie/${id}`);
        }
    };
    return (
        <div className="flex items-baseline mb-2">
            <h1 
                className={`text-3xl text-white font-bold mr-2 drop-shadow-lg ${id && 'hover:text-green-400 hover:cursor-pointer'}`}
                onClick={handleTitleClick}
                >
                    {title}
                </h1>
            <span className="text-lg font-semibold text-gray-300">{year}</span>
        </div>
    )
};

export default MovieTitleAndYear;