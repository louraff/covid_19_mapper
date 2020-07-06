import * as React from "react";
import { shallow } from "enzyme";
import GlobalGraphContainer from "./global_graph";
import GlobalDataLine from "./global_line/global_line";
import GlobalDeathsBar from "./global_deaths_bar/global_deaths_bar";
import GlobalChangesBar from "./global_changes_bar/global_changes_bar";
import GlobalGrowthFactor from "./global_growth_line/global_growth_line";
import CFRContainer from "./global_cfr/global_cfr";

describe("Country Growth Factor", () => {
  let wrapper;

  beforeEach(
    () => (wrapper = shallow(<GlobalGraphContainer data={[]} countries={[]} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(6);
  });

  it("should render the GlobalDataLine Component", () => {
    expect(wrapper.containsMatchingElement(<GlobalDataLine />)).toEqual(true);
  });

  it("should render the GlobalDeathsBar Component", () => {
    expect(wrapper.containsMatchingElement(<GlobalDeathsBar />)).toEqual(true);
  });

  it("should render the GlobalChangesBar Component", () => {
    expect(wrapper.containsMatchingElement(<GlobalChangesBar />)).toEqual(true);
  });

  it("should render the GlobalGrowthFactor Component", () => {
    expect(wrapper.containsMatchingElement(<GlobalGrowthFactor />)).toEqual(
      true
    );
  });

  it("should render the CFRContainer Component", () => {
    expect(wrapper.containsMatchingElement(<CFRContainer />)).toEqual(true);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
