import * as React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import renderer from "react-test-renderer";

describe("App Component", () => {
  beforeEach(() => {
    shallow(<App />, { disableLifeCycleMethods: true });
  });

  it("renders as expected, snapshot comparison", () => {
    const TextInputComponent = renderer.create(<App />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
  });

  it("mounts the state", () => {
    const spy = jest.spyOn(App.prototype, "componentDidMount");
    shallow(<App />);
    expect(spy).toHaveBeenCalled();
  });

  it("calls a fetch", () => {
    const fetchSpy = jest.spyOn(window, "fetch");
    shallow(<App />);
    expect(fetchSpy).toHaveBeenCalled();
  });
});

describe("createCountry", () => {
  var app = new App();
  const countries = [
    {
      country_name: "USA",
      cases: "338,899",
      deaths: "9,679",
      region: "",
      total_recovered: "18,002",
      new_deaths: "63",
      new_cases: "2,226",
      serious_critical: "8,702",
      active_cases: "311,218",
      total_cases_per_1m_population: "1,024",
    },
  ];
  const state = [
    {
      countrycode: "US",
      country: "United States of America",
      state: "South Carolina",
      latitude: "34.22333378",
      longitude: "-82.46170658",
      confirmed: 2049,
      deaths: 44,
    },
  ];
  it("creates the country array", () => {
    expect(app.createCountry(countries, state)).toEqual([
      {
        country: "USA",
        recovered: "18,002",
        deaths: "9,679",
        confirmed: "338,899",
        center: { lat: 45.301456, lng: -104.086992 },
        newCases: "2,226",
        newDeaths: "63",
        activeCases: "311,218",
        criticalCases: "8,702",
        perOneMillion: "1,024",
        cfr: 2.86,
      },
      {
        us: true,
        country: "South Carolina",
        recovered: undefined,
        deaths: "44",
        confirmed: "2,049",
        center: { lat: 33.8191, lng: -80.9066 },
        cfr: 2.15,
      },
    ]);
  });
});

describe("updateUS", () => {
  var app = new App();
  const countries = [
    {
      country: "USA",
      recovered: "18,002",
      deaths: "9,679",
      confirmed: "338,899",
      center: { lat: 35.222, lng: -101.8313 },
      newCases: "2,226",
      newDeaths: "63",
      activeCases: "311,218",
      criticalCases: "8,702",
      perOneMillion: "1,024",
    },
  ];
  const states = [
    {
      countrycode: "US",
      country: "United States of America",
      state: "Georgia",
      latitude: "31.74847232",
      longitude: "-82.28909114",
      confirmed: 6647,
      deaths: 211,
    },
  ];

  it("creates the Georgia correctly", () => {
    expect(app.updateUS(states, countries)).toEqual([
      {
        country: "USA",
        recovered: "18,002",
        deaths: "9,679",
        confirmed: "338,899",
        center: { lat: 35.222, lng: -101.8313 },
        newCases: "2,226",
        newDeaths: "63",
        activeCases: "311,218",
        criticalCases: "8,702",
        perOneMillion: "1,024",
      },
      {
        us: true,
        country: "Georgia, US",
        recovered: undefined,
        deaths: "211",
        confirmed: "6,647",
        center: { lat: 32.9866, lng: -83.6487 },
        cfr: 3.17,
      },
    ]);
  });
});

describe("updateTotal", () => {
  var app = new App();
  const total = {
    total_cases: "1,250,000",
    total_deaths: "70,000",
    total_recovered: "270,000",
    new_cases: "14,000",
    new_deaths: "1000",
    statistic_taken_at: "2020-04-06 12:53:08",
  };
  it("adds the active cases and global cfr to the object", () => {
    expect(app.updateTotal(total)).toEqual({
      total_cases: "1,250,000",
      total_deaths: "70,000",
      total_recovered: "270,000",
      new_cases: "14,000",
      new_deaths: "1000",
      statistic_taken_at: "2020-04-06 12:53:08",
      active_cases: "910,000",
      globalCFR: 5.6000000000000005,
    });
  });
});

describe("toInteger", () => {
  var app = new App();
  it("returns total cases, total deaths and total recoveries as integers", () => {
    const totalArray = {
      total_cases: "7,904,560",
      new_cases: "44,036",
      total_deaths: "432,957",
      new_deaths: "1,039",
      total_recovered: "4,062,496",
      active_cases: "3,409,107",
      deaths_per_1m_population: "55.5",
      globalCFR: 5.477306769763276,
      new_cases: "44,036",
      new_deaths: "1,039",
      serious_critical: "54,151",
      statistic_taken_at: "2020-06-14 13:10:01",
      total_cases: "7,904,560",
      total_cases_per_1m_population: "1,014",
      total_deaths: "432,957",
      total_recovered: "4,062,496",
    };
    expect(app.toInteger(totalArray)).toEqual([7904560, 432957, 4062496]);
  });
});
