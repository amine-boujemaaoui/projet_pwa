import { Genre } from "./genre";

export interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  genres: Genre[];
  release_date: string;
  images: string[];
  backdrop_path: string;
}
