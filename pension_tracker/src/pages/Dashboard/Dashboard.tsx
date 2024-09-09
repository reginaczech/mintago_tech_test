import { useState } from "react";
import PensionForm from "../../components/PensionFormComponent/PensionForm";
import Chart from "../../components/ChartComponent/Chart";
import { PensionData, TotalsData } from "../../types/index.types";

const Dashboard = () => {
  const [projectedPension, setProjectedPension] = useState<number>();
  const [desiredPension, setDesiredPension] = useState<number>();
  //Time Series: Pension Data State (pension pot shown year-on-year)
  const [pensionData, setPensionData] = useState<PensionData[]>([]);

  //Comparison: Projected vs Desired Pension Data
  const comparisonData: TotalsData[] = [
    { projectedPot: projectedPension || 0, desiredPot: desiredPension || 0 },
  ];

  return (
    <>
      <h1>Pension Tracker</h1>
      <div>
        <PensionForm
          setProjectedPension={setProjectedPension}
          setDesiredPension={setDesiredPension}
          setPensionData={setPensionData}
        />
        <p>Projected Pension: {projectedPension}</p>
        <p>Desired Pension: {desiredPension}</p>
        <div className="flex flex-row">
          <Chart
            chartTitle="Projected vs. Desired Pension"
            data={comparisonData}
            xAxisKey={"projectedPot"}
            yAxisKey={"projectedPot"}
            secondaryKey={"desiredPot"}
            chartType={"comparison"}
          />
          <Chart
            chartTitle="Your Pension Over Time"
            data={pensionData}
            xAxisKey={"age"}
            yAxisKey={"pensionPot"}
            chartType={"timeSeries"}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
