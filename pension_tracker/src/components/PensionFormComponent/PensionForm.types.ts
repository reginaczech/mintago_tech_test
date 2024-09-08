interface PensionFormState {
  retireIncome: number;
  employerContribution: number;
  personalContribution: number;
  retireAge: number;
}

interface PensionFormProps {
  setProjectedPension: React.Dispatch<React.SetStateAction<number | undefined>>;
  setDesiredPension: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export type { PensionFormProps, PensionFormState };
