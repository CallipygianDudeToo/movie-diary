import React from 'react';
import { MovieProps } from './MovieProps';
import NameCard from './NameCard';
import { ACTING } from '../commonHelper';

const Cast = ({ movie }: MovieProps) => {
    return (
        <div className="flex flex-wrap gap-2 w-full">
            {movie.credits.cast.map((actor) => (
                <NameCard key={actor.id} name={actor.name} id={actor.id} character={actor.character} job={ACTING} />
            ))}
        </div>
    )
};

export default Cast;