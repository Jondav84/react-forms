/** @format */

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("should render without crashing", () => {
  render(<NewBoxForm />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("should update form input fields on user input", () => {
  render(<NewBoxForm addBox={() => {}} />);
  const widthInput = screen.getByLabelText(/width/i);
  const heightInput = screen.getByLabelText(/height/i);
  const backgroundColorInput = screen.getByLabelText(/background color/i);

  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "150" } });
  fireEvent.change(backgroundColorInput, { target: { value: "blue" } });

  expect(widthInput).toHaveValue("100");
  expect(heightInput).toHaveValue("150");
  expect(backgroundColorInput).toHaveValue("blue");
});

it("should add a new box on form submission", () => {
  const addBoxMock = jest.fn();
  render(<NewBoxForm addBox={addBoxMock} />);
  const widthInput = screen.getByLabelText(/width/i);
  const heightInput = screen.getByLabelText(/height/i);
  const backgroundColorInput = screen.getByLabelText(/background color/i);
  const addButton = screen.getByText(/add box/i);

  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "150" } });
  fireEvent.change(backgroundColorInput, { target: { value: "blue" } });
  fireEvent.click(addButton);

  expect(addBoxMock).toHaveBeenCalledWith({
    width: "100",
    height: "150",
    backgroundColor: "blue",
  });
  expect(widthInput).toHaveValue("");
  expect(heightInput).toHaveValue("");
  expect(backgroundColorInput).toHaveValue("");
});
