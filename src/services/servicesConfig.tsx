const serviceConfig = {
    apiUrl: 'https://api.themoviedb.org/3',
    apiToken: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTY3OTRlMDU1ZjRiMDA0OWVkYjAwNzYwNmU3YTJiMCIsInN1YiI6IjY1NGE1MDM3MWFjMjkyN2IyZjI3MjgxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zh5RQtn5g1oHuAfOyZmiNqBgPdAp5MWxY3jYPoJdjqM',
    apiImagesUrl: `https://image.tmdb.org/t/p/original`
};

export default serviceConfig;

type ApiEndpoints = {
    MOVIE_CREDITS: (id: string) => string;
    MOVIE_DETAILS: (id: string) => string;
    MOVIE_IMAGES:  (id: string) => string;
    MOVIE_SEARCH:  (query: string) => string;
    MOVIE_NOW_PLAYING: string;
};

export const apiEndpoints: ApiEndpoints = {
    MOVIE_CREDITS: (id) => `movie/${id}/credits`,
    MOVIE_DETAILS: (id) => `movie/${id}`,
    MOVIE_IMAGES:  (id) => `movie/${id}/images`,
    MOVIE_SEARCH:  (query) => `search/movie?query=${query}`,
    MOVIE_NOW_PLAYING: "movie/now_playing",
};