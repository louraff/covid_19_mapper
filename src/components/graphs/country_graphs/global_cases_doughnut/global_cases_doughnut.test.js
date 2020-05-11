import * as React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import GlobalCasesDoughnut from "./global_cases_doughnut";

describe("Global Cases Doughnut Test", () => {
  it("does not crash when loaded onto page", () => {
    shallow(
      <GlobalCasesDoughnut
        country={""}
        countries={[]}
        total={[]} />
    );
  });
});