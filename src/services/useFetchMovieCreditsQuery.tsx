import { useState, useEffect } from "react"
import fetchService from "./fetchService"
import { Credit } from "../interfaces/credit";


export const useFetchMovieCreditsQuery = (id: string) => {
  const [credits, setCredits] = useState<Credit[] | null>(null);
  useEffect(() => {
    async function getMovieCredits() {
        const credits = await fetchService(`/movie/${id}/credits`);
        let creditsreturn: Credit[] = credits.cast
          .slice(0, 10)
          .concat(credits.crew.slice(0, 10));
      setCredits(creditsreturn);
    }
    getMovieCredits();
  }, []);

  return credits;
};