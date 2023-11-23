import { /*PropsWithChildren,*/ useEffect, useRef, useState } from "react";
import { Movie } from "../../interfaces/movie";
import { useTheme } from "../../theme/ThemeProvider";
import ErrorPage from "../../design/molecules/ErrorPage";
import LoadingMovies from "../../design/molecules/LoadingMovies";
import MoviesGrid from "../../design/molecules/MoviesGrid";
import styled from "@emotion/styled";
import { useFetchSearchMovies } from "../../services/useFetchSearchMovies";
import { useFetchMoviesQuery } from "../../services/useFetchMoviesQuery";

function Movies() {
  const { theme } = useTheme();
  const [input, setInput] = useState("");
  const latestInput = useRef(input);

  const {
    data: MoviesSearch,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
    refetch,
  } = useFetchSearchMovies(latestInput.current);

  const {
    data: moviesList,
    isError: isErrorList,
    isLoading: isLoadingList,
  } = useFetchMoviesQuery();

  useEffect(() => {
    latestInput.current = input.trim();
    if (latestInput.current !== "") refetch();
  }, [input]);

  const handleChange = (value: string) => {
    setInput(value);
  };

  if (isErrorSearch || isErrorList) return <ErrorPage />;
  /*
  const MoviesMain = ({ children }: PropsWithChildren) => (
    <Main className={`${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <Header>
        <Title>🎬🍿 Movie library</Title>
        <Search
          type="text"
          placeholder="🔎 Search for movie"
          onChange={(e) => handleChange(e.target.value)}
          value={input}
        />
      </Header>
      {children}
    </Main>
  );
  */
  if (isLoadingSearch || isLoadingList) {
    return (
      /*
      <MoviesMain>
        <LoadingMovies />
      </MoviesMain>
      */
      <Main className={`${theme === "dark" ? "dark-theme" : "light-theme"}`}>
        <Header>
          <Title>🎬🍿 Movie library</Title>
          <Search
            type="text"
            placeholder="🔎 Search for movie"
            onChange={(e) => handleChange(e.target.value)}
            value={input}
          />
        </Header>
        <LoadingMovies />
      </Main>
    );
  }

  return (
    /*
    <MoviesMain>
      {(input === "") ?
        <MoviesGrid movies={moviesList as Movie[]} /> :
        <MoviesGrid movies={MoviesSearch as Movie[]} />}
    </MoviesMain>
    */
    <Main className={`${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <Header>
        <Title>🎬🍿 Movie library</Title>
        <Search
          type="text"
          placeholder="🔎 Search for movie"
          onChange={(e) => handleChange(e.target.value)}
          value={input}
        />
      </Header>
      {input === "" ? (
        <MoviesGrid movies={moviesList as Movie[]} />
      ) : MoviesSearch?.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <MoviesGrid movies={MoviesSearch as Movie[]} />
      )}
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
  fontSize: "1.5rem",
  lineHeight: "2rem",
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
  minWidth: "100%",
  "@media (min-width: 600px)": {
    minWidth: "20rem !important",
  },
  border: "none",
  color: "#fff",
  "&::placeholder": {
    color: "rgb(174, 174, 174)",
  },
  margin: "0",
});
