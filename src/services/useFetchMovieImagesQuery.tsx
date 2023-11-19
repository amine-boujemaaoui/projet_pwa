import fetchService from "./fetchService"
import { useQuery } from "react-query";
import { apiEndpoints } from "./servicesConfig";
import { MovieImage } from "../interfaces/movieImage";


const getMovieImages = async (id: string) => {
  const images = await fetchService(
    apiEndpoints.MOVIE_IMAGES(id),
    "Error on fetch movie images by id"
  );
  let imagesreturn: MovieImage[] = images.backdrops;
  return imagesreturn
};

export const useFetchMovieImages = (movieId:string) => {
  return useQuery<MovieImage[]>(["movieImages",movieId],async ()=>getMovieImages(movieId))
}