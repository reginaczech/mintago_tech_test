import { fireEvent, render, screen } from "@testing-library/react";
import PensionForm from "../../components/PensionFormComponent/PensionForm";
import Dashboard from "./Dashboard";

const setProjectedPension = jest.fn();
const setDesiredPension = jest.fn();
const setPensionData = jest.fn();
const setRetireAge = jest.fn();

describe("Dashboard Component", () => {
  it("should render pension form", () => {
    render(
      <PensionForm
        setProjectedPension={setProjectedPension}
        setDesiredPension={setDesiredPension}
        setPensionData={setPensionData}
        setRetireAge={setRetireAge}
      />
    );
    //Checks if the label for the first input component exists
    expect(
      screen.getByLabelText("Income to receive in retirement")
    ).toBeInTheDocument();
  });

  it("should update pension values when form is updated", async () => {
    render(<Dashboard />);

    fireEvent.change(screen.getByLabelText("Income to receive in retirement"), {
      target: { value: "20000" },
    });
    fireEvent.change(screen.getByLabelText("Employer Monthly Contributions"), {
      target: { value: "100" },
    });
    fireEvent.change(screen.getByLabelText("Personal Monthly Contributions"), {
      target: { value: "100" },
    });
    fireEvent.change(screen.getByLabelText("Retirement Age"), {
      target: { value: "65" },
    });

    //Async Await required here because the text gets updated asynchronously when the stated are updated
    expect(await screen.findByText("£282,941.38")).toBeInTheDocument();
    expect(await screen.findByText("£320,000")).toBeInTheDocument();
  });
});
