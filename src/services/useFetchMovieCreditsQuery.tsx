import fetchService from "./fetchService"
import { Credits } from "../interfaces/credits";
import { useQuery } from "react-query";
import { apiEndpoints } from "./servicesConfig";


const getMovieCredits = async (id: string) => {
  const credits = await fetchService(apiEndpoints.MOVIE_CREDITS(id));
  /*
  let creditsreturn: Credit[] = credits.cast
    .slice(0, 10)
    .concat(credits.crew.slice(0, 10));
    */
  return credits
};

export const useFetchMovieCredits = (movieId:string) => {
  return useQuery<Credits>(["movieCredits",movieId],async ()=>getMovieCredits(movieId))
}