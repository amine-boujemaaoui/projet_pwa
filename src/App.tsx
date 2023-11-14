import { useFetchMoviesQuery } from './services/useFetchMoviesQuery';
import { Routes, Route } from "react-router-dom";

import { Layout } from './design/ui/Layout'
import Movies from './pages/Movies/Movies'
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App() {

  const {movies} = useFetchMoviesQuery()

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movies movies={movies} />} />
          <Route path="movie/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
      <Movies movies={movies} />
    </>
  )
}

export default App
