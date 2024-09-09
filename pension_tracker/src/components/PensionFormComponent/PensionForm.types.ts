import { PensionData } from "../../types/PensionData.types";

interface PensionFormState {
  retireIncome: string;
  employerContribution: string;
  personalContribution: string;
  retireAge: string;
}

interface PensionFormProps {
  setProjectedPension: React.Dispatch<React.SetStateAction<number | undefined>>;
  setDesiredPension: React.Dispatch<React.SetStateAction<number | undefined>>;
  setPensionData: React.Dispatch<React.SetStateAction<PensionData[]>>;
}

export type { PensionFormProps, PensionFormState };
