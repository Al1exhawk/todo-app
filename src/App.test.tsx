import React from "react";
import { cleanup, render } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render component properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).not.toBeNull();
  });
});
