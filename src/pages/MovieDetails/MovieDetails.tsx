import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { useFetchMovieDetailsQuery } from "../../services/useFetchMovieDetailsQuery";
import { MovieDetails } from "../../interfaces/movieDetails";
import serviceConfig from "../../services/servicesConfig";
import { Card } from "../../design/atoms/Card";
import { PosterImage } from "../../design/atoms/PosterImage";
import { useFetchMovieCreditsQuery } from "../../services/useFetchMovieCreditsQuery";
import { Credit } from "../../interfaces/credit";
import { CreditCard } from "../../design/molecules/CreditCard";
import { useTheme } from "../../theme/ThemeProvider";

function MovieDetails() {
  const { theme } = useTheme();

  const { movieId } = useParams<{ movieId: string }>();

  const movie: MovieDetails | null = useFetchMovieDetailsQuery(movieId || "");
  const credits: Credit[] | null = useFetchMovieCreditsQuery(movieId || "");

  console.log(credits);

  let formattedDateString = "0000-00-00";

  if (movie && movie.release_date) {
    const date = new Date(movie.release_date);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const year = date.getFullYear();

    formattedDateString = `${day} ${month}. ${year}`;
  }

  return (
    <Main path={movie?.backdrop_path || ""}>
      <Container>
        <Link to={`/`}>
          <BackButton>Back OUI</BackButton>
        </Link>
        <Header>
          <Card
            customStyle={{
              width: "300px",
              height: "auto",
            }}
          >
            <PosterImage
              src={serviceConfig.apiImagesUrl + `/` + movie?.poster_path}
              alt={`${movie?.id}` || ""}
            />
          </Card>
          <TextContainer>
            <MovieTitle>{movie?.original_title}</MovieTitle>
            <Overview>{movie?.overview}</Overview>
            <Genre>{movie?.genres.map((item) => item.name).join(", ")}</Genre>
            <ReleaseDate>{formattedDateString}</ReleaseDate>
          </TextContainer>
        </Header>
        <CreditsContainer>
          <CreditsTitle>Credits</CreditsTitle>
          <CreditsList>
            {credits?.map((credit, index) => {
              return (
                <CreditCard
                  key={index}
                  name={credit.name}
                  character={credit.character}
                  profile_path={credit.profile_path}
                  id={credit.id}
                />
              );
            })}
          </CreditsList>
        </CreditsContainer>
        <ImagesContainer>
          <ImagesTitle>Images</ImagesTitle>
          <ImagesList>
            {credits?.map((credit, index) => {
              return (
                <Card key={index} customStyle={{}}>
                  <PosterImage src={credit.profile_path} />
                </Card>
              );
            })}
          </ImagesList>
        </ImagesContainer>
      </Container>
    </Main>
  );
}

export default MovieDetails;

const BackButton = styled("p")({
  transform: "translate(-0.5rem, 0)",
});

const Main = styled("main")(({ path }: { path: string }) => ({
  backgroundImage: `url("${serviceConfig.apiImagesUrl}${path}")`,
  display: "flex",
  backgroundSize: "cover",
  minWidth: "100%",
  minHeight: "100vh",
  flexDirection: "column",
  color: "white"
}));

const Header = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  alignItems: "flex-end",
  "@media (min-width: 600px)": {
    flexDirection: "row",
    justifyContent: "center",
  },
});

const Container = styled("div")({
  padding: "3rem",
  backdropFilter: "blur(35px)",
  overflow: "hidden",
  gap: "1rem",
  display: "flex",
  flexDirection: "column",
  flex: "1",
});

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "auto",
  flex: "1",
});

const MovieTitle = styled("p")({
  width: "auto",
  margin: "0",
  fontSize: "2.25rem",
  lineHeight: "2.5rem",
});

const Overview = styled("p")({
  width: "auto",
  margin: "0",
});

const Genre = styled("p")({
  width: "auto",
  margin: "0",
  fontStyle: "italic",
  marginTop: "8px",
});

const ReleaseDate = styled("p")({
  width: "auto",
  margin: "0",
  fontStyle: "italic",
});

const CreditsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "auto",
  flex: "1",
  gap: "1rem",
});

const CreditsList = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "auto",
  flex: "1",
  overflowX: "scroll",
  gap: "1.5rem",
});

const CreditsTitle = styled("div")({
  fontSize: "1.875rem",
  lineHeight: "2.25rem",
})

const ImagesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "auto",
  flex: "1",
  gap: "1rem",
});

const ImagesList = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "auto",
  flex: "1",
  overflowX: "scroll",
  gap: "1.5rem",
});

const ImagesTitle = styled("div")({
  fontSize: "1.875rem",
  lineHeight: "2.25rem",
});