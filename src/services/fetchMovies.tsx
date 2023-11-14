import servicesConfig from "./servicesConfig";

const fetchMovies = async () => {
    try {
        const response = await fetch(`${servicesConfig.apiUrl}/movie/now_playing`, {
            headers: {
                Authorization: `Bearer ${servicesConfig.apiToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des films :', error);
        throw new Error('Erreur lors de la récupération des films');
    }
};

export default fetchMovies;
