import React from 'react';
import { MovieProps } from './MovieProps';
import { getFormattedAverage, getFormattedRuntime } from './helper';
import NameCard from '../NameCard';

const DetailsGenres = ({ movie }: MovieProps) => {
	return (
		<div className="flex flex-col items-start mb-2 font-georgia">
			<span className="text-base mr-2"> {`Runtime: ${getFormattedRuntime(movie.runtime)}`}</span>
			<span className="text-base mr-2">{`Average Voter Rating: ⭐${getFormattedAverage(movie.vote_average)}`}</span>
			{movie.genres[0] &&
				<div className="flex flex-row">
					<span className="text-base mr-2">Genres:</span>
					{movie.genres.map(genre => <NameCard key={genre.id} name={genre.name} />)}
				</div>
			}
		</div>
	)
};

export default DetailsGenres;