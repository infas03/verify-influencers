"use client";

import Layout from "@/layout/layout";
import { useFormik } from "formik";
import { Setting2 } from "iconsax-react";
import { useState } from "react";
import { FilterState } from "@/types/filter";
import MainFilter from "./MainFilter";
import TimeRangeFilter from "./TimeRangeFilter";
import NameFilter from "./NameFilter";
import SecondaryFilter from "./SecondaryFilter";
import JournalsFilter from "./JournalsFilter";
import NoteFilter from "./NoteFilter";
import { fetchTweets } from "@/apis/twitter";

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

  const formik = useFormik<FilterState>({
    initialValues: {
      main: filter?.main,
      timeRange: filter?.timeRange,
      name: filter?.name,
      claimsPerInfluencer: filter?.claimsPerInfluencer,
      scientificJournals: filter?.scientificJournals,
      productsPerInfluencer: filter?.productsPerInfluencer,
      isRevenue: filter?.isRevenue,
      isScientificJournals: filter?.isScientificJournals,
      note: filter?.note,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log("Submitting values: ", values);

      const tweets = await fetchTweets(values);
      console.log("Fetched Tweets:", tweets);
    },
  });

  // console.log("filter: ", filter);
  // console.log("formik.values: ", formik.values);

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-zinc-900 flex flex-col h-full w-full p-5 rounded-xl">
          <div className="flex items-center gap-x-8 pb-5">
            <Setting2 size="32" color="#059669" />
            <div className="text-white text-xl font-bold">
              Research Configuration
            </div>
          </div>
          <MainFilter filter={filter} handleUpdateFilter={handleUpdateFilter} />
          <div className="mt-10 flex flex-col lg:flex-row gap-x-8 mb-6">
            <div className="w-full lg:w-1/2 flex flex-col gap-y-5">
              <TimeRangeFilter
                filter={filter}
                handleUpdateFilter={handleUpdateFilter}
              />
              <NameFilter
                filter={filter}
                handleUpdateFilter={handleUpdateFilter}
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-y-5">
              <SecondaryFilter
                filter={filter}
                handleUpdateFilter={handleUpdateFilter}
              />
            </div>
          </div>
          <div>
            <JournalsFilter
              filter={filter}
              handleUpdateFilter={handleUpdateFilter}
            />
          </div>
          <div className="mt-6">
            <NoteFilter
              filter={filter}
              handleUpdateFilter={handleUpdateFilter}
            />
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-emerald-600 p-3 rounded-lg font-bold hover:bg-emerald-700 disabled:bg-emerald-600/40 disabled:text-white/40"
            >
              + Start Research
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ResearchTask;
