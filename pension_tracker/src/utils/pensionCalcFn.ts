//Assumptions: Starting Age 25; Dying Age 81

const projectedPensionCalc = (
  employerContribution: number, //TODO: change to partial PensionFormState Type?
  personalContribution: number,
  retireAge: number
): number => {
  //No yearly interest included
  const projectedPension =
    (retireAge - 25) * (employerContribution + personalContribution) * 12;
  return projectedPension;
};

const desiredPensionCalc = (
  retireIncome: number,
  retireAge: number
): number => {
  const desiredPension = (81 - retireAge) * retireIncome;
  return desiredPension;
};

export { projectedPensionCalc, desiredPensionCalc };
