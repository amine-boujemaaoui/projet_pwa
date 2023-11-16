import { useFetchMoviesQuery } from './services/useFetchMoviesQuery';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from './pages/Movies/Movies'
import MovieDetails from './pages/MovieDetails/MovieDetails';
import { ThemeProvider } from './theme/ThemeProvider';

function App() { 

  const { movies } = useFetchMoviesQuery()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Movies movies={movies || []} />
    },
    {
      path: '/movies',
      element: <Movies movies={movies || []} />
    },
    {
      path: '/movie/:movieId',
      element: <MovieDetails />
    },
  ])

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
