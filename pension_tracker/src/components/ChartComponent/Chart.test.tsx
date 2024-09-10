import { render, screen } from "@testing-library/react";
import Chart from "./Chart";
import { PensionData } from "../../types/index.types";

const mockTimeSeriesData: PensionData[] = [
  { age: 25, pensionPot: 600 },
  { age: 26, pensionPot: 1200 },
  { age: 27, pensionPot: 1800 },
];

describe("Bar Chart Component", () => {
  it("should render the bar chart element", () => {
    render(
      <Chart
        data={mockTimeSeriesData}
        chartTitle={"Projected vs. Desired Pension"}
        xAxisKey={"age"}
        yAxisKey={"pensionPot"}
        chartType={"timeSeries"}
      />
    );

    //Bar charts should be tested by the 3rd Party Library, so here I am testing to ensure that the element is rendered
    const chartElement = screen.getByTestId("bar-chart");
    expect(chartElement).toBeInTheDocument();

  });
});
