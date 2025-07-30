import { ErrorPage } from '@/components';
import SearchPage from '@/components/SearchPage/SearchPage';
import { fetchSearchResults } from '@/tmdb';
import { SearchResults } from '@/types';
import { Metadata } from 'next';
import React from 'react';

interface SearchPageProps {
    params: Promise<{ input: string, page: string }>;
};

export async function generateMetadata(props: SearchPageProps): Promise<Metadata> {
    try {
        const params = await props.params;
        
        return {
            title: `Search: ${params.input}`,
        };
    } catch (e) {
        return {
            title: `nope`,
        };
    };
};

export default async function Page(props: SearchPageProps) {
  try {
        const params = await props.params;
        const searchResults: SearchResults = await fetchSearchResults(params.input, params.page);
        
        return (
            <SearchPage searchResults={searchResults} input={params.input}/>
        );
    } catch (e) {
        console.error(e);
        return (
            <ErrorPage/>
        );
    };
};
