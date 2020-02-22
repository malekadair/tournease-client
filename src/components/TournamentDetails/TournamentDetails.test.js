import React from "react";
import toJson from "enzyme-to-json";
import TournamentDetails from "./TournamentDetails";

describe(`TournamentDetails component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a .TournamentDetails by default", () => {
    const wrapper = <TournamentDetails />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the TournamentDetails given props", () => {
    const wrapper = <TournamentDetails {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
