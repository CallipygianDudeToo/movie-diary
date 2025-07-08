import { Movie, Personality } from "@/types";

export async function fetchMovieById(id: string) : Promise<Movie> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
    },
    next: { revalidate: 10 }, 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch movie');
  }

  return await res.json();
}

export async function fetchPersonalityById(id: string) : Promise<Personality> {
  const res = await fetch(`https://api.themoviedb.org/3/person/${id}?append_to_response=combined_credits`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
    },
    next: { revalidate: 10 }, 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch personality');
  }

  return await res.json();
}
