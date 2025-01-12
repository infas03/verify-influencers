import axios from "axios";

export const fetchInfluencerById = async (id: string) => {
  try {
    const response = await axios.get(`/api/influencers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching influencer details:", error);
    return null;
  }
};
