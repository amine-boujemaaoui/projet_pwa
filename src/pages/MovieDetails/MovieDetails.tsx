import { useParams } from 'react-router-dom';

function MovieDetails() {

    const { movieId } = useParams<{ movieId: string }>();
    
    return (
        <p>{movieId}</p>
    )
}

export default MovieDetails;