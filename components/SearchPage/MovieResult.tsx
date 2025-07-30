import React from 'react';
import { ResultProps } from './SearchAndResultProps';
import Poster from '../Poster';
import MovieTitleAndYear from '../MovieTitleAndYear';
import { fetchDirectorsByMovieId } from '@/tmdb';
import { getDirectors, getReleaseYear } from '../commonHelper';
import Directors from '../Directors';

const MovieResult = async ({ result }: ResultProps) => {
    const credits = await fetchDirectorsByMovieId(result.id.toString());

    return (
        <div className="flex flex-row p-4 w-full rounded-lg font-arial bg-gray-900 hover:bg-gray-800 transition-colors duration-100">
            <Poster poster_path={result.poster_path} title={result.title} />
            <div className="flex flex-col m-4">
                <MovieTitleAndYear
                    title={result.title}
                    year={getReleaseYear(result)}
                    id={result.id}
                />
                <div className="flex items-center mb-6">
                    <span className="text-base mr-1 text-gray-400">directed by</span>
                    <Directors directors={credits ? getDirectors(credits) : []} />
                </div>
                <p className="text-md font-georgia">{result.overview}</p>
            </div>
        </div>
    );
};

export default MovieResult;