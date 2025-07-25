import React from 'react';
import { SearchProps } from './SearchProps';

const SearchPage = ({ searchResults } : SearchProps) => {
    return (
        <div>{`pages: ${searchResults.total_pages}`}</div>
    )
};

export default SearchPage;