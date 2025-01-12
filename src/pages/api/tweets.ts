import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "twitter-api-sdk";

const twitterClient = new Client(process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('calling this...')
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { query, max_results, start_time, end_time } = req.query;

  try {
    const recentSearch = await twitterClient.tweets.tweetsRecentSearch({
      query: query as string,
      max_results: Number(max_results) || 10,
      start_time: start_time as string | undefined,
      end_time: end_time as string | undefined,
    });

    res.status(200).json(recentSearch);
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "response" in error) {
      const typedError = error as { response?: { status: number } };
      res.status(typedError.response?.status || 500).end();
    } else {
      res.status(500).json({ error: "Unexpected error occurred." });
    }
  }
}