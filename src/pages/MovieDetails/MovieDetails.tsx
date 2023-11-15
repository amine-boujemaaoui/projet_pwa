import { Link, useParams } from 'react-router-dom';
import styled from "@emotion/styled";
import { useFetchMovieDetailsQuery } from '../../services/useFetchMovieDetailsQuery';
import { Movie } from '../../interfaces/movie';
import serviceConfig from '../../services/servicesConfig';



function MovieDetails() {

    const { movieId } = useParams<{ movieId: string }>();

    const movie: Movie | null = useFetchMovieDetailsQuery(movieId || '');

    return (
        <Main >
            
                <Link to={`/`}> Back</Link>
                <Header>
                    <img src={serviceConfig.apiImagesUrl + `/` + movie?.poster_path} alt={movie?.original_title} />
                </Header>
            <BlurBackground path={movie?.backdrop_path || ""}></BlurBackground>
        </Main>
    )
}

export default MovieDetails;

const Main = styled("main")({
    display: "flex",
    backgroundSize: "cover",
    minWidth: "100%",
    minHeight: "100vh"
})

const Header = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    flexDirection: "row",
    alignItems: "flex-end"
})

const BlurBackground = styled("div")(({ path }: { path: string }) => ({
    backgroundImage: `url("${serviceConfig.apiImagesUrl}${path}")`,
    display: "flex",
    backgroundSize: "cover",
    minWidth: "100%",
    minHeight: "100vh"
}))