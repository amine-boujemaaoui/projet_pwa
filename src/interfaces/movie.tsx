import { Credit } from "./credit";

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    synopsis: string;
    genres: string[];
    release_date: string;
    credits: Credit[];
    poster: string;
    images: string[];
}