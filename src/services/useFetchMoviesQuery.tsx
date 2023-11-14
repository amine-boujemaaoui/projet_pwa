import { useState, useEffect } from "react"
import fetchMovies from "./fetchMovies"

export const useFetchMoviesQuery = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function getMovies() {
            const movies = await fetchMovies()
            setMovies(movies.results)
        }
        getMovies()
    }, [])

    return { movies }

}