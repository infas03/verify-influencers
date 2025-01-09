import { FilterState } from "@/types/filter";

type NoteFilterProps = {
  filter: FilterState;
  handleUpdateFilter: <K extends keyof FilterState>(
    property: K,
    value: FilterState[K]
  ) => void;
};

const NoteFilter: React.FC<NoteFilterProps> = ({
  filter,
  handleUpdateFilter,
}) => {
  return (
    <div className="w-full">
      <div className="mb-2 font-bold text-lg text-white/60">Notes for Research Assistant</div>
      <textarea
        name="name"
        value={filter?.note}
        rows={3}
        placeholder={"Add any specific instructions or focus areas..."}
        onChange={(e) => handleUpdateFilter("note", e.target.value)}
        className="mb-6 w-full px-4 py-2 text-white placeholder:text-white/60 bg-transparent border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 hover:border-emerald-600"
      />
    </div>
  )
}

export default NoteFilter;