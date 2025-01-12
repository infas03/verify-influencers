import { dummyInfluencers } from "@/utils/dummyData";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const influencer = dummyInfluencers.find((influencer) => influencer.id === id);
  if (influencer) {
    res.status(200).json(influencer);
  } else {
    res.status(404).json({ error: "Influencer not found" });
  }
}
