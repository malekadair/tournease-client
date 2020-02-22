import React from "react";
import toJson from "enzyme-to-json";
import App from "./App";

describe(`App component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a .App by default", () => {
    const wrapper = <App />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the App given props", () => {
    const wrapper = <App {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
