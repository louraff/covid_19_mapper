import * as React from "react";
import { shallow } from "enzyme";
import GlobalGrowthFactor from "./global_growth_line";

describe("Global Growth Line", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <GlobalGrowthFactor data={[]} createLineLabels={[]} />
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
