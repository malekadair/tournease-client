import React from "react";
import toJson from "enzyme-to-json";
import Loading from "./Loading";

describe(`Loading component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a .Loading by default", () => {
    const wrapper = <Loading />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Loading given props", () => {
    const wrapper = <Loading {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
