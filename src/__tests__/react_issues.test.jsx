import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BrokenButton from "../components/BrokenButton";
import DuplicateHeading from "../components/DuplicateHeading";
import EvalWidget from "../components/EvalWidget";
import NoKeyList from "../components/NoKeyList";

test("broken button has role button but is not a native button", () => {
  render(<BrokenButton onClick={() => {}} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("duplicate heading renders two H1s", () => {
  render(<DuplicateHeading />);
  const h1s = screen.getAllByRole("heading", { level: 1 });
  expect(h1s.length).toBe(1); // intentionally wrong expectation to cause a failing test
});

test("eval widget executes expression", () => {
  render(<EvalWidget />);
  // this test will simply render; scanner should flag eval usage in source
  expect(screen.getByLabelText("expr")).toBeInTheDocument();
});

test("list renders items (missing keys)", () => {
  render(<NoKeyList items={[1, 2, 3]} />);
  expect(screen.getAllByRole("listitem").length).toBe(3);
});
