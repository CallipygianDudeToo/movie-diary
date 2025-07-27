import React from 'react';
import { MovieProps } from './MovieProps';
import { getReleaseYear } from './helper';
import Directors from './Directors';
import Poster from '../Poster';

const MovieDetails = ({ movie }: MovieProps) => {
    return (
        <div className="relative z-20 flex items-top justify-center px-[20rem] w-full h-full -mt-20">
            <Poster
                poster_path={movie.poster_path}
                title={movie.title}
                addClassName='mr-4'
            />
            <div className="text-white max-w-2xl ml-4">
                <div className="flex items-baseline mb-2">
                    <h1 className="text-3xl font-bold mr-2 drop-shadow-lg">{movie.title}</h1>
                    <span className="text-lg font-semibold text-gray-300">{getReleaseYear(movie)}</span>
                </div>
                <div className="flex items-center mt-2 mb-6">
                    <span className="text-base mr-1 text-gray-400">directed by</span>
                    <Directors movie={movie} />
                </div>
                {movie.tagline && <span className="italic text-gray-400 font-georgia">{movie.tagline}</span>}
                <p className="text-base text-gray-200 drop-shadow-lg font-georgia">{movie.overview}</p>
            </div>
        </div>
    )
};

export default MovieDetails;