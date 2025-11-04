export interface IMovie {
  page: number;
  results: IResultMovieOverview[];
  total_pages: number;
  total_results: number;
}

export interface IResultMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IResultMovieOverview {
  id: number;
  poster_path: string;
  title: string;
  backdrop_path: string;
  overview?: string;
}

export interface Casts {
  id: number;
  cast: Cast[];
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface MovieDetailForClient {
  backdrop_path: string;
  title?: string;
  name?: string;
  status: string;
  poster_path: string;
  overview: string;
  genres: Genre[];
}
