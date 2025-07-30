import { Credits, Movie, Personality, SearchResults } from "@/types";

export async function fetchMovieById(id: string): Promise<Movie> {
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

export async function fetchPersonalityById(id: string): Promise<Personality> {
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

export async function fetchSearchResults(input: string, page: string): Promise<SearchResults> {
	const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${input}&page=${page}`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
		},
		next: { revalidate: 10 },
	});

	if (!res.ok) {
		console.log(res.status, res.statusText);
		throw new Error('Failed to fetch search results');
	}

	return await res.json();
}

export async function fetchDirectorsByMovieId(id: string): Promise<Credits> {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
		},
		next: { revalidate: 10 },
	});

	if (!res.ok) {
		console.log(res.status, res.statusText);
		throw new Error('Failed to fetch directors');
	}

	return await res.json();
}