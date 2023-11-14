import MoviesGrid from './MoviesGrid';
import styled from "@emotion/styled";

interface MoviePoster {
    id: number;
    poster_path: string;
}

interface MoviesGridProps {
    movies: MoviePoster[];
}

function Movies({ movies }: MoviesGridProps) {

    return (
        <Main>
            <Header>
                <p>🎬🍿 Movie library</p>
                <input type="test" placeholder='🔎 Search for movie'/>
            </Header>
            <MoviesGrid movies={movies} ></MoviesGrid>
        </Main >
    )   
};

const Header = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    gap: ".5rem",
    justifyContent: "space-between",
    padding: "32px"

})

const Main = styled("div")({
    display: "flex",
    flexDirection: "column",
    minWidth: "100%",
    minHeight: "100vh",
    gap: "1.5rem",
    padding: "32px"
})

export default Movies;