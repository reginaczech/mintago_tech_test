//Assumptions: Starting Age 25; Dying Age 81

import { PensionData } from "../types/PensionData.types";


const projectedPensionCalc = (
  employerContribution: number, //TODO: change to partial PensionFormState Type?
  personalContribution: number,
  retireAge: number
): number => {
  //No yearly interest included
  //Calculate the total projected pension pot
  const projectedPension =
    (retireAge - 25) * (employerContribution + personalContribution) * 12;
  return projectedPension;
};

const desiredPensionCalc = (
  retireIncome: number,
  retireAge: number
): number => {
  //Calculate the total desired pension pot
  const desiredPension = (81 - retireAge) * retireIncome;
  return desiredPension;
};

const pensionDataCalc = (
  retireIncome: number,
  employerContribution: number,
  personalContribution: number,
  retireAge: number
): PensionData[] => {
  let pensionPot = 0;
  const data = [];

  //Accumulation of pension pot (based on projected pension)
  for (let i = 25; i < retireAge; i++) {
    //calculate the yearly accumulation of the pension pot from initial age of 25 to retirement age.
    pensionPot += (employerContribution + personalContribution) * 12;
    /* +(pensionPot * growthRate*) */

    data.push({
      age: i,
      pensionPot: pensionPot,
    });
  }

  //Collection of pension pot (based on desired pension)
  for (let i = retireAge; i <= 81; i++) {
    //Calculate the yearly collection of the pension pot from the retirement age till 81.
    pensionPot -= retireIncome;

    data.push({
      age: i,
      pensionPot: pensionPot,
    });
  }

  return data;
};

export { projectedPensionCalc, desiredPensionCalc, pensionDataCalc };
