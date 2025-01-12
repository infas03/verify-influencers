import axios from "axios";

export const fetchTweets = async (params: {
  query: string;
  max_results: number;
  start_time?: string;
  end_time?: string;
}) => {
  try {
    const response = await axios.get("/api/tweets", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return null;
  }
};
