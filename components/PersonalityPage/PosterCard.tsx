import React from 'react';
import { useRouter } from 'next/navigation';
import { MovieData } from './helper';
import Poster from '../Poster';

const PosterCard = ({ movieData }: { movieData: MovieData }) => {
    const router = useRouter();
    return (
        <Poster
            poster_path={movieData.poster_path}
            title={movieData.title} addClassName='cursor-pointer'
            onClick={() => router.push(`/movie/${movieData.id}`)}
        />
    )
};

export default PosterCard;