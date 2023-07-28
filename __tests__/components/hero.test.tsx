import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "@/app/(site)/components/Hero";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
