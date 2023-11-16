import fetchService from "./fetchService"
import { useQuery } from "react-query";


const getMovieImages = async (id: string) => {
  const images = await fetchService(`/movie/${id}/images`);
  let imagesreturn: { file_path: string }[] = images.backdrops;
  return imagesreturn
};

export const useFetchMovieImages = (movieId:string) => {
  return useQuery<{file_path: string}[]>(["movieImages",movieId],async ()=>getMovieImages(movieId))
}