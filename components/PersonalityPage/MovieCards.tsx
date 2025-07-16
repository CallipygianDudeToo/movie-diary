"use client"

import React from 'react';
import { getSetOfMovies } from './helper';
import { PersonalityWithFilterProps } from './PersonalityProps';
import PosterCard from './PosterCard';

const MovieCards = ({ personality, filterOnJob }: PersonalityWithFilterProps) => {
    
    const setOfMovies = getSetOfMovies(personality) ?? [];
    return (
        <div className='grid grid-cols-7 gap-6 justify-center items-center content-center'>
            {setOfMovies
            .filter((movieData) => movieData.jobs.has(filterOnJob))
            .map((movieData) => (
                <div className="flex items-center justify-center h-full w-full" key={movieData.id}>
                    <PosterCard movieData={movieData} />
                </div>
            ))}
        </div>
    )
};

export default MovieCards;