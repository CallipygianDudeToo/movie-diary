import { Movie, Result } from "@/types";
import { crewJobs } from "../commonHelper";

export const getDirectors = (movie: Movie) => {
    return movie.credits.crew
        .filter(member => member.job === 'Director')
};

export const getReleaseYear = (movie: Movie | Result) => {
    return Number(movie.release_date?.split('-')[0]);
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

export const getCrewMap = (movie: Movie) => {
    const crewMap = new Map<string, typeof movie.credits.crew>();
    movie.credits.crew
        .forEach(member => {
            if (crewJobs.has(member.job))
                crewMap.get(member.job)?.push(member) || crewMap.set(member.job, [member]);
        })

    return crewMap;
};