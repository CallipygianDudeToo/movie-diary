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
				<div className="flex flex-row items-center">
					<span className="text-base mr-2">Genres:</span>
					{movie.genres.map(genre => <NameCard key={genre.id} name={genre.name} />)}
				</div>
			}
			{movie.spoken_languages &&
				<div className="flex flex-row items-center">
					<span className="text-base mr-2">{`Spoken Languages:`}</span>
					{movie.spoken_languages.map(lang => <NameCard key={lang.iso_639_1} name={lang.english_name} />)}
				</div>
			}
			{movie.original_language &&
				<div className="flex flex-row items-center">
					<span className="text-base mr-2">{`Original Language:`}</span>
					<NameCard name={movie.original_language.toUpperCase()} />
				</div>
			}
			{movie.production_countries &&
				<div className="flex flex-row items-center">
					<span className="text-base mr-2">{`Production Countries:`}</span>
					{movie.production_countries.map(country => <NameCard key={country.iso_3166_1} name={country.name} />)}
				</div>
			}	
		</div>
	)
};

export default DetailsGenres;