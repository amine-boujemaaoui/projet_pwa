import { useFetchMoviesQuery } from './services/useFetchMoviesQuery';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from './pages/Movies/Movies'
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App() {

  const { movies } = useFetchMoviesQuery()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Movies movies={movies} />
    },
    {
      path: '/movies',
      element: <Movies movies={movies} />
    },
    {
      path: '/movie/:movieId',
      element: <MovieDetails />
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App
