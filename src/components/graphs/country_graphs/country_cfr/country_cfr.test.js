import * as React from "react";
import { shallow } from "enzyme";
import CFRContainer from "./country_cfr";

describe("Country CFR", () => {
  let wrapper;

  beforeEach(
    () => (wrapper = shallow(<CFRContainer data={[]} country={[]} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });

  it("should render a <Line />", () => {
    expect(wrapper.find("Line").length).toEqual(1);
  });

  it("renders correctly", () => {
    expect(shallow).toMatchSnapshot();
  });
});
