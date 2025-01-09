import { FilterState } from "@/types/filter";

type NameFilterProps = {
  filter: FilterState;
  handleUpdateFilter: <K extends keyof FilterState>(
    property: K,
    value: FilterState[K]
  ) => void;
};

const NameFilter: React.FC<NameFilterProps> = ({
  filter,
  handleUpdateFilter,
}) => {
  return (
    <div className="w-full">
      <div className="mb-2 font-bold text-lg text-white/60">Influencer Name</div>
      <input
        type="text"
        name="name"
        value={filter?.name}
        placeholder={"Enter influencer name"}
        onChange={(e) => handleUpdateFilter("name", e.target.value)}
        className="mb-6 w-full px-4 py-2 text-white placeholder:text-white/60 bg-transparent border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 hover:border-emerald-600"
      />
      <div className="mb-2 font-bold text-lg text-white/60">Claims to Analyze Per Influencer</div>
      <input
        type="number"
        name="claimsPerInfluencer"
        value={filter?.claimsPerInfluencer}
        placeholder={""}
        onChange={(e) => handleUpdateFilter("claimsPerInfluencer", parseInt(e.target.value))}
        className="w-full px-4 py-2 text-white placeholder:text-white/60 bg-transparent border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 hover:border-emerald-600"
      />
      <span className="text-xs text-white/60">Recommended: 50-100 claims for comprehensive analysis</span>
    </div>
  )
}

export default NameFilter;