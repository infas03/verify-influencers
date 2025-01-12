import Dropdown from "@/components/Dropdown";
import { sortOptions, verificationStatus } from "@/constants/dropdownValues";
import { Influencer } from "@/types/leaderboard";
import React from "react";

interface ClaimsAnalysisProps {
  influencer: Influencer | null;
}

const ClaimsAnalysis: React.FC<ClaimsAnalysisProps> = ({ influencer }) => {

  const handleSortOnChange = (data: string) => {
    console.log('selected Data: ', data);
  }
  return (
    <div className="p-6 border-gray-600 bg-gray-600/40 rounded-lg">
      <div className="mb-4 ">
        <input
          type="text"
          placeholder="Search claims..."
          className="w-full p-2 border border-gray-600 rounded-lg bg-[#0a0a0a] text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 hover:border-emerald-600"
        />
      </div>
      <div className="flex flex-col mb-4">
        <p className="mb-2 text-white/60 font-medium">Categories</p>
        <div className="flex flex-wrap gap-2">
          {influencer?.category?.map((item, index) => {
            return (
              <button
                key={index}
                className="px-4 py-1 border-gray-600 bg-gray-600/40 text-white rounded-2xl border-2 border-transparent hover:border-emerald-600"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mb-4 flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="mb-2 text-white/60 font-medium">Verification Status</p>
          <div className="flex flex-wrap gap-2">
            {verificationStatus?.map((item, index) => {
              return (
                <button
                  key={index}
                  className="px-6 py-2 border-gray-600 bg-gray-600/40 text-white rounded-xl border-2 border-transparent hover:border-emerald-600"
                >
                  {item?.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="mb-2 font-medium text-white/60">
            Product to Find Per Influencer
          </div>
          <Dropdown options={sortOptions} onChange={handleSortOnChange} selected={"date"}/>
        </div>
      </div>
    </div>
  );
};

export default ClaimsAnalysis;
