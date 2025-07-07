import { Movie } from "@/types";

export const getDirectors = (movie: Movie) => {
    return movie.credits.crew
        .filter(member => member.job === 'Director')
};

export const getReleaseYear = (movie: Movie) => {
    return movie.release_date.split('-')[0];
};

export const getFormattedRuntime = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return (hours > 0) ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const getFormattedAverage = (rating: number) => {
    if( rating === 0) {
        return "No ratings available";
    }    
    return rating.toFixed(2);
};