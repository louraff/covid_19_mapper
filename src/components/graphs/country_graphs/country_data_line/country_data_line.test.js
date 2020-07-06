import * as React from "react";
import { shallow } from "enzyme";
import CountryLineData from "./country_data_line";

describe("Country Line", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <CountryLineData
          createLineLabels={[]}
          country={""}
          data={[]}
          total={[]}
          countries={[]}
        />
      ))
  );

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render a <Line />", () => {
    expect(wrapper.find("Line").length).toEqual(1);
  });

  it("should render a <Button />", () => {
    expect(wrapper.find("Button").length).toEqual(1);
  });
});
