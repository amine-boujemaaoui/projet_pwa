import fetchService from "./fetchService"
import { Movie } from "../interfaces/movie"
import { useQuery } from "react-query";


const getMovies = async () => {
  const movies = await fetchService("movie/now_playing");
  return movies.results;
};

export const useFetchMoviesQuery = () => {
  return useQuery<Movie[]>(["movies"], async () => getMovies());
};
