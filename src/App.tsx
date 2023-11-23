import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import { ThemeProvider } from "./theme/ThemeProvider";
import ErrorPage from "./design/molecules/ErrorPage";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Movies />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetails />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
    { basename: "/projet_pwa" }
  );

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
