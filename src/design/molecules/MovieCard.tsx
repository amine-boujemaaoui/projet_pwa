import { Card } from "../atoms/Card";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import  serviceConfig  from '../../services/servicesConfig'

interface MovieCardProps {
    id: number;
    poster_path: string;
}

export const MovieCard = ({ id, poster_path }: MovieCardProps) => {

    return (
        <Link to={`movie/${id}`}>
            <Card customStyle={{
                "&:hover": {
                    transform: "scale(1.1)"
                },
                transition: "all 0.2s ease-out",
                height: "500px"
            }}>
                
                <PosterImage src={`${serviceConfig.apiImagesUrl}${poster_path}`} alt={`${id}`} />
            </Card>
        </Link>
    )
};

const PosterImage = styled("img")({
    width: "100%",
});





