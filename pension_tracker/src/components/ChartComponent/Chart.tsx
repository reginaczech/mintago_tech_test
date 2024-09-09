import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ChartProps } from "./Chart.types";
import { PensionData } from "../../types/index.types";

const Chart = ({
  chartTitle,
  data,
  xAxisKey,
  yAxisKey,
  secondaryKey,
  chartType,
}: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <div data-testid="bar-chart">
        <h2>{chartTitle}</h2>
        <BarChart
          width={500}
          height={300}
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
          <ReferenceLine y={0} stroke="#000" />

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
                {data.map((item, index) => (
                  <Cell
                    key={index}
                    fill={
                      (item as PensionData)[yAxisKey] >= 0
                        ? "#82ca9d"
                        : "#ff6b6b"
                    } // Green for positive, red for negative
                  />
                ))}
              </Bar>
            </>
          )}
        </BarChart>
      </div>
    </ResponsiveContainer>
  );
};

export default Chart;
