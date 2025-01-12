import axios from "axios";
import { FilterState } from "@/types/filter";

export const fetchTweets = async (filters: FilterState) => {
  const queryParts: string[] = [];

  if (filters.main === "specific") {
    queryParts.push("health");
  } else if (filters.main === "discover") {
    queryParts.push("nutrition OR fitness OR wellness");
  }

  if (filters.name) {
    queryParts.push(`from:${filters.name}`);
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
  const startTime =
    rangeValue !== null
      ? new Date(Date.now() - rangeValue * 24 * 60 * 60 * 1000).toISOString()
      : undefined;

  const params = {
    query,
    max_results: filters.claimsPerInfluencer || 10,
    start_time: startTime,
    end_time: endTime,
  };

  try {
    const response = await axios.get("/api/tweets", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return null;
  }
};
