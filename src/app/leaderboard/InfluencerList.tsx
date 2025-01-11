import Image from "next/image";
import defaultPic from "../../assets/image/Default_profilepic.png";
import { Influencer } from "@/types/leaderboard";

type InfluencerListProps = {
  currentEntries: Influencer[];
};

const InfluencerList: React.FC<InfluencerListProps> = ({ currentEntries }) => {
  return (
    <div className="w-full overflow-hidden rounded-t-2xl border-2 border-gray-600/40">
      <table className="table-auto w-full bg-gray-600/20">
        <thead>
          <tr className="h-20 text-white/30 font-normal uppercase border-b-2 border-gray-600/40">
            <th className="text-center rounded-s-xl">Rank</th>
            <th className="">Influencer</th>
            <th>Category</th>
            <th>Trust Score</th>
            <th>Trend</th>
            <th>Followers</th>
            <th>Verified Claims</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries?.map((item, index) => {
            return (
              <tr className={`h-20 text-sm bg-gray-600/10 border-b-2 border-gray-600/40`} key={index}>
                <td className="h-20 text-center">#{item?.rank}</td>
                <td>
                  <div className="flex justify-center items-center gap-x-3">
                    <Image
                      src={defaultPic}
                      alt="profile pic"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {item?.name}
                  </div>
                </td>
                <td className="h-20 text-center">{item?.category}</td>
                <td className="h-20 text-center">{item?.score}%</td>
                <td className="h-20 text-center">{item?.trend}</td>
                <td className="h-20 text-center">{item?.followers}</td>
                <td className="h-20 text-center">{item?.verifiedClaims}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InfluencerList;
