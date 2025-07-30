import React from 'react';
import { ResultProps } from './SearchAndResultProps';
import Poster from '../Poster';
import MovieTitleAndYear from '../MovieTitleAndYear';
import { getReleaseYear } from '../MoviePage/helper';;


const MovieResult = ({ result } : ResultProps) => {
    return (
        <div className='flex flex-row m-4 p-4 bg-gray-800 rounded-lg font-arial'>
            <Poster poster_path={result.poster_path} title={result.title} />
            <div className='flex flex-col m-4'>
                <MovieTitleAndYear title={result.title} year={getReleaseYear(result)} id={result.id}/>
                {/* <div className="flex items-center mt-2 mb-6">
                    <span className="text-base mr-1 text-gray-400">directed by</span>
                    <Directors directors={getDirectors(result)} /> 
                </div> */}
                {/* TODO: Eventually fetch Directors from TMDB and display too */}
                <p className='text-md font-georgia'>{result.overview}</p>
                </div>
        </div>
    )
};

export default MovieResult;