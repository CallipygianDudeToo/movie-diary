import React from 'react';
import { SearchWithInputProps } from './SearchAndResultProps';
import MovieResult from './MovieResult';
import Navigation from './Navigation';
import PersonResult from './PersonResult';

const SearchPage = ({ searchResults, input } : SearchWithInputProps) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full mt-12 text-gray-300 '>
            {`pages: ${searchResults.total_pages}`}
            <Navigation input={input} page={searchResults.page} totalPages={searchResults.total_pages} />
            <div className='flex flex-col gap-1 px-4'>
                {searchResults.results.map((result) => 
                    result.media_type === 'movie' ? <MovieResult key={result.id} result={result} /> : <PersonResult key={result.id} result={result} />
                )}
            </div>
            <Navigation input={input} page={searchResults.page} totalPages={searchResults.total_pages} />
        </div>
    )
};

export default SearchPage;