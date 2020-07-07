import * as React from "react";
import { shallow } from "enzyme";
import GlobalChangesBar from "./global_changes_bar";

describe("Global Changes Bar", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<GlobalChangesBar data={[]} />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render a <Bar />", () => {
    expect(wrapper.find("Bar").length).toEqual(1);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
