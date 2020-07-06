import * as React from "react";
import { shallow } from "enzyme";
import SearchContainer from "./searchbar";
import CountryGraphContainer from "../graphs/country_graphs/country_graph";

describe("Searchbar", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<SearchContainer />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });

  it("should render a <form />", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("should render the CountryGraphContainer Component", () => {
    expect(wrapper.containsMatchingElement(<CountryGraphContainer />)).toEqual(
      true
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
