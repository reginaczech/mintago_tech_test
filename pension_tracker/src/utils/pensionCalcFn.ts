//Assumptions: Starting Age 25; Dying Age 81

import { PensionData } from "../types/index.types";

//Calculates the compound interest of a growth rate with regular annual contributions
const regContributionsCompoundInterest = (
  annualContribution: number,
  growthRate: number = 4.9,
  time: number
): number => {
  const amount =
    (annualContribution * (Math.pow(1 + growthRate / 100, time) - 1)) /
    (growthRate / 100);

  return amount; //Total Amount
};

//Calculates the total projected pension amount with regular annual contributions
const projectedPensionCalc = (
  employerContribution: number,
  personalContribution: number,
  retireAge: number
): number => {
  const annualContribution = (employerContribution + personalContribution) * 12;
  const time = retireAge - 25;

  const projectedPension = +regContributionsCompoundInterest(
    annualContribution,
    4.9,
    time
  ).toFixed(2);

  return projectedPension;
};

//Calculates the desired pension amount based on yearly requirements
const desiredPensionCalc = (
  retireIncome: number,
  retireAge: number
): number => {
  //Calculate the total desired pension pot
  const desiredPension = +((81 - retireAge) * retireIncome).toFixed(2);
  return desiredPension;
};

//Calculates the total pension pot and organized the data from age 25 to 81 (including interest)
const pensionDataCalc = (
  retireIncome: number,
  employerContribution: number,
  personalContribution: number,
  retireAge: number
): PensionData[] => {
  let pensionPot = 0;
  const data: PensionData[] = [];
  const annualContributions =
    (employerContribution + personalContribution) * 12;
  const growthRate = 4.9 / 100;

  //Accumulation of pension pot (based on projected pension)
  for (let i = 25; i < retireAge; i++) {
    //calculate the yearly accumulation of the pension pot from initial age of 25 to retirement age.
    pensionPot = (pensionPot + annualContributions) * (1 + growthRate);

    data.push({
      age: i,
      pensionPot: +pensionPot.toFixed(2),
    });
  }

  //Collection of pension pot (based on desired pension)
  for (let i = retireAge; i <= 81; i++) {
    //Calculate the yearly collection of the pension pot from the retirement age till 81.
    pensionPot -= retireIncome;

    data.push({
      age: i,
      pensionPot: +pensionPot.toFixed(2),
    });
  }

  return data;
};

export { projectedPensionCalc, desiredPensionCalc, pensionDataCalc };
