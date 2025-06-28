import { Metadata } from 'next';
import { fetchMovieById } from '@/lib';
import type { Movie } from '@/types';

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const movie: Movie = await fetchMovieById(params.id);
  return {
    title: `${movie.title}`,
  };
}

export default async function MoviePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const movie: Movie = await fetchMovieById(params.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="text-l font-bold mb-2">{movie.genres[0].name}</p>
      <p className="text-sm text-gray-500 mb-4">{movie.release_date} • ⭐ {movie.vote_average.toFixed(2)}</p>
      <div className="flex gap-4">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg"
          />
        )}
        <p className="text-lg text-gray-800">{movie.overview}</p>
      </div>
    </div>
  );
}
