import { useState, useEffect } from "react"
import fetchService from "./fetchService"
import { MovieDetails } from "../interfaces/movieDetails"

export const useFetchMovieDetailsQuery = (id: string) => {
    const [movie, setMovie] = useState<MovieDetails | null>(null)
    useEffect(() => {
        async function getMovieDetails() {
            const movie = await fetchService(`movie/${id}`)
            setMovie(movie)
        }
        getMovieDetails()
    }, [])
    
    return movie 

}