export interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
    synopsis: string;
    genres: string[];
    release_date: string;
    // credits: Credit[];
    images: string[];
    backdrop_path: string;
}