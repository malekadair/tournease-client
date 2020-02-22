import React from "react";
import toJson from "enzyme-to-json";
import CreateTournament from "./CreateTournament";

describe(`CreateTournament component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a .CreateTournament by default", () => {
    const wrapper = <CreateTournament />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the CreateTournament given props", () => {
    const wrapper = <CreateTournament {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
