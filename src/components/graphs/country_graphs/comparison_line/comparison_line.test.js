import * as React from "react";
import { shallow } from "enzyme";
import ComparisonLineContainer from "./comparison_line";

describe("Comparison Line", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <ComparisonLineContainer
          data={[]}
          top10Data={[]}
          lineLabels={[]}
          selected={""}
        />
      ))
  );

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(5);
  });

  it("should render a <Line />", () => {
    expect(wrapper.find("Line").length).toEqual(1);
  });

  it("should render a <Button />", () => {
    expect(wrapper.find("Button").length).toEqual(2);
  });

  it("renders correctly", () => {
    expect(shallow).toMatchSnapshot();
  });
});
