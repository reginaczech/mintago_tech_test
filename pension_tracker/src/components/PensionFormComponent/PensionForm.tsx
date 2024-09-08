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
    retireIncome: "",
    employerContribution: "",
    personalContribution: "",
    retireAge: "",
  });

  useEffect(() => {
    //Validate that all fields are not empty to perform calculations
    if (
      retireIncome &&
      employerContribution &&
      personalContribution &&
      retireAge
    ) {
      //Change from string to number
      const retireIncome = parseFloat(formData.retireIncome);
      const employerContribution = parseFloat(formData.employerContribution);
      const personalContribution = parseFloat(formData.personalContribution);
      const retireAge = parseFloat(formData.retireAge);

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

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const {
    retireIncome,
    employerContribution,
    personalContribution,
    retireAge,
  } = formData;

  return (
    <>
      {/* TODO: Show errors */}
      {/* TODO: Aria + Responsive */}
      <Input
        name="retireIncome"
        label="Income to receive in retirement"
        value={retireIncome}
        type="number"
        handleChange={handleFormChange}
        min={1}
      />
      <Input
        name="personalContribution"
        label="Personal Monthly Contributions"
        value={personalContribution}
        type="number"
        handleChange={handleFormChange}
        min={1}
      />
      <Input
        name="employerContribution"
        label="Employer Monthly Contributions"
        value={employerContribution}
        type="number"
        handleChange={handleFormChange}
        min={1}
      />
      <Input
        name="retireAge"
        label="Retirement Age"
        value={retireAge}
        type="number"
        handleChange={handleFormChange}
        min={26}
        max={81}
      />
    </>
  );
};

export default PensionForm;
