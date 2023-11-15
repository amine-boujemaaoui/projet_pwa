import { Movie } from '../../interfaces/movie';
import MoviesGrid from './MoviesGrid';
import styled from "@emotion/styled";

interface MoviesGridProps {
    movies: Movie[];
}

function Movies({ movies }: MoviesGridProps) {

    return (
        <Main>
            <Header>
                <Title>🎬🍿 Movie library</Title>
                <Search type="test" placeholder='🔎 Search for movie' />
            </Header>
            <MoviesGrid movies={movies} ></MoviesGrid>
        </Main >
    )
};

const Main = styled("main")({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    minWidth: "100%",
    minHeight: "100vh",
    backgroundColor: "#1f2937",
    padding: "3rem",
})

const Header = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    "@media (min-width: 600px)": {
        justifyContent: "space-between"
    },
})


const Title = styled("p")({
    "@media(min-width: 640px)": {
        fontSize: "2.25rem",
        lineHeight: "2.5rem",
    },
    margin: "0",
})

const Search = styled("input")({
    paddingLeft: "1rem",
    borderRadius: "50px",
    backgroundColor: "rgb(55,65,81)",
    fontSize: "100%",
    "@media (min-width: 600px)": {
        minWidth: "20rem"
    },
    border: "none",
    color: "#fff",
    "&::placeholder": {
        color: "white"
    },
    margin: "0",
})

export default Movies;