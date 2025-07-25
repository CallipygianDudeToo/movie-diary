type SearchResults = {
    page: number;
    total_pages: number;
    total_results: number;
    results: Array<{
        id: number;
        media_type: 'movie' | 'tv' | 'person';

        title?: string;
        poster_path?: string;
        overview?: string;
        release_date?: string;
        
        name?: string;
        profile_path?: string;
        known_for_department?: string;
        known_for?: Array<{
            id: number;
            title: string;
        }>;
    }>;
};

export type { SearchResults };