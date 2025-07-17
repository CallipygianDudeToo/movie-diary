import React from 'react';
import { MovieProps } from './MovieProps';
import Backdrop from './Backdrop';
import MovieDetails from './MovieDetails';
import MovieDetailsTab from './MovieDetailsTab';

const MoviePage = ({ movie }: MovieProps) => {
    return (
        <>
            <Backdrop movie={movie} />
            <MovieDetails movie={movie} />
            <MovieDetailsTab movie={movie} />
        </>
    )
};

export default MoviePage;