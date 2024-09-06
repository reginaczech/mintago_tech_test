import { desiredPensionCalc, projectedPensionCalc } from "./pensionCalcFn";

describe("Pension Calculation Functions", () => {
  const mockObj = {
    retireIncome: 16000,
    employerContribution: 400,
    personalContribution: 200,
    retireAge: 65,
  };

  it("should calculate the projected pension", () => {
    expect(projectedPensionCalc(mockObj.employerContribution, mockObj.personalContribution, mockObj.retireAge)).toBe(288000);
  });

  it("should calculate the desired pension", () => {
    expect(desiredPensionCalc(mockObj.retireIncome, mockObj.retireAge)).toBe(256000);
  });

});
