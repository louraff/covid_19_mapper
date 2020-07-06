import * as React from "react";
import { shallow } from "enzyme";
import Header from "./navbar";
import renderer from "react-test-renderer";

describe("Navbar", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <Header
          total={[]}
          globalCFR={[]}
          totalInt={[]}
          countries={[]}
          integerCountries={[]}
        />
      ))
  );

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(20);
  });

  it("should render a <img />", () => {
    expect(wrapper.find("img").length).toEqual(6);
  });

  it("should render a <Navbar />", () => {
    expect(wrapper.find("Navbar").length).toEqual(1);
  });

  it("should render a <Nav />", () => {
    expect(wrapper.find("Nav").length).toEqual(6);
  });

  it("should render a <DropdownButton />", () => {
    expect(wrapper.find("DropdownButton").length).toEqual(6);
  });

  it("renders correctly", () => {
    const component = renderer
      .create(
        <Header
          total={[]}
          globalCFR={[]}
          totalInt={[]}
          countries={[]}
          integerCountries={[]}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
