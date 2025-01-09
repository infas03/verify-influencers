import { FilterState } from "@/types/filter";
import { journals } from "../constants/dropdownValues";

type JournalsFilterProps = {
  filter: FilterState;
  handleUpdateFilter: <K extends keyof FilterState>(
    property: K,
    value: FilterState[K]
  ) => void;
};

const JournalsFilter: React.FC<JournalsFilterProps> = ({
  filter,
  handleUpdateFilter,
}) => {
  const handleSelectJournal = (value: string) => {
    const isSelected = filter.scientificJournals.includes(value);

    const updatedJournals = isSelected
      ? filter.scientificJournals.filter((journal) => journal !== value)
      : [...filter.scientificJournals, value];

    handleUpdateFilter("scientificJournals", updatedJournals);
  };

  return (
    <div className="w-full">
      <div className="mb-2 font-bold text-lg text-white/60">
        Scientific Journals
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {journals.map((journal) => (
          <div
            key={journal.value}
            onClick={() => handleSelectJournal(journal.value)}
            className={`border-2 cursor-pointer text-center px-4 py-2 w-full flex flex-row items-center justify-between rounded-lg hover:border-emerald-600 ${
              filter.scientificJournals.includes(journal.value)
                ? "border-emerald-600 bg-emerald-600/10 font-medium"
                : "border-gray-600/40 text-white/60"
            }`}
          >
            <span>{journal.label}</span>
            <div className={`rounded-full h-5 w-5 ${
              filter.scientificJournals.includes(journal.value)
                ? "bg-emerald-600"
                : "bg-gray-600/40"
            }`}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalsFilter;
