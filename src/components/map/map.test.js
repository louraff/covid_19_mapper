import React from "react";
import MapContainer from "./map";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Legend from "./legend/legend";
import MapInfo from "./mapinfo/mapinfo";

describe("Map", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<MapContainer />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });

  it("should render the Legend Component", () => {
    expect(wrapper.containsMatchingElement(<Legend />)).toEqual(true);
  });

  it("should render the MapInfo Component", () => {
    expect(wrapper.containsMatchingElement(<MapInfo />)).toEqual(true);
  });

  it("renders correctly", () => {
    const component = renderer
      .create(
        <MapContainer
          countries={[]}
          total={[]}
          globalCFR={[]}
          integerCountries={[]}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
