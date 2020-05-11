import * as React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import ComparisonLineContainer from "./comparison_line";
import renderer from "react-test-renderer";

describe("Comparison Line Test", () => {
  it("does not crash when loaded onto page", () => {
    shallow(
      <ComparisonLineContainer
        data={[]}
        top10Data={[]}
        lineLabels={[]}
        selected={""}
      />
    );
  });
});
