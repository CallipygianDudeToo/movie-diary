"use client";

import React from 'react';
import { PersonalityProps } from './PersonalityProps';
import Profile from './Profile';
import { getSetOfMovies } from './helper';
import { useRouter } from 'next/navigation';

const PersonalityPage = ({ personality } : PersonalityProps) => {
    const router = useRouter();
    const setOfMovies = getSetOfMovies(personality) ?? [];
    return (
        <div>
            <Profile personality={personality} />
            <div className='flex flex-col items-center justify-center'>
                {setOfMovies.map((movie) => (
                    <button key={movie.id} className="text-base font-bold hover:text-blue-400"
                        onClick={() => router.push(`/movie/${movie.id}`)}
                    >
                        {`${movie.title}; ${movie.id}; ${movie.poster_path}; ${movie.popularityDetails.count}; ${movie.popularityDetails.popularitySum}`}
                    </button>
                ))}
            </div>
        </div>
    )
};

export default PersonalityPage;