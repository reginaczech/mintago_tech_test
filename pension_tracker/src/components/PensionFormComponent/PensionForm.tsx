import { useState } from "react";
import { PensionFormState } from "./PensionForm.types";
import Input from "../InputComponent/Input";

const PensionForm = () => {
  const [formData, setFormData] = useState<PensionFormState>({
    age: 0,
    retireIncome: 0,
    employerContribute: 0,
    personalContribute: 0,
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const { age, retireIncome, employerContribute, personalContribute } =
    formData;

  return (
    <>
      <Input
        name="retireIncome"
        label="Income to receive in retirement"
        value={retireIncome}
        handleChange={handleFormChange}
      />
      <Input
        name="personalContribute"
        label="Personal Monthly Contributions"
        value={personalContribute}
        handleChange={handleFormChange}
      />
      <Input
        name="employerContribute"
        label="Employer Monthly Contributions"
        value={employerContribute}
        handleChange={handleFormChange}
      />
      <Input
        name="age"
        label="Retirement Age"
        value={age}
        handleChange={handleFormChange}
      />
    </>
  );
};

export default PensionForm;
