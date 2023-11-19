import fetchService from "./fetchService";
import { Movie } from "../interfaces/movie";
import { useQuery } from "react-query";
import { apiEndpoints } from "./servicesConfig";

const getSearchMovies = async (query: string) => {
  const movies = await fetchService(
    apiEndpoints.MOVIE_SEARCH(query),
    "Error on fetch movie search by query"
  );
  return movies.results;
};

export const useFetchSearchMovies = (query: string) => {
  return useQuery<Movie[]>(['moviesSearch', query], async () => getSearchMovies(query));
};
