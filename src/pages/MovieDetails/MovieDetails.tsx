import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { useFetchMovieDetailsQuery } from "../../services/useFetchMovieDetailsQuery";
import serviceConfig from "../../services/servicesConfig";
import { Card } from "../../design/atoms/Card";
import { PosterImage } from "../../design/atoms/PosterImage";
import { useFetchMovieCredits } from "../../services/useFetchMovieCreditsQuery";
import { CreditCard } from "../../design/molecules/CreditCard";
import { Genre } from "../../interfaces/genre";
import { useFetchMovieImages } from "../../services/useFetchMovieImagesQuery";
import ErrorPage from "../Error/ErrorPage";
import LoadingPage from "../Loading/LoadingPage";

function MovieDetails() {

  const { movieId } = useParams<{ movieId: string }>();

  const {
    data: images,
    isError: isErrorImages,
    isLoading: isLoadingImages,
  } = useFetchMovieImages(movieId as unknown as string);

  const {
    data: movie,
    isError: isErrorDetails,
    isLoading: isLoadingDetails,
  } = useFetchMovieDetailsQuery(movieId as unknown as string);

  const {
    data: credits,
    isError: isErrorCredits,
    isLoading: isLoadingCredits,
  } = useFetchMovieCredits(movieId as unknown as string);

  if (isErrorCredits || isErrorDetails || isErrorImages) return <ErrorPage />
  if (isLoadingCredits || isLoadingDetails || isLoadingImages) return <LoadingPage />

  const formattedDateString =
    movie && movie.release_date ?
      new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", year: "numeric" }).format(new Date(movie.release_date))
      : "0000-00-00";

  return (
    <Main path={movie?.backdrop_path || ""}>
      <Container>
        <Link to={`/`} style={backLinkStyle}>
          <BackButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back
          </BackButton>
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
            <Genre>
              {movie?.genres.map((item: Genre) => item.name).join(", ")}
            </Genre>
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
            {images?.map((image, index) => {
              return (
                <Card key={index} customStyle={{ width: "1200px" }}>
                  <PosterImage src={serviceConfig.apiImagesUrl + `/` + image.file_path} />
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

const BackButton = styled("div")({
  "&:hover": {
    transform: "translateX(-.5rem)"
  },
  transitionDuration: ".15s",
  display: "flex",
  alignSelf: "flex-start",
  alignItems: "center",
  gap: ".25rem"

});

const backLinkStyle = {
  textDecoration: "none",
  color: "white"
};

const Main = styled("main")(({ path }: { path: string }) => ({
  backgroundImage: `url("${serviceConfig.apiImagesUrl}${path}")`,
  display: "flex",
  backgroundSize: "cover",
  minWidth: "100%",
  minHeight: "100vh",
  flexDirection: "column",
  color: "white",
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
});

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
