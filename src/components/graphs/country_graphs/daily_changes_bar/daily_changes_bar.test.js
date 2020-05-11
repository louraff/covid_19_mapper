import * as React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import DailyChangesBar from "./daily_changes_bar";

describe("Daily Changes Bar Test", () => {
  it("does not crash when loaded onto page", () => {
    shallow(
      <DailyChangesBar
        data={[]}
        country={[]}
      />
    );
  });
});