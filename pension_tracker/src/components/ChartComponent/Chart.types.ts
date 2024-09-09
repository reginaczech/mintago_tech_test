import { PensionData, TotalsData } from "../../types/index.types";

interface ChartProps {
  chartTitle: string;
  data: (PensionData | TotalsData)[];
  xAxisKey: string;
  yAxisKey: string;
  secondaryKey?: string;
  chartType: "timeSeries" | "comparison";
}

export type { ChartProps };
