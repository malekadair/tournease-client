import React from "react";
import toJson from "enzyme-to-json";
import Home from "./Home";

describe(`Home component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a .Home by default", () => {
    const wrapper = <Home />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Home given props", () => {
    const wrapper = <Home {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
