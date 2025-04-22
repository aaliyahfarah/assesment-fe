import axios from "axios";

export const getResidentData = async (residentUrls: string[]) => {
  try {
    const residentPromises = residentUrls.map((url) => axios.get(url));
    const responses = await Promise.all(residentPromises);
    const resident = responses.map((res) => res.data);
    return resident;
  } catch (error) {
    console.error("Error fetching resident data:", error);
    throw error;
  }
};
