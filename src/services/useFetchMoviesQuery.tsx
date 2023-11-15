import { useState, useEffect } from "react"
import fetchService from "./fetchService"
import { Movie } from "../interfaces/movie"

export const useFetchMoviesQuery = () => {
    const [movies, setMovies] = useState<Movie[] | null>([])
    useEffect(() => {
        async function getMovies() {
            const movies = await fetchService("movie/now_playing")
            setMovies(movies.results)
        }
        getMovies()
    }, [])

    return { movies }

}