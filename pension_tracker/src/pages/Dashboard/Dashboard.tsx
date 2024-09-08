import { useState } from "react";
import PensionForm from "../../components/PensionFormComponent/PensionForm";

const Dashboard = () => {
  const [projectedPension, setProjectedPension] = useState<number>();
  const [desiredPension, setDesiredPension] = useState<number>();

  return (
    <>
      <PensionForm
        setProjectedPension={setProjectedPension}
        setDesiredPension={setDesiredPension}
      />
      <p>Projected Pension: {projectedPension}</p>
      <p>Desired Pension: {desiredPension}</p>
    </>
  );
};

export default Dashboard;
