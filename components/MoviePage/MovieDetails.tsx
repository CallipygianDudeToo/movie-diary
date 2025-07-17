import React from 'react';
import { MovieProps } from './MovieProps';
import { getFormattedAverage, getFormattedRuntime, getReleaseYear } from './helper';
import Directors from './Directors';

const MovieDetails = ({ movie }: MovieProps) => {
    return (
        <div className="relative z-20 flex items-top justify-center w-full h-full -mt-20">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg shadow-2xl h-60 mr-4"
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
                {/* <div className="flex items-center mb-2">
                    <span className="text-base mr-2"> {getFormattedRuntime(movie.runtime)}</span>
                    <span className="text-base mr-2"> • ⭐ {getFormattedAverage(movie.vote_average)}</span>
                </div> */}
                {/*TODO: Figure out new place to show them*/}
                {movie.tagline && <span className="italic text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>{movie.tagline}</span>}
                <p className="text-base text-gray-200 drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>{movie.overview}</p>
            </div>
        </div>
    )
};

export default MovieDetails;