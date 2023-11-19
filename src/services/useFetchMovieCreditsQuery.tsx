import fetchService from "./fetchService"
import { Credits } from "../interfaces/credits";
import { useQuery } from "react-query";
import { apiEndpoints } from "./servicesConfig";


const getMovieCredits = async (id: string) => {
  const credits = await fetchService(
    apiEndpoints.MOVIE_CREDITS(id),
    "Error on fetch movie credits by id"
  );
  return credits
};

export const useFetchMovieCredits = (movieId:string) => {
  return useQuery<Credits>(["movieCredits",movieId],async ()=>getMovieCredits(movieId))
}