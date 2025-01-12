import { Influencer } from "@/types/leaderboard";
import { formatNumber } from "@/utils/functions";
import { DollarSquare, PresentionChart, ShoppingBag } from "iconsax-react";

interface DataCardsProps {
  influencer: Influencer | null;
}

const DataCards: React.FC<DataCardsProps> = ({ influencer }) => {
  return(
    <div className="flex flex-wrap gap-5">
      <div className="border-[1px] border-gray-600 bg-gray-600/40 p-6 w-full md:w-[48%] lg:w-[23%] rounded-xl overflow-hidden">
        <div className="pb-5 flex justify-between items-center">
          <div className="text-xl font-semibold">Trust Score</div>
          <PresentionChart size={20} color="#059669" />
        </div>
        <div className="text-5xl font-bold text-emerald-600">{influencer?.score}%</div>
        <p className="text-xs text-gray-400 mt-2">Based on {influencer?.verifiedClaims} verified claims</p>
      </div>
      <div className="border-[1px] border-gray-600 bg-gray-600/40 p-6 w-full md:w-[48%] lg:w-[23%] rounded-xl overflow-hidden">
        <div className="pb-5 flex justify-between items-center">
          <div className="text-xl font-semibold">Yearly Revenue</div>
          <DollarSquare size={20} color="#059669" />
        </div>
        <div className="text-5xl font-bold text-emerald-600">${influencer?.yearlyRevenue && formatNumber(influencer?.yearlyRevenue)}</div>
        <p className="text-xs text-gray-400 mt-2">Estimated earning</p>
      </div>
      <div className="border-[1px] border-gray-600 bg-gray-600/40 p-6 w-full md:w-[48%] lg:w-[23%] rounded-xl overflow-hidden">
        <div className="pb-5 flex justify-between items-center">
          <div className="text-xl font-semibold">Products</div>
          <ShoppingBag size={20} color="#059669" />
        </div>
        <div className="text-5xl font-bold text-emerald-600">1</div>
        <p className="text-xs text-gray-400 mt-2">Recommended products</p>
      </div>
      <div className="border-[1px] border-gray-600 bg-gray-600/40 p-6 w-full md:w-[48%] lg:w-[23%] rounded-xl overflow-hidden">
        <div className="pb-5 flex justify-between items-center">
          <div className="text-xl font-semibold">Followers</div>
          <PresentionChart size={20} color="#059669" />
        </div>
        <div className="text-5xl font-bold text-emerald-600">{influencer?.followers && formatNumber(influencer?.followers)}</div>
        <p className="text-xs text-gray-400 mt-2">Total following</p>
      </div>
    </div>  
  )
}

export default DataCards;