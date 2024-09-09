import { render, screen } from "@testing-library/react";
import PensionForm from "./PensionForm";

const setProjectedPension = jest.fn();
const setDesiredPension = jest.fn();
const setPensionData = jest.fn();
const setRetireAge = jest.fn();

describe("Pension Form Component", () => {
  it("should render a Retirement Income input component", () => {
    render(
      <PensionForm
        setProjectedPension={setProjectedPension}
        setDesiredPension={setDesiredPension}
        setPensionData={setPensionData}
        setRetireAge={setRetireAge}
      />
    );
    expect(
      screen.getByLabelText("Income to receive in retirement")
    ).toBeInTheDocument();
  });

  it("should render Employer Monthly Contributions Input component", () => {
    render(
      <PensionForm
        setProjectedPension={setProjectedPension}
        setDesiredPension={setDesiredPension}
        setPensionData={setPensionData}
        setRetireAge={setRetireAge}
      />
    );
    expect(
      screen.getByLabelText("Employer Monthly Contributions")
    ).toBeInTheDocument();
  });

  it("should render Personal Monthly Contributions Input component", () => {
    render(
      <PensionForm
        setProjectedPension={setProjectedPension}
        setDesiredPension={setDesiredPension}
        setPensionData={setPensionData}
        setRetireAge={setRetireAge}
      />
    );
    expect(
      screen.getByLabelText("Personal Monthly Contributions")
    ).toBeInTheDocument();
  });

  it("should render an Age Input component", () => {
    render(
      <PensionForm
        setProjectedPension={setProjectedPension}
        setDesiredPension={setDesiredPension}
        setPensionData={setPensionData}
        setRetireAge={setRetireAge}
      />
    );
    expect(screen.getByLabelText("Retirement Age")).toBeInTheDocument();
  });
});
