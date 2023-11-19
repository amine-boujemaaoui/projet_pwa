
import fetchService from "./fetchService"
import { MovieDetails } from "../interfaces/movieDetails"
import { useQuery } from "react-query";
import { apiEndpoints } from "./servicesConfig";


const getMovieDetails = async (id : string) => {
  const movie = await fetchService(apiEndpoints.MOVIE_DETAILS(id));
  return movie;
};

export const useFetchMovieDetailsQuery = (movieId: string) => {
  return useQuery<MovieDetails>(["movieDetails", movieId], async () =>
    getMovieDetails(movieId)
  );
};