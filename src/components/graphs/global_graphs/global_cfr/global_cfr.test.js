import * as React from "react";
import { shallow } from "enzyme";
import CFRContainer from "./global_cfr";

describe("Global CFR", () => {
  let wrapper;

  beforeEach(
    () => (wrapper = shallow(<CFRContainer createLineLabels={[]} data={[]} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });

  it("should render a <Line />", () => {
    expect(wrapper.find("Line").length).toEqual(1);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
