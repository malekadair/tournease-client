import React from "react";
import toJson from "enzyme-to-json";
import Nav from "./Nav";

describe(`Nav component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a .Nav by default", () => {
    const wrapper = <Nav />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Nav given props", () => {
    const wrapper = <Nav {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
