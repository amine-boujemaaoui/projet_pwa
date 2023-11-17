import fetchService from "./fetchService";
import { Movie } from "../interfaces/movie";
import { useQuery } from "react-query";

const getSearchMovies = async (query: string) => {
  const movies = await fetchService(`search/movie?query=${query}`);
  return movies.results;
};

export const useFetchSearchMovies = (query: string) => {
  return useQuery<Movie[]>(['moviesSearch', query], async () => getSearchMovies(query));
};
