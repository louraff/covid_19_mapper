import React from "react";
import Page from "./404page";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("404 Page", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Page />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <img />", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });

  it("renders correctly", () => {
    const component = renderer.create(<Page />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
