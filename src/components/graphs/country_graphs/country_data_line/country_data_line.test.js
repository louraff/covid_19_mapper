import * as React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import CountryLineData from "./country_data_line";

describe("Country Data Line Test", () => {
  it("does not crash when loaded onto page", () => {
    shallow(
      <CountryLineData
        createLineLabels={[]}
        country={""}
        data={[]}
        total={[]}
        countries={[]}
      />
    );
  });
});