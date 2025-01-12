"use client";

import { useEffect, useState } from "react";
import { fetchInfluencerById } from "@/apis/influencers";
import { Influencer } from "@/types/leaderboard";
import { useParams } from "next/navigation";
import SkeletonLoader from "@/components/SkeletonLoader";
import Header from "./Header";
import Layout from "@/layout/layout";
import DataCards from "./DataCards";
import Tabs from "./tabs/Tabs";

type Params = {
  id: string;
};

const InfluencerProfile = () => {
  const { id } = useParams() as Params;

  console.log("id: ", id);
  const [influencer, setInfluencer] = useState<Influencer | null>(null);

  useEffect(() => {
    if (id) {
      fetchInfluencerById(id as string).then((data) => {
        setInfluencer(data);
      });
    }
  }, [id]);

  if (!influencer) return <SkeletonLoader length={8} />;

  return (
    <Layout>
      <div className="flex flex-col gap-8 w-full">
        <Header influencer={influencer} />
        <DataCards influencer={influencer} />
        <Tabs influencer={influencer}/>
      </div>
    </Layout>
  );
};

export default InfluencerProfile;
