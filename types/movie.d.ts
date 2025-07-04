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
  credits: {
    cast: Array<{
      id: number;
      name: string;
      character: string;
      profile_path: string | null;
      order: number;
    }>;
    crew: Array<{
      id: number;
      name: string;
      department: string;
      job: string;
      profile_path: string | null;
    }>;
  }
  backdrop_path: string | null;
  tagline: string;
};

export type { Movie };