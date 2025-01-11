import { FilterState } from "@/types/filter";

type MainFilterProps = {
  filter: FilterState;
  handleUpdateFilter: <K extends keyof FilterState>(
    property: K,
    value: FilterState[K]
  ) => void;
};

const MainFilter: React.FC<MainFilterProps> = ({ filter, handleUpdateFilter }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <button
        type='button'
        onClick={() => handleUpdateFilter("main", "specific")}
        className={`border-2 ${
          filter?.main === "specific"
            ? "border-emerald-600 bg-emerald-600/10"
            : "border-gray-600 border-gray-600/40"
        } text-center p-5 w-full md:w-1/2 flex flex-col items-center justify-center rounded-xl hover:border-emerald-600`}
      >
        <span className="text-2xl font-bold pb-2">Specific Influencer</span>
        <span className="text-lg text-white/50">
          Research a known health influencer by name
        </span>
      </button>
      <button
        type='button'
        onClick={() => handleUpdateFilter("main", "discover")}
        className={`border-2 ${
          filter?.main === "discover"
            ? "border-emerald-600 bg-emerald-600/10"
            : "border-gray-600 border-gray-600/40"
        } text-center p-5 w-full md:w-1/2 flex flex-col items-center justify-center rounded-xl hover:border-emerald-600`}
      >
        <span className="text-2xl font-bold pb-2">Discover New</span>
        <span className="text-lg text-white/50">
          Find and analyze new health influencers
        </span>
      </button>
    </div>
  );
};

export default MainFilter;
