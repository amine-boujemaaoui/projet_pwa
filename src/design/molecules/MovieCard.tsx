import { Card } from "../atoms/Card";
import { Link } from "react-router-dom";
import  serviceConfig  from '../../services/servicesConfig'
import { PosterImage } from "../atoms/PosterImage";
import { Movie } from "../../interfaces/movie";

export const MovieCard = ({ id, poster_path }: Movie) => {

    return (
        <Link to={`movie/${id}`}>
            <Card customStyle={{
                "&:hover": {
                    transform: "scale(1.05)"
                },
                transition: "all 0.2s ease-out",
                cursor: "pointer",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)"
            }}>
                <PosterImage src={`${serviceConfig.apiImagesUrl}${poster_path}`} alt={`${id}`} />
            </Card>
        </Link>
    )
};




