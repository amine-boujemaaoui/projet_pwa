import { MovieCard } from "./MovieCard";
import { Grid } from "../ui/Grid";
import { Movie } from "../../interfaces/movie";

function MoviesGrid({ movies }: { movies: Movie[] }) {
  return (
    <Grid>
      {movies.map((movie, index) => (
        <MovieCard key={index} id={movie.id} poster_path={movie.poster_path} />
      ))}
    </Grid>
  );
}

export default MoviesGrid;
