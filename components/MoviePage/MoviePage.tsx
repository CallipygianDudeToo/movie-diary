import React from 'react';
import { MovieProps } from './MovieProps';
import Backdrop from './Backdrop';
import MovieDetails from './MovieDetails';

const MoviePage = ({ movie }: MovieProps) => {
    return (
        <>
            <Backdrop movie={movie} />
            <MovieDetails movie={movie} />
        </>
    )
};

export default MoviePage;