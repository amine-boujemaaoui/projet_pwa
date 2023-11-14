import { Card } from "../atoms/Card";
import styled from "@emotion/styled";

interface MovieCardProps {
    id: number;
    poster_path: string;
}

export const MovieCard = ({ id, poster_path }: MovieCardProps) => {

    return (
        <Card customStyle={{
            "&:hover": {
                transform: "scale(1.1)"
            },
            transition: "all 0.2s ease-out",
            height: "500px"
        }}>
            <PosterImage src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={`${id}`} />
        </Card>
    )
};

const PosterImage = styled("img")({
    width: "100%",
});





