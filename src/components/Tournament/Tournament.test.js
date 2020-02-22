import React from "react";
import toJson from "enzyme-to-json";
import Tournament from "./Tournament";

describe(`Tournament component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a .Tournament by default", () => {
    const wrapper = <Tournament />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Tournament given props", () => {
    const wrapper = <Tournament {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
