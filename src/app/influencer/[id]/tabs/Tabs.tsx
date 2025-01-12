import React, { useState } from "react";
import ClaimsAnalysis from "./ClaimsAnalysis";
import RecommendedProducts from "./RecommandedProducts";
import Monetization from "./Monetization";
import { Influencer } from "@/types/leaderboard";

interface TabsProps {
  influencer: Influencer | null;
}

const Tabs: React.FC<TabsProps> = ({ influencer } ) => {
  const [activeTab, setActiveTab] = useState<string>("claims");

  const renderTabContent = () => {
    switch (activeTab) {
      case "claims":
        return <ClaimsAnalysis influencer={influencer}/>;
      case "products":
        return <RecommendedProducts />;
      case "monetization":
        return <Monetization />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-4 border-b border-gray-600 pb-2">
        <button
          className={`px-4 py-2 ${
            activeTab === "claims" ? "border-b-2 border-emerald-600 text-emerald-600 font-semibold" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("claims")}
        >
          Claims Analysis
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "products" ? "border-b-2 border-emerald-600 text-emerald-600 font-semibold" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("products")}
        >
          Recommended Products
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "monetization" ? "border-b-2 border-emerald-600 text-emerald-600 font-semibold" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("monetization")}
        >
          Monetization
        </button>
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default Tabs;
