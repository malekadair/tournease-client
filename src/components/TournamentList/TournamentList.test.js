import React from "react";
import toJson from "enzyme-to-json";
import TournamentList from "./TournamentList";

describe(`TournamentList component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a .TournamentList by default", () => {
    const wrapper = <TournamentList />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the TournamentList given props", () => {
    const wrapper = <TournamentList {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
