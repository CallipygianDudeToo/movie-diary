import React from 'react';
import { useRouter } from 'next/navigation';
import { MovieData } from './helper';

const PosterCard = ({ movieData }: { movieData: MovieData }) => {
    const router = useRouter();
    return (
        <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
            className="rounded-lg shadow-2xl h-60 cursor-pointer"
            onClick={() => router.push(`/movie/${movieData.id}`)}
        />
    )
};

export default PosterCard;