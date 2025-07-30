import React from 'react';
import { SearchProps } from './SearchAndResultProps';
import MovieResult from './MovieResult';

const SearchPage = ({ searchResults } : SearchProps) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full mt-12 text-gray-300 '>
            {`pages: ${searchResults.total_pages}`}
            <MovieResult result={searchResults.results[0]} />
        </div>
    )
};

export default SearchPage;