import { useEffect, useState } from "react";
import { PensionFormProps, PensionFormState } from "./PensionForm.types";
import Input from "../InputComponent/Input";
import {
  desiredPensionCalc,
  pensionDataCalc,
  projectedPensionCalc,
} from "../../utils/pensionCalcFn";

const PensionForm = ({
  setProjectedPension,
  setDesiredPension,
  setPensionData,
  setRetireAge,
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
      formData.retireIncome &&
      formData.employerContribution &&
      formData.personalContribution &&
      formData.retireAge
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
      setPensionData(
        pensionDataCalc(
          retireIncome,
          employerContribution,
          personalContribution,
          retireAge
        )
      );
      setRetireAge(retireAge);
    } else {
      setProjectedPension(undefined);
      setDesiredPension(undefined);
      setPensionData([]);
      setRetireAge(undefined);
    }
  }, [
    formData,
    setProjectedPension,
    setDesiredPension,
    setPensionData,
    setRetireAge,
  ]);

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

  // TODO: Show errors
  // TODO: Aria + Responsive
  return (
    <>
      <div className="flex justify-center items-center  px-4 py-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <Input
            name="retireIncome"
            label="Income to receive in retirement"
            value={retireIncome}
            type="number"
            handleChange={handleFormChange}
            min={1}
            isCurrency={true}
            suffix="/year"
          />
          <Input
            name="personalContribution"
            label="Personal Monthly Contributions"
            value={personalContribution}
            type="number"
            handleChange={handleFormChange}
            min={1}
            isCurrency={true}
            suffix="/month"
          />
          <Input
            name="employerContribution"
            label="Employer Monthly Contributions"
            value={employerContribution}
            type="number"
            handleChange={handleFormChange}
            min={1}
            isCurrency={true}
            suffix="/month"
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
        </div>
      </div>
    </>
  );
};

export default PensionForm;
