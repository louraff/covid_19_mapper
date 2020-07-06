import * as React from "react";
import { shallow } from "enzyme";
import CountryGraphContainer from "./country_graph";
import CountryLineData from "./country_data_line/country_data_line";
import GrowthFactorLine from "./growth_factor_line/growth_factor_line";
import ComparisonLineContainer from "./comparison_line/comparison_line";
import DailyChangesBar from "./daily_changes_bar/daily_changes_bar";
import CFRContainer from "./country_cfr/country_cfr";

describe("Country Graph Container", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <CountryGraphContainer
          country={" "}
          countries={[]}
          total={[]}
          timeseries={[]}
        />
      ))
  );

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(6);
  });

  it("should render the CountryLineData Component", () => {
    expect(wrapper.containsMatchingElement(<CountryLineData />)).toEqual(true);
  });

  it("should render the GrowthFactorLine Component", () => {
    expect(wrapper.containsMatchingElement(<GrowthFactorLine />)).toEqual(true);
  });

  it("should render the ComparisonLineContainer Component", () => {
    expect(
      wrapper.containsMatchingElement(<ComparisonLineContainer />)
    ).toEqual(true);
  });

  it("should render the DailyChangesBar Component", () => {
    expect(wrapper.containsMatchingElement(<DailyChangesBar />)).toEqual(true);
  });

  it("should render the CFRContainer Component", () => {
    expect(wrapper.containsMatchingElement(<CFRContainer />)).toEqual(true);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
