/** @format */

import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("should render the Box component without crashing", () => {
  render(
    <Box
      id={1}
      width={50}
      height={50}
      backgroundColor="red"
      removeBox={() => {}}
    />
  );
});

it("should match snapshot", () => {
  const { asFragment } = render(
    <Box
      id={1}
      width={50}
      height={50}
      backgroundColor="red"
      removeBox={() => {}}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
