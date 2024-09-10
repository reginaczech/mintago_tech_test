import { desiredPensionCalc, projectedPensionCalc } from "./pensionCalcFn";

describe("Pension Calculation Functions", () => {
  const mockObj = {
    retireIncome: 20000,
    employerContribution: 100,
    personalContribution: 100,
    retireAge: 65,
  };

  it("should calculate the projected pension", () => {
    expect(
      projectedPensionCalc(
        mockObj.employerContribution,
        mockObj.personalContribution,
        mockObj.retireAge
      )
    ).toBe(282941.38);
  });

  it("should calculate the desired pension", () => {
    expect(desiredPensionCalc(mockObj.retireIncome, mockObj.retireAge)).toBe(
      320000
    );
  });

});
