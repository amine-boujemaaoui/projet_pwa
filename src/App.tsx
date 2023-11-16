import { useFetchMoviesQuery } from "./services/useFetchMoviesQuery";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  const {
    data: movies,
    isError: isErrorMovies,
    isLoading: isLoadingMovies,
  } = useFetchMoviesQuery();

  if (isErrorMovies) {
    return <p>ca bug les movies</p>;
  }
  if (isLoadingMovies) {
    return <p>ca charge les movies</p>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Movies movies={movies || []} />,
    },
    {
      path: "/movies",
      element: <Movies movies={movies || []} />,
    },
    {
      path: "/movie/:movieId",
      element: <MovieDetails />,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
