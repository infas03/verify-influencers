export type Influencer = {
  id: string;
  rank: number;
  name: string;
  score: number;
  trend: "up" | "down" | "neutral";
  followers: number;
  verifiedClaims: number;
  avatar: string;
  category: string[];
  verificationStatus: "Verified" | "Questionable" | "Debunked";
  yearlyRevenue: number;
  bio: string;
};
