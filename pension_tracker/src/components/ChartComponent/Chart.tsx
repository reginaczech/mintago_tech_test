import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { ChartProps } from "./Chart.types";

const Chart = ({ data }: ChartProps) => {
  return (
    <div data-testid="bar-chart">
      <ResponsiveContainer width="100%" height={400}>
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
          <XAxis dataKey="age">
            <Label value="Age" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Pension Pot" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pensionPot" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
