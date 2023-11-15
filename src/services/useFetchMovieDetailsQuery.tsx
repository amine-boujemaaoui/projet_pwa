import { useState, useEffect } from "react"
import fetchService from "./fetchService"
import { Movie } from "../interfaces/movie"

export const useFetchMovieDetailsQuery = (id: string) => {
    const [movie, setMovie] = useState<Movie | null>(null)
    useEffect(() => {
        async function getMovieDetails() {
            const movie = await fetchService(`movie/${id}`)
            setMovie(movie)
        }
        getMovieDetails()
    }, [])
    
    return movie 

}