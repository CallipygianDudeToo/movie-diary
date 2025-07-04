import React from 'react';
import { MovieProps } from './MovieProps';
import { getDirectors, getFormattedAverage, getFormattedRuntime, getReleaseYear } from './helper';

const MovieDetails = ({ movie }: MovieProps) => {
    return (
        <div className="relative z-20 flex items-top justify-center w-full h-full -mt-14">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg shadow-2xl max-h-60 mr-8 hidden md:block"
            />
            <div className="text-white max-w-2xl">
                <div className="flex items-baseline mb-2">
                    <h1 className="text-3xl font-bold mr-2 drop-shadow-lg">{movie.title}</h1>
                    <span className="text-lg font-semibold text-gray-300">{getReleaseYear(movie)}</span>
                </div>
                {movie.tagline && <span className="italic">{movie.tagline}</span>}
                <div className="flex items-center mt-2 mb-2">
                    <span className="text-base mr-1">directed by</span>
                    <span className="text-base font-bold">{getDirectors(movie)}</span>
                </div>
                <div className="flex items-center mb-2">
                    <span className="text-base mr-2"> {getFormattedRuntime(movie.runtime)}</span>
                    <span className="text-base mr-2"> • ⭐ {getFormattedAverage(movie.vote_average)}</span>
                </div>
                <p className="text-base text-gray-200 line-clamp-4 drop-shadow-lg">{movie.overview}</p>
            </div>
        </div>
    )
};

export default MovieDetails;