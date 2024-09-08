import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input.tsx";

const mockHandleChange = jest.fn();

describe("Modular Input Component", () => {
  const props = {
    name: "test",
    label: "TestLabel",
    value: 0,
    type: "number" as const,
    handleChange: mockHandleChange,
  };

  it("should render an input element", () => {
    render(<Input {...props} />);
    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  it("should render a label", () => {
    render(<Input {...props} />);
    expect(screen.getByLabelText("TestLabel")).toBeInTheDocument();
  });

  it("should update on change", () => {
    render(<Input {...props} />);
    const inputEl = screen.getByRole("spinbutton") as HTMLInputElement;
    fireEvent.change(inputEl, { target: { value: 1 } });

    expect(mockHandleChange).toHaveBeenCalled();
    //TODO: test if value is updating correctly?
  });
});
