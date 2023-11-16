
import fetchService from "./fetchService"
import { MovieDetails } from "../interfaces/movieDetailsInterface"
import { useQuery } from "react-query";


const getMovieDetails = async (id : string) => {
  const movie = await fetchService(`movie/${id}`);
  return movie;
};

export const useFetchMovieDetailsQuery = (movieId: string) => {
  return useQuery<MovieDetails>(["movieDetails", movieId], async () =>
    getMovieDetails(movieId)
  );
};