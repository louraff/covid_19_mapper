import * as React from "react";
import { shallow } from "enzyme";
import GrowthFactorLine from "./growth_factor_line";

describe("Country Growth Factor", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <GrowthFactorLine createLineLabels={[]} data={[]} country={[]} />
      ))
  );

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });

  it("should render a <Line />", () => {
    expect(wrapper.find("Line").length).toEqual(1);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
