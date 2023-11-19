import fetchService from "./fetchService"
import { Movie } from "../interfaces/movie"
import { useQuery } from "react-query";
import { apiEndpoints } from "./servicesConfig";


const getMovies = async () => {
  const movies = await fetchService(apiEndpoints.MOVIE_NOW_PLAYING);
  return movies.results;
};

export const useFetchMoviesQuery = () => {
  return useQuery<Movie[]>(["movies"], async () => getMovies());
};
