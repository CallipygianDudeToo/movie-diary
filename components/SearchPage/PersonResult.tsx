'use client';

import React from 'react';
import { ResultProps } from './SearchAndResultProps';
import Poster from '../Poster';
import { useRouter } from 'next/navigation';
import NameCard from '../NameCard';

const PersonResult = ({ result }: ResultProps) => {
    const router = useRouter();
    return (
        <div className="flex flex-row p-4 w-full rounded-lg font-arial bg-gray-900 hover:bg-gray-800 transition-colors duration-100">
            <Poster poster_path={result.profile_path} title={result.name} />
            <div className="flex flex-col m-4">
                <h1
                    className={`text-3xl text-white font-bold mr-2 drop-shadow-lg ${'clickable'}`}
                    onClick={() => { router.push(`/personality/${result.id}`) }}
                >
                    {result.name}
                </h1>
                <span className="text-md font-semibold text-gray-300">{result.known_for_department}</span>
                <div className='flex flex-row items-center mt-2'>
                    {result.known_for?.length && result.known_for?.length > 0 && (<span className="text-base mr-1 text-gray-400">known for</span>)}
                    {result.known_for?.map((movie) => (<NameCard key={movie.id} name={movie.title} id={movie.id} onClickHandler={() => { router.push(`/movie/${movie.id}`) }} />))}
                </div>
            </div>
        </div>
    );
};

export default PersonResult;