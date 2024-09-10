import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Cell,
} from "recharts";
import { ChartProps } from "./Chart.types";
import { PensionData } from "../../types/index.types";
import useWindowDimensions from "../../customHooks/useWindowDimensions";

const Chart = ({
  chartTitle,
  data,
  xAxisKey,
  yAxisKey,
  secondaryKey,
  xRef,
  chartType,
}: ChartProps) => {
  const { width, height } = useWindowDimensions();

  // Chart Sizes set based on window size
  const chartWidth = width * 0.9;
  const chartHeight = height * 0.5;

  return (
    //FYI: Custom hook used in the Chart Component because rechart ResponsiveContainer not working properly, BarChart does not render properly without a set width & height
    <div data-testid="bar-chart" className="w-full h-full">
      <h2 className="text-xl text-center font-semibold mb-4">{chartTitle}</h2>
      <BarChart
        width={Math.min(chartWidth, 800)}
        height={Math.min(chartHeight, 400)}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />

        {chartType === "comparison" && (
          <>
            {/* Comparison Bar Chart: Projected Pension Pot vs. Desired Pension Pot */}
            <Bar dataKey={yAxisKey} fill="#8884d8" name="Projected Pension" />
            {secondaryKey && (
              <Bar
                dataKey={secondaryKey}
                fill="#82ca9d"
                name="Desired Pension"
              />
            )}
          </>
        )}
        {chartType === "timeSeries" && (
          <>
            {/* Time Series Bar Chart: Year-on-Year chart to show pension growth and consumption */}
            <Bar dataKey={yAxisKey}>
              {xRef &&
                data.map((item, index) => (
                  <Cell
                    key={index}
                    fill={
                      (item as PensionData)[yAxisKey] < 0
                        ? "#ff6b6b" //Red - if desired pension in the negative
                        : (item as PensionData)[xAxisKey] < xRef //
                        ? "#82ca9d" //Green - if adding to pension pot (greater than zero, but before retirement)
                        : "#f6c23e" //Yellow - if collecting pension (after retirement) and desired pension is positive
                    }
                  />
                ))}
            </Bar>
          </>
        )}
        <ReferenceLine
          x={xRef}
          stroke="blue"
          strokeWidth={3}
          label="Retirement Age"
        />
      </BarChart>
    </div>
  );
};

export default Chart;
