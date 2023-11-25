import fetchService from "./fetchService";
import { useQuery } from "react-query";
import { apiEndpoints } from "./servicesConfig";
import { Video } from "../interfaces/videos";

const getMovieVideos = async (id: string) => {
  const moviesVideos = await fetchService(
    apiEndpoints.MOVIE_VIDEOS(id),
    "Error on fetch movie videos"
  );
  return moviesVideos.results;
};

export const useFetchMovieVideos = (id: string) => {
  return useQuery<Video[]>(["movieVideos", id], async () => getMovieVideos(id));
};
