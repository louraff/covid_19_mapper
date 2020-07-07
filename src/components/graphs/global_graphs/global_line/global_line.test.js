import * as React from "react";
import { shallow } from "enzyme";
import GlobalDataLine from "./global_line";

describe("Global CFR", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(<GlobalDataLine createLineLabels={[]} data={[]} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render a <Line />", () => {
    expect(wrapper.find("Line").length).toEqual(1);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
