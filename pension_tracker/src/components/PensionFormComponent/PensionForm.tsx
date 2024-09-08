import { useEffect, useState } from "react";
import { PensionFormProps, PensionFormState } from "./PensionForm.types";
import Input from "../InputComponent/Input";
import {
  desiredPensionCalc,
  projectedPensionCalc,
} from "../../utils/pensionCalcFn";

const PensionForm = ({
  setProjectedPension,
  setDesiredPension,
}: PensionFormProps) => {
  const [formData, setFormData] = useState<PensionFormState>({
    retireIncome: 0,
    employerContribution: 0,
    personalContribution: 0,
    retireAge: 0,
  });

  useEffect(() => {
    if (
      retireIncome > 0 &&
      employerContribution > 0 &&
      personalContribution > 0 &&
      retireAge > 0
    ) {
      setProjectedPension(
        projectedPensionCalc(
          employerContribution,
          personalContribution,
          retireAge
        )
      );
      setDesiredPension(desiredPensionCalc(retireIncome, retireAge));
    }
  }, [formData, setProjectedPension, setDesiredPension]);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const numValue = parseFloat(value) || 0;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: numValue }));
  };

  const {
    retireIncome,
    employerContribution,
    personalContribution,
    retireAge,
  } = formData;

  return (
    <>
      <Input
        name="retireIncome"
        label="Income to receive in retirement"
        value={retireIncome}
        handleChange={handleFormChange}
      />
      <Input
        name="personalContribution"
        label="Personal Monthly Contributions"
        value={personalContribution}
        handleChange={handleFormChange}
      />
      <Input
        name="employerContribution"
        label="Employer Monthly Contributions"
        value={employerContribution}
        handleChange={handleFormChange}
      />
      <Input
        name="retireAge"
        label="Retirement Age"
        value={retireAge}
        handleChange={handleFormChange}
      />
    </>
  );
};

export default PensionForm;
