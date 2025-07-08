type Personality = {
    id: number;
    name: string;
    known_for_department: string;
    profile_path: string | null;
    biography: string;
    combined_credits: {
        cast: Array<{
            id: number;
            title: string;
            character: string;
            poster_path: string | null;
            popularity: number;
        }>;
        crew: Array<{
            id: number;
            title: string;
            department: string;
            job: string;
            poster_path: string | null;
            popularity: number;
        }>;
    }
};

export type { Personality };