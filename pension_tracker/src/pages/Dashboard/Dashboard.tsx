import { useState } from "react";
import PensionForm from "../../components/PensionFormComponent/PensionForm";
import Chart from "../../components/ChartComponent/Chart";
import { PensionData, TotalsData } from "../../types/index.types";

const Dashboard = () => {
  const [projectedPension, setProjectedPension] = useState<number>();
  const [desiredPension, setDesiredPension] = useState<number>();
  //Time Series: Pension Data State (pension pot shown year-on-year)
  const [pensionData, setPensionData] = useState<PensionData[]>([]);
  const [retireAge, setRetireAge] = useState<number | undefined>();

  //Comparison: Projected vs Desired Pension Data
  const comparisonData: TotalsData[] = [
    { projectedPot: projectedPension || 0, desiredPot: desiredPension || 0 },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Pension Tracker</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 lg:w-1/4 xl:w-1/3">
            <PensionForm
              setProjectedPension={setProjectedPension}
              setDesiredPension={setDesiredPension}
              setPensionData={setPensionData}
              setRetireAge={setRetireAge}
            />
            <div className="text-center mt-8 space-y-4">
              <p className="text-lg font-semibold">
                Projected Pension:
                <span className="text-xl font-bold text-gray-900">
                  {projectedPension
                    ? ` £${projectedPension.toLocaleString()}`
                    : " — "}
                </span>
              </p>
              <p className="text-lg font-semibold">
                Desired Pension:
                <span className="text-xl font-bold text-gray-900">
                  {desiredPension
                    ? ` £${desiredPension.toLocaleString()}`
                    : " — "}
                </span>
              </p>
            </div>
          </div>
          <div className="flex-1 lg:w-3/4 xl:w-2/3 flex flex-col gap-8">
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
              xRef={retireAge}
              chartType={"timeSeries"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
