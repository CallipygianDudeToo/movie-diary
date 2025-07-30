import { Metadata } from 'next';
import { fetchMovieById } from '@/tmdb';
import type { Movie } from '@/types';
import { ErrorPage, MoviePage } from '@/components';

interface MoviePageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata(props: MoviePageProps): Promise<Metadata> {
    try {
        const params = await props.params;
        const movie: Movie = await fetchMovieById(params.id);
        return {
            title: `${movie.title}`,
        };
    } catch (e) {
        return {
            title: `nope`,
        };
    }
}

export default async function Page(props: MoviePageProps) {
    try {
        const params = await props.params;
        const movie: Movie = await fetchMovieById(params.id);

        return (
            <MoviePage movie={movie} />
        );
    } catch (e) {
        console.error(e);
        return (
            <ErrorPage/>
        )
    }
}
