import axios from 'axios';

const BASE_URL_PLANET = 'https://swapi.dev/api/planets';

export const getPlanets = async (page: number) => {
  try {
    const response = await axios.get(`${BASE_URL_PLANET}/?page=${page}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching planet:", error);
    throw error;
  }
};
