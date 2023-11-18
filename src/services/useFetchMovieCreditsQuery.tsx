import fetchService from "./fetchService"
import { Credit } from "../interfaces/credit";
import { useQuery } from "react-query";


const getMovieCredits = async (id: string) => {
  const credits = await fetchService(`/movie/${id}/credits`);
  let creditsreturn: Credit[] = credits.cast
    .slice(0, 10)
    .concat(credits.crew.slice(0, 10));
  return creditsreturn
};

export const useFetchMovieCredits = (movieId:string) => {
  return useQuery<Credit[]>(["movieCredits",movieId],async ()=>getMovieCredits(movieId))
}