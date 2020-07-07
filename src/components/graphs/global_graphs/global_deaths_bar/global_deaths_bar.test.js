import * as React from "react";
import { shallow } from "enzyme";
import GlobalDeathsBar from "./global_deaths_bar";

describe("Global Deaths Bar", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<GlobalDeathsBar countries={[]} />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });

  it("should render a <Button />", () => {
    expect(wrapper.find("Button").length).toEqual(1);
  });

  it("should render a <HorizontalBar />", () => {
    expect(wrapper.find("HorizontalBar").length).toEqual(1);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
