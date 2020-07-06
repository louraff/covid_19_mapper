import * as React from "react";
import { shallow } from "enzyme";
import GlobalCasesDoughnut from "./global_cases_doughnut";

describe("World Doughnut", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <GlobalCasesDoughnut country={""} countries={[]} total={[]} />
      ))
  );

  it("should render a <Doughnut />", () => {
    expect(wrapper.find("Doughnut").length).toEqual(1);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
