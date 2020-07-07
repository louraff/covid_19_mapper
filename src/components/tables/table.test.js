import * as React from "react";
import { shallow } from "enzyme";
import TableContainer from "./table";
import renderer from "react-test-renderer";

describe("Table", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<TableContainer countries={[]} />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders correctly", () => {
    const component = renderer
      .create(<TableContainer countries={[]} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
