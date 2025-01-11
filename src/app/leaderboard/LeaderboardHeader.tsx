import { Chart1, Profile2User, TickCircle } from "iconsax-react";

const LeaderboardHeader = () => {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <div className="border-2 border-gray-600/40 bg-gray-600/20 p-5 w-[31%] flex flex-row items-center gap-x-2 rounded-lg">
        <Profile2User color="#059669" size={35}/>
        <div className="flex flex-col">
          <span className="text-2xl font-bold">1234</span>
          <span className="text-sm text-white/40">Active Influencers</span>
        </div>
      </div>
      <div className="border-2 border-gray-600/40 bg-gray-600/20 p-5 w-[31%] flex flex-row items-center gap-x-2 rounded-lg">
        <TickCircle color="#059669" size={35}/>
        <div className="flex flex-col">
          <span className="text-2xl font-bold">1234</span>
          <span className="text-sm text-white/40">Claims Verified</span>
        </div>
      </div>
      <div className="border-2 border-gray-600/40 bg-gray-600/20 p-5 w-[31%] flex flex-row items-center gap-x-2 rounded-lg">
        <Chart1 color="#059669" size={35}/>
        <div className="flex flex-col">
          <span className="text-2xl font-bold">1234</span>
          <span className="text-sm text-white/40">Average Trust Score</span>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardHeader;