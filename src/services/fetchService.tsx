import servicesConfig from "./servicesConfig";

const fetchService = async (path: string, errorMessage: string) => {
  try {
    const response = await fetch(`${servicesConfig.apiUrl}/${path}`, {
      headers: {
        Authorization: `Bearer ${servicesConfig.apiToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(errorMessage);
  }
};

export default fetchService;
