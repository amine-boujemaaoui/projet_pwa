import { useEffect, useRef, useState } from 'react';
import { Movie } from '../../interfaces/movie';
import { useFetchMoviesQuery } from '../../services/useFetchMoviesQuery';
import { useTheme } from '../../theme/ThemeProvider';
import ErrorPage from '../Error/ErrorPage';
import LoadingPage from '../Loading/LoadingPage';
import MoviesGrid from './MoviesGrid';
import styled from "@emotion/styled";
import { useFetchSearchMovies } from '../../services/useFetchSearchMovies';

function Movies() {
  const { theme } = useTheme();
  const [input, setInput] = useState("");
  const latestInput = useRef(input);
  const { data: movies, isLoading, isError, refetch } = useFetchSearchMovies(latestInput.current);

  useEffect(() => {
    latestInput.current = input.trim();
    if (latestInput.current !== "") {
      refetch();
    }
  }, [input, refetch]);

  const handleChange = (value: string) => {
    setInput(value);
  };

  if (isError) return <ErrorPage />;
  if (isLoading) return (
    <Main className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Header>
        <Title>🎬🍿 Movie library</Title>
        <Search
          type="text"
          placeholder='🔎 Search for movie'
          onChange={(e) => handleChange(e.target.value)}
          value={input}
        />
      </Header>
      <LoadingPage />
    </Main>
  
    );

  return (
    <Main className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Header>
        <Title>🎬🍿 Movie library</Title>
        <Search
          type="text"
          placeholder='🔎 Search for movie'
          onChange={(e) => handleChange(e.target.value)}
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


