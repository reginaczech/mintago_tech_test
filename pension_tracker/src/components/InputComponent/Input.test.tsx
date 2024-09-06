import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input.tsx";

const mockHandleChange = jest.fn();

describe("Modular Input Component", () => {
  const props = {
    name: "test",
    label: "TestLabel",
    value: "",
    handleChange: mockHandleChange,
  };

  it("should render an input element", () => {
    render(<Input {...props} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render a label", () => {
    render(<Input {...props} />);
    expect(screen.getByLabelText("TestLabel")).toBeInTheDocument();
  });

  it("should update on change", () => {
    render(<Input {...props} />);
    const inputEl = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputEl, { target: { value: "new value" } });

    expect(mockHandleChange).toHaveBeenCalled();
    //TODO: test if value is updating correctly?
  });
});
