import React from "react";
import Legend from "./legend";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Legend", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Legend />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(6);
  });

  it("should render a <Button />", () => {
    expect(wrapper.find("Button").length).toEqual(4);
  });

  it("should render a <OverlayTrigger />", () => {
    expect(wrapper.find("OverlayTrigger").length).toEqual(4);
  });

  it("renders correctly", () => {
    const component = renderer.create(<Legend />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
