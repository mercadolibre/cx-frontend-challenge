import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders the default Next.js page", () => {
    render(<Home />);

    const logo = screen.getByRole("img", {
      name: /Vercel Logo/i,
    });

    expect(logo).toBeInTheDocument();
  });
});
