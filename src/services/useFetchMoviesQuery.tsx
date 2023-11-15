import { useState, useEffect } from "react"
import fetchService from "./fetchService"

export const useFetchMoviesQuery = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function getMovies() {
            const movies = await fetchService("movie/now_playing")
            setMovies(movies.results)
        }
        getMovies()
    }, [])

    return { movies }

}