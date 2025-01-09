import ToggleSwitch from "@/components/ToggleSwitch";
import { FilterState } from "@/types/filter";

type SecondaryFilterProps = {
  filter: FilterState;
  handleUpdateFilter: <K extends keyof FilterState>(
    property: K,
    value: FilterState[K]
  ) => void;
};

const SecondaryFilter: React.FC<SecondaryFilterProps> = ({
  filter,
  handleUpdateFilter,
}) => {
  const handleToggleChange = (property: keyof FilterState, value: boolean) => {
    handleUpdateFilter(property, value);
  };

  return (
    <div className="w-full">
      <div className="mb-2 font-bold text-lg text-white/60">
        Product to Find Per Influencer
      </div>
      <input
        type="number"
        name="productsPerInfluencer"
        value={filter?.productsPerInfluencer}
        placeholder={""}
        onChange={(e) =>
          handleUpdateFilter("productsPerInfluencer", parseInt(e.target.value))
        }
        className="w-full px-4 py-2 text-white placeholder:text-white/60 bg-transparent border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 hover:border-emerald-600"
      />
      <span className="text-xs text-white/60">
        Set to 0 to skip product research
      </span>
      <div className="flex justify-between items-start mt-6">
        <div className="w-96 flex flex-col">
          <span className="text-white/80 font-medium">
            Include Revenue Analysis
          </span>
          <span className="text-white/60 text-sm">
            Analyze monetization methods and estimate earning
          </span>
        </div>
        <ToggleSwitch
          value={filter?.isRevenue}
          onChange={(e) => handleToggleChange("isRevenue", e)}
        />
      </div>
      <div className="flex justify-between items-start mt-6">
        <div className="w-96 flex flex-col">
          <span className="text-white/80 font-medium">
            Verify with Scientific Journals
          </span>
          <span className="text-white/60 text-sm">
            Cross-reference claims with scientific literature
          </span>
        </div>
        <ToggleSwitch
          value={filter?.isScientificJournals}
          onChange={(e) => handleToggleChange("isScientificJournals", e)}
        />
      </div>
    </div>
  );
};

export default SecondaryFilter;
