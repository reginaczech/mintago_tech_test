// import React from "react";
import { render , screen} from '@testing-library/react'
import Input from "./Input.tsx";

describe("Modular Input Component", () => {
  it("should render an input element", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
