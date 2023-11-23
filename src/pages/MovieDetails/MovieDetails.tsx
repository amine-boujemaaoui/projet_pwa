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
import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";
import { LeftArrow } from "../../design/atoms/leftArrow";
import noImage from "/noImage.jpg?url";
import { Credit } from "../../interfaces/credits";
import { MovieImage } from "../../interfaces/movieImage";

function MovieDetails() {
  const { movieId } = useParams<{ movieId: string }>();

  const {
    data: images,
    isError: isErrorImages,
    isLoading: isLoadingImages,
  } = useFetchMovieImages(movieId!);

  const {
    data: movie,
    isError: isErrorDetails,
    isLoading: isLoadingDetails,
  } = useFetchMovieDetailsQuery(movieId!);

  const {
    data: credits,
    isError: isErrorCredits,
    isLoading: isLoadingCredits,
  } = useFetchMovieCredits(movieId!);

  if (isErrorCredits || isErrorDetails || isErrorImages) return <ErrorPage />;
  if (isLoadingCredits || isLoadingDetails || isLoadingImages)
    return <LoadingPage />;

  const creditsCast = credits!.cast.slice(0, 10);
  const creditsCrew = credits!.crew.filter(
    (credit) =>
      credit.job === "Director" || credit.job === "Original Music Composer"
  );

  const creditsFiltered: Credit[] = [
    ...(creditsCast || []),
    ...(creditsCrew || []),
  ];
  const imagesFiltered: MovieImage[] = images!.filter(
    (image) => image.iso_639_1 === null
  );

  const formattedDateString =
    movie && movie.release_date
      ? new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(new Date(movie.release_date))
      : "0000-00-00";

  return (
    <Main
      path={movie?.backdrop_path || ""}
      className={`${movie?.backdrop_path === null ? "dark-theme" : ""}`}
    >
      <Container>
        <Link to={`/`} style={backLinkStyle} className={"hover"}>
          <LeftArrow /> Back
        </Link>
        <Header>
          <MoviePoster poster_path={movie!.poster_path} id={movie!.id} />
          <TextContainer>
            <MovieTitle>{movie!.title}</MovieTitle>
            <Overview>{movie!.overview}</Overview>
            <Genre>
              <Genres genres={movie!.genres} />
            </Genre>
            <ReleaseDate>{formattedDateString}</ReleaseDate>
          </TextContainer>
        </Header>
        <Credits creditsMap={creditsFiltered} />
        <Images imagesFiltered={imagesFiltered} />
      </Container>
    </Main>
  );
}

export default MovieDetails;

const MoviePoster = ({
  poster_path,
  id,
}: {
  poster_path: string | null;
  id: number;
}) => {
  return (
    <Card
      customStyle={{
        width: "300px",
        height: "auto",
      }}
    >
      <PosterImage
        src={
          poster_path !== null
            ? serviceConfig.apiImagesUrl + `/` + poster_path
            : noImage
        }
        alt={`${id}` || ""}
      />
    </Card>
  );
};

const CreditCardMap = ({ creditsMap }: { creditsMap: Credit[] }) => {
  return creditsMap.map((credit: Credit, index: number) => {
    return (
      <CreditCard
        key={index}
        name={credit.name}
        character={credit.character}
        profile_path={credit.profile_path}
        id={credit.id}
        job={credit.job}
      />
    );
  });
};

const ImageMap = ({ imagesMap }: { imagesMap: MovieImage[] }) => {
  return imagesMap.map((image: MovieImage) => {
    return (
      <PosterImage
        src={
          image.file_path !== null
            ? serviceConfig.apiImagesUrl + `/` + image.file_path
            : noImage
        }
      />
    );
  });
};

const Genres = ({ genres }: { genres: Genre[] }) => {
  return genres.map((item: Genre) => item.name).join(", ");
};

const Images = ({ imagesFiltered }: { imagesFiltered: MovieImage[] }) => {
  return (
    <ImagesContainer>
      <ImagesTitle>Images</ImagesTitle>
      <ImagesList>
        <ImageMap imagesMap={imagesFiltered} />
      </ImagesList>
    </ImagesContainer>
  );
};

const Credits = ({ creditsMap }: { creditsMap: Credit[] }) => {
  return (
    <CreditsContainer>
      <CreditsTitle>Credits</CreditsTitle>
      <CreditsList>
        <CreditCardMap creditsMap={creditsMap} />
      </CreditsList>
    </CreditsContainer>
  );
};

const backLinkStyle = {
  textDecoration: "none",
  color: "white",
  transitionDuration: ".15s",
  display: "flex",
  alignSelf: "flex-start",
  alignItems: "center",
  gap: ".25rem",
};

const Main = styled("main")(({ path }: { path: string }) => ({
  backgroundImage: `url("${
    path != null ? serviceConfig.apiImagesUrl + path : "none"
  }")`,
  display: "flex",
  backgroundSize: "cover",
  minWidth: "100%",
  minHeight: "100vh",
  flexDirection: "column",
}));

const Header = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width: 640px)": {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

const Container = styled("div")({
  padding: "1.5rem",
  "@media (min-width: 640px)": {
    padding: "3rem",
  },
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
  color: "white",
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
  overflowX: "auto",
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
  overflowX: "auto",
  gap: "1.5rem",
});

const ImagesTitle = styled("div")({
  fontSize: "1.875rem",
  lineHeight: "2.25rem",
});
