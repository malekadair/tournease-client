import React from "react";
import toJson from "enzyme-to-json";
import Footer from "./Footer";

describe(`Footer component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a .Footer by default", () => {
    const wrapper = <Footer />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Footer given props", () => {
    const wrapper = <Footer {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
