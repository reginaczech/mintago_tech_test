import { useState } from "react";
import PensionForm from "../../components/PensionFormComponent/PensionForm";
import Chart from "../../components/ChartComponent/Chart";
import { PensionData } from "../../types/PensionData.types";

const Dashboard = () => {
  const [projectedPension, setProjectedPension] = useState<number>();
  const [desiredPension, setDesiredPension] = useState<number>();
  const [pensionData, setPensionData] = useState<PensionData[]>([]);

  return (
    <>
      <PensionForm
        setProjectedPension={setProjectedPension}
        setDesiredPension={setDesiredPension}
        setPensionData={setPensionData}
      />
      <p>Projected Pension: {projectedPension}</p>
      <p>Desired Pension: {desiredPension}</p>
      <Chart data={pensionData} />
    </>
  );
};

export default Dashboard;
