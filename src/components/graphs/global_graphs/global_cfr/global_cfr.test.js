import * as React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import CFRContainer from "./global_cfr";

describe("Globalcfr", () => {
  it("does not crash when loaded onto page", () => {
    shallow(
      <CFRContainer data={[]} createLineLabels={[]} />
    );
  });
});