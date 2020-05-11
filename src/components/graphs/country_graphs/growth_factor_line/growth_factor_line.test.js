import * as React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import GrowthFactorLine from "./growth_factor_line";

describe("Growth Factor Line Test", () => {
  it("does not crash when loaded onto page", () => {
    shallow(
      <GrowthFactorLine
        createLineLabels={[]}
        data={[]}
        country={[]}
      />
    );
  });
});