import { Credits, Movie, Result } from "@/types";

export const ACTING = 'Acting';

export const crewJobsList = [
    'Director',
    'Co-Director',
    'Special Guest Director',
    'Producer',
    'Executive Producer',
    'Writer',
    'Screenplay',
    'Dialogue',
    'Story',
    'Original Story',
    'Characters',
    'Co-Writer',
    'Original Film Writer',
    'Editor',
    'Additional Editing',
    'Director of Photography',
    'Cinematography',
    'Songs',
    'Music',
    'Original Music Composer',
    'Main Title Theme Composer',
    'Casting',
    'Casting Director',
    'Original Concept',
    'Presenter',
    // TO-DO: Add more jobs if needed like 'Production Design', 'Visual Effects', 'Costume Design', etc.
]

export const crewJobs = new Set<string>(crewJobsList);

export const getDirectors = (credits: Credits) => {
    return credits.crew
        .filter(member => member.job === 'Director')
};

export const getReleaseYear = (movie: Movie | Result) => {
    return Number(movie.release_date?.split('-')[0]);
};
