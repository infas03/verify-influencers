import { FilterState } from "@/types/filter";

type TimeRangeFilterProps = {
  filter: FilterState;
  handleUpdateFilter: <K extends keyof FilterState>(
    property: K,
    value: FilterState[K]
  ) => void;
};

const TimeRangeFilter: React.FC<TimeRangeFilterProps> = ({
  filter,
  handleUpdateFilter,
}) => {
  return (
    <div className="w-full">
      <div className="mb-2 font-bold text-lg text-white/60">Time Range</div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row gap-2">
          <button
            onClick={() => handleUpdateFilter("timeRange", "lastWeek")}
            className={`border-2 ${
              filter?.timeRange === "lastWeek"
                ? "border-emerald-600 bg-emerald-600/10 text-emerald-600 font-bold"
                : "border-gray-600/40 text-white/60"
            } text-center p-5 w-full md:w-1/2 flex flex-col items-center justify-center rounded-xl hover:border-emerald-600`}
          >
            Last Week
          </button>
          <button
            onClick={() => handleUpdateFilter("timeRange", "lastMonth")}
            className={`border-2 ${
              filter?.timeRange === "lastMonth"
                ? "border-emerald-600 bg-emerald-600/10 text-emerald-600 font-bold"
                : "border-gray-600 border-gray-600/40 text-white/60"
            } text-center p-5 w-full md:w-1/2 flex flex-col items-center justify-center rounded-xl hover:border-emerald-600`}
          >
            Last Month
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-2">
          <button
            onClick={() => handleUpdateFilter("timeRange", "lastYear")}
            className={`border-2 ${
              filter?.timeRange === "lastYear"
                ? "border-emerald-600 bg-emerald-600/10 text-emerald-600 font-bold"
                : "border-gray-600 border-gray-600/40 text-white/60"
            } text-center p-5 w-full md:w-1/2 flex flex-col items-center justify-center rounded-xl hover:border-emerald-600`}
          >
            Last Year
          </button>
          <button
            onClick={() => handleUpdateFilter("timeRange", "allTime")}
            className={`border-2 ${
              filter?.timeRange === "allTime"
                ? "border-emerald-600 bg-emerald-600/10 text-emerald-600 font-bold"
                : "border-gray-600 border-gray-600/40 text-white/60"
            } text-center p-5 w-full md:w-1/2 flex flex-col items-center justify-center rounded-xl hover:border-emerald-600`}
          >
            All Time
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeRangeFilter;
