import { FilterState } from "@/types/filter";
import axios from "axios";

const twitterApiKey = process.env.NEXT_PUBLIC_TWITTER_API_KEY;

if (!twitterApiKey) {
  throw new Error("Twitter API key is not set. Please check your environment variables.");
}

export type Tweet = {
  id: string;
  text: string;
};

export const fetchTweets = async (filters: FilterState): Promise<Tweet[]> => {
  const queryParts: string[] = [`from:${filters.name}`];

  if (filters.main === "specific") {
    queryParts.push("health");
  } else if (filters.main === "discover") {
    queryParts.push("nutrition OR fitness OR wellness");
  }

  const query = queryParts.join(" ");

  const timeRanges: Record<FilterState["timeRange"], number | null> = {
    lastWeek: 7,
    lastMonth: 30,
    lastYear: 365,
    allTime: null,
  };

  const endTime = new Date().toISOString();
  const rangeValue = timeRanges[filters.timeRange];
  const startTime = rangeValue !== null
    ? new Date(Date.now() - rangeValue * 24 * 60 * 60 * 1000).toISOString()
    : undefined;

  const params: {
    query: string;
    max_results: number;
    start_time?: string;
    end_time?: string;
  } = {
    query,
    max_results: filters.claimsPerInfluencer || 10,
  };

  if (startTime) {
    params.start_time = startTime;
    params.end_time = endTime;
  }

  try {
    const response = await axios.get<{ data: Tweet[] }>(
      "https://api.x.com/2/tweets/search/recent",
      {
        params,
        headers: {
          Authorization: `Bearer ${twitterApiKey}`,
          "Content-Type": "application/json",
        }
      }
    );

    console.log("Fetched Tweets:", response.data.data);
    return response.data.data || [];
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected Error:", (error as Error).message);
    }
    return [];
  }
};
