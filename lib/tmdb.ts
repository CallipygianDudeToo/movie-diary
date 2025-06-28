import { Movie } from "@/types";

export async function fetchMovieById(id: string) : Promise<Movie> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 10 }, 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch movie');
  }

  return await res.json();
}
