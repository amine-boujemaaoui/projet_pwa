import styled from "@emotion/styled";
import { useTheme } from "../../theme/ThemeProvider";
import { Grid } from "../ui/Grid";
import MovieCardSkeleton from "./MovieCardSkeleton";

function ErrorPage() {
  const { theme } = useTheme();

  return (
    <Main className={`${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <Grid>
        {Array.from(Array(10).keys()).map((value) => (
          <MovieCardSkeleton key={value} />
        ))}
      </Grid>
    </Main>
  );
}

export default ErrorPage;

const Main = styled("main")({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "100%",
  padding: "1.5rem",
  minHeight: "100vh",
});
