import React from 'react';
import { MovieProps } from './MovieProps';

const Backdrop = ({ movie }: MovieProps) => {
    if (!movie.backdrop_path) {
        return (
            <div className="w-full h-[10rem]">
            </div>
        );
    }
    
    return (
        <div className="relative w-full h-[34rem] flex items-center justify-center mask-fade-bottom">
            <div className='mask-fade-top'>
                <div className='mask-fade-right'>
                    <img
                        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                        alt={movie.title}
                        className="h-[42rem] w-auto self-center object-contain z-0 mask-fade-left"
                    />
                </div>
            </div>
        </div>
    )
};

export default Backdrop;