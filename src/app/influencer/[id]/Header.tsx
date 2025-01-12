import Image from "next/image";
import defaultPic from "../../../assets/image/Default_profilepic.png";
import { Influencer } from "@/types/leaderboard";
import Card from "@/components/Card";

interface HeaderProps {
  influencer: Influencer | null;
}

const Header: React.FC<HeaderProps> = ({ influencer }) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5 h-fit items-center">
      <div className="w-32 h-32 flex-shrink-0">
        <Image
          src={influencer?.avatar || defaultPic}
          alt={influencer?.name || "Profile Picture"}
          className="rounded-full object-cover h-full w-full"
        />
      </div>
      <div className="flex-1">
        <div className="text-3xl md:text-5xl font-bold mb-2 text-center md:text-left">{influencer?.name}</div>
        <div className="flex flex-wrap gap-2 my-2">
          {influencer?.category?.map((item, index) => {
            return <Card key={index} value={item} />
          })}
        </div>
        <p className="text-sm text-gray-400">{influencer?.bio}</p>
      </div>
    </div>
  );
};

export default Header;
