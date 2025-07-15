import { Personality } from "@/types";

interface PopularityData {
    count: number;
    popularitySum: number;
};

export interface MovieData {
    id: number;
    title: string;
    popularityDetails: PopularityData;
    poster_path: string | null;
    job: string | null;
};

const effectivePopularity = (data: PopularityData | undefined): number => {
    if (!data || data.count === 0) return 0;
    return Number((data.popularitySum * data.count).toFixed(2));
};

export const getKnownForJobs = (personality: Personality) => {
    const jobs = new Map<string, PopularityData>();
    if (personality.combined_credits.cast.length > 0) {
        personality.combined_credits.cast.forEach(role => {
            if(!role.title) return; 
            
            let newValue = jobs.get('Acting') || { count: 0, popularitySum: 0 };
            newValue.count += 1;
            newValue.popularitySum += role.popularity;
            jobs.set('Acting', newValue);
        });
    }
    if (personality.combined_credits.crew.length > 0) { 
        personality.combined_credits.crew.forEach(credit => {
            if (credit.title && credit.job) {
                let newValue = jobs.get(credit.job) || { count: 0, popularitySum: 0 };
                newValue.count += 1;
                newValue.popularitySum += credit.popularity;
                jobs.set(credit.job, newValue);
            }
        });
        return Array.from(jobs.keys()).sort(
            (a, b) => effectivePopularity(jobs.get(b)) - effectivePopularity(jobs.get(a))
        );
    }
};

export const getSetOfMovies = (personality: Personality) => {
    const moviePopularities = new Map<number, MovieData>();
    
    if (personality.combined_credits.cast.length > 0) {
        personality.combined_credits.cast.forEach(role => {
            if (!role.title) return;

            let newValue = moviePopularities.get(role.id) || {id: role.id, title: role.title, poster_path: role.poster_path, popularityDetails:{ count: 0, popularitySum: 0 }, job: 'Acting'};
            newValue.popularityDetails.count += 1;
            newValue.popularityDetails.popularitySum += role.popularity;
            moviePopularities.set(role.id, newValue);
        });
    }
    if (personality.combined_credits.crew.length > 0) {
        personality.combined_credits.crew.forEach(credit => {
            if (credit.title && credit.job) {
                let newValue = moviePopularities.get(credit.id) || {id: credit.id, title: credit.title, poster_path: credit.poster_path, popularityDetails:{ count: 0, popularitySum: 0 }, job: credit.job};
                newValue.popularityDetails.count += 1;
                newValue.popularityDetails.popularitySum += credit.popularity;
                moviePopularities.set(credit.id, newValue);
            }
        });
        return Array.from(moviePopularities.values()).sort(
            (a, b) => effectivePopularity(moviePopularities.get(b.id)?.popularityDetails) - effectivePopularity(moviePopularities.get(a.id)?.popularityDetails)
        );
    }
};