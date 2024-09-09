//Type required for multiple components

interface PensionData {
  age: number;
  pensionPot: number;
  [key: string]: number;
}

interface TotalsData {
  projectedPot: number;
  desiredPot: number;
  [key: string]: number; //Required for indexing the Chart Component dynamically
}

export type { PensionData, TotalsData };
