import React from "react";
import toJson from "enzyme-to-json";
import Login from "./Login";

describe(`Login component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a .Login by default", () => {
    const wrapper = <Login />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Login given props", () => {
    const wrapper = <Login {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
