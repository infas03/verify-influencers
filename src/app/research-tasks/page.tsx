"use client";

import Layout from "@/layout/layout";
import { Setting2 } from "iconsax-react";
import { useState } from "react";
import MainFilter from "./mainFilter";
import { FilterState } from "@/types/filter";
import TimeRangeFilter from "./timeRangeFilter";

const ResearchTask = () => {
  const [filter, setFilter] = useState<FilterState>({
    main: "specific",
    timeRange: "lastMonth",
    name: "",
    claimsPerInfluencer: 50,
    scientificJournals: [],
    productsPerInfluencer: 10,
    isRevenue: true,
    isScientificJournals: true,
    note: "",
  });

  const handleUpdateFilter = <K extends keyof FilterState>(
    property: K,
    value: FilterState[K]
  ) => {
    setFilter({ ...filter, [property]: value });
  };

  return (
    <Layout>
      <div className="bg-zinc-900 flex flex-col h-full w-full p-5 rounded-xl">
        <div className="flex items-center gap-x-4 pb-5">
          <Setting2 size="32" color="#059669" />
          <div className="text-white text-xl font-bold">
            Research Configuration
          </div>
        </div>
        <MainFilter filter={filter} handleUpdateFilter={handleUpdateFilter} />
        <div className="mt-10">
          <TimeRangeFilter
            filter={filter}
            handleUpdateFilter={handleUpdateFilter}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ResearchTask;
