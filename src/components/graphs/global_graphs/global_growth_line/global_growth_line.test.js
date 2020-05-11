import * as React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import GlobalGrowthFactor from "./global_growth_line";

describe("Global Growth factor Test", () => {
  it("does not crash when loaded onto page", () => {
    shallow(
      <GlobalGrowthFactor data={[]} createLineLabels={[]} />
    );
  });
});






