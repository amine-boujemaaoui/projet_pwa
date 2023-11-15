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
                <Title>🎬🍿 Movie library</Title>
                <Search type="test" placeholder='🔎 Search for movie' />
            </Header>
            <MoviesGrid movies={movies} ></MoviesGrid>
        </Main >
    )
};

const Header = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    "@media (min-width: 600px)": {
        justifyContent: "space-between"
    },

})

const Main = styled("div")({
    display: "flex",
    padding: "1rem",
    flexDirection: "column",
    gap: "1.5rem",
    minWidth: "100%",
    minHeight: "100vh",
    backgroundColor: "#1f2937"

})

const Title = styled("p")({
    fontSize: "2rem",
    lineHeight: "2rem",
})

const Search = styled("input")({
    paddingLeft: "1rem",
    borderRadius: "50px",
    backgroundColor: "rgb(55,65,81)",
    fontSize: "100%",
    "@media (min-width: 600px)": {
        minWidth: "20rem"
    },
})

export default Movies;