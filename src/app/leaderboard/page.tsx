"use client";

import Layout from "@/layout/layout";
import LeaderboardHeader from "./LeaderboardHeader";
import InfluencerList from "./InfluencerList";

const Leaderboard = () => {
  const dummyData = [
    {
      rank: 1,
      name: "Dr. Peter Attia",
      category: "Medicine",
      score: 94,
      trend: "up",
      followers: 120000,
      verifiedClaims: 200,
    },
  ];
  return (
    <Layout>
      <div className="flex flex-col h-full w-full rounded-xl gap-y-8">
        <div className="flex flex-col w-full">
          <div className="text-white text-xl md:text-3xl lg:text-4xl font-bold">
            Influencer Trust Leaderboard
          </div>
          <span className="text-sm mt-2 text-white/60 max-w-[700px]">
            Real-time rankings of health influencers based on scientific
            accuracy, credibility, and transparency. Update daily using
            AI-powered analysis.
          </span>
        </div>
        <div>
          <LeaderboardHeader />
        </div>
        <div>
          <InfluencerList currentEntries={dummyData} />
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
