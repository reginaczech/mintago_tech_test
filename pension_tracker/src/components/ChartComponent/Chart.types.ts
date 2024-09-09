import { PensionData, TotalsData } from "../../types/index.types";

interface ChartProps {
  chartTitle: string;
  data: (PensionData | TotalsData)[];
  xAxisKey: string;
  yAxisKey: string;
  secondaryKey?: string;
  xRef?: number;
  chartType: "timeSeries" | "comparison";
}

export type { ChartProps };
