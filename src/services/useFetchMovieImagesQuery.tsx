import fetchService from "./fetchService"
import { useQuery } from "react-query";
import { apiEndpoints } from "./servicesConfig";


const getMovieImages = async (id: string) => {
  const images = await fetchService(
    apiEndpoints.MOVIE_IMAGES(id),
    "Error on fetch movie images by id"
  );
  let imagesreturn: { file_path: string }[] = images.backdrops;
  return imagesreturn
};

export const useFetchMovieImages = (movieId:string) => {
  return useQuery<{file_path: string}[]>(["movieImages",movieId],async ()=>getMovieImages(movieId))
}