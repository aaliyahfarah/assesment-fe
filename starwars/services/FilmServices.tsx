import axios from "axios";

export const getFilmData = async (filmUrls: string[]) => {
  try {
    const filmPromises = filmUrls.map((url) => axios.get(url));
    const responses = await Promise.all(filmPromises);
    const film = responses.map((res) => res.data); 
    return film;
  } catch (error) {
    console.error("Error fetching film data:", error);
    throw error;
  }
};
