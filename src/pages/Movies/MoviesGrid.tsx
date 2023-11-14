import { MovieCard } from '../../design/molecules/MovieCard';
import { Grid } from '../../design/ui/Grid';
import servicesConfig from "../../services/servicesConfig";

interface MoviePoster {
    id: number;
    poster_path: string;
}

interface MoviesGridProps {
    movies: MoviePoster[];
}

function MoviesGrid({ movies }: MoviesGridProps) {

    return (
        <Grid>
            {movies.map((movie, index) => (
                <MovieCard
                    key={index}
                    id={movie.id}
                    poster_path={movie.poster_path}
                />
            ))}
        </Grid>
    )   
}

export default MoviesGrid;