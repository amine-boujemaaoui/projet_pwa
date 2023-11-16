import { Movie } from '../../interfaces/movie';
import { useFetchMoviesQuery } from '../../services/useFetchMoviesQuery';
import { useTheme } from '../../theme/ThemeProvider';
import ErrorPage from '../Error/ErrorPage';
import LoadingPage from '../Loading/LoadingPage';
import MoviesGrid from './MoviesGrid';
import styled from "@emotion/styled";

function Movies() {
  
  const { theme } = useTheme();

  const {
    data: movies,
    isError: isErrorMovies,
    isLoading: isLoadingMovies,
  } = useFetchMoviesQuery();

  if (isErrorMovies) return <ErrorPage />
  if (isLoadingMovies) return <LoadingPage />

  return (
    <Main className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Header>
        <Title>🎬🍿 Movie library</Title>
        <Search 
          type="text" 
          placeholder='🔎 Search for movie' 
        />
      </Header>
      <MoviesGrid movies={movies as Movie[]} />
    </Main>
  );
}

export default Movies;

const Main = styled("main")({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  minWidth: "100%",
  minHeight: "100vh",
  padding: "3rem",
});

const Header = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  "@media (min-width: 600px)": {
    justifyContent: "space-between",
  },
});

const Title = styled("p")({
  "@media(min-width: 640px)": {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
  },
  margin: "0",
});

const Search = styled("input")({
  paddingLeft: "1rem",
  borderRadius: "50px",
  backgroundColor: "rgb(55,65,81)",
  fontSize: "100%",
  "@media (min-width: 600px)": {
    minWidth: "20rem",
  },
  border: "none",
  color: "#fff",
  "&::placeholder": {
    color: "white",
  },
  margin: "0",
});


