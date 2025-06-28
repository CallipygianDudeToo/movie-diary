type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  original_language: string;
  original_title: string;
  genres: Array<{
    id: number;
    name: string;
  }>
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
};

export type { Movie };