import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Header from "./Header";

test("render header successfully", () => {
  render(<Header />);
  const header = screen.getByRole("banner");
  expect(header).toBeInTheDocument();
});

test("in the first render emoji results must be rendered successfully", () => {
  render(<App />);
  const emojies = screen.getAllByRole("img");
  expect(emojies.length).toBe(22);
});

test("when filter with a key, result must be according this key", () => {
  render(<App />);
  userEvent.type(screen.findByRole("textbox"), "smile");
  const result = screen.getAllByText(/smile/i);
  expect(result[0]).toBeInTheDocument();
});

test("click clipboard must be copy emoji successfully", () => {
  render(<App />);

  const clipBoardBtn = screen.findByRole("img", {
    name: /100/i,
  });

  userEvent.click(clipBoardBtn.parentElement);

  const text = navigator.clipboard.readText();

  userEvent.paste(screen.findByRole("textbox"), text);

  console.log(clipBoardBtn.lastElementChild);
});
