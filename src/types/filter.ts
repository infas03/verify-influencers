export type FilterState = {
  main: "specific" | "discover";
  timeRange: "lastMonth" | "lastWeek" | "lastYear" | "allTime";
  name: string;
  claimsPerInfluencer: number;
  scientificJournals: string[];
  productsPerInfluencer: number;
  isRevenue: boolean;
  isScientificJournals: boolean;
  note: string;
};
