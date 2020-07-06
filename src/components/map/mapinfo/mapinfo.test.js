import * as React from "react";
import MapInfo from "./mapinfo";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("MapInfo", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<MapInfo countriesArray={[]} />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders correctly", () => {
    const component = renderer.create(<MapInfo countriesArray={[]} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
