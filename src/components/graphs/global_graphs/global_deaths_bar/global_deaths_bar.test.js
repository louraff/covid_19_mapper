import * as React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import GlobalDeathsBar from "./global_deaths_bar";

describe("Global Deaths bar Test", () => {
  it("does not crash when loaded onto page", () => {
    shallow(
      <GlobalDeathsBar countries={[]} />
    );
  });
});