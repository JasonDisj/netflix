export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title: string;
  vote_average: number;
  vote_count: number;
  media_type?: string;
  first_air_date: string;
  origin_country: string[];
  original_name: string;
}

export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}
