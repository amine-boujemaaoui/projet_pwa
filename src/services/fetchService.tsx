import servicesConfig from "./servicesConfig";
import { useQuery } from "react-query";

const fetchService = async (path? : string) => {
    try {
        const response = await fetch(`${servicesConfig.apiUrl}/${path}`, {
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

export default fetchService;
