
import fetchService from "./fetchService"
import { Credit } from "../interfaces/credit";
import { useQuery } from "react-query";



export const useFetchMovieCreditsQuery = (id: string) => {
  const response = useQuery("credits", getMovieCredits);


  async function getMovieCredits(id : string) {
    const credits = await fetchService(`/movie/${id}/credits`);
    let creditsreturn: Credit[] = credits.cast
      .slice(0, 10)
      .concat(credits.crew.slice(0, 10));
    return creditsreturn
  }
};