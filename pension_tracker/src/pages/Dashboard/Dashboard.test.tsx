import { fireEvent, render, screen } from "@testing-library/react";
import PensionForm from "../../components/PensionFormComponent/PensionForm";
import Dashboard from "./Dashboard";

const setProjectedPension = jest.fn();
const setDesiredPension = jest.fn();
const setPensionData = jest.fn();

describe("Dashboard Component", () => {
  it("should render pension form", () => {
    render(
      <PensionForm
        setProjectedPension={setProjectedPension}
        setDesiredPension={setDesiredPension}
        setPensionData={setPensionData}
      />
    );
    //Check if the label for the first input component exists
    expect(
      screen.getByLabelText("Income to receive in retirement")
    ).toBeInTheDocument();
  });

  it("should update pension values when form is updated", () => {
    render(<Dashboard />);

    fireEvent.change(screen.getByLabelText("Income to receive in retirement"), {
      target: { value: "16000" },
    });
    fireEvent.change(screen.getByLabelText("Employer Monthly Contributions"), {
      target: { value: "400" },
    });
    fireEvent.change(screen.getByLabelText("Personal Monthly Contributions"), {
      target: { value: "200" },
    });
    fireEvent.change(screen.getByLabelText("Retirement Age"), {
      target: { value: "65" },
    });

    expect(screen.getByText("Projected Pension: 288000")).toBeInTheDocument();
    expect(screen.getByText("Desired Pension: 256000")).toBeInTheDocument();
  });
});
