import fetchService from "./fetchService"
import { useQuery } from "react-query";


const getMovieImages = async (id: string) => {
  const images = await fetchService(`/movie/${id}/images`);
  let imagesreturn: String[] = images.backdrops;
  return imagesreturn
};

export const useFetchMovieImages = (movieId:string) => {
  return useQuery<String[]>(["movieImages",movieId],async ()=>getMovieImages(movieId))
}